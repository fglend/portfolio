// Central content config. Edit the values in this file to update the site —
// components read from here so copy changes never touch markup.

export const profile = {
  name: "Glend Dale Ferrer",
  role: "Software Developer",
  tagline:
    "I build reliable, scalable backend systems and the tools that ship them.",
  summary:
    "Software developer with 4 years of experience designing backend services, integrations, and developer tooling. Focused on clean architecture, maintainable code, and shipping software teams can rely on.",
  location: "Philippines",
  email: "glendferrer05@gmail.com",
  avatar: "/avatar.jpg",
  social: {
    github: "https://github.com/fglend",
    linkedin: "https://linkedin.com/in/glend-ferrer-85072a173",
  },
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Trainings", href: "#trainings" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#stack" },
] as const;

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Computer Programmer II",
    company: "University of the Philippines - Los Baños",
    period: "2025 — Present",
    location: "Los Baños, Laguna",
    highlights: [
      "Designed and maintained backend services powering core product features.",
      "Built internal tooling and Filament plugins to speed up admin workflows.",
      "Collaborated with cross-functional teams to ship features from spec to production.",
    ],
  },
  {
    role: "Senior ICT Assistant",
    company: "University of the Philippines - Los Baños",
    period: "2023 — 2025",
    location: "Los Baños, Laguna",
    highlights: [
      "Developed and maintained RESTful APIs used by multiple client applications.",
      "Improved system reliability through queue-based processing and monitoring.",
      "Worked closely with QA to reduce production incidents through better test coverage.",
    ],
  },
  {
    role: "Science Aide",
    company: "Laguna State Polytechnic University - Los Baños Campus",
    period: "2021 — 2023",
    location: "Los Baños, Laguna",
    highlights: [
      "Developed  and maintained E-SENTRY, a web-based water quality monitoring system for Tadlac Lake, Los Baños.",
      "Designed and implemented a data processing pipeline to analyze water quality data.",
      "Collaborated with researchers to improve data collection and analysis processes.",
    ],
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
  details?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "Technological Institute of the Philippines - Manila",
    period: "2023 — Present",
    details:
      "Relevant coursework: Data Structures & Algorithms, Databases, Software Engineering.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Laguna State Polytechnic University - Los Baños Campus",
    period: "2018 - 2021",
  },
];

export type TrainingEntry = {
  title: string;
  issuer: string;
  year: string;
};

export const trainings: TrainingEntry[] = [
  {
    title: "Web Based Geo-Spatial Information System",
    issuer: "University of the Philippines - Los Baños",
    year: "2026",
  },
  {
    title: "Resource Person: Navigating the UPLB SALN System",
    issuer: "University of the Philippines - Los Baños",
    year: "2025",
  },
  {
    title: "Resource Person: BIDANI BMIS Training",
    issuer: "University of the Philippines - Los Baños",
    year: "2025",
  },
  {
    title: "Resource Person: PAVE and HR Application Training",
    issuer: "University of the Philippines - Los Baños",
    year: "2025",
  },
  {
    title: "Computer Vision Master Class",
    issuer: "UDEMY",
    year: "2024",
  },
  {
    title:
      "RESEARCH METHODOLOGIES FOR SOCIO-ECONOMIC IMPACT EVALUATION OF LIVELIHOOD",
    issuer: "Laguna State Polytechnic University",
    year: "2023",
  },
  {
    title: "MACHINE LEARNING FOR WATER AND ENVIRONMENTAL MONITORING ",
    issuer: "UP Diliman, QC",
    year: "2023",
  },
  {
    title:
      "THROUGH THE LENSES OF TSIS: MANAGING THE EUTROPHIC CONDITION OF LAGUNA LAKE",
    issuer: "UP Diliman, QC",
    year: "2023",
  },
  {
    title: "8TH BASIC GIS TRAINING ",
    issuer: "GRIDS",
    year: "2022",
  },
  {
    title:
      "START HACKATON 2022: INNOVATIVE SOLUTIONS TOWARD SMART AND CREATIVE COMMUNITIES",
    issuer: "DAP Conference Center Tagaytay",
    year: "2022",
  },
];

export type ProjectVisibility = "open-source" | "private" | "personal";

export type ProjectEntry = {
  title: string;
  description: string;
  /** Omit for private/company projects that have no public link. */
  href?: string;
  tags: string[];
  visibility: ProjectVisibility;
  /** Packagist vendor/package name, used to render a live downloads badge. */
  packagist?: string;
  /** Your role on the project, shown in the detail modal. */
  keyRole: string;
  /** Bullet points of what you specifically built, shown in the detail modal. */
  contributions: string[];
};

export const projects: ProjectEntry[] = [
  {
    title: "Filament Kafka Consumer",
    description:
      "An open-source Filament plugin that lets developers consume and inspect Kafka messages directly from the Filament admin panel.",
    href: "https://filamentphp.com/plugins/gurento-kafka-consumer",
    tags: ["PHP", "Laravel", "Filament", "Kafka"],
    visibility: "open-source",
    packagist: "gurento/kafka-consumer",
    keyRole: "Creator & Maintainer",
    contributions: [
      "Designed the plugin architecture for consuming Kafka topics from within the Filament admin panel.",
      "Built the real-time message inspection UI, including filtering and payload viewing.",
      "Published and continue to maintain the package on Packagist.",
    ],
  },
  {
    title: "E-SENTRY",
    description:
      "A web-based water quality monitoring system built for Tadlac Lake, Los Baños, including a data processing pipeline for researcher-facing analysis.",
    tags: ["PHP", "Laravel", "MySQL"],
    visibility: "private",
    keyRole: "Sole Developer",
    contributions: [
      "Built the system end-to-end, from database design to the researcher-facing dashboards.",
      "Implemented the data processing pipeline used to analyze water quality readings.",
      "Worked directly with researchers to refine data collection and reporting needs.",
    ],
  },
  {
    title: "Procurement Assistant and Verification Environment",
    description:
      "A Project Procurement Management Plan system for planning, tracking, and approving institutional procurement workflows.",
    tags: ["PHP", "Laravel", "Filament", "MySQL", "Kafka"],
    visibility: "private",
    keyRole: "Backend Developer",
    contributions: [
      "Designed the procurement plan data model and approval workflow states.",
      "Built the Filament admin panels used to track and approve procurement requests.",
      "Integrated Kafka-based event processing for cross-system notifications.",
    ],
  },
  {
    title: "BIDANI-BMIS",
    description:
      "A web-based Barangay Information Management System for collecting barangay data and supporting strategic decision-making through reports, Excel exports, and dynamic survey questionnaires.",
    tags: ["PHP", "Laravel", "Filament", "PostgreSQL"],
    visibility: "private",
    keyRole: "Full-Stack Developer",
    contributions: [
      "Built the dynamic questionnaire engine used to design and deploy barangay surveys.",
      "Implemented reporting and Excel export tools for data-driven decision-making.",
      "Delivered training sessions to help staff adopt the system.",
    ],
  },
  {
    title: "BIDANI-BMIS Mobile",
    description:
      "The companion mobile app for BIDANI-BMIS, built for field data collection so barangay information can be gathered and synced on the go.",
    tags: ["Kotlin", "Android"],
    visibility: "private",
    keyRole: "Mobile Developer",
    contributions: [
      "Built the native Android app used by field staff to collect barangay data offline.",
      "Implemented data sync between the mobile app and the BIDANI-BMIS backend.",
      "Designed the survey-taking UI for ease of use in the field.",
    ],
  },
  {
    title: "Piso-Wifi System",
    description:
      "A Raspberry Pi-based system that provides internet access through a coin-operated mechanism, allowing users to pay for Wi-Fi access.",
    href: "https://github.com/fglend/Piso-WiFi",
    tags: ["Python", "Flask", "SQLite", "Raspberry Pi"],
    visibility: "personal",
    keyRole: "Sole Developer",
    contributions: [
      "Built the Flask-based captive portal and coin-slot payment logic.",
      "Configured the Raspberry Pi network setup to gate internet access per session.",
      "Designed the SQLite schema for tracking sessions and payments.",
    ],
  },
  {
    title: "Real-time Object Detection using Faster R-CNN with Kalman Filter",
    description:
      "A real-time object detection system using Faster R-CNN with Kalman Filter for improved tracking accuracy. Used on my Thesis project to track and monitor the movement of objects in a video stream.",
    href: "https://github.com/fglend/kalman-fastercnn",
    tags: ["Python", "Flask", "Machine Learning", "Image Processing"],
    visibility: "personal",
    keyRole: "Sole Developer (Thesis Project)",
    contributions: [
      "Implemented object detection using Faster R-CNN for video frame analysis.",
      "Added a Kalman Filter layer to smooth and improve object tracking accuracy.",
      "Built the Flask interface used to run and visualize detection on video streams.",
    ],
  },
];

export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  { category: "Languages", items: ["PHP", "JavaScript", "TypeScript"] },
  { category: "Frameworks", items: ["Laravel", "Filament", "Astro"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Redis"] },
  { category: "Infrastructure", items: ["Docker", "Kafka", "AWS", "Nginx"] },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "Postman"],
  },
  {
    category: "Automation",
    items: ["Supervisor", "Cron Jobs", "Queue Workers", "Python Scripts"],
  },
];
