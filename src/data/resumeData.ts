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
  }[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Yoseph Ashenafi",
    title: "Software Engineer (Web & Mobile)",
    email: "yosephashenafi.07@gmail.com",
    phone: "+251 969 751 194",
    location: "Addis Ababa, Ethiopia (Remote / Relocation)",
    website: "https://github.com/josephethropia",
    github: "https://github.com/josephethropia",
    telegram: "https://t.me/joaccount",
    summary:
      "Software Engineer specializing in Web and Mobile applications (Next.js, React Native / Expo, Node.js, and Telegram Mini Apps). B.Sc. in Infrastructure Management from Addis Ababa University (Graduating Class 2026)."
  },
  skills: [
    {
      category: "Specializations",
      items: [
        "Telegram Bot & Mini App Development (@lehulum_exams_bot)",
        "Android & Mobile Apps (React Native & Expo)",
        "Web Application Development",
        "REST & WebSockets APIs"
      ]
    },
    {
      category: "Frontend & Mobile",
      items: ["Next.js (App Router)", "React Native & Expo", "TypeScript", "React", "Tailwind CSS"]
    },
    {
      category: "Backend & DevOps",
      items: ["Node.js & Express", "Hono.js", "PostgreSQL & Prisma ORM", "MongoDB", "Docker", "Linux Administration"]
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Independent Consultant",
      location: "Remote",
      period: "2025 – Present",
      highlights: [
        "Building production web applications, backend APIs, and Expo mobile apps for clients.",
        "Engineered Telegram Mini Apps including Lehulum Exams (`@lehulum_exams_bot`), combining WebApp interfaces, quiz scoring logic, and bot handlers.",
        "Set up Docker containers and API routes for reliable client data delivery."
      ]
    },
    {
      role: "Web & Mobile Developer",
      company: "Lehulum Exams",
      location: "Addis Ababa, Ethiopia",
      period: "2025 – 2026",
      highlights: [
        "Built the Lehulum Exams Telegram Mini App (`@lehulum_exams_bot`) for student national exam preparation.",
        "Created interactive exam simulators, quiz scoring algorithms, and student study modules inside Telegram.",
        "Optimized mobile frontend speed for smooth performance on cellular networks."
      ]
    },
    {
      role: "Freelance Software Engineer",
      company: "DNT Services & Remote Companies",
      location: "Remote",
      period: "2022 – 2025",
      highlights: [
        "Worked remotely building custom web applications, client portals, and user interfaces for DNT Services and global companies.",
        "Collaborated with remote product teams to deliver responsive features using React, JavaScript, and Node.js."
      ]
    }
  ],
  projects: [
    {
      name: "Lehulum Exams",
      subtitle: "Telegram Mini App (@lehulum_exams_bot)",
      description: "Exam preparation platform built as a Telegram Mini App with real-time quizzes and score tracking.",
      tech: ["Telegram WebApp API", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://t.me/lehulum_exams_bot"
    },
    {
      name: "ServiceNow Platform Portal",
      subtitle: "Enterprise Workflow System",
      description: "Enterprise IT workflow portal for managing service requests and system monitoring.",
      tech: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"]
    },
    {
      name: "Whalers Crypto Analytics",
      subtitle: "Liquidity Dashboard",
      description: "Crypto transaction analytics platform displaying liquidity metrics in real-time.",
      tech: ["React", "TypeScript", "Ethers.js", "WebSockets"]
    },
    {
      name: "Calmify AI",
      subtitle: "Mental Health App",
      description: "Wellness app with AI sentiment analysis for stress-reduction exercises and mood tracking.",
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

