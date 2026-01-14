import { Translations } from './types';

export const CONTENT: Translations = {
  en: {
    siteMetadata: {
      title: "Service Center - State Capital City Potsdam",
      languages: ["en", "de"],
      hotline: "(0331) 289-4444",
      hotlineLabel: "Service Hotline: 115"
    },
    navigation: [
      { label: "Home", url: "/" },
      { label: "Contact", url: "https://www.potsdam.de/en/kontakt" }
    ],
    pageContent: {
      hero: {
        title: "Service Center",
        subtitle: "Your central hub for passports, IDs, and citizen services in Potsdam.",
        image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/images/passport-1051697_960_720.jpg?h=b3660f0d&itok=DEork815"
      },
      alert: {
        type: "info",
        text: "The Fast Lanes are temporarily established service counters exclusively for passport and ID-card applications."
      },
      services: [
        {
          id: "fast-lane",
          title: "Fast Lanes for Passport and ID-card applications",
          description: "Exclusively for passport and ID-card applications (no express or temporary documents, no name changes). Please check requirements before booking.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/B%C3%BCrgerservice%20Yorckstrasse-Christine-Homann.jpg?h=b8b6b338&itok=Lq-bGkp8",
          cta: {
            label: "Book a Fast Lane Appointment",
            url: "internal:fast-lane"
          },
          links: [
            { label: "Information on locations (DE)", url: "https://vv.potsdam.de/vv/produkte/fast-lane-standorte.php#tab-unterlagen" }
          ],
          contact: "Phone: (0331) 289-4444"
        },
        {
          id: "yorckstrasse",
          title: "Service Center Yorckstraße",
          description: "Book appointments for all services that require a personal visit. For simple passport applications, we recommend the Fast Lane.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/20250103_130234.jpg?h=674a5d6c&itok=9SK73Sbv",
          cta: {
            label: "Appointments for Yorckstraße",
            url: "internal:yorckstrasse"
          },
          links: [
            { label: "Locations and opening hours (PDF)", url: "https://vv.potsdam.de/vv/Standorte-des-Buergerservicecenters_.pdf" }
          ]
        },
        {
          id: "wilhelmgalerie",
          title: "Service Center Wilhelmgalerie (Walk-in)",
          description: "Apply for citizen services without an appointment using a Smart Waiting Ticket. Limited tickets available daily.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/2024-02-27-B%C3%BCrgerservice-Pass%C3%BCbergabe-RobertSchnabel.jpg?h=790be497&itok=GxD8ORfL",
          cta: {
            label: "Further information",
            url: "https://vv.potsdam.de/vv/oe/173010100000007821.php"
          },
          links: [
            { label: "Current Smart Waiting number", url: "https://www.smartwarten.de/tablet-special/landeshauptstadt-potsdam-wilhelmsgalerie" },
            { label: "Locations and opening hours (PDF)", url: "https://vv.potsdam.de/vv/Standorte-des-Buergerservicecenters_.pdf" }
          ]
        },
        {
          id: "collection",
          title: "Collection of passports & ID-cards",
          description: "Book an appointment to collect documents or use the 24/7 pickup station.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/2025-01-27-Dokumentenabholstation-Christine-Homann-IMG_6839.jpg?h=d318f057&itok=b-qIWduz",
          cta: {
            label: "Appointments for document collection",
            url: "internal:collection"
          },
          links: [
            { label: "About Document Pickup Station", url: "https://www.potsdam.de/node/114026" }
          ]
        }
      ],
      additionalOffers: [
        {
          title: "Speed Capture Terminal",
          description: "For digital biometric passport photos at Yorckstraße."
        },
        {
          title: "Document Pickup Station",
          description: "24/7 pickup station at Hegelallee.",
          link: "https://www.potsdam.de/node/114026"
        },
        {
          title: "Bicycle Courier",
          description: "Personal document delivery service."
        },
        {
          title: "Online Services",
          description: "More than 50 services to apply for from home.",
          link: "https://www.potsdam.de/node/111315"
        }
      ]
    },
    footer: {
      socials: [
        { platform: "Facebook", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" },
        { platform: "YouTube", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" },
        { platform: "Xing", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" },
        { platform: "Instagram", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" }
      ],
      links: [
        { label: "Contact", url: "https://www.potsdam.de/en/kontakt" },
        { label: "Legal notice", url: "https://www.potsdam.de/en/content/impressum-von-wwwpotsdamde" },
        { label: "Data protection", url: "https://www.potsdam.de/en/content/datenschutzerklaerung" },
        { label: "Accessibility", url: "https://www.potsdam.de/en/erklaerung-zur-barrierefreiheit-landeshauptstadt-potsdam" }
      ],
      copyright: "© 2024 Landeshauptstadt Potsdam"
    }
  },
  de: {
    siteMetadata: {
      title: "Bürgerservicecenter - Landeshauptstadt Potsdam",
      languages: ["en", "de"],
      hotline: "(0331) 289-4444",
      hotlineLabel: "Behördennummer: 115"
    },
    navigation: [
      { label: "Startseite", url: "/" },
      { label: "Kontakt", url: "https://www.potsdam.de/de/kontakt" }
    ],
    pageContent: {
      hero: {
        title: "Bürgerservicecenter",
        subtitle: "Ihr zentraler Anlaufpunkt für Pässe, Ausweise und Bürgerdienste in Potsdam.",
        image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/images/passport-1051697_960_720.jpg?h=b3660f0d&itok=DEork815"
      },
      alert: {
        type: "info",
        text: "Die Fast Lanes sind temporär eingerichtete Serviceschalter ausschließlich für Pass- und Personalausweisanträge."
      },
      services: [
        {
          id: "fast-lane",
          title: "Fast Lane für Pässe und Ausweise",
          description: "Ausschließlich für Reisepass- und Personalausweisanträge (keine vorläufigen Dokumente, keine Namensänderungen). Bitte prüfen Sie die Voraussetzungen vor der Buchung.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/B%C3%BCrgerservice%20Yorckstrasse-Christine-Homann.jpg?h=b8b6b338&itok=Lq-bGkp8",
          cta: {
            label: "Fast Lane Termin buchen",
            url: "internal:fast-lane"
          },
          links: [
            { label: "Informationen zu Standorten", url: "https://vv.potsdam.de/vv/produkte/fast-lane-standorte.php#tab-unterlagen" }
          ],
          contact: "Tel: (0331) 289-4444"
        },
        {
          id: "yorckstrasse",
          title: "Bürgerservicecenter Yorckstraße",
          description: "Buchen Sie Termine für alle Dienstleistungen, die einen persönlichen Besuch erfordern. Für einfache Passanträge empfehlen wir die Fast Lane.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/20250103_130234.jpg?h=674a5d6c&itok=9SK73Sbv",
          cta: {
            label: "Termine Yorckstraße",
            url: "internal:yorckstrasse"
          },
          links: [
            { label: "Standorte und Öffnungszeiten (PDF)", url: "https://vv.potsdam.de/vv/Standorte-des-Buergerservicecenters_.pdf" }
          ]
        },
        {
          id: "wilhelmgalerie",
          title: "Bürgerservicecenter Wilhelmgalerie (ohne Termin)",
          description: "Erledigen Sie Bürgerdienste ohne Termin mit einem Smart Waiting Ticket. Begrenztes Ticketkontingent täglich.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/2024-02-27-B%C3%BCrgerservice-Pass%C3%BCbergabe-RobertSchnabel.jpg?h=790be497&itok=GxD8ORfL",
          cta: {
            label: "Weitere Informationen",
            url: "https://vv.potsdam.de/vv/oe/173010100000007821.php"
          },
          links: [
            { label: "Aktuelle Wartenummer", url: "https://www.smartwarten.de/tablet-special/landeshauptstadt-potsdam-wilhelmsgalerie" },
            { label: "Standorte und Öffnungszeiten (PDF)", url: "https://vv.potsdam.de/vv/Standorte-des-Buergerservicecenters_.pdf" }
          ]
        },
        {
          id: "collection",
          title: "Abholung von Dokumenten",
          description: "Buchen Sie einen Termin zur Abholung oder nutzen Sie die 24/7 Abholstation.",
          image: "https://www.potsdam.de/system/files/styles/potsdam_main_content_teaser_m_2x/private/image/2025-01-27-Dokumentenabholstation-Christine-Homann-IMG_6839.jpg?h=d318f057&itok=b-qIWduz",
          cta: {
            label: "Termin zur Abholung buchen",
            url: "internal:collection"
          },
          links: [
            { label: "Über die Abholstation", url: "https://www.potsdam.de/node/114026" }
          ]
        }
      ],
      additionalOffers: [
        {
          title: "Speed Capture Terminal",
          description: "Für digitale biometrische Passfotos in der Yorckstraße."
        },
        {
          title: "Dokumenten-Abholstation",
          description: "24/7 Abholstation in der Hegelallee.",
          link: "https://www.potsdam.de/node/114026"
        },
        {
          title: "Fahrradkurier",
          description: "Persönlicher Dokumentenlieferdienst."
        },
        {
          title: "Online-Dienste",
          description: "Mehr als 50 Dienstleistungen bequem von zu Hause.",
          link: "https://www.potsdam.de/node/111315"
        }
      ]
    },
    footer: {
      socials: [
        { platform: "Facebook", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" },
        { platform: "YouTube", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" },
        { platform: "Xing", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" },
        { platform: "Instagram", url: "https://www.potsdam.de/de/social-media-angebote-der-landeshauptstadt-potsdam" }
      ],
      links: [
        { label: "Kontakt", url: "https://www.potsdam.de/de/kontakt" },
        { label: "Impressum", url: "https://www.potsdam.de/de/content/impressum-von-wwwpotsdamde" },
        { label: "Datenschutzerklärung", url: "https://www.potsdam.de/de/content/datenschutzerklaerung" },
        { label: "Barrierefreiheit", url: "https://www.potsdam.de/de/erklaerung-zur-barrierefreiheit-landeshauptstadt-potsdam" }
      ],
      copyright: "© 2024 Landeshauptstadt Potsdam"
    }
  }
};