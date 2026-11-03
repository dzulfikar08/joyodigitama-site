import type { Lang } from "./site";

export type Accent = "green" | "blue" | "purple" | "rose" | "orange" | "amber";

export type CategoryId = "industrial" | "community" | "health" | "business" | "developer";

export const categoryOrder: CategoryId[] = ["industrial", "community", "health", "business", "developer"];

export const categoryLabels: Record<CategoryId, Record<Lang, string>> = {
  industrial: { en: "Industry & Operations", id: "Industri & Operasional" },
  community: { en: "Islamic & Community", id: "Islami & Komunitas" },
  health: { en: "Health & Fitness", id: "Kesehatan & Kebugaran" },
  business: { en: "Business & Productivity", id: "Bisnis & Produktivitas" },
  developer: { en: "Developer Platforms", id: "Platform Developer" },
};

export const categoryDesc: Record<CategoryId, Record<Lang, string>> = {
  industrial: {
    en: "Factory monitoring, SCADA, and farm operations. Tools that keep production running.",
    id: "Monitoring pabrik, SCADA, dan operasional peternakan. Alat yang menjaga produksi tetap berjalan.",
  },
  community: {
    en: "Apps for Muslim professionals, pesantren, and study communities.",
    id: "Aplikasi untuk profesional Muslim, pesantren, dan komunitas kajian.",
  },
  health: {
    en: "A food diary tuned for Indonesian dishes, and a training app for the smartwatch you already own.",
    id: "Pencatat makan yang paham masakan Indonesia, dan aplikasi latihan untuk jam pintar yang sudah Anda punya.",
  },
  business: {
    en: "Analytics, project management, and productivity tools for modern teams.",
    id: "Analitik, manajemen proyek, dan alat produktivitas untuk tim modern.",
  },
  developer: {
    en: "Billing and infrastructure platforms built for developers.",
    id: "Platform penagihan dan infrastruktur yang dibangun untuk developer.",
  },
};

export interface Product {
  slug: string;
  name: string;
  /** Live product URL, or null when pre-launch (renders as coming-soon card). */
  url: string | null;
  accent: Accent;
  /** Path under /public, or null to render a monogram tile. */
  logo: string | null;
  status: "live" | "wip";
  category: CategoryId;
  tags: Record<Lang, string[]>;
  desc: Record<Lang, string>;
}

export const products: Product[] = [
  {
    slug: "andonfast",
    name: "AndonFAST",
    url: "https://andonfast.com",
    accent: "green",
    logo: "/images/andonfast.webp",
    status: "live",
    category: "industrial",
    tags: { en: ["Andon", "Alerts", "Maintenance"], id: ["Andon", "Alert", "Perawatan"] },
    desc: {
      en: "Andon for the factory floor. Operators raise a call from the line, the right team gets alerted, and every stop is logged as downtime.",
      id: "Andon untuk lantai produksi. Operator memanggil bantuan dari lini, tim yang tepat langsung dapat notifikasi, dan setiap henti tercatat sebagai downtime.",
    },
  },
  {
    slug: "voltrus",
    name: "Voltrus",
    url: "https://voltrus.id",
    accent: "orange",
    logo: "/images/voltrus.webp",
    status: "live",
    category: "industrial",
    tags: { en: ["SCADA", "MES", "Protocol Tools"], id: ["SCADA", "MES", "Protocol Tools"] },
    desc: {
      en: "Self-hosted SCADA with a free open-source core, MES for factories that outgrew spreadsheets, and native protocol tools for Mac.",
      id: "SCADA self-hosted dengan core open source gratis, MES untuk pabrik yang sudah tidak muat di spreadsheet, dan protocol tools native untuk Mac.",
    },
  },
  {
    slug: "cowculator",
    name: "Cowculator",
    url: "https://cowculator.id",
    accent: "blue",
    logo: "/images/cowculator.webp",
    status: "live",
    category: "industrial",
    tags: { en: ["Feed Composition", "Breeding Calendar"], id: ["Komposisi Pakan", "Kalender Breeding"] },
    desc: {
      en: "Dairy herd management for farms. Feed composition, breeding calendar, and reminders, so milk yield doesn't depend on someone's memory.",
      id: "Manajemen ternak perah untuk peternakan. Komposisi pakan, kalender breeding, dan pengingat, agar produksi susu tidak bergantung pada ingatan.",
    },
  },
  {
    slug: "waqtu",
    name: "Waqtu",
    url: "https://getwaqtu.com",
    accent: "rose",
    logo: "/images/waqtu.webp",
    status: "live",
    category: "community",
    tags: { en: ["Prayer Times", "Mutaba'ah", "Halaqah"], id: ["Waktu Salat", "Mutaba'ah", "Halaqah"] },
    desc: {
      en: "Prayer times, daily mutaba'ah, and async halaqah for busy Muslims. Privacy first and open source.",
      id: "Waktu salat, mutaba'ah yaumiyah, dan halaqah asinkron untuk Muslim yang sibuk. Privasi diutamakan, kode terbuka.",
    },
  },
  {
    slug: "revklik",
    name: "RevKlik",
    url: "https://revklik.com",
    accent: "amber",
    logo: "/images/revklik.webp",
    status: "live",
    category: "business",
    tags: { en: ["Analytics", "Revenue Attribution", "Payments"], id: ["Analitik", "Atribusi Pendapatan", "Pembayaran"] },
    desc: {
      en: "Website analytics that matches each payment from Xendit, DOKU, Mayar, and others to the traffic source that brought it.",
      id: "Analytics website yang mencocokkan setiap pembayaran dari Xendit, DOKU, Mayar, dan lainnya dengan sumber traffic-nya.",
    },
  },
  {
    slug: "e-pondok",
    name: "E-Pondok",
    url: "https://e-pondok.my.id",
    accent: "green",
    logo: "/images/e-pondok.svg",
    status: "live",
    category: "community",
    tags: { en: ["Face Attendance", "Visitor Management", "Santri"], id: ["Absensi Wajah", "Manajemen Tamu", "Santri"] },
    desc: {
      en: "Presence & visitor management for Islamic boarding schools. Face-based attendance, visitor registration, and academic relationship tracking.",
      id: "Presensi & manajemen pengunjung untuk pesantren. Absensi berbasis wajah, registrasi tamu, dan pelacakan relasi akademik.",
    },
  },
  {
    slug: "pakustadz",
    name: "PakUstadz",
    url: "https://pakustadz.com",
    accent: "green",
    logo: "/images/logo-pakustadz.svg",
    status: "live",
    category: "community",
    tags: { en: ["Mosques", "Kajian", "Schedules"], id: ["Masjid", "Kajian", "Jadwal"] },
    desc: {
      en: "Websites for ustadz, mosques, and study circles. Post schedules and articles from your phone, then share one link on WhatsApp.",
      id: "Website untuk ustadz, masjid, dan majelis kajian. Isi jadwal dan artikel dari ponsel, lalu bagikan satu tautan ke grup WhatsApp.",
    },
  },
  {
    slug: "atur",
    name: "Atur",
    url: "https://diatur.com",
    accent: "purple",
    logo: "/images/logo-atur.svg",
    status: "live",
    category: "business",
    tags: { en: ["AI Agents", "MCP", "Token Costs"], id: ["Agen AI", "MCP", "Biaya Token"] },
    desc: {
      en: "Mission control for AI coding agents: issues they pick up through MCP, live agent panes, push alerts, and token cost tracking.",
      id: "Mission control untuk agen AI coding: issue yang mereka ambil lewat MCP, panel agen live, notifikasi, dan pelacakan biaya token.",
    },
  },
  {
    slug: "briefok",
    name: "Paparan AI",
    url: "https://paparanai.id",
    accent: "blue",
    logo: "/images/logo-paparanai.svg",
    status: "live",
    category: "business",
    tags: { en: ["AI", "Presentations", "RFP"], id: ["AI", "Presentasi", "RFP"] },
    desc: {
      en: "Documents in, deck out. Paste an RFP or upload a catalog and get a clean, editable executive presentation.",
      id: "Dokumen masuk, paparan keluar. Tempel RFP atau unggah katalog, lalu dapatkan deck eksekutif yang rapi dan bisa diedit.",
    },
  },
  {
    slug: "aturpdf",
    name: "AturPDF",
    url: "https://pdf.diatur.com",
    accent: "amber",
    logo: "/images/logo-aturpdf.svg",
    status: "live",
    category: "business",
    tags: { en: ["PDF", "Private", "Free"], id: ["PDF", "Privat", "Gratis"] },
    desc: {
      en: "Free PDF tools in the browser: merge, split, compress, convert, edit, sign, and protect. Files never leave your device.",
      id: "Alat PDF gratis di browser: gabung, pisah, kompres, konversi, edit, tanda tangan, dan proteksi. File tidak pernah keluar dari perangkat Anda.",
    },
  },
  {
    slug: "nyaur",
    name: "Nyaur",
    url: "https://nyaur.id",
    accent: "blue",
    logo: "/images/logo-nyaur.svg",
    status: "live",
    category: "developer",
    tags: { en: ["Merchant of Record", "QRIS", "Invoices"], id: ["Merchant of Record", "QRIS", "Invoice"] },
    desc: {
      en: "Merchant of Record for selling software in Indonesia: QRIS and virtual account checkout, official invoices, and webhooks on live rails.",
      id: "Merchant of Record untuk jualan software di Indonesia: checkout QRIS dan virtual account, invoice resmi, dan webhook di jalur pembayaran sungguhan.",
    },
  },
  {
    slug: "cloudagni",
    name: "CloudAgni",
    url: "https://cloudagni.id",
    accent: "orange",
    logo: "/images/cloudagni.svg",
    status: "live",
    category: "developer",
    tags: { en: ["Cloudflare", "Edge", "Pay in Rupiah"], id: ["Cloudflare", "Edge", "Bayar Rupiah"] },
    desc: {
      en: "A thin layer over Cloudflare for Indonesian developers: deploy to the edge and pay in Rupiah.",
      id: "Lapisan tipis di atas Cloudflare untuk developer Indonesia: deploy ke edge dan bayar dalam rupiah.",
    },
  },
  {
    slug: "joyorogo",
    name: "JoyoRogo",
    url: "https://joyorogo.com",
    accent: "green",
    logo: "/images/joyorogo.png",
    status: "live",
    category: "health",
    tags: { en: ["Calorie Tracking", "AI Photo", "Open Source"], id: ["Hitung Kalori", "Foto AI", "Open Source"] },
    desc: {
      en: "Photograph your plate and AI counts the calories, tuned for Indonesian food. Each day: how much to eat, burn, and sleep.",
      id: "Foto piring Anda, AI menghitung kalorinya, dikalibrasi untuk makanan Indonesia. Tiap hari tahu berapa boleh makan, harus bakar, dan butuh tidur.",
    },
  },
  {
    slug: "joyofit",
    name: "JoyoFit",
    url: "https://fit.joyorogo.com",
    accent: "blue",
    logo: "/images/logo-joyofit.svg",
    status: "live",
    category: "health",
    tags: { en: ["Smartwatch Sync", "Strength Log", "Open Source"], id: ["Sinkron Jam", "Catatan Latihan", "Open Source"] },
    desc: {
      en: "Syncs compatible smartwatches to your phone over Bluetooth, with no extra account. Steps, sleep, heart rate, workouts, and a strength logger.",
      id: "Sinkron jam pintar yang kompatibel ke HP lewat Bluetooth, tanpa akun tambahan. Langkah, tidur, detak jantung, olahraga, dan pencatat latihan beban.",
    },
  },
];
