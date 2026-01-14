import { JavaScriptIcon } from "../assets/icons/JavaScriptIcon";
import { TypeScriptIcon } from "../assets/icons/TypeScript";
import { JavaIcon } from "../assets/icons/JavaIcon";
import { PythonIcon } from "../assets/icons/PythonIcon";
import { PHPIcon } from "../assets/icons/PHPIcon";
import { Tailwindcss } from "../assets/icons/TailwindCss";
import { ReactIcon } from "../assets/icons/ReactIcon";
import { LaravelIcon } from "../assets/icons/LaravelIcon";
import { NextJsIcon } from "../assets/icons/NextJsIcon";
import { SpringBootIcon } from "../assets/icons/SpringBootIcon";
import { MySqlIcon } from "../assets/icons/MySqlIcon";
import { GitIcon } from "../assets/icons/GitIcon";
import { DockerIcon } from "../assets/icons/DockerIcon";
import { AwsIcon } from "../assets/icons/AwsIcon";
import { PostManIcon } from "../assets/icons/PostManIcon";
import {
  Code2,
  Heart,
  BookOpen,
  Briefcase,
  FileText,
  Cloud,
  Server,
  Brain,
  Layout,
  HeartHandshake,
  Users,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import AWS_PIC from "../assets/images/aws-graduation.webp";
import SG_PIC from "../assets/images/singapore-merlion.webp";
import HUAWEI_PIC from "../assets/images/huawei-ict.webp";
import JCI_PIC from "../assets/images/jci-ylp.webp";
import BUPT_PIC from "../assets/images/bupt-workshop.webp";
import BACII_PIC from "../assets/images/bacII-graduation.webp";
import { CloudIcon } from "../../src/assets/icons/CloudIcon";
import { AwardIcon } from "../assets/icons/AwardIcon";
import { GraduationIcon } from "../assets/icons/GraduationIcon";
import { GlobeIcon } from "../assets/icons/GlobeIcon";
import { LeaderIcon } from "../assets/icons/LeaderIcon";
import { AiIcon } from "../assets/icons/AiIcon";
import { VueIcon } from "../assets/icons/VueIcon";
import { BootstrapIcon } from "../assets/icons/BootstrapIcon";
import { NodeJsIcon } from "../assets/icons/NodeJsIcon";
import { ExpressJsIcon } from "../assets/icons/ExpressJsIcon";
import { FlaskIcon } from "../assets/icons/FlaskIcon";
import { FastApiIcon } from "../assets/icons/FastApiIcon";
import { PostgreSqlIcon } from "../assets/icons/PostgreSqlIcon";
import { Mongodb } from "../assets/icons/Mongodb";
import { HuggingFaceIcon } from "../assets/icons/HuggingFaceIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { FirebaseIcon } from "../assets/icons/FirebaseIcon";

export const SKILLS = [
  // 🌐 Core Languages
  {
    name: "JavaScript",
    component: JavaScriptIcon, // Desktop
    originalSvg: JavaScriptIcon, // Mobile/Tablet (for now same)
    size: "w-20 h-20",
  },
  {
    name: "TypeScript",
    component: TypeScriptIcon,
    originalSvg: TypeScriptIcon,
    size: "w-20 h-20",
  },
  {
    name: "Java",
    component: JavaIcon,
    originalSvg: JavaIcon,
    size: "w-20 h-20",
  },
  {
    name: "Python",
    component: PythonIcon,
    originalSvg: PythonIcon,
    size: "w-20 h-20",
  },
  {
    name: "Tailwind",
    component: Tailwindcss,
    originalSvg: Tailwindcss,
    size: "w-20 h-20",
  },
  {
    name: "Bootstrap",
    component: BootstrapIcon,
    originalSvg: BootstrapIcon,
    size: "w-20 h-20",
  },

  // ⚡ Frameworks
  {
    name: "React",
    component: ReactIcon,
    originalSvg: ReactIcon,
    size: "w-20 h-20",
  },
  {
    name: "Vue Js",
    component: VueIcon,
    originalSvg: VueIcon,
    size: "w-20 h-20",
  },
  {
    name: "Next Js",
    component: NextJsIcon,
    originalSvg: NextJsIcon,
    size: "w-20 h-20",
  },
  {
    name: "Laravel",
    component: LaravelIcon,
    originalSvg: LaravelIcon,
    size: "w-20 h-20",
  },
  {
    name: "Node Js",
    component: NodeJsIcon,
    originalSvg: NodeJsIcon,
    size: "w-20 h-20",
  },
  {
    name: "Express Js",
    component: ExpressJsIcon,
    originalSvg: ExpressJsIcon,
    size: "w-20 h-20",
  },

  {
    name: "Springboot",
    component: SpringBootIcon,
    originalSvg: SpringBootIcon,
    size: "w-20 h-20",
  },
  {
    name: "Flask",
    component: FlaskIcon,
    originalSvg: FlaskIcon,
    size: "w-20 h-20",
  },
  {
    name: "FastAPI",
    component: FastApiIcon,
    originalSvg: FastApiIcon,
    size: "w-20 h-20",
  },

  // 🗄 Database
  {
    name: "MySQL",
    component: MySqlIcon,
    originalSvg: MySqlIcon,
    size: "w-20 h-20",
  },
  {
    name: "Mongo DB",
    component: Mongodb,
    originalSvg: Mongodb,
    size: "w-20 h-20",
  },
  {
    name: "Postgre SQL",
    component: PostgreSqlIcon,
    originalSvg: PostgreSqlIcon,
    size: "w-20 h-20",
  },

  // 🔧 Tools & Platforms
  {
    name: "Git",
    component: GitIcon,
    originalSvg: GitIcon,
    size: "w-20 h-20",
  },
  {
    name: "Github",
    component: GithubIcon,
    originalSvg: GithubIcon,
    size: "w-20 h-20",
  },
  {
    name: "Hugging Face",
    component: HuggingFaceIcon,
    originalSvg: HuggingFaceIcon,
    size: "w-20 h-20",
  },
  {
    name: "Docker",
    component: DockerIcon,
    originalSvg: DockerIcon,
    size: "w-20 h-20",
  },
  {
    name: "AWS",
    component: AwsIcon,
    originalSvg: AwsIcon,
    size: "w-20 h-20",
  },
  {
    name: "Postman",
    component: PostManIcon,
    originalSvg: PostManIcon,
    size: "w-20 h-20",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Facial Recognition System",
    description:
      "Developed a facial recognition system using Python and Machine Learning, deployed with Streamlit for an interactive interface.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80", // AI neural network and technology
    tags: ["Python", "Machine Learning", "Streamlit"],
    liveUrl: "#",
    githubURL: "#",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Sentiment Analysis Chatbot",
    description:
      "Built a sentiment analysis system integrated with Telegram, using Flask and Python NLP libraries to provide real-time emotional insights from user messages.",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80", // Mobile chat interface
    tags: ["Python", "Flask", "Telegram API", "NLP"],
    liveUrl: "#",
    githubURL: "#",
    featured: false,
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "Created a Java-based desktop application using Swing and MySQL for managing student records, grades, and course enrollments with a user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", // Students with books and studying
    tags: ["Java", "Java Swing", "MySQL"],
    liveUrl: "#",
    githubURL: "#",
    featured: false,
    category: "Software Development",
  },
  {
    id: 4,
    title: "Billing System for Private Sector",
    description:
      "Developed a billing system at Fastone Technologies to handle large-scale invoice generation. Optimized performance using Laravel Jobs, Horizon.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80", // Invoice and billing documents
    tags: ["Laravel", "PHP", "MySQL", "Browsershot"],
    liveUrl: "#",
    githubURL: "#",
    featured: true,
    category: "Web Development",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase projects and skills using modern frontend technologies.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80", // Laptop with code and design
    tags: ["React", "TailwindCSS", "JavaScript"],
    liveUrl: "#",
    githubURL: "#",
    featured: false,
    category: "Web Development",
  },
  {
    id: 6,
    title: "Time Series Forecasting for Sales",
    description:
      "Implemented a time series forecasting model using Python and PyTorch to predict sales trends. Focused on preprocessing, model training, and visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Data charts and analytics graphs
    tags: ["Python", "PyTorch", "Time Series", "Forecasting"],
    liveUrl: "#",
    githubURL: "#",
    featured: true,
    category: "AI/ML",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2022",
    title: "Began Coding Journey",
    company: "Self-Learning",
    description:
      "Started learning programming fundamentals with HTML, CSS, and C++ as my first steps into technology.",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Explored Web & Software Development",
    company: "Personal Projects",
    description:
      "Built small projects in Python, Java, and web technologies to strengthen my programming skills and problem-solving mindset.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Front-End Development Internship",
    company: "Fastone Technologies",
    description:
      "Completed a 3-month internship focusing on front-end development, gaining practical experience in real-world projects.",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    year: "2024 - Present",
    title: "Billing System Project",
    company: "Fastone Technologies",
    description:
      "Working on a billing system for the private sector, implementing batch PDF generation, Laravel queue jobs, and optimized backend workflows.",
    icon: FileText,
    color: "bg-yellow-500",
  },
  {
    year: "2025",
    title: "AI & Cloud Research",
    company: "University & Self-Study",
    description:
      "Focusing on deep learning with PyTorch, time series forecasting, and exploring AWS cloud services for scalable AI applications.",
    icon: Cloud,
    color: "bg-red-500",
  },
];

export const PASSIONS = [
  {
    icon: Server,
    title: "Backend & Cloud Systems",
    description:
      "Designing scalable backend architectures with Laravel, PHP, and cloud-native technologies.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Exploring deep learning and time series forecasting with PyTorch, with interest in cloud deployment.",
  },
  {
    icon: Layout,
    title: "Full-Stack & System Design",
    description:
      "Designing and building scalable, efficient systems with clean architecture and maintainable code.",
  },

  {
    icon: HeartHandshake,
    title: "User Experience",
    description:
      "Creating software that balances technical performance with intuitive and user-friendly design.",
  },
];

export const HIGHLIGHTS = [
  {
    title: "Young Leadership Program – JCI Phnom Penh",
    description_top:
      "Participated in JCI Phnom Penh’s youth leadership and community development initiative, empowering young leaders to drive social change.",
    description_bottom:
      "Collaborated with peers on community projects that promoted education, civic responsibility, and sustainable development across local areas.",
    image: JCI_PIC,
    tag_top: "Leadership & Community",
    tag_bottom: "Self Development",
    icon: LeaderIcon,
  },

  {
    title: "AI Workshop – Beijing University of Posts and Telecommunications",
    description_top:
      "Participated in an international AI workshop hosted by Beijing University of Posts and Telecommunications (BUPT) in collaboration with Mashon and Trufar.",
    description_bottom:
      "Engaged in hands-on sessions on artificial intelligence and cloud-based technologies, collaborating with peers to develop innovative AI-driven solutions.",
    image: BUPT_PIC,
    tag_top: "Workshop & Certification",
    tag_bottom: "AI & Cloud Skills",
    icon: AiIcon,
  },

  {
    title: "AWS Certified Cloud Practioner - Cloud For Cambodia",
    description_top:
      "Successfully completed AWS’s foundational cloud certification, gaining hands-on experience in core services, security, architecture, and cloud best practices.",
    description_bottom:
      "This certification laid the groundwork for building and deploying cloud-based applications using industry-standard tools.",
    image: AWS_PIC,
    tag_top: "Certification",
    tag_bottom: "Cloud Computing",
    icon: CloudIcon,
  },

  {
    title: "Huawei ICT Competition – National Program Participant",
    description_top:
      "Participated in Huawei’s national ICT program, exploring cutting-edge topics in cloud computing, AI, and digital infrastructure.",
    description_bottom:
      "Demonstrated technical excellence and teamwork while designing scalable cloud-based systems for national-level innovation challenges.",
    image: HUAWEI_PIC,
    tag_top: "National Program",
    tag_bottom: "Innovation & Tech",
    icon: AwardIcon,
  },

  {
    title: "Youth Environment Camp – ASEAN Cultural Exchange Program",
    description_top:
      "Represented Cambodia in a 5-day academic and cultural exchange program in Singapore, joining ASEAN university delegates.",
    description_bottom:
      "Engaged in workshops on innovation and sustainability while developing cross-cultural leadership and collaboration skills.",
    image: SG_PIC,
    tag_top: "International Experience",
    tag_bottom: "Cultural Exchange",
    icon: GlobeIcon,
  },

  {
    title: "National High School Examination – Grade A Distinction",
    description_top:
      "Achieved an A grade in Cambodia’s national high school exam, Consistent dedicated to academic excellence throughout high school.",
    description_bottom:
      "Recognized for analytical thinking, problem-solving skills for higher education and future endeavors.",
    image: BACII_PIC,
    tag_top: "Academic Recognition",
    tag_bottom: "Outstanding Performance",
    icon: GraduationIcon,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
];

export const EDUCATIONS = [
  {
    title: "American University of Phnom Penh",
    subtitle: "Bachelor in Information Technology Management",
    duration: "Aug 2022 – Present",
    description:
      "Developing strong foundations in algorithms, data structures, and scalable software systems with a focus on practical application.",
  },
  {
    title: "FortHays State University",
    subtitle: "Bachelor in Computer Science",
    duration: "Jan 2024 – Present",
    description:
      "Pursuing a U.S. accredited degree with a strong foundation in data structures, algorithms, and software engineering. Enrolled through the dual-degree program with AUPP.",
  },
  {
    title: "Aizon High School",
    subtitle: "High School Diploma",
    duration: "Jul 2019 – Dec 2021",
    description:
      "Built a strong foundation in mathematics, science, and computer fundamentals, preparing for higher education in Information Technology.",
  },
];

export const EXPERIENCES = [
  {
    title: "FastOne Technologies",
    subtitle: "Full-Stack Developer",
    duration: "Sep 2024 – Present",
    description:
      "Designed and developed systems including a billing platform and a library management system using Laravel, PHP, JavaScript, and MySQL.",
    points: [
      "Implemented real-time invoice management using AJAX and Blade templates.",
      "Integrated PDF batch generation using Laravel Jobs and Browsershot.",
      "Built scalable components and improved system performance in a 32-bit environment.",
    ],
  },
  {
    title: "FastOne Technologies",
    subtitle: "Front-End Web Development Intern",
    duration: "May 2024 – Aug 2024",
    description:
      "Contributed to production-level web applications using HTML, CSS, and JavaScript. Collaborated with senior developers on responsive UI and optimized code for cross-browser compatibility.",
  },
];
