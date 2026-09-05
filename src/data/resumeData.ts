export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin?: string;
    telegram: string;
    summary: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  projects: {
    name: string;
    subtitle: string;
    description: string;
    tech: string[];
    link?: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details?: string[];
  }[];
  leadership: {
    role: string;
    organization: string;
    period: string;
    description: string;
    highlights: string[];
  }[];
  languages: {
    name: string;
    proficiency: string;
  }[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Yoseph Ashenafi",
    title: "Software Engineer · Full-Stack, Mobile & Backend Systems",
    email: "yosephashenafi.07@gmail.com",
    phone: "+251 969 751 194",
    location: "Addis Ababa, Ethiopia (Open to Remote & Relocation)",
    website: "https://github.com/josephethropia",
    github: "https://github.com/josephethropia",
    telegram: "https://t.me/joaccount",
    summary:
      "Software Engineer and Addis Ababa University student (Construction Technology & Management / CoTM, Graduating Class of 2027) with 4+ years of hands-on experience building production web applications, mobile apps, and backend APIs. Creator of high-performing Telegram Mini Apps including Lehulum Exams (@lehulum_exams_bot). Summer 2024 Lecturer & Mentor for Google Developer Groups (GDG) on Campus at AAU, teaching backend architecture, REST APIs, and database management to CS and software development students."
  },
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5 & CSS3"]
    },
    {
      category: "Frontend & Mobile",
      items: ["Next.js (App Router)", "React", "React Native & Expo", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js & Express", "Hono.js", "RESTful APIs", "WebSockets", "Telegram Bot API"]
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis", "Schema Design & Optimization"]
    },
    {
      category: "DevOps & Tooling",
      items: ["Docker", "Linux Administration", "Git & GitHub Actions", "Vercel", "Supabase"]
    }
  ],
  experience: [
    {
      role: "Backend Engineering & DB Lecturer / Mentor",
      company: "Google Developer Groups (GDG) on Campus — AAU",
      location: "Addis Ababa, Ethiopia",
      period: "Summer 2024",
      highlights: [
        "Lectured and mentored 120+ Computer Science and Software Development students at Addis Ababa University in backend architecture and database systems.",
        "Delivered hands-on technical workshops covering Node.js, Express, PostgreSQL, Prisma ORM, and database normalization principles.",
        "Guided student engineering teams in building production-ready REST APIs, implementing secure authentication, and writing optimized SQL queries."
      ]
    },
    {
      role: "Software Engineer",
      company: "Independent Consultant",
      location: "Remote",
      period: "2025 – Present",
      highlights: [
        "Architected and shipped production web applications, backend APIs, and cross-platform mobile apps for international clients.",
        "Engineered Telegram Mini Apps featuring seamless WebApp state sync, automated bot commands, and low-latency API handlers.",
        "Containerized services with Docker and configured Linux environments for reliable, automated deployments."
      ]
    },
    {
      role: "Web & Mobile Developer",
      company: "Lehulum Exams Ecosystem",
      location: "Addis Ababa, Ethiopia",
      period: "2025 – 2026",
      highlights: [
        "Built and deployed the Lehulum Exams Telegram Mini App (@lehulum_exams_bot), used by national exam students across Ethiopia.",
        "Engineered instant quiz evaluation algorithms, timed exam simulators, and daily streak tracking directly inside Telegram.",
        "Optimized mobile frontend speed and asset delivery for smooth operation even on low-bandwidth 3G and 4G networks."
      ]
    },
    {
      role: "Freelance Software Engineer",
      company: "DNT Services & Remote Companies",
      location: "Remote (US & Canada)",
      period: "2022 – 2025",
      highlights: [
        "Built responsive client portals, corporate dashboards, and enterprise integration tools for international businesses.",
        "Engineered real-time data visualization platforms (Whalers App) handling live cryptocurrency transactions via WebSockets.",
        "Integrated third-party services including Stripe payment gateways, OAuth authentication, and external webhook pipelines."
      ]
    }
  ],
  leadership: [
    {
      role: "Technical Lecturer & Mentor (Backend & Databases)",
      organization: "Google Developer Groups (GDG) — AAU",
      period: "Summer 2024",
      description: "Delivered university-level backend engineering lectures and practical database labs for CS & Software Development students at Addis Ababa University.",
      highlights: [
        "Led practical sessions on backend architecture, API design, and relational database systems.",
        "Conducted code reviews and helped students debug complex database relations and server bottlenecks."
      ]
    }
  ],
  projects: [
    {
      name: "Lehulum Exams",
      subtitle: "Telegram Mini App (@lehulum_exams_bot)",
      description: "National exam preparation platform built as a high-performing Telegram Mini App with timed quizzes, instant scoring algorithms, and streak tracking for students nationwide.",
      tech: ["Telegram WebApp API", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://t.me/lehulum_exams_bot"
    },
    {
      name: "ServiceNow Platform Portal",
      subtitle: "Enterprise Workflow & ITIL Automation",
      description: "Enterprise IT workflow automation portal streamlining service requests, incident escalation workflows, and role-based access permissions with sub-second API latency.",
      tech: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "Enterprise Integration"],
      link: "https://servicenow.com"
    },
    {
      name: "Whalers Crypto Analytics",
      subtitle: "Real-Time Web3 Liquidity Dashboard",
      description: "Institutional crypto analytics dashboard streaming live blockchain transactions, liquidity pool metrics, and smart contract events via persistent WebSockets.",
      tech: ["React", "TypeScript", "WebSockets", "Ethers.js", "Tailwind CSS"],
      link: "https://whalerapp.com"
    },
    {
      name: "HUHT Orphanage Platform",
      subtitle: "Humanitarian Sponsorship Portal",
      description: "Non-profit humanitarian platform enabling global donors to manage direct child educational sponsorships with recurring Stripe payments, donor dashboards, and transparent impact tracking.",
      tech: ["React", "Node.js", "Express", "Stripe API", "PostgreSQL"],
      link: "https://huhtorphanage.com"
    },
    {
      name: "Calmify AI",
      subtitle: "Mental Wellness Companion",
      description: "Mental wellness application combining OpenAI API sentiment analysis for personalized stress-reduction exercises, daily mood tracking analytics, and supportive audio experiences.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Zustand"],
      link: "https://calmify.com"
    },
    {
      name: "Tigat.net",
      subtitle: "Tech Career & Talent Marketplace",
      description: "Regional tech career ecosystem connecting developers with employers featuring automated matching algorithms, skill verification badges, and real-time messaging.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://tigat.net"
    },
    {
      name: "Lalibela Honey",
      subtitle: "Global E-Commerce Brand Platform",
      description: "High-conversion e-commerce brand presence spotlighting authentic Ethiopian organic honey production with localized checkout flows, international shipping inquiries, and 98+ SEO score.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe API"],
      link: "https://lalibelahoney.com"
    }
  ],
  education: [
    {
      degree: "B.Sc. in Infrastructure Management (Construction Technology & Management — CoTM)",
      institution: "Addis Ababa University (AAU)",
      period: "Graduating Class of 2027",
      details: [
        "Specialization: Construction Management & Technology (CoTM), Project Infrastructure Planning & Engineering Systems",
        "Graduating Class (GC) of 2027"
      ]
    }
  ],
  languages: [
    { name: "English", proficiency: "Fluent / Professional Working" },
    { name: "Amharic", proficiency: "Native" }
  ]
};
