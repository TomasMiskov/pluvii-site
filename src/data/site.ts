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
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    supportingPoints: string[];
    statLabel: string;
    statValue: string;
    visualLabel: string;
  };
  home: {
    intro: {
      title: string;
      body: string;
    };
    principles: {
      title: string;
      body: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    };
    media: {
      title: string;
      body: string;
      cards: Array<{
        title: string;
        body: string;
      }>;
    };
    pathways: {
      title: string;
      body: string;
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
      contact: "Contact"
    },
    hero: {
      eyebrow: "Landscape, water, and regeneration",
      title: "Friendly, practical guidance for shaping land and water with optimism.",
      body: "Pluvii helps landowners read their landscape, understand water movement, and design retention measures that support rewilding without making the work feel technical or intimidating.",
      primaryCta: "Start a project conversation",
      secondaryCta: "Explore field notes",
      supportingPoints: [
        "Clear explanations before technical detail",
        "Grounded in real sites, maps, and landscape logic",
        "Designed for landowners, partners, and regeneration projects"
      ],
      statLabel: "Focus",
      statValue: "Land + Water + Rewilding",
      visualLabel: "Field and satellite thinking"
    },
    home: {
      intro: {
        title: "Built for people who want to improve land without drowning in jargon",
        body: "The site should feel like a conversation with someone who understands terrain, hydrology, and ecological restoration, but knows how to explain it simply."
      },
      principles: {
        title: "How Pluvii should show up",
        body: "Every page should combine credibility with energy. Clean structure builds trust, while color, shape, and imagery keep the experience friendly and alive.",
        items: [
          {
            title: "Readable first",
            body: "Visitors should understand the offer, the process, and the next step within a few seconds."
          },
          {
            title: "Evidence in view",
            body: "Use real photos, satellite references, and case-study logic to show the work is grounded in actual landscapes."
          },
          {
            title: "Optimistic but practical",
            body: "The tone can be excited about regeneration, but it should always stay specific and useful."
          }
        ]
      },
      media: {
        title: "A visual system that mixes clean graphics with real terrain",
        body: "Pluvii should feel modern and legible, while still staying connected to places, landforms, and interventions on the ground.",
        cards: [
          {
            title: "Field photography",
            body: "Use real sites, textures, and scale to keep the work tangible."
          },
          {
            title: "Satellite and map layers",
            body: "Translate complex land reading into approachable visuals and captions."
          },
          {
            title: "Simple diagrams",
            body: "Show flows, retention logic, and intervention thinking without clutter."
          }
        ]
      },
      pathways: {
        title: "Three page types that should scale cleanly",
        body: "As the site grows, most public pages should still behave like one of these familiar patterns.",
        items: [
          {
            title: "Landing pages",
            body: "Focused on one audience, one message, one proof layer, and one clear call to action."
          },
          {
            title: "Blog posts",
            body: "Educational and trust-building, with strong intros, subheads, and practical takeaways."
          },
          {
            title: "Project pages",
            body: "Evidence-oriented case studies showing site context, challenge, and intervention logic."
          }
        ]
      }
    },
    contact: {
      title: "Tell us what kind of land you are working with",
      body: "This form is still a placeholder, but the intent is real: make first contact feel easy, warm, and specific.",
      name: "Name",
      email: "Email",
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
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Krajina, voda a regeneracia",
      title: "Priatelske a prakticke vedenie pre pracu s krajinou, vodou a obnovou uzemia.",
      body: "Pluvii pomaha vlastnikom pozemkov citat krajinu, pochopit pohyb vody a navrhovat opatrenia na jej zadrzanie tak, aby to bolo zrozumitelne a nie zastrasujuce.",
      primaryCta: "Zacat rozhovor o projekte",
      secondaryCta: "Pozriet si poznamky z terenu",
      supportingPoints: [
        "Najprv jasne vysvetlenie, potom technicky detail",
        "Zaklad v realnych miestach, mapach a logike krajiny",
        "Pre vlastnikov pozemkov, partnerov a regeneracne projekty"
      ],
      statLabel: "Zameranie",
      statValue: "Pozemok + Voda + Rewilding",
      visualLabel: "Terenske a satelitne uvazovanie"
    },
    home: {
      intro: {
        title: "Web pre ludi, ktori chcu zlepsovat pozemok bez zbytocneho zargonu",
        body: "Web ma posobit ako rozhovor s niekym, kto rozumie terenu, hydrologii a ekologickej obnove, ale vie to vysvetlit jednoducho."
      },
      principles: {
        title: "Ako ma Pluvii posobit",
        body: "Kazda stranka ma spajat doveryhodnost s energiou. Cista struktura buduje doveru a farba, tvar a obraz drzia zazitok priatelsky a zivsi.",
        items: [
          {
            title: "Najprv citatelnost",
            body: "Navstevnik ma v priebehu par sekund pochopit ponuku, proces aj dalsi krok."
          },
          {
            title: "Dokaz na ociach",
            body: "Pouzivajme realne fotografie, satelitne pohlady a logiku pripadovych studii, aby bolo jasne, ze ide o skutocnu pracu v krajine."
          },
          {
            title: "Optimisticke, ale prakticke",
            body: "Ton moze byt nadseny pre regeneraciu, ale vzdy musi ostat konkretny a uzitocny."
          }
        ]
      },
      media: {
        title: "Vizualny system, ktory spaja cistu grafiku s realnym terenom",
        body: "Pluvii ma posobit moderne a prehladne, ale zaroven ostat prepojene s miestami, reliefom a zasahmi v uzemi.",
        cards: [
          {
            title: "Fotografie z terenu",
            body: "Pouzivajme realne miesta, textury a mierku, aby bola praca hmatatelna."
          },
          {
            title: "Satelitne a mapove vrstvy",
            body: "Premienajme zlozite citanie pozemku na zrozumitelne vizualy a popisy."
          },
          {
            title: "Jednoduche diagramy",
            body: "Ukazujme toky, logiku zadrzania vody a navrhovane zasahy bez chaosu."
          }
        ]
      },
      pathways: {
        title: "Tri typy stranok, ktore maju dobre skalovat",
        body: "Ako web porastie, vacsina verejnych stranok by sa stale mala spravat ako jeden z tychto znamych vzorov.",
        items: [
          {
            title: "Landing pages",
            body: "Zamerane na jedno publikum, jednu spravu, jednu vrstvu dokazov a jednu jasnu vyzvu k akcii."
          },
          {
            title: "Blogove clanky",
            body: "Vzdelavacie a doveryhodnost budujuce texty so silnym uvodom, medzititulkami a praktickymi zaverami."
          },
          {
            title: "Projektove stranky",
            body: "Pripadove studie orientovane na dokaz s kontextom lokality, problemom a logikou navrhnutych zasahov."
          }
        ]
      }
    },
    contact: {
      title: "Dajte nam vediet, s akym typom pozemku pracujete",
      body: "Tento formular je zatial placeholder, ale jeho zamer je skutocny: urobit prvy kontakt jednoduchy, prijemny a konkretny.",
      name: "Meno",
      email: "Email",
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
