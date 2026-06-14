import type { CampsiteConfig } from "../types";

/**
 * Campingpark Abersee — Reith 22, 5342 Abersee am Wolfgangsee (Salzkammergut).
 * 100 % aus der eigenen Quelle abgeleitet (raw/digest). Familie Eisl, eröffnet 2000.
 * Bildlage: nur 4 verwertbare Fotos (3 Sanitär-Thumbs zu klein) → Hero + 3 Pillars;
 * Camping-Bento/Galerie/Kinder/Aktivitäten blenden sich ehrlich aus (kein Bild-Recycling).
 * Preise: auf der Website keine Werte im Scrape → Richtpreise + offene Disclosure.
 */
const IMG = "/campsites/campingpark-abersee";

const campingparkAbersee: CampsiteConfig = {
  name: "Campingpark Abersee",
  shortName: "Abersee",
  slug: "campingpark-abersee",
  ort: "Abersee am Wolfgangsee",
  region: "Salzkammergut",
  brandKind: "Campingpark",
  see: "Wolfgangsee",
  regionLong: "Wolfgangsee · Salzkammergut · Österreich",

  heroVariant: "center",

  claim: "Ein paar Schritte zum eigenen Badeplatz am Wolfgangsee",
  claimEmphasis: "am Wolfgangsee",
  intro:
    "Mitten in grünen Wiesen und alten Obstbäumen, nur ein paar Schritte vom eigenen Badeplatz am Wolfgangsee: ein ruhiger Platz mit viel Freiraum, modernem Sanitärgebäude und kurzen Wegen ins Ortszentrum von Abersee.",

  statement: {
    text: "Inmitten grüner Wiesen und alter Obstbäume genießt du die Urlaubsruhe – und der Wolfgangsee liegt nur ein paar Schritte entfernt.",
    emphasis: "ein paar Schritte",
  },

  pillars: [
    {
      title: "Viel Wiese, viel Freiraum",
      text: "Ein ruhiger Campingplatz inmitten grüner Wiesen – Platz zum Durchatmen, die Berge des Salzkammerguts immer im Blick.",
      image: { src: `${IMG}/wiese-berge.webp`, alt: "Weite Wiesen im Campingpark Abersee mit den Bergen des Salzkammerguts" },
    },
    {
      title: "Grüne Wiesen & Obstbäume",
      text: "Alte Obstbäume und gepflegte Wiesen rücken nah an deinen Stellplatz – im Frühjahr steht der Platz in voller Apfelblüte.",
      image: { src: `${IMG}/obstbaeume.webp`, alt: "Blühende Obstbäume im Frühling im Campingpark Abersee" },
    },
    {
      title: "Modernes Sanitärgebäude",
      text: "Das beheizte Sanitärgebäude ist auf neuestem Stand – mit kostenlosen Warmwasser-Duschen, WLAN-Zugang und viel Komfort.",
      image: { src: `${IMG}/sanitaergebaeude.webp`, alt: "Modernes, beheiztes Sanitärgebäude im Campingpark Abersee" },
    },
  ],

  usps: [
    "Eigener Badeplatz am See",
    "Modernes Sanitärgebäude",
    "Warmwasser-Duschen frei",
    "Kinderspielplatz",
    "WLAN-Zugang möglich",
    "Ruhige Lage mit Freiraum",
  ],

  trust: {
    heading: "Was den Campingpark Abersee ausmacht",
    headingEmphasis: "ausmacht",
    intro:
      "Seit der Eröffnung im Jahr 2000 ein ruhiger Platz mit modernen Anlagen, eigenem Badeplatz am Wolfgangsee und kurzen Wegen – mitten im Salzkammergut, nur einen Sprung vom Ortszentrum entfernt.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-wolfgangsee.webp`, alt: "Blick über die Wiesen des Campingpark Abersee hinunter zum Wolfgangsee" },
  },

  // Camping-Bento ausgeblendet: keine eigenen Bilder mehr frei (kein Recycling) → features leer = Sektion versteckt sich.
  camping: {
    heading: "Camping am Wolfgangsee",
    intro: "Inmitten grüner Wiesen, nur ein paar Schritte vom eigenen Badeplatz – ein ruhiger Platz mit viel Freiraum.",
    features: [],
  },

  anreise: {
    heading: "Dein Weg nach Abersee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 (Westautobahn), Abfahrt Thalgau oder Mondsee, weiter auf der Wolfgangsee-Bundesstraße Richtung St. Gilgen bis zur Abfahrt Abersee.",
      },
      {
        title: "Lage am See",
        text: "Abersee liegt am Wolfgangsee zwischen Strobl und St. Gilgen, genau gegenüber von St. Wolfgang – mitten im Salzkammergut.",
      },
      {
        title: "Fähre & Ausflüge",
        text: "Mit der Fähre geht es hinüber nach St. Wolfgang; Salzburg und Bad Ischl sind beliebte Ausflugsziele in der Umgebung.",
      },
    ],
  },

  // Galerie ausgeblendet: das Bento braucht 4 ungenutzte Bilder, die hier nicht mehr frei sind.
  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Ein paar Aufnahmen vom Campingpark Abersee.",
    tag: "Mai bis Oktober",
    images: [],
  },

  booking: {
    heading: "Bereit für deinen Sommer am Wolfgangsee?",
    headingEmphasis: "Sommer am Wolfgangsee",
    intro: "Wähle Zeitraum und Personen – die Familie Eisl meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die aktuelle Preisliste 2025 liegt uns noch nicht vor, bitte bestätigen. Saison Mai–Oktober · Basis 2 Personen · zzgl. Ortstaxe.",
    highlight: {
      title: "Eigener Badeplatz am See",
      text: "Vom Platz sind es nur ein paar Schritte zum dazugehörigen Badeplatz am Wolfgangsee.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 7 },
      { id: "wohnmobil", label: "Wohnmobil", perNight: 38, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 47.733882, lng: 13.428462 },
    tel: "+43 (0)6227/3512",
    telHref: "tel:+4362273512",
    mail: "info@campingpark-abersee.at",
    adresse: "Reith 22 · 5342 Abersee · Österreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Start", href: "#top" },
    { label: "Lage", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default campingparkAbersee;
