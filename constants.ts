import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Server, 
  Layout, 
  Terminal, 
  Globe, 
  Cpu,
  Coffee
} from 'lucide-react';
import { StripeIcon, PaystackIcon, DodoIcon, PayPalIcon } from './components/ui/BrandIcons';
import { Project, Service, Skill, NavItem } from './types';

export const PERSONAL_INFO = {
  name: "Wilberforce Osei",
  role: "Full-Stack Developer & AI Specialist",
  tagline: "Building the future with JavaScript & Artificial Intelligence.",
  bio: "I am a passionate Full-Stack Developer with a deep focus on scalable web applications and AI integration. With expertise spanning the entire JavaScript ecosystem—from React and Next.js on the frontend to Node.js and cloud-native backend architectures—I bridge the gap between elegant UI and robust logic. My recent work involves leveraging Large Language Models (LLMs) to create intelligent automation tools.",
  email: "wilberrichy@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/wilberfolce-osei-a06795181",
    twitter: "https://x.com/@utddrift",
    whatsapp: "https://wa.me/233542100655"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, icon: Code2, category: 'frontend' },
  { name: 'TypeScript', level: 90, icon: Terminal, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, icon: Layout, category: 'frontend' },
  { name: 'Node.js / Express', level: 85, icon: Server, category: 'backend' },
  { name: 'Java', level: 90, icon: Coffee, category: 'backend' },
  { name: 'Spring Boot', level: 85, icon: Server, category: 'backend' },
  { name: 'PostgreSQL / SQL', level: 80, icon: Database, category: 'backend' },
  { name: 'MongoDB / NoSQL', level: 85, icon: Database, category: 'backend' },
  { name: 'Gemini API / OpenAI', level: 90, icon: BrainCircuit, category: 'ai' },
  { name: 'AI Integration', level: 85, icon: Cpu, category: 'ai' },
  { name: 'Stripe', level: 95, icon: StripeIcon, category: 'payments' },
  { name: 'Paystack', level: 90, icon: PaystackIcon, category: 'payments' },
  { name: 'Dodo Payments', level: 85, icon: DodoIcon, category: 'payments' },
  { name: 'PayPal', level: 80, icon: PayPalIcon, category: 'payments' },
];

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern frameworks like React, Next.js, and Node.js. I build scalable, secure, and high-performance solutions.",
    icon: Globe
  },
  {
    title: "Enterprise Application Development",
    description: "Building robust, scalable enterprise-grade applications using Java and Spring Boot architectures designed for high availability.",
    icon: Coffee
  },
  {
    title: "AI Integration & Automation",
    description: "Leveraging the power of Gemini and other LLMs to build intelligent chatbots, data analysis tools, and automated workflows for businesses.",
    icon: BrainCircuit
  },
  {
    title: "Payment Integration",
    description: "Seamlessly integrating secure payment gateways like Stripe, Paystack, and Dodo Payments to monetize your digital products.",
    icon: StripeIcon
  },
  {
    title: "Database Architecture",
    description: "Designing efficient database schemas and managing data flow with SQL (PostgreSQL) and NoSQL (MongoDB, Firebase) solutions.",
    icon: Database
  },
  {
    title: "API Development",
    description: "Creating robust RESTful and GraphQL APIs that serve as the backbone for your web and mobile applications.",
    icon: Server
  }
];

export const PROJECTS: Project[] = [
  {
    id: 101,
    title: "Launch Antler",
    description: "A premium SaaS boilerplate and startup kit designed for speed. Includes authentication, Stripe payments, and a scalable database architecture to launch projects instantly.",
    image: "https://picsum.photos/600/400?random=101",
    tags: ["Next.js", "React", "Stripe", "Supabase"],
    githubUrl: "#",
    liveUrl: "https://launchantler.vercel.app"
  },
  {
    id: 1,
    title: "Nebula AI Assistant",
    description: "A smart coding assistant integrated directly into the web browser, powered by Gemini 2.5 Flash. Features real-time syntax highlighting and code suggestions.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["React", "TypeScript", "Gemini API", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers. Visualizes sales data, inventory levels, and customer demographics using D3.js and Recharts.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Next.js", "Recharts", "Supabase", "Prisma"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "TaskFlow Manager",
    description: "A collaborative project management tool with drag-and-drop capabilities, real-time updates via WebSockets, and AI-generated task summaries.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Vue.js", "Firebase", "Node.js", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#"
  }
];