export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
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
  }[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Yoseph Ashenafi",
    title: "Software Architect & Infrastructure Engineer",
    email: "yosephashenafi.07@gmail.com",
    phone: "+251 969 751 194",
    location: "Addis Ababa, Ethiopia (Available for Global Remote)",
    website: "https://github.com/josephethropia",
    github: "https://github.com/josephethropia",
    linkedin: "https://www.linkedin.com/in/yoseph-ashenafi-750346262",
    telegram: "https://t.me/joaccount",
    summary:
      "Results-driven Software Architect and Infrastructure Management specialist with deep expertise in fullstack web engineering, resilient backend systems, and high-concurrency Telegram Mini Apps. Combines rigorous infrastructure management principles from Addis Ababa University with modern Next.js/Node.js application delivery to engineer scalable, low-latency enterprise digital products."
  },
  skills: [
    {
      category: "Specialized Ecosystems",
      items: [
        "Telegram Bot & Mini App Development (@lehulum_exams_bot)",
        "Enterprise System Architecture & Cloud Infrastructure",
        "High-Concurrency REST & WebSockets Services",
        "Performance Optimization & Core Web Vitals (98+)"
      ]
    },
    {
      category: "Frontend Engineering",
      items: ["Next.js (App Router)", "TypeScript", "React 18", "Tailwind CSS", "Framer Motion", "Zustand & Redux"]
    },
    {
      category: "Backend & Infrastructure",
      items: ["Node.js & Express", "Hono.js & Edge Runtime", "PostgreSQL & Prisma ORM", "MongoDB", "Docker Containerization", "CI/CD Pipelines", "Linux Administration"]
    }
  ],
  experience: [
    {
      role: "Senior Fullstack Engineer & Systems Consultant",
      company: "Independent Global Technology Consultant",
      location: "Remote",
      period: "2025 – Present",
      highlights: [
        "Architecting production Next.js and Node.js microservices for international enterprise clients across North America and East Africa.",
        "Engineered specialized Telegram Mini Apps (including Lehulum Exams `@lehulum_exams_bot`), combining responsive WebApp UIs, instant evaluation engines, and automated bot webhooks.",
        "Implemented containerized Docker workflows, sub-100ms API response pipelines, and secure payment integrations handling high concurrent user volume."
      ]
    },
    {
      role: "Lead Fullstack & Telegram Mini App Developer",
      company: "Lehulum Exams Platform",
      location: "Addis Ababa, Ethiopia",
      period: "2025 – 2026",
      highlights: [
        "Designed and deployed the Lehulum Exams Telegram Mini App ecosystem (`@lehulum_exams_bot`) tailored for national exam preparation.",
        "Built interactive exam simulators, instant scoring feedback algorithms, and daily streak tracking modules directly embedded inside Telegram.",
        "Optimized mobile client rendering speed for low-bandwidth cellular connections, achieving sub-second screen loads."
      ]
    }
  ],
  projects: [
    {
      name: "Lehulum Exams",
      subtitle: "Telegram Mini App (@lehulum_exams_bot)",
      description: "National exam preparation ecosystem engineered as a seamless Telegram Mini App with real-time quiz evaluation and performance analytics.",
      tech: ["Telegram WebApp API", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://t.me/lehulum_exams_bot"
    },
    {
      name: "ServiceNow Platform Portal",
      subtitle: "Enterprise Workflow System",
      description: "Enterprise IT workflow automation & ITIL management portal engineered for streamlined digital transformations.",
      tech: ["Next.js", "TypeScript", "REST APIs", "Enterprise RBAC"]
    },
    {
      name: "Whalers Crypto Analytics",
      subtitle: "Web3 Liquidity Dashboard",
      description: "High-throughput analytics platform aggregating real-time crypto transactions and liquidity metrics into clean visual dashboards.",
      tech: ["React", "TypeScript", "Ethers.js", "WebSockets"]
    },
    {
      name: "Calmify AI",
      subtitle: "AI Mental Health Companion",
      description: "Innovative wellness app utilizing AI sentiment analysis for personalized stress-reduction exercises and mood tracking analytics.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Zustand"]
    }
  ],
  education: [
    {
      degree: "B.Sc. in Infrastructure Management",
      institution: "Addis Ababa University",
      period: "Graduating Class (2026)"
    }
  ]
};

