// Cloudflare Pages Functions middleware: geo/language routing.
// - ?lang=id|en sets the jd_lang cookie and redirects to the matching tree.
// - Otherwise, visitors geolocated in Indonesia (request.cf.country) are
//   redirected from English paths to their /id/ counterpart, unless they
//   have an explicit jd_lang cookie or are already browsing /id/.
// - /id/* is never force-redirected back to English.

const ID = "/id";

function idPath(p) {
  return p === "/" ? "/id/" : ID + p;
}

function enPath(p) {
  const stripped = p.replace(/^\/id(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

function isPagePath(p) {
  if (p === "/") return true;
  const last = p.split("/").filter(Boolean).pop() || "";
  return !/\.[a-zA-Z0-9]+$/.test(last);
}

export async function onRequest(context) {
  const { request, next } = context;
  if (request.method !== "GET") return next();

  const url = new URL(request.url);
  const path = url.pathname;
  if (!isPagePath(path)) return next();

  // Explicit language choice: persist cookie and land on the right tree.
  const lang = url.searchParams.get("lang");
  if (lang === "id" || lang === "en") {
    const target = lang === "id" ? idPath(enPath(path)) : enPath(path);
    return new Response(null, {
      status: 302,
      headers: {
        Location: url.origin + target,
        "Set-Cookie": `jd_lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`,
        "Cache-Control": "no-store",
      },
    });
  }

  // Never geo-redirect inside the Indonesian tree.
  if (path === ID || path.startsWith(ID + "/")) return next();

  // Only redirect document navigations.
  const accept = request.headers.get("Accept") || "";
  if (!accept.includes("text/html")) return next();

  const m = /(?:^|;\s*)jd_lang=(en|id)\b/.exec(request.headers.get("Cookie") || "");
  const wantsID = m ? m[1] === "id" : request.cf && request.cf.country === "ID";
  if (wantsID) {
    return new Response(null, {
      status: 302,
      headers: { Location: url.origin + idPath(path), "Cache-Control": "no-store" },
    });
  }

  return next();
}
