export type Lang = "en" | "id";

export const SITE = {
  name: "Joyo Digitama Solusi",
  domain: "https://joyodigitama.com",
  email: "dzulfikar.at@joyodigitama.com",
  phoneDisplay: "+62 896-8083-9591",
  phoneWa: "6289680839591",
  founded: "2025",
} as const;

/** Chrome/UI strings shared by the layout across languages. */
export const ui = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      products: "Products",
      solutions: "Solutions",
      blog: "Blog",
      about: "About",
      contact: "Contact",
    },
    getStarted: "Get Started",
    langToggle: "ID",
    langToggleAria: "Switch to Bahasa Indonesia",
    footer: {
      tagline: "Industrial digitalization and IoT solutions based in Malang, Indonesia.",
      services: "Services",
      products: "Products",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      contact: "Contact Us",
      rights: "All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      products: "Produk",
      solutions: "Solusi",
      blog: "Blog",
      about: "Tentang",
      contact: "Kontak",
    },
    getStarted: "Mulai",
    langToggle: "EN",
    langToggleAria: "Switch to English",
    footer: {
      tagline: "Solusi digitalisasi industri dan IoT yang berbasis di Malang, Indonesia.",
      services: "Layanan",
      products: "Produk",
      legal: "Legal",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      cookies: "Kebijakan Cookie",
      contact: "Hubungi Kami",
      rights: "Hak cipta dilindungi.",
    },
  },
} as const;

/** Footer service links (label keys map per language). */
export const footerServices: Record<Lang, { label: string; href: string }[]> = {
  en: [
    { label: "Custom Development", href: "/services/" },
    { label: "Mobile Apps", href: "/services/" },
    { label: "Cloud Solutions", href: "/services/" },
    { label: "IoT Integration", href: "/services/" },
  ],
  id: [
    { label: "Pengembangan Kustom", href: "/id/services/" },
    { label: "Aplikasi Mobile", href: "/id/services/" },
    { label: "Solusi Cloud", href: "/id/services/" },
    { label: "Integrasi IoT", href: "/id/services/" },
  ],
};

/** Build the canonical URL for a page. `path` has no leading/trailing slash ("" = home). */
export function pageUrl(path: string, lang: Lang): string {
  const base = lang === "id" ? "/id" : "";
  return path ? `${base}/${path}/` : `${base}/`;
}
