export const SITE = {
  name: "Stavebné bytové družstvo Veľký Krtíš",
  shortName: "SBD Veľký Krtíš",
  tagline:
    "Našou prioritou je Vaša spokojnosť, našou prednosťou dlhoročné skúsenosti.",
  address: "Železničná 18, 990 01 Veľký Krtíš",
  addressLine1: "Železničná 18",
  addressLine2: "990 01 Veľký Krtíš",
  email: "sbdvk@slovanet.sk",
  phones: {
    secretariat: { label: "Sekretariát", display: "047/4831203", href: "tel:+421474831203" },
    technical: { label: "Technický úsek", display: "047/4831208", href: "tel:+421474831208" },
  },
  hours: [
    { day: "Pondelok", time: "7:30–11:30, 12:00–14:30" },
    { day: "Streda", time: "7:30–11:30, 12:00–16:00" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%C5%BDelezni%C4%8Dn%C3%A1%2018%2C%20990%2001%20Ve%C4%BEk%C3%BD%20Krt%C3%AD%C5%A1",
  sourceOrigin: "https://www.sbdvk.sk",
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
};

/** Verified outgoing links to the official sbdvk.sk site for pages not built in this prototype. */
export const NAV: NavItem[] = [
  { label: "Úvod", href: "/" },
  {
    label: "Oznamy",
    href: "https://www.sbdvk.sk/oznamy/",
    external: true,
  },
  {
    label: "Informácie",
    href: "#",
    children: [
      {
        label: "Reklamačný poriadok",
        href: "https://www.sbdvk.sk/reklamacny-poriadok/",
        external: true,
      },
      {
        label: "Volebný poriadok",
        href: "https://www.sbdvk.sk/volebny-poriadok/",
        external: true,
      },
      {
        label: "Domový poriadok",
        href: "https://www.sbdvk.sk/domovy-poriadok/",
        external: true,
      },
      {
        label: "Uznesenia zo Zhromaždení delegátov",
        href: "https://www.sbdvk.sk/uznesenia-zo-zhromazdeni-delegatov/",
        external: true,
      },
    ],
  },
  {
    label: "Dokumenty a tlačivá",
    href: "https://www.sbdvk.sk/dokumenty-a-tlaciva/",
    external: true,
  },
  {
    label: "Smernice",
    href: "https://www.sbdvk.sk/smernice/",
    external: true,
  },
  {
    label: "Blog",
    href: "https://www.sbdvk.sk/blog/",
    external: true,
  },
  {
    label: "Legislatíva",
    href: "https://www.sbdvk.sk/legislativa/",
    external: true,
  },
  { label: "Kontakt", href: "#kontakt" },
];

export const QUICK_ACCESS = [
  {
    title: "Oznamy",
    description: "Aktuálne oznámenia pre vlastníkov a nájomcov.",
    href: "https://www.sbdvk.sk/oznamy/",
    external: true,
    icon: "megaphone" as const,
  },
  {
    title: "Dokumenty a tlačivá",
    description: "Formuláre, zoznamy a dokumenty na stiahnutie.",
    href: "https://www.sbdvk.sk/dokumenty-a-tlaciva/",
    external: true,
    icon: "documents" as const,
  },
  {
    title: "Žiadanka na opravu",
    description: "Stiahnuteľný formulár žiadanky na opravu.",
    href: "https://www.sbdvk.sk/wp-content/uploads/2024/03/ziadanka-na-opravu.docx",
    external: true,
    download: true,
    icon: "repair" as const,
  },
  {
    title: "Kontakt",
    description: "Telefóny, e-mail a stránkové dni sekretariátu.",
    href: "#kontakt",
    external: false,
    icon: "contact" as const,
  },
] as const;

export const ABOUT = {
  heading: "Správa bytových domov s dôrazom na každodenné potreby.",
  body: [
    "Stavebné bytové družstvo Veľký Krtíš zabezpečuje správu bytových domov v rozsahu technickej údržby a opráv, prevádzky spoločných priestorov, vedenia fondov a vyúčtovania služieb.",
    "Medzi naše povinnosti patrí aj uzatváranie zmlúv na dodávku energií, kontrola technických zariadení, evidencia príjmov a výdavkov a zastupovanie vlastníkov a nájomcov pred orgánmi štátnej správy.",
  ],
} as const;

export const PHOTO_BAND = {
  label: "SPRÁVA BYTOVÝCH DOMOV",
  heading: "Starostlivosť o spoločné priestory a každodennú prevádzku domu.",
  ctaLabel: "Viac o našej činnosti",
  ctaHref: "#cinnosti",
} as const;

export const SERVICE_GROUPS = [
  {
    id: "technicka",
    title: "Technická správa a opravy",
    items: [
      "Zabezpečiť uzatvorenie zmlúv na dodávku energií",
      "Zabezpečiť kontrolu, prehliadky a revízie vyhradených technických zariadení",
      "Zabezpečiť realizáciu drobných opráv a technickú evidenciu o dome",
      "Spracovať ročný plán údržby a opráv v spolupráci so zástupcom vlastníkov",
      "Zabezpečiť realizáciu ročného plánu údržby a opráv, dozerať na ich realizáciu",
      "Na základe požiadavky zástupcu vlastníkov zabezpečiť údržbu a opravu aj mimo schváleného ročného plánu",
    ],
  },
  {
    id: "prevadzka",
    title: "Prevádzka budov",
    items: [
      "Zabezpečiť deratizáciu, dezinfekciu, dezinsekciu",
      "Zabezpečiť BOZP, PO a poistenie domu",
      "Uzatvárať nájomné zmluvy na prenájom spoločných priestorov v dome na základe pokynov vlastníkov",
    ],
  },
  {
    id: "financie",
    title: "Financie a účtovníctvo",
    items: [
      "Otvoriť a viesť bankový účet zvlášť pre každý bytový dom",
      "Viesť fond prevádzky a opráv bytového domu (FPÚO)",
      "Viesť evidenciu príjmov a výdavkov",
      "Spracovať ročné vyúčtovanie preddavkov na služby",
      "Zasielať prehľad tvorby a čerpania fondu údržby a opráv zástupcom vlastníkov",
      "Sledovať a vymáhať vzniknuté nedoplatky za plnenia a úhrady preddavkov do fondov prevádzky, údržby a opráv",
    ],
  },
  {
    id: "admin",
    title: "Administratíva a zastupovanie",
    items: [
      "Do 31. mája nasledujúceho roku predložiť správu o svojej činnosti za predchádzajúci rok",
      "Zabezpečiť výkon rozhodnutia po rozhodnutí nadpolovičnej väčšiny vlastníkov a nájomcov",
      "Zastupovať vlastníkov a nájomcov pred orgánmi štátnej správy",
    ],
  },
] as const;

/** Verified announcements from https://www.sbdvk.sk/oznamy/ (static prototype preview). */
export const ANNOUNCEMENTS = [
  {
    title:
      "Na základe ustanovenia § 1 ods. 3 Vyhlášky č. 152/2005 Z. z. boli splnené stanovené poveternostné podmienky. Spoločnosť STEFE THS, s.r.o., ktorá zabezpečuje dodávku tepla, nás informovala, že k dátumu 4. 5. 2026 dochádza k prerušeniu vykurovania v odberných miestach.",
    shortTitle: "Prerušenie vykurovania v odberných miestach",
    excerpt: "Oznámenie o prerušení vykurovania podľa vyhlášky č. 152/2005 Z. z.",
    dateLabel: "5. mája 2026",
    href: "https://www.sbdvk.sk/oznam/na-zaklade-ustanovenia-%c2%a7-1-ods-3-vyhlasky-c-152-2005-z-z-boli-splnene-stanovene-poveternostne-podmienky-spolocnost-stefe-ths-s-r-o-ktora-zabezpecuje-dodavku-tepla-nas-informovala-ze-k-d/",
  },
  {
    title: "Ceny energií na rok 2026",
    shortTitle: "Ceny energií na rok 2026",
    excerpt: "Informácie k cenám energií na rok 2026.",
    dateLabel: "19. januára 2026",
    href: "https://www.sbdvk.sk/oznam/ceny-energii-na-rok-2026/",
  },
  {
    title: "Fond prevádzky, údržby a opráv",
    shortTitle: "Fond prevádzky, údržby a opráv",
    excerpt: "Informácie k fondu prevádzky, údržby a opráv.",
    dateLabel: "14. januára 2026",
    href: "https://www.sbdvk.sk/oznam/fond-prevadzky-udrzby-a-oprav/",
  },
] as const;

export const ALL_ANNOUNCEMENTS_URL = "https://www.sbdvk.sk/oznamy/";
