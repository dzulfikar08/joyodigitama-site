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
    getStarted: "Start a project",
    langToggle: "ID",
    langToggleAria: "Switch to Bahasa Indonesia",
    footer: {
      tagline: "A software studio in Malang, Indonesia. We build our own products for factories, farms, pesantren, and small businesses, and custom systems for teams like yours.",
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
    getStarted: "Mulai proyek",
    langToggle: "EN",
    langToggleAria: "Switch to English",
    footer: {
      tagline: "Studio software di Malang. Kami membangun produk sendiri untuk pabrik, peternakan, pesantren, dan UMKM, serta sistem kustom untuk tim seperti Anda.",
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
    { label: "Custom software", href: "/contact/?service=custom-software" },
    { label: "Mobile apps", href: "/contact/?service=mobile-app" },
    { label: "Industrial IoT", href: "/contact/?service=iot-integration" },
    { label: "Cloud & DevOps", href: "/contact/?service=cloud-solutions" },
    { label: "CMS & websites", href: "/contact/?service=cms" },
  ],
  id: [
    { label: "Software kustom", href: "/id/contact/?service=custom-software" },
    { label: "Aplikasi mobile", href: "/id/contact/?service=mobile-app" },
    { label: "IoT industri", href: "/id/contact/?service=iot-integration" },
    { label: "Cloud & DevOps", href: "/id/contact/?service=cloud-solutions" },
    { label: "CMS & website", href: "/id/contact/?service=cms" },
  ],
};

/** Build the canonical URL for a page. `path` has no leading/trailing slash ("" = home). */
export function pageUrl(path: string, lang: Lang): string {
  const base = lang === "id" ? "/id" : "";
  return path ? `${base}/${path}/` : `${base}/`;
}
