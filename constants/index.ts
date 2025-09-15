import { FaYoutube, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQL",
    image: "sql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Niladri-Peace",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/yourusername", // Update with your Twitter handle
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/yourusername", // Update with your Instagram handle
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/yourusername", // Update with your Facebook handle
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQL",
    image: "sql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "github",
    width: 80,
    height: 80,
    icon: "github"
  }
] as const;

export const FULLSTACK_SKILL = [
  // Add any full-stack specific skills here
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "GitHub",
    image: "github",
    width: 80,
    height: 80,
    icon: "github"
  }
] as const;

export const PROJECTS = [
  {
    title: "Mortgage Consultation App",
    description: "A platform connecting home buyers with mortgage consultants for personalized advice and rate comparison.",
    image: "/projects/project-1.webp",
    link: "https://home-mortage-consultation-1431.vercel.app/",
    github: "#",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    type: "Full Stack"
  },
  {
    title: "Medical Health Equipment Website",
    description: "Comprehensive website for medical equipment and supplies with modern UI/UX and responsive design.",
    image: "/projects/project-2.webp",
    link: "https://sivammedicalsupplies.com/",
    github: "#",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    type: "Web Application"
  },
  {
    title: "Comic Crafter AI",
    description: "AI tool that generates comic backstories and images based on user prompts. Combines NLP and image generation for interactive storytelling.",
    image: "/projects/project-3.png",
    link: "#",
    github: "#",
    tags: ["Python", "NLP", "AI/ML", "Image Generation"],
    type: "AI Application"
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Niladri-Peace",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/niladri-bhandari/",
      },

    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Twitter",
        icon: FaTwitter,
        link: "https://twitter.com/yourusername",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/yourusername",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/yourusername",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Email Me",
        icon: null,
        link: "mailto:your.email@example.com",
      },
      {
        name: "Resume",
        link: "/NILADRI BHANDARI RESUME.docx",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


