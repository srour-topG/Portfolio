import { ProjectProps } from "@/types/works";
import {
  SiNextui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
} from "react-icons/si";

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "Idraak Platform",
    description:
      "Online learning platform based on exams and questions learning",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    demo: "https://idraak.vercel.app",
    image: "/projects/idraak.jpg",
    available: true,
  },
   {
    id: 4,
    name: "Yousef Portfolio",
    description: "Video editor, Yousef Elgamasy portfolio.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    demo: "https://yousef-visuals.art/",
    image: "/projects/yousef.png",
    available: true,
  }, 
  {
    id: 3,
    name: "Wonder Tech",
    description: "Wonder Tech E-Shop Discord Server.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    demo: "https://wondr.it.com/",
    image: "/projects/wondr.png",
    available: true,
  },
  {
    id: 1,
    name: "Ridz Studio",
    description: "Graphics Design Studio Based on website..",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNextui],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "NextUI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://nextui.org/",
    ],
    demo: "https://ridz-platform.vercel.app/",
    image: "/projects/ridz.png",
    available: true,
  },
 {
    id: 2,
    name: "Originaa website",
    description: "Minercraft addons list for youtuber named originaa.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNextui],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "NextUI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://nextui.org/",
    ],
    demo: "https://originaa.net/",
    image: "/projects/originaa.jpeg",
    available: true,
  },


];
