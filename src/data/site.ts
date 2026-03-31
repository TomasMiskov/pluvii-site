export const languages = ["en", "sk"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

type Dictionary = {
  localeLabel: string;
  siteTagline: string;
  nav: {
    home: string;
    blog: string;
    projects: string;
    contact: string;
    whoItsFor: string;
    resources: string;
    landowners: string;
    farmers: string;
    municipalities: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
  };
  home: {
    process: {
      title: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    };
    faq: {
      title: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    };
  };
  contact: {
    title: string;
    body: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  footer: {
    contact: string;
  };
  blog: {
    title: string;
    intro: string;
    empty: string;
  };
  projects: {
    title: string;
    intro: string;
    empty: string;
  };
};

export const copy: Record<Language, Dictionary> = {
  en: {
    localeLabel: "English",
    siteTagline: "Water retention for rewilding",
    nav: {
      home: "Home",
      blog: "Blog",
      projects: "Projects",
      contact: "Contact",
      whoItsFor: "Who it's for",
      resources: "Resources",
      landowners: "Land owners",
      farmers: "Farmers",
      municipalities: "Municipalities"
    },
    hero: {
      eyebrow: "Landscape, water, and regeneration",
      title: "We map your water so you can restore your land.",
      body: "Pluvii helps you understand how water moves across your land, where it pools, and which retention measures will be most effective.",
      primaryCta: "Let's Talk"
    },
    home: {
      process: {
        title: "This is How We Work",
        items: [
          {
            title: "We gather land elevation data",
            body: "We start with publicly available terrain (LiDAR) data for your site."
          },
          {
            title: "We trace how water behaves",
            body: "We run our analysis to reveal where water slows, pools, spills, and concentrates."
          },
          {
            title: "We show what to build and where",
            body: "You get practical guidance on where water retention measures make sense and what kind of interventions fit the land best."
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            title: "What kind of land can Pluvii help with?",
            body: "For now this is sample copy, but this answer can explain the kinds of properties, scales, and restoration goals Pluvii is best suited for."
          },
          {
            title: "Do I need to already know what intervention I want?",
            body: "No. This answer can reassure visitors that the process starts with understanding the land and its water, not with guessing the solution first."
          },
          {
            title: "What do I receive at the end of the process?",
            body: "This answer can later describe maps, recommendations, retention concepts, and the level of detail a landowner should expect."
          }
        ]
      }
    },
    contact: {
      title: "Tell us about your land",
      body: "If you are exploring water retention for restoration, send a few details and we will get back to you.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send inquiry"
    },
    footer: {
      contact: "Contact: hello@pluvii.com"
    },
    blog: {
      title: "Blog",
      intro: "Field notes, practical explainers, and clear thinking about land, water, and regeneration.",
      empty: "No posts yet."
    },
    projects: {
      title: "Projects",
      intro: "Selected field examples, case studies, and site-based thinking.",
      empty: "No projects yet."
    }
  },
  sk: {
    localeLabel: "Slovensky",
    siteTagline: "Zadrzanie vody pre rewildering",
    nav: {
      home: "Domov",
      blog: "Blog",
      projects: "Projekty",
      contact: "Kontakt",
      whoItsFor: "Pre koho",
      resources: "Zdroje",
      landowners: "Vlastnici pozemkov",
      farmers: "Farmari",
      municipalities: "Samospravy"
    },
    hero: {
      eyebrow: "Krajina, voda a regeneracia",
      title: "Mapujeme vodu na vasom pozemku, aby ste mohli obnovit krajinu.",
      body: "Pluvii vam pomoze pochopit, ako sa voda pohybuje po pozemku, kde sa zhromazduje a ake opatrenia na jej zadrzanie budu davat pri obnove uzemia najvacsi zmysel.",
      primaryCta: "Podme sa porozpravat"
    },
    home: {
      process: {
        title: "Takto pracujeme",
        items: [
          {
            title: "Ziskame podklady o pozemku",
            body: "Z verejne dostupnych LiDAR a terenych dat si pripravime jasny obraz o tvare krajiny a o tom, ako funguje v skutocnosti."
          },
          {
            title: "Zistime, ako sa sprava voda",
            body: "Spustime analyzu, ktora ukaze, kde sa voda spomaluje, zhromazduje, preteka a kde sa oplati venovat pozornost."
          },
          {
            title: "Ukazeme, co a kde ma zmysel vybudovat",
            body: "Dostanete prakticke odporucania, kde opatrenia na zadrzanie vody davaju zmysel a aky typ zasahu je pre dane miesto vhodny."
          }
        ]
      },
      faq: {
        title: "Caste otazky",
        items: [
          {
            title: "S akym typom pozemku vie Pluvii pomoct?",
            body: "Zatial ide o ukazkovy text, ale tato odpoved moze vysvetlit, pre ake lokality, mierky a ciele obnovy je Pluvii najvhodnejsie."
          },
          {
            title: "Potrebujem uz vediet, aky zasah chcem?",
            body: "Nie. Tato odpoved moze navstevnika uistit, ze proces zacina porozumenim pozemku a vody, nie hadanim riesenia."
          },
          {
            title: "Co dostanem na konci procesu?",
            body: "Neskor sem mozeme doplnit opis map, odporucani, navrhov retencnych opatreni a urovne detailu, ktoru moze vlastnik ocakavat."
          }
        ]
      }
    },
    contact: {
      title: "Povedzte nam nieco o svojom pozemku",
      body: "Ak rozmyslate nad zadrzanim vody pre obnovu uzemia, poslite nam par detailov a ozveme sa vam.",
      name: "Meno",
      email: "Email",
      phone: "Telefon",
      message: "Sprava",
      submit: "Odoslat dopyt"
    },
    footer: {
      contact: "Kontakt: hello@pluvii.com"
    },
    blog: {
      title: "Blog",
      intro: "Poznamky z terenu, prakticke vysvetlenia a zrozumitelne uvahy o krajine, vode a regeneracii.",
      empty: "Zatial tu nie su ziadne clanky."
    },
    projects: {
      title: "Projekty",
      intro: "Vybrane priklady z terenu, pripadove studie a uvazovanie zalozene na lokalite.",
      empty: "Zatial tu nie su ziadne projekty."
    }
  }
};

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
