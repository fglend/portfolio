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
    title: "Procurement Assistant and Verification Environment",
    description:
      "An institutional Project Procurement Management Plan platform designed to digitize the preparation, submission, verification, approval, and tracking of procurement plans. The system combines workflow-driven backend services, administrative interfaces, RESTful APIs, and Kafka-based event processing to support procurement operations across interconnected systems.",
    tags: [
      "PHP",
      "Laravel",
      "Filament",
      "MySQL",
      "Apache Kafka",
      "REST API",
      "Docker",
      "DevOps",
    ],
    visibility: "private",
    keyRole: "Backend Developer",
    contributions: [
      "Developed backend services supporting the preparation, submission, verification, approval, and tracking of procurement plans.",
      "Designed and implemented RESTful API endpoints used by client applications and interconnected institutional systems.",
      "Implemented request validation, business rules, and data transformation logic within the Laravel backend.",
      "Designed relational data models for procurement plans, procurement items, workflow states, and related records.",
      "Implemented workflow logic representing the different stages of the procurement planning and approval process.",
      "Developed backend mechanisms for transitioning procurement records between preparation, review, verification, and approval states.",
      "Built Filament resources and administrative interfaces for managing and reviewing procurement information.",
      "Developed forms, tables, filters, actions, and other Filament components required by administrative workflows.",
      "Integrated Apache Kafka for asynchronous communication between the procurement platform and other systems.",
      "Implemented Kafka producers and consumers for publishing and processing system events.",
      "Used event-driven processing to reduce direct dependencies between interconnected application components.",
      "Handled message processing and integration logic required for cross-system notifications and workflow events.",
      "Implemented API responses and backend structures designed for reliable integration with frontend and external clients.",
      "Worked on database queries and application logic for retrieving and processing procurement information efficiently.",
      "Supported containerized development and deployment workflows using Docker.",
      "Participated in application deployment, environment configuration, troubleshooting, and production support.",
      "Investigated backend, API, database, and Kafka-related issues encountered during development and integration.",
      "Collaborated with frontend developers, QA, and other stakeholders to translate procurement requirements into production-ready system functionality.",
      "Supported testing and debugging of API endpoints and cross-system integrations before production deployment.",
      "Maintained and enhanced backend functionality as procurement requirements and workflows evolved.",
    ],
  },

  {
    title: "BIDANI-BMIS",
    description:
      "A web-based Barangay Management Information System developed to support structured community data collection, household and barangay information management, dynamic surveys, reporting, and strategic decision-making. The platform provides configurable questionnaires, centralized data management, analytical reports, and Excel-based data exports for institutional and community use.",
    tags: [
      "PHP",
      "Laravel",
      "Filament",
      "PostgreSQL",
      "REST API",
      "Excel",
      "Data Management",
    ],
    visibility: "private",
    keyRole: "Full-Stack Developer",
    contributions: [
      "Developed major backend and frontend components of the web-based Barangay Management Information System.",
      "Designed and implemented Laravel services for managing barangay, household, survey, and community information.",
      "Developed RESTful API endpoints used to exchange data between the web platform, mobile application, and backend services.",
      "Designed PostgreSQL database structures for storing structured barangay and survey information.",
      "Built a dynamic questionnaire engine that allows administrators to configure data collection forms without modifying application source code.",
      "Implemented support for configurable questions, response types, questionnaire structures, and survey records.",
      "Developed backend logic for storing and processing responses generated from dynamic questionnaires.",
      "Built Filament administration interfaces for managing barangay information, questionnaires, survey data, and system records.",
      "Implemented administrative tables, filters, forms, actions, and record management workflows using Filament.",
      "Developed reporting functionality that transforms collected community information into structured reports.",
      "Implemented Excel export functionality for researchers and administrators who require offline analysis and reporting.",
      "Developed filtering and data retrieval features to allow users to work with specific barangay datasets and survey information.",
      "Implemented validation rules to improve the accuracy and consistency of submitted community data.",
      "Integrated the web platform with the BIDANI-BMIS mobile application through RESTful APIs.",
      "Worked on API structures supporting field-based data collection and synchronization.",
      "Handled full-stack debugging involving Laravel, Filament, PostgreSQL, APIs, and client-side functionality.",
      "Collaborated with stakeholders to translate actual barangay data collection requirements into system functionality.",
      "Participated in system testing and refinement based on feedback from intended users.",
      "Prepared and conducted training sessions to help staff understand and effectively use the platform.",
      "Provided technical support and system improvements following deployment and user adoption.",
    ],
  },

  {
    title: "BIDANI-BMIS Mobile",
    description:
      "A native Android companion application for BIDANI-BMIS designed for field-based barangay and household data collection. The application enables field personnel to conduct surveys even with limited connectivity and synchronize collected information with the centralized BIDANI-BMIS backend when network access becomes available.",
    tags: [
      "Kotlin",
      "Android",
      "REST API",
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
