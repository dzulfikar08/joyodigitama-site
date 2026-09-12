import type { Lang } from "./site";

export type Accent = "green" | "blue" | "purple" | "rose" | "orange" | "amber";

export interface Product {
  slug: string;
  name: string;
  /** Live product URL, or null when pre-launch (renders as coming-soon card). */
  url: string | null;
  accent: Accent;
  /** Path under /public, or null to render a monogram tile. */
  logo: string | null;
  status: "live" | "wip";
  tags: Record<Lang, string[]>;
  desc: Record<Lang, string>;
}

export const products: Product[] = [
  {
    slug: "andonfast",
    name: "AndonFAST",
    url: "https://andonfast.com",
    accent: "green",
    logo: "/images/andonfast.png",
    status: "live",
    tags: { en: ["Andon", "Alerts", "Maintenance"], id: ["Andon", "Alert", "Perawatan"] },
    desc: {
      en: "Digital Manufacturing Solution for your factory. Monitor production lines, track downtime, and optimize efficiency.",
      id: "Solusi Manufaktur Digital untuk pabrik Anda. Pantau lini produksi, lacak downtime, dan optimalkan efisiensi.",
    },
  },
  {
    slug: "voltrus",
    name: "Voltrus",
    url: "https://voltrus.id",
    accent: "orange",
    logo: "/images/voltrus-lite.webp",
    status: "live",
    tags: { en: ["SCADA", "Modbus TCP", "White-label"], id: ["SCADA", "Modbus TCP", "White-label"] },
    desc: {
      en: "Lightweight SCADA & industrial monitoring for system integrators. Single binary, no recurring fees.",
      id: "SCADA ringan & monitoring industri untuk system integrator. Satu binary, tanpa biaya langganan.",
    },
  },
  {
    slug: "cowculator",
    name: "Cowculator",
    url: "https://cowculator.id",
    accent: "blue",
    logo: "/images/cowculator.png",
    status: "live",
    tags: { en: ["Feed Composition", "Breeding Calendar"], id: ["Komposisi Pakan", "Kalender Breeding"] },
    desc: {
      en: "Optimize milk production and efficiency. Feed composition, breeding calendar, and notifications.",
      id: "Optimalkan produksi dan efisiensi susu. Komposisi pakan, kalender breeding, dan notifikasi.",
    },
  },
  {
    slug: "waqtu",
    name: "Waqtu",
    url: "https://getwaqtu.com",
    accent: "rose",
    logo: "/images/waqtu.png",
    status: "live",
    tags: { en: ["Prayer Times", "Menu Bar", "Calendar"], id: ["Waktu Salat", "Menu Bar", "Kalender"] },
    desc: {
      en: "Prayer times in your menu bar. Calendar blocks during prayers. Made for Muslim professionals on Mac.",
      id: "Jadwal salat di menu bar Anda. Blokir kalender saat waktu salat. Untuk profesional Muslim pengguna Mac.",
    },
  },
  {
    slug: "revklik",
    name: "RevKlik",
    url: "https://revklik.com",
    accent: "amber",
    logo: "/images/revklik.webp",
    status: "live",
    tags: { en: ["Analytics", "Revenue Attribution", "User Journey"], id: ["Analitik", "Atribusi Pendapatan", "User Journey"] },
    desc: {
      en: "Revenue-first analytics platform — user journey, conversion funnel, and revenue attribution.",
      id: "Platform analitik berorientasi pendapatan — user journey, funnel konversi, dan atribusi pendapatan.",
    },
  },
  {
    slug: "e-pondok",
    name: "E-Pondok",
    url: "https://e-pondok.my.id",
    accent: "green",
    logo: "/images/e-pondok.svg",
    status: "live",
    tags: { en: ["Face Attendance", "Visitor Management", "Santri"], id: ["Absensi Wajah", "Manajemen Tamu", "Santri"] },
    desc: {
      en: "Presence & visitor management for Islamic boarding schools. Face-based attendance, visitor registration, and academic relationship tracking.",
      id: "Presensi & manajemen pengunjung untuk pesantren. Absensi berbasis wajah, registrasi tamu, dan pelacakan relasi akademik.",
    },
  },
  {
    slug: "atur",
    name: "Atur",
    url: "https://diatur.com",
    accent: "purple",
    logo: "/images/logo-atur.png",
    status: "live",
    tags: { en: ["Projects", "Sprints", "MCP"], id: ["Proyek", "Sprint", "MCP"] },
    desc: {
      en: "Project management control plane for AI agent crews — issues, sprints, evidence, and agent usage KPIs in one workspace.",
      id: "Control plane manajemen proyek untuk tim agen AI — issue, sprint, bukti kerja, dan KPI penggunaan agen dalam satu workspace.",
    },
  },
  {
    slug: "briefok",
    name: "BriefOK",
    url: null,
    accent: "blue",
    logo: "/images/logo-briefok.svg",
    tags: { en: ["AI", "Presentations"], id: ["AI", "Presentasi"] },
    desc: {
      en: "AI presentation studio — turn a brief into a finished deck in minutes.",
      id: "Studio presentasi AI — ubah brief menjadi deck yang jadi dalam hitungan menit.",
    },
  },
  {
    slug: "aturpdf",
    name: "AturPDF",
    url: null,
    accent: "amber",
    logo: "/images/logo-aturpdf.svg",
    status: "wip",
    tags: { en: ["PDF", "Documents"], id: ["PDF", "Dokumen"] },
    desc: {
      en: "Practical PDF tooling from the Atur team — document workflows without the friction.",
      id: "Alat PDF praktis dari tim Atur — alur kerja dokumen tanpa hambatan.",
    },
  },
];
