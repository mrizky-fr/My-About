import {
  Blocks,
  BookOpen,
  Boxes,
  LayoutDashboard,
  LayoutTemplate,
  Paintbrush,
  Rocket,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const DEALTECH_UI_VERSION = '2.0.0';

export type PublicSiteLanguage = 'en' | 'id';
export type PublicNavKey = 'home' | 'component' | 'docs' | 'changelog';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PageNavItem {
  id: string;
  label: string;
  description?: string;
}

export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  summary: string;
  changes: string[];
}

export interface PublicSiteNavItem {
  key: PublicNavKey;
  label: string;
  to: string;
}

export interface LandingPageCopy {
  badgePrimary: string;
  badgeSecondary: string;
  heroTitleLines: [string, string, string];
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  previewAlt: string;
  featureEyebrow: string;
  featureTitle: string;
  featureDescription: string;
  features: FeatureItem[];
}

interface PublicSiteFrameCopy {
  navItems: PublicSiteNavItem[];
  languageSelectLabel: string;
  openMenuLabel: string;
  onThisPageTitle: string;
  githubAriaLabel: string;
  companyAriaLabel: string;
  whatsappAriaLabel: string;
  footerPrefix: string;
  footerLinkLabel: string;
  footerSuffix: string;
}

interface DocsSectionCopy {
  title: string;
  description: string;
}

export interface DocsPageCopy {
  badgeText: string;
  title: string;
  description: string;
  sectionTitle: string;
  sections: PageNavItem[];
  highlights: FeatureItem[];
  overview: DocsSectionCopy & {
    coreLabel: string;
    coreItems: string[];
  };
  installStarter: DocsSectionCopy & {
    commandSummaryTitle: string;
    steps: string[];
  };
  addUi: DocsSectionCopy & {
    fileCopyDescription: string;
    tableDataNote: string;
  };
  addLayout: DocsSectionCopy & {
    copyTitle: string;
    copiedFiles: string[];
  };
  addPage: DocsSectionCopy & {
    commandSummaryTitle: string;
    generatedItems: string[];
  };
  flags: DocsSectionCopy & {
    items: string[];
  };
  availableUi: DocsSectionCopy & {
    aliasesText: string;
  };
  availableLayout: DocsSectionCopy;
  localDevelopment: DocsSectionCopy;
}

export interface ChangelogPageCopy {
  badgeText: string;
  title: string;
  description: string;
  sectionTitle: string;
  releaseLabel: string;
  mainChangesTitle: string;
}

export const PUBLIC_SITE_LANGUAGE_OPTIONS: { value: PublicSiteLanguage; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'id', label: 'Indonesia' },
];

export const PUBLIC_SITE_FRAME_COPY: Record<PublicSiteLanguage, PublicSiteFrameCopy> = {
  en: {
    navItems: [
      { key: 'home', label: 'Home', to: '/' },
      { key: 'component', label: 'Components', to: '/dashboard/komponent' },
      { key: 'docs', label: 'Documentation', to: '/docs' },
      { key: 'changelog', label: 'Changelog', to: '/changelog' },
    ],
    languageSelectLabel: 'Select language',
    openMenuLabel: 'Open menu',
    onThisPageTitle: 'On This Page',
    githubAriaLabel: 'DealTech GitHub',
    companyAriaLabel: 'DealTech Company',
    whatsappAriaLabel: 'DealTech WhatsApp',
    footerPrefix: 'Copyright © 2026 DealTech UI. Developed by ',
    footerLinkLabel: 'DealTech',
    footerSuffix: '.',
  },
  id: {
    navItems: [
      { key: 'home', label: 'Beranda', to: '/' },
      { key: 'component', label: 'Komponen', to: '/dashboard/komponent' },
      { key: 'docs', label: 'Dokumentasi', to: '/docs' },
      { key: 'changelog', label: 'Changelog', to: '/changelog' },
    ],
    languageSelectLabel: 'Pilih bahasa',
    openMenuLabel: 'Buka menu',
    onThisPageTitle: 'Di Halaman Ini',
    githubAriaLabel: 'GitHub DealTech',
    companyAriaLabel: 'Profil DealTech',
    whatsappAriaLabel: 'WhatsApp DealTech',
    footerPrefix: 'Hak cipta © 2026 DealTech UI. Dikembangkan oleh ',
    footerLinkLabel: 'DealTech',
    footerSuffix: '.',
  },
};

export const LANDING_PAGE_COPY: Record<PublicSiteLanguage, LandingPageCopy> = {
  en: {
    badgePrimary: `Introducing DealTech UI Panel Starter V${DEALTECH_UI_VERSION}`,
    badgeSecondary: 'Learn more',
    heroTitleLines: [
      'Modern UI Panel',
      'Starter for admin dashboards',
      'that stays simple and responsive',
    ],
    heroDescription:
      'DealTech UI is a modern starter panel that is ready to use after a single install. It now also supports adding components or layouts individually when your project only needs specific parts.',
    primaryCta: 'View Demo',
    secondaryCta: 'Create a Project with DealTech',
    previewAlt: 'DealTech UI preview',
    featureEyebrow: 'Everything Is Ready',
    featureTitle:
      'Install once and get a clean admin panel foundation that is ready to use.',
    featureDescription:
      'With DealTech UI, you can start from the full starter, add ready-to-use components, or install the admin layout with prebuilt CSS styling.',
    features: [
      {
        title: 'Ready-to-use Components',
        description:
          'Buttons, badges, tables, modals, inputs, and other core UI elements can be added directly to your project as needed.',
        icon: Boxes,
      },
      {
        title: 'Layout + CSS Included',
        description:
          'The admin layout ships with a header, sidebar, and supporting CSS so the interface feels consistent right away.',
        icon: LayoutDashboard,
      },
      {
        title: 'Modern Starter',
        description:
          'When you need the full foundation, the starter app is available with a clean and responsive admin dashboard structure.',
        icon: Paintbrush,
      },
    ],
  },
  id: {
    badgePrimary: `Memperkenalkan DealTech UI Panel Starter V${DEALTECH_UI_VERSION}`,
    badgeSecondary: 'Pelajari lebih lanjut',
    heroTitleLines: [
      'Panel UI Modern',
      'Starter untuk Dashboard Admin',
      'yang Simple dan Responsive',
    ],
    heroDescription:
      'DealTech UI adalah panel starter modern yang langsung siap pakai setelah sekali instal. Sekarang juga lebih fleksibel untuk menambahkan komponen atau layout satuan saat project Anda hanya membutuhkan bagian tertentu.',
    primaryCta: 'Lihat Demo',
    secondaryCta: 'Buat Project dengan DealTech',
    previewAlt: 'Pratinjau DealTech UI',
    featureEyebrow: 'Semua Sudah Siap',
    featureTitle:
      'Sekali install, langsung dapat fondasi panel UI yang rapi dan siap dipakai.',
    featureDescription:
      'Di DealTech UI Anda bisa mulai dari starter lengkap, ambil komponen siap pakai, atau pasang layout admin dengan styling CSS yang sudah disiapkan.',
    features: [
      {
        title: 'Komponen Siap Pakai',
        description:
          'Button, badge, table, modal, input, dan elemen UI penting lainnya bisa langsung ditambahkan ke project sesuai kebutuhan.',
        icon: Boxes,
      },
      {
        title: 'Layout + CSS Siap',
        description:
          'Admin layout bisa dipasang lengkap dengan header, sidebar, dan styling CSS agar tampilannya langsung konsisten.',
        icon: LayoutDashboard,
      },
      {
        title: 'Starter Modern',
        description:
          'Kalau butuh fondasi penuh, starter app tetap tersedia dengan struktur dashboard admin yang rapi dan responsive.',
        icon: Paintbrush,
      },
    ],
  },
};

export const DOCS_PAGE_COPY: Record<PublicSiteLanguage, DocsPageCopy> = {
  en: {
    badgeText: `Documentation DealTech UI V${DEALTECH_UI_VERSION}`,
    title: 'Documentation for the DealTech UI starter, elements, and layouts.',
    description:
      'Learn how to install the DealTech UI starter app, add individual UI elements, install the admin layout with its CSS, and use the key commands that speed up admin dashboard setup.',
    sectionTitle: 'Getting Started',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'install-starter', label: 'Install Starter' },
      { id: 'add-ui', label: 'Add UI Element' },
      { id: 'add-layout', label: 'Add Layout' },
      { id: 'add-page', label: 'Add Page' },
      { id: 'flags', label: 'Flags' },
      { id: 'available-ui', label: 'Available UI' },
      { id: 'available-layout', label: 'Available Layout' },
      { id: 'local-development', label: 'Local Development' },
    ],
    highlights: [
      {
        title: 'Full Starter',
        description:
          'Use `install` when you want the landing page, login, dashboard, and project structure to be ready from the start.',
        icon: Rocket,
      },
      {
        title: 'Add Per Element',
        description:
          'Use `add` to copy a specific UI element without installing the whole starter app.',
        icon: Blocks,
      },
      {
        title: 'Layout with CSS',
        description:
          'Use `add-layout` to install the admin layout together with the supporting CSS styles.',
        icon: LayoutTemplate,
      },
    ],
    overview: {
      title: 'Overview',
      description:
        'DealTech UI is a CLI for generating a UI panel starter and for adding UI elements or layouts separately into your React project.',
      coreLabel: `Core dealtech-ui v${DEALTECH_UI_VERSION}:`,
      coreItems: [
        '`install` for the complete admin panel starter',
        '`add` for copying ready-to-use UI elements',
        '`add-layout` for copying layouts together with their supporting CSS',
      ],
    },
    installStarter: {
      title: 'Install Starter',
      description:
        'Use this flow when you want the landing page, login, dashboard, routing, and project structure ready from the beginning.',
      commandSummaryTitle: 'This command will:',
      steps: [
        'Create a new project folder',
        'Copy the DealTech UI starter template',
        'Run `npm install` automatically',
      ],
    },
    addUi: {
      title: 'Add UI Element',
      description:
        'Use this flow when you only need a specific component without installing the entire starter app.',
      fileCopyDescription:
        'This command copies files into `src/components/ui/...` and automatically brings along the local dependencies it needs.',
      tableDataNote:
        '`tabledata-v2` also brings `button` and `actionbutton` if they are not present yet.',
    },
    addLayout: {
      title: 'Add Layout',
      description:
        'Use this flow to install the admin layout along with the CSS files that define its visual foundation.',
      copyTitle: 'This command will copy:',
      copiedFiles: [
        '`src/layout/AdminLayout.tsx`',
        '`src/components/layout/AdminHeader.tsx`',
        '`src/components/layout/AdminSidebar.tsx`',
        '`src/styles/admin.css`',
      ],
    },
    addPage: {
      title: 'Add Page',
      description:
        'This flow stays available for DealTech UI starter projects that already use dashboard routing.',
      commandSummaryTitle: 'This command will:',
      generatedItems: [
        'create `src/pages/reports/ReportsPage.tsx`',
        'add the `/dashboard/reports` route to `src/layout/AdminApp.tsx`',
      ],
    },
    flags: {
      title: 'Flags',
      description:
        'The main flags are now used to skip dependency installation and overwrite files that already exist.',
      items: [
        '`--no-install` to skip `npm install`',
        '`--force` to overwrite files or folders that already exist',
      ],
    },
    availableUi: {
      title: 'Available UI',
      description:
        'List of UI elements that can currently be added individually through the `add` command.',
      aliasesText:
        'Common aliases such as `action-button`, `page-header`, `search-input`, `scroll-to-top`, and `progress-bar-v2` are also supported.',
    },
    availableLayout: {
      title: 'Available Layout',
      description: 'At the moment, the ready-to-install public layout is the admin layout.',
    },
    localDevelopment: {
      title: 'Local Development',
      description:
        'Use this flow when you want to test the CLI locally during development.',
    },
  },
  id: {
    badgeText: `Dokumentasi DealTech UI V${DEALTECH_UI_VERSION}`,
    title: 'Dokumentasi starter, elemen, dan layout DealTech UI.',
    description:
      'Pelajari cara install starter app DealTech UI, menambahkan UI element satuan, memasang admin layout beserta CSS-nya, dan memakai command penting lain untuk mempercepat setup dashboard admin.',
    sectionTitle: 'Mulai dari Sini',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'install-starter', label: 'Install Starter' },
      { id: 'add-ui', label: 'Add UI Element' },
      { id: 'add-layout', label: 'Add Layout' },
      { id: 'add-page', label: 'Add Page' },
      { id: 'flags', label: 'Flags' },
      { id: 'available-ui', label: 'Available UI' },
      { id: 'available-layout', label: 'Available Layout' },
      { id: 'local-development', label: 'Local Development' },
    ],
    highlights: [
      {
        title: 'Starter Lengkap',
        description:
          'Pakai `install` kalau Anda ingin landing, login, dashboard, dan struktur project langsung siap.',
        icon: Rocket,
      },
      {
        title: 'Add Per Element',
        description:
          'Pakai `add` untuk mengambil UI element tertentu tanpa harus install seluruh starter.',
        icon: Blocks,
      },
      {
        title: 'Layout Dengan CSS',
        description:
          'Pakai `add-layout` untuk memasang layout admin berikut style CSS pendukungnya.',
        icon: LayoutTemplate,
      },
    ],
    overview: {
      title: 'Overview',
      description:
        'DealTech UI adalah CLI untuk generate UI Panel Starter dan menambahkan UI element atau layout secara terpisah ke project React Anda.',
      coreLabel: `Core dealtech-ui v${DEALTECH_UI_VERSION}:`,
      coreItems: [
        '`install` untuk starter admin panel lengkap',
        '`add` untuk copy UI element siap pakai',
        '`add-layout` untuk copy layout beserta style CSS pendukungnya',
      ],
    },
    installStarter: {
      title: 'Install Starter',
      description:
        'Gunakan flow ini bila Anda ingin landing, login, dashboard, routing, dan struktur project langsung siap dari awal.',
      commandSummaryTitle: 'Command ini akan:',
      steps: [
        'Membuat folder project baru',
        'Menyalin starter template DealTech UI',
        'Menjalankan `npm install` otomatis',
      ],
    },
    addUi: {
      title: 'Add UI Element',
      description:
        'Gunakan flow ini saat Anda hanya butuh komponen tertentu tanpa menginstall seluruh starter app.',
      fileCopyDescription:
        'Command ini akan menyalin file ke `src/components/ui/...` dan otomatis membawa dependency lokal yang dibutuhkan.',
      tableDataNote:
        '`tabledata-v2` akan ikut membawa `button` dan `actionbutton` bila belum ada.',
    },
    addLayout: {
      title: 'Add Layout',
      description:
        'Gunakan flow ini untuk memasang layout admin beserta file CSS yang menjadi fondasi tampilannya.',
      copyTitle: 'Command ini akan menyalin:',
      copiedFiles: [
        '`src/layout/AdminLayout.tsx`',
        '`src/components/layout/AdminHeader.tsx`',
        '`src/components/layout/AdminSidebar.tsx`',
        '`src/styles/admin.css`',
      ],
    },
    addPage: {
      title: 'Add Page',
      description:
        'Flow ini tetap tersedia untuk project starter DealTech UI yang sudah memakai routing dashboard.',
      commandSummaryTitle: 'Command ini akan:',
      generatedItems: [
        'membuat file `src/pages/reports/ReportsPage.tsx`',
        'menambahkan route `/dashboard/reports` ke `src/layout/AdminApp.tsx`',
      ],
    },
    flags: {
      title: 'Flags',
      description:
        'Flag utama sekarang dipakai untuk skip install dependency dan overwrite file yang sudah ada.',
      items: [
        '`--no-install` untuk skip `npm install`',
        '`--force` untuk overwrite file atau folder yang sudah ada',
      ],
    },
    availableUi: {
      title: 'Available UI',
      description:
        'Daftar UI element yang saat ini bisa ditambahkan satuan lewat command `add`.',
      aliasesText:
        'Alias umum seperti `action-button`, `page-header`, `search-input`, `scroll-to-top`, dan `progress-bar-v2` juga didukung.',
    },
    availableLayout: {
      title: 'Available Layout',
      description: 'Saat ini public layout yang sudah siap dipasang adalah admin layout.',
    },
    localDevelopment: {
      title: 'Local Development',
      description:
        'Flow ini dipakai saat Anda ingin menguji CLI secara lokal selama development.',
    },
  },
};

export const CHANGELOG_PAGE_COPY: Record<PublicSiteLanguage, ChangelogPageCopy> = {
  en: {
    badgeText: `Changelog DealTech UI V${DEALTECH_UI_VERSION}`,
    title: 'A clean and easy-to-scan version history for DealTech UI.',
    description:
      'See the summary of changes in every DealTech UI release, including new features, starter panel improvements, and command updates that make UI elements and layouts easier to use.',
    sectionTitle: 'Releases',
    releaseLabel: 'Release',
    mainChangesTitle: 'Main changes',
  },
  id: {
    badgeText: `Changelog DealTech UI V${DEALTECH_UI_VERSION}`,
    title: 'Riwayat versi DealTech UI yang rapi dan mudah discan.',
    description:
      'Lihat ringkasan perubahan pada setiap rilis DealTech UI, termasuk penambahan fitur baru, pengembangan starter panel, dan update command yang mempermudah penggunaan UI element maupun layout.',
    sectionTitle: 'Releases',
    releaseLabel: 'Release',
    mainChangesTitle: 'Perubahan utama',
  },
};

export const AVAILABLE_UI_ELEMENTS = [
  'actionbutton',
  'badge',
  'button',
  'cardtabelv1',
  'confirmmodal',
  'filterselect',
  'formmodal',
  'infosection',
  'input',
  'inputdate',
  'longtextinput',
  'modal',
  'notecard',
  'pageheader',
  'pagination',
  'plancard',
  'progresbarv1',
  'progresbarv2',
  'progresbarv3',
  'scroltotop',
  'searchableselect',
  'searchinput',
  'statcardoverview',
  'tabledata-v1',
  'tabledata-v2',
  'timelinetabel',
  'uploadfield',
  'welcomecard',
];

export const AVAILABLE_LAYOUTS = ['admin-layout'];
export const COMMON_UI_ALIASES = [
  'action-button',
  'page-header',
  'search-input',
  'scroll-to-top',
  'progress-bar-v2',
];

export const PUBLIC_PAGE_BADGES = {
  docs: { icon: BookOpen },
  changelog: { icon: Sparkles },
};
