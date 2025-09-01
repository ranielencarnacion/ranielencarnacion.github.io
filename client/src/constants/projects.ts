export interface ProjectImage {
  src: string;
  title: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  period: string;
  image: string;
  demoLink: string;
  codeLink: string;
  gallery?: ProjectImage[];
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "System Analysis Design - ECA MIS IT Service Management Ticketing System",
    subtitle: "Academic Project - System Analysis and Design",
    description: "A comprehensive IT service management ticketing platform designed to streamline IT support operations at Exact Colleges of Asia (ECA). The system facilitates ticket creation, tracking, prioritization, and resolution, enabling efficient IT service delivery across the institution.",
    highlights: [
      "Designed structured ticketing workflow from issue creation to resolution",
      "Integrated queue management for prioritizing and allocating IT support requests",
      "Implemented role-based access for students, staff, and IT administrators",
      "Built interactive dashboard for tracking ticket status, priorities, and performance metrics",
      "Developed automated notifications for ticket updates and assignments",
      "Established reporting and analytics system for IT service monitoring and decision-making"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
    period: "2024",
    image: "/ticketing sys/loginpage.png",
    demoLink: "#",
    codeLink: "#",
    gallery: [
      { src: "/ticketing sys/loginpage.png", title: "Authentication & Login" },
      { src: "/ticketing sys/ADMIN-DASHBOARD.png", title: "Dashboard & Analytics" },
      { src: "/ticketing sys/ADMIN-TICKETMGNT.png", title: "Category Management" },
      { src: "/ticketing sys/ADMIN-TICKETHIS.png", title: "Supplier Management" },
      { src: "/ticketing sys/ADMIN-RESOLVEDTICKETS.png", title: "Resolved Tickets" },
      { src: "/ticketing sys/USER-SENDNEWTICKET.png", title: "Send New Ticket" },
      { src: "/ticketing sys/USER-MYTICKETS.png", title: "My Tickets" },
      { src: "/ticketing sys/ADMIN-CHANGEPASS.png", title: "Change Password" },
      { src: "/ticketing sys/USER-CHANGEPASS.png", title: "User Change Password" }
    ]
  },
  {
    title: "Capstone Project - ECA MIS General Mobile Inventory System",
    subtitle: "Mobile Inventory Management Solution",
    description: "A mobile-based inventory management system designed for Exact Colleges of Asia (ECA) to digitize and centralize the institution's inventory operations. The system addresses inefficiencies in manual tracking by providing real-time, mobile-accessible tools for managing assets, requests, and reports.",
    highlights: [
      "Developed mobile-friendly platform for real-time inventory monitoring and updates",
      "Implemented equipment request and approval workflows for staff and faculty",
      "Integrated QR/Barcode scanning for quick item identification and tracking",
      "Designed role-based access control for administrators, MIS staff, and end-users",
      "Created maintenance and monitoring module for asset condition logging",
      "Automated report generation for stock status, usage history, and auditing"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vite", "Supabase"],
    period: "2025",
    image: "/mobile inventory/Landing page.png",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "ESCafe - Coffee Shop Website",
    subtitle: "Beautiful & Responsive Cafe Website",
    description: "A beautiful and responsive cafe website built with HTML, CSS, and JavaScript. Features a modern design with menu showcase, gallery, and contact information for a coffee shop business.",
    highlights: [
      "Responsive design that works seamlessly across all devices",
      "Interactive menu showcase with detailed product information",
      "Modern gallery section displaying cafe atmosphere and products",
      "Contact information and location details for customer engagement",
      "Clean and professional UI/UX design"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    period: "2024",
    image: "/escafe-bg.png",
    demoLink: "https://escafe-raniel.netlify.app/",
    codeLink: "#"
  },
  {
    title: "First Build in Portfolio Website",
    subtitle: "First Web Development Project",
    description: "My first portfolio website built during Web Development subject in 2023. This project represents my initial journey into web development, showcasing fundamental skills in HTML, CSS, and JavaScript.",
    highlights: [
      "Built using core web technologies: HTML5, CSS3, and JavaScript",
      "Responsive design that adapts to different screen sizes",
      "Clean and professional layout showcasing projects and skills",
      "Interactive elements and smooth navigation",
      "First milestone in web development learning journey"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    period: "2023",
    image: "/webdev.png",
    demoLink: "https://ranielencarnacion.netlify.app/",
    codeLink: "#"
  }
];

// Gallery organization helpers
export const ADMIN_FEATURE_INDICES = [0, 1, 2, 3, 4, 7];
export const USER_FEATURE_INDICES = [5, 6, 8];
