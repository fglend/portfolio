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
    period: "2025 — 2026",
    location: "Los Baños, Laguna",
    highlights: [
      "Lead developer of BIDANI-BMIS since Feb 2026: a multi-tenant Laravel, Filament and PostgreSQL platform for LGU household surveys covering 27,000+ households in its largest deployment.",
      "Developed and maintained RESTful APIs and backend services for university systems and applications.",
      "Built and maintained React-based interfaces integrated with backend APIs and internal services.",
      "Handled DevOps workflows including containerization, deployment, server configuration, and system monitoring.",
    ],
  },
  {
    role: "Senior ICT Assistant",
    company: "University of the Philippines - Los Baños",
    period: "2023 — 2025",
    location: "Los Baños, Laguna",
    highlights: [
      "Developed and maintained RESTful APIs supporting multiple web applications and internal systems.",
      "Implemented React-based frontend components and integrated them with backend services.",
      "Supported DevOps operations including application deployment, Docker-based environments, and production monitoring.",
    ],
  },
  {
    role: "Science Aide",
    company: "Laguna State Polytechnic University - Los Baños Campus",
    period: "2021 — 2023",
    location: "Los Baños, Laguna",
    highlights: [
      "Developed and maintained E-SENTRY, a web-based water quality monitoring system for Tadlac Lake, Los Baños.",
      "Designed and implemented data processing workflows for collecting, managing, and analyzing water quality data.",
      "Collaborated with researchers to translate monitoring and research requirements into functional system features.",
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
    period: "2023 — 2026",
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
  /** When you worked on it, e.g. "Feb 2026 — Present". */
  period?: string;
  /** Headline numbers shown on the card and in the modal. */
  stats?: { value: string; label: string }[];
  /** Bullet points of what you specifically built, shown in the detail modal. */
  contributions: string[];
};

export const projects: ProjectEntry[] = [
  {
    title: "Filament Kafka Consumer",
    description:
      "An open-source Filament plugin that integrates Apache Kafka consumer capabilities directly into the Filament admin panel, allowing developers and administrators to consume, monitor, inspect, and troubleshoot Kafka messages without relying on separate Kafka management tools.",
    href: "https://filamentphp.com/plugins/gurento-kafka-consumer",
    tags: [
      "PHP",
      "Laravel",
      "Filament",
      "Apache Kafka",
      "Event-Driven Architecture",
      "Composer",
    ],
    visibility: "open-source",
    packagist: "gurento/kafka-consumer",
    keyRole: "Creator & Maintainer",
    contributions: [
      "Designed the overall plugin architecture for integrating Apache Kafka consumer functionality into Laravel and Filament applications.",
      "Implemented Kafka consumer services responsible for connecting to brokers, subscribing to topics, and processing incoming messages.",
      "Built a Filament-based interface for consuming and inspecting Kafka messages directly from the administration panel.",
      "Implemented message payload inspection to make debugging and monitoring event-driven applications easier for developers.",
      "Added filtering and message inspection capabilities for navigating Kafka records and identifying relevant events.",
      "Designed the package structure to integrate cleanly with existing Laravel and Filament projects.",
      "Implemented configurable Kafka connection settings to support different broker environments and application configurations.",
      "Handled Kafka consumer configuration and integration while keeping application-specific settings separate from the core package.",
      "Developed reusable Filament components and backend services to keep the plugin modular and maintainable.",
      "Designed the plugin with developer experience in mind, reducing the need to use separate command-line tools for routine Kafka inspection.",
      "Packaged and distributed the project as a Composer package through Packagist.",
      "Prepared installation and configuration documentation for developers integrating the package into their applications.",
      "Managed package versioning, releases, bug fixes, and compatibility updates.",
      "Maintained the open-source repository and continuously improved the package based on development and integration requirements.",
    ],
  },

  {
    title: "E-SENTRY",
    description:
      "A web-based environmental monitoring and data management platform developed for Tadlac Lake, Los Baños. The system centralizes water quality measurements and provides researchers with tools for storing, processing, reviewing, and analyzing monitoring data through a dedicated web interface.",
    tags: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
      "Data Processing",
      "Environmental Monitoring",
    ],
    visibility: "private",
    keyRole: "Sole Developer",
    contributions: [
      "Designed and developed the E-SENTRY platform from initial requirements gathering through implementation and deployment.",
      "Designed the overall system architecture covering the application layer, database, data processing workflows, and researcher-facing interfaces.",
      "Developed the Laravel backend responsible for handling application logic, data management, validation, and monitoring workflows.",
      "Designed the MySQL database schema for storing water quality measurements and related monitoring information.",
      "Implemented structured data processing workflows for transforming collected water quality readings into information suitable for research analysis.",
      "Developed backend functionality for retrieving, organizing, filtering, and presenting historical monitoring records.",
      "Implemented validation mechanisms to improve the consistency and reliability of incoming environmental monitoring data.",
      "Built researcher-facing dashboards for reviewing collected water quality information.",
      "Developed reporting functionality to make environmental monitoring records easier to interpret and analyze.",
      "Implemented data management features for maintaining historical monitoring information within a centralized platform.",
      "Worked directly with researchers to understand existing data collection procedures and translate them into software requirements.",
      "Refined system features based on researcher feedback and actual monitoring workflows.",
      "Handled debugging, maintenance, and improvements throughout the operational use of the platform.",
      "Managed the application as the sole developer, covering database design, backend development, interface implementation, testing, and technical support.",
    ],
  },

  {
    title: "Procurement Assistance Verification Environment (PAVE)",
    description:
      "UPLB's procurement and financial processing platform, replacing paper routing for the whole procurement chain: Project Procurement Management Plans (PPMP) roll up into the Annual Procurement Plan, then move on to Purchase Requests, Purchase Orders with their BURS/ORS budget obligations, and Disbursement Vouchers through payment. Every document follows a configurable multi-level approval workflow with remarks, an audit trail and generated PDF forms, across four role-based panels. PAVE also publishes its core records to the university's Kafka event bus and exposes REST endpoints for other campus systems.",
    tags: [
      "PHP",
      "Laravel",
      "Filament",
      "MySQL",
      "Apache Kafka",
      "Livewire",
      "Laravel Sanctum",
      "Browsershot",
      "GitHub Actions",
      "Docker",
    ],
    visibility: "private",
    keyRole: "Backend Developer",
    period: "Aug 2024 — Present",
    stats: [
      { value: "1,490+", label: "commits, top contributor" },
      { value: "4", label: "role-based panels" },
      { value: "13", label: "approval stages" },
    ],
    contributions: [
      "Largest contributor on a small team: about 1,490 of roughly 2,660 commits (56%) and 151 of 199 merged pull requests, covering most of the Disbursement Voucher, BURS/ORS, fund control, transmittal and PPMP/APP flows.",
      "Built the PPMP workflow from draft through office-head, fund-control and BAC verification to approval, with return-and-resubmit paths, approval remarks and role-specific queues for BAC and SPMO.",
      "Implemented PPMP amendments that snapshot baseline items, send only changed items through budget review and reset the baseline on resubmission.",
      "Built Annual Procurement Plan generation that consolidates approved PPMPs through a MySQL stored procedure, in both the old and new NGPA formats, with configurable signatories and a common-items export.",
      "Built a queued PDF pipeline for large reports that streams rows, renders them in chunks with headless Chrome (Browsershot) and merges the parts, so plans with thousands of lines generate without running out of memory.",
      "Developed Disbursement Vouchers linked to Purchase Orders, with budget-utilization lines, signatories and a multi-step flow across fund control, budget, accounting and cashier roles.",
      "Built BURS/ORS obligation records for POs and DVs with yearly and monthly number series, row-locked number generation and a regenerate action for fixing a number.",
      "Built the Fund Control panel for fund controllers, the budget chief, accounting and auditors to review PPMPs, DVs and fund codes, with support for users who hold more than one role.",
      "Built the transmitter panel for routing vouchers between offices, receiving and returning transmittals, recording payments and exporting DV payments.",
      "Wrote a central document numbering service that generates PR, PO, DV, RIS and BURS numbers per office and per year, with yearly counter resets.",
      "Implemented ownership and access services: per-document ownership rules, bulk ownership transfer for PR templates, and users who belong to more than one office.",
      "Built Kafka event producers that publish created, updated and deleted events for fund codes, users and roles, budget utilizations, purchase orders, APP items, suppliers and expense items, with batch backfill commands and failures that never block the user's action.",
      "Built Sanctum-protected REST endpoints for purchase orders (with BURS and line items), fund codes and expense items, used by other campus systems.",
      "Integrated employee and personnel data from the university's HR service, with cache preloading, for signatories and user setup.",
      "Added browser push (VAPID) and database notifications for Disbursement Voucher and workflow events.",
      "Wrote a reusable, unit-tested Filament trait that auto-saves PR and PO template forms for 24 hours so a reload or accidental navigation doesn't lose work.",
      "Set up the deployment pipeline: a GitHub Actions workflow on a self-hosted runner that deploys to production and runs migrations on every merge to master, plus a Docker Compose setup for MySQL.",
    ],
  },

  {
    title: "BIDANI-BMIS",
    description:
      "A multi-tenant management information system for the UPLB BIDANI (Barangay Integrated Development Approach for Nutrition Improvement) Network Program. Local government units use it to collect household and family survey data and turn it into community profiles, dashboards and PDF reports for barangay planning. Each office in the province, city/municipality and barangay hierarchy sees only its own data and the offices below it, and field enumerators collect surveys on the web or on an offline mobile app that syncs through a secure API.",
    tags: [
      "PHP",
      "Laravel",
      "Filament",
      "Livewire",
      "PostgreSQL",
      "Redis",
      "Laravel Sanctum",
      "MinIO",
      "Leaflet",
      "PHPUnit",
    ],
    visibility: "private",
    keyRole: "Lead Developer",
    period: "Feb 2026 — Present",
    stats: [
      { value: "27k+", label: "households in one deployment" },
      { value: "700+", label: "commits" },
      { value: "18", label: "modules built" },
    ],
    contributions: [
      "Led development of the platform (700+ commits), designing and building most of the system: data model, multi-tenancy, survey engine, reporting pipeline, dashboards and admin tooling.",
      "Built separate Admin and LGU Office panels with office-hierarchy tenancy (each office plus its descendants) and five-tier role-based access: super admin, LGU admin, staff, encoder and viewer.",
      "Built a drag-and-edit questionnaire builder with many question types (choice, multi-field groups, repeatable tables, \"Others, specify\"), skip logic, live preview and automated structure checks, plus edit locking, conflict detection and safe code renumbering for concurrent editors.",
      "Implemented global questionnaire templates that offices copy and customize, with change tracking against the master template.",
      "Developed the web survey workflow for enumerators to find or register families, detect possible duplicates, prefill addresses and resume drafts, with validation and conditional skip logic.",
      "Built the mobile collector sync API with Laravel Sanctum tokens, device enrolment codes, revoke/reinstate and sync-activity monitoring for offline tablets.",
      "Built admin and LGU community dashboards (headline indicators, priority sectors, population pyramid, basic-services coverage, survey coverage) backed by precomputed snapshots rebuilt by scheduled jobs.",
      "Developed thematic report clusters for Population and Demographics, Health and Nutrition, Poverty and Economic, Community Safety, and Agriculture, each with distribution charts, findings and household lists.",
      "Built a no-code PDF report designer with metric, frequency-table, score-index and cross-tab blocks, live number preview, presets and a draft/publish workflow.",
      "Implemented per-question results with year and purok filters, PDF report templates, and multi-sheet Excel exports of raw family data generated by queued jobs.",
      "Built a Leaflet geospatial heatmap of indicators by barangay, with rankings, rates per 100 households and household drill-down.",
      "Developed the Barangay Solutions Matrix, planning worksheets that turn survey-detected problems into causes, effects, responsible parties, solutions and PPAN programs.",
      "Built demographics profiling on a materialized population masterlist, with sector groups (seniors, PWD, children and others), filters, a household directory and data-quality checks.",
      "Built the barangay profile module: mission and vision editor, organizational chart, officials' term tracking and a profile-completeness checklist.",
      "Implemented OPT Form 1A Excel import of child-nutrition records with fuzzy family matching in auto-link, suggest and review tiers.",
      "Built year-versioned report settings for formulas, member field mapping and regional poverty thresholds, with live configuration checks.",
      "Built LGU office management with an office hierarchy tree, rolled-up statistics and integrity checks for orphaned branches, duplicates and unreachable data.",
      "Added a presentation mode that masks names and addresses, and a queued audit trail of user actions.",
      "Wrote legacy migration tools that reconcile old BMIS MySQL dumps into the new schema and assign families to offices.",
    ],
  },

  {
    title: "BIDANI-BMIS Mobile",
    description:
      "A native Android companion application for BIDANI-BMIS designed for field-based barangay and household data collection. The application enables field personnel to conduct surveys even with limited connectivity and synchronize collected information with the centralized BIDANI-BMIS backend when network access becomes available. Each tablet enrolls with a code issued from the web platform and syncs through a token-secured API, so administrators can revoke or reinstate a device and monitor its sync activity.",
    tags: [
      "Kotlin",
      "Android",
      "REST API",
      "Laravel Sanctum",
      "Offline-First",
      "Data Synchronization",
      "Mobile Development",
    ],
    visibility: "private",
    keyRole: "Mobile Developer",
    contributions: [
      "Developed the native Android application used by field personnel for barangay and household data collection.",
      "Designed the mobile survey workflow to support structured field-based data gathering.",
      "Integrated the application with BIDANI-BMIS RESTful APIs for retrieving and submitting survey information.",
      "Implemented device enrolment: each tablet registers with an enrolment code issued from the BIDANI-BMIS web platform before it can sync.",
      "Authenticated all sync requests with Laravel Sanctum API tokens, which administrators can revoke and reinstate per device from the web platform.",
      "Connected the app's sync flow to server-side sync-activity monitoring, so administrators can see when and what each device last synchronized.",
      "Implemented offline data collection capabilities for locations with unreliable or unavailable internet connectivity.",
      "Developed local data persistence mechanisms for temporarily storing survey responses on the device.",
      "Implemented synchronization workflows for transferring locally collected information to the central BIDANI-BMIS backend.",
      "Handled synchronization states to distinguish between local, pending, and successfully synchronized records.",
      "Implemented data validation before storing and submitting field survey information.",
      "Built mobile interfaces for displaying questionnaires and capturing responses efficiently during field operations.",
      "Designed the survey-taking experience with usability in mind for personnel collecting large amounts of information in the field.",
      "Integrated dynamic questionnaire information from the BIDANI-BMIS backend into the mobile data collection workflow.",
      "Implemented API request and response handling between the Kotlin application and Laravel backend.",
      "Handled network connectivity conditions and application behavior when switching between offline and online operation.",
      "Debugged synchronization, API communication, local storage, and user interface issues during development.",
      "Tested field data collection workflows to ensure collected records could be reliably transferred to the centralized system.",
      "Worked with the BIDANI-BMIS web platform to maintain consistency between mobile and web-based records.",
      "Supported application updates as questionnaire structures and data collection requirements evolved.",
    ],
  },

  {
    title: "Piso-WiFi System",
    description:
      "A Raspberry Pi-based coin-operated Wi-Fi hotspot system that combines embedded hardware, Linux networking, a Flask web application, and session management to provide prepaid internet access. Users can insert coins to receive time-based Wi-Fi access while the system manages connectivity, sessions, payments, and network access through a captive portal.",
    href: "https://github.com/fglend/Piso-WiFi",
    tags: [
      "Python",
      "Flask",
      "SQLite",
      "Raspberry Pi",
      "Linux",
      "Networking",
      "IoT",
      "Systemd",
    ],
    visibility: "personal",
    keyRole: "Sole Developer",
    contributions: [
      "Designed and developed the complete Raspberry Pi-based prepaid Wi-Fi system.",
      "Built the Flask web application responsible for presenting the captive portal and managing user interactions.",
      "Implemented coin-slot input handling to translate physical coin insertions into corresponding internet access time.",
      "Developed session management logic for tracking active users and their remaining internet access duration.",
      "Designed the SQLite database schema for storing sessions, payments, and system-related records.",
      "Implemented backend logic for creating, updating, and expiring user internet sessions.",
      "Configured Raspberry Pi networking to operate as a managed wireless access environment.",
      "Implemented network access controls that allow or restrict internet connectivity based on active sessions.",
      "Worked with Linux networking tools and services to manage routing and internet access.",
      "Configured the system to coordinate the Flask application with operating-system-level networking components.",
      "Implemented captive portal behavior to direct connected users to the system interface.",
      "Developed administrative and monitoring functionality for reviewing system and session information.",
      "Configured systemd services and timers for running and monitoring system processes.",
      "Implemented watchdog and service-management mechanisms to improve unattended system operation.",
      "Configured services to start automatically after Raspberry Pi boot.",
      "Debugged networking, service, application, database, and hardware integration issues.",
      "Handled the integration between physical coin input, application logic, database records, and network access control.",
      "Maintained the project as a complete personal hardware-software system covering application development, Linux administration, networking, and embedded deployment.",
    ],
  },

  {
    title: "Real-Time Object Detection using Faster R-CNN with Kalman Filter",
    description:
      "A computer vision and object tracking system developed as a thesis project that combines Faster R-CNN-based object detection with Kalman Filter-based temporal tracking. The system processes sequential video frames, detects objects, associates detections across time, and uses temporal predictions to improve tracking consistency and object monitoring.",
    href: "https://github.com/fglend/kalman-fastercnn",
    tags: [
      "Python",
      "PyTorch",
      "Faster R-CNN",
      "Kalman Filter",
      "Flask",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
      "Object Tracking",
    ],
    visibility: "personal",
    keyRole: "Sole Developer & Researcher",
    contributions: [
      "Designed and implemented the complete computer vision pipeline used for object detection and temporal tracking.",
      "Implemented Faster R-CNN as the primary deep learning architecture for detecting objects within individual video frames.",
      "Integrated Kalman Filter-based temporal prediction to estimate object positions across sequential frames.",
      "Developed detection-to-track association logic for maintaining object identities between consecutive frames.",
      "Combined spatial detections with temporal information to improve tracking consistency across video sequences.",
      "Implemented mechanisms for initializing, updating, and maintaining tracked objects as new frames are processed.",
      "Developed logic for handling object movement and temporary inconsistencies between detections across frames.",
      "Prepared and processed annotated datasets for model training and evaluation.",
      "Converted and harmonized image annotations into a consistent format for the object detection pipeline.",
      "Implemented image augmentation and preprocessing techniques to improve model robustness.",
      "Configured the Faster R-CNN training pipeline, including optimization, learning-rate scheduling, and model checkpointing.",
      "Implemented evaluation procedures for measuring object detection and tracking performance.",
      "Evaluated the model using detection metrics including precision, recall, F1-score, IoU, and mean Average Precision.",
      "Evaluated counting performance using error-based metrics such as Mean Absolute Error and percentage-based error measurements.",
      "Analyzed temporal tracking performance using tracking continuity and identity consistency.",
      "Developed video-frame processing functionality for running detection and tracking across sequential image streams.",
      "Implemented visualization of detected objects, bounding boxes, tracking information, and processed video results.",
      "Built a Flask-based interface for interacting with the detection and tracking pipeline.",
      "Developed backend functionality for accepting input media, running model inference, and returning processed results.",
      "Conducted experiments comparing the hybrid detection-and-tracking approach with the baseline object detection model.",
      "Analyzed experimental results to determine the effect of temporal tracking on detection, counting, and tracking performance.",
      "Handled the complete research implementation, including dataset preparation, model development, experimentation, evaluation, visualization, and application integration.",
    ],
  },
];

export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  { category: "Languages", items: ["PHP", "JavaScript", "TypeScript"] },
  {
    category: "Frameworks",
    items: ["Laravel", "Filament", "Livewire", "Alpine.js", "Leaflet", "Astro"],
  },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Redis"] },
  {
    category: "Infrastructure",
    items: ["Docker", "Kafka", "AWS", "Nginx", "MinIO"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "Postman", "PHPUnit"],
  },
  {
    category: "Automation",
    items: ["Supervisor", "Cron Jobs", "Queue Workers", "Python Scripts"],
  },
];
