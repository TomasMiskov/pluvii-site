export const languages = ["en", "sk"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

type Dictionary = {
  localeLabel: string;
  nav: {
    home: string;
    blog: string;
    projects: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: {
    title: string;
    body: string;
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
    nav: {
      home: "Home",
      blog: "Blog",
      projects: "Projects"
    },
    hero: {
      eyebrow: "Landscape, water, and regeneration",
      title: "Pluvii helps landowners design water retention for rewilding.",
      body: "We turn land insight into practical water retention strategies that support ecological restoration and long-term landscape resilience.",
      primaryCta: "Start a conversation",
      secondaryCta: "Read the blog"
    },
    intro: {
      title: "What this site starts with",
      body: "A lean public site for Pluvii with room for campaign pages, translated content, and a knowledge base that grows over time."
    },
    contact: {
      title: "Let us know what land you are working with",
      body: "This form is a visual placeholder for now. It can later connect to email, a form backend, or a CRM.",
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
      intro: "Notes, field thinking, and practical guidance from Pluvii.",
      empty: "No posts yet."
    },
    projects: {
      title: "Projects",
      intro: "Selected examples and future case studies.",
      empty: "No projects yet."
    }
  },
  sk: {
    localeLabel: "Slovensky",
    nav: {
      home: "Domov",
      blog: "Blog",
      projects: "Projekty"
    },
    hero: {
      eyebrow: "Krajina, voda a regeneracia",
      title: "Pluvii pomaha vlastnikom pozemkov navrhovat zadrzanie vody pre rewildering.",
      body: "Premename poznanie uzemia na prakticke strategie zadrzania vody, ktore podporuju ekologicku obnovu a dlhodobu odolnost krajiny.",
      primaryCta: "Zacat rozhovor",
      secondaryCta: "Precitat blog"
    },
    intro: {
      title: "S cim tento web zacina",
      body: "Jednoduchy verejny web pre Pluvii s priestorom na kampanove landing pages, preklady a rastucu znalostnu sekciu."
    },
    contact: {
      title: "Dajte nam vediet, s akym pozemkom pracujete",
      body: "Tento formular je zatial vizualny placeholder. Neskor ho mozeme napojit na email, formularovy backend alebo CRM.",
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
      intro: "Poznamky, uvahy z terenu a prakticke vedenie od Pluvii.",
      empty: "Zatial tu nie su ziadne clanky."
    },
    projects: {
      title: "Projekty",
      intro: "Vybrane priklady a buduce pripadove studie.",
      empty: "Zatial tu nie su ziadne projekty."
    }
  }
};

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
