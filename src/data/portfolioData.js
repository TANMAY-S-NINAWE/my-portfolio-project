import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiMysql, SiGit, SiGithub, SiDocker, SiFigma,
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaLinkedin, FaGithub, FaXTwitter, FaEnvelope, FaCode } from 'react-icons/fa6';
import { FiGlobe } from 'react-icons/fi';

export const personalInfo = {
  name: 'Tanmay Sukhdeo Ninawe',
  logoText: 'TNS.dev',
  greeting: "Hi, I'm",
  title: 'React.js Developer',
  intro:
    'I design and build fast, accessible web products — from polished interfaces to the APIs and databases behind them.',
  shortBio: 'Full stack developer building clean, scalable web applications.',
  email: 'tninawe25@gmail.com',
  location: 'Nagpur ,Maharashtra',
  profileImage: '/images/profile.png',
  resumeUrl: '/resume.pdf',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/TANMAY-S-NINAWE', icon: FaGithub },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/tanmay-ninawe-tns25/', icon: FaLinkedin },
  // { id: 'twitter', label: 'Twitter / X', url: 'https://x.com/', icon: FaXTwitter },
  { id: 'email', label: 'Email', url: `mailto:${personalInfo.email}`, icon: FaEnvelope },
];

export const aboutData = {
  biography: [
    'I am a React developer with a focus on building reliable products people enjoy using. I care about readable code, thoughtful UX, and shipping work that holds up in production.',
    'I have worked with startups and product teams to take ideas from prototype to launch, owning features across the frontend, backend, and deployment pipeline.',
  ],
  stats: [
    { id: 'years', value: 'Fresher ', label: 'with Good Knowledge' },
    { id: 'projects', value: '5+', label: 'Projects completed' },
    { id: 'tech', value: '5+', label: 'Technologies used' },
  ],
  highlights: [
   'Built 8 personal projects using React, JavaScript, TypeScript, and Tailwind CSS',
   'Developed full-stack applications with REST APIs, databases, and real-time features',
   'Deployed live projects and maintained code repositories on GitHub',
  ],
  technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB',  'Tailwind CSS'],
  currentFocus: ['Accessible UI systems', 'Performance engineering', 'AI-powered features', 'Cloud-native deployment'],
};

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 10 },
      // { name: 'Python', icon: SiPython, level: 80 },
      // { name: 'Java', icon: FaJava, level: 70 },
      // { name: 'C++', icon: SiCplusplus, level: 65 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5, level: 95 },
      { name: 'CSS', icon: FaCss3Alt, level: 92 },
      { name: 'React', icon: SiReact, level: 94 },
      // { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 20 },
      { name: 'Express.js', icon: SiExpress, level: 30 },
      { name: 'REST APIs', icon: FiGlobe, level: 70 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      { name: 'MySQL', icon: SiMysql, level: 40},
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 60 },
      { name: 'GitHub', icon: SiGithub, level: 40 },
      // { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'VS Code', icon: FaCode, level: 95 },
      // { name: 'Figma', icon: SiFigma, level: 72 },
    ],
  },
];

export const projects = [
  { id: 1, title: 'CipherDrop', description: 'Secure, real-time temporary group chat with in-memory zero-retention messaging, automated session destruction, and live server telemetry. ', image: '/images/project-1.png', technologies: ['React', 'Node.js', 'MongoDB'], github: 'https://github.com/TANMAY-S-NINAWE/cipherdrop---ephemeral-secret-group-chat', liveDemo: 'https://secret-code.ai.studio/' },
  { id: 2, title: 'AutoCareer Radar', description: ' Automated software company career page crawler and real-time job board. Scrapes tech career portals daily, monitors new engineering vacancies, and alerts candidates the moment new roles drop.', image: '/images/project-2.jpg', technologies: ['React', 'Express', 'PostgreSQL'], github: 'https://github.com/TANMAY-S-NINAWE/autocareer_radar_real_time_career_page_job_crawler', liveDemo: 'https://autocareer-radar-real-time-career-p.vercel.app/' },
  { id: 3, title: 'WishCraft', description: 'Personalized Cards, Proposals & Posters Every Feeling Deserves a Beautiful Card.Create stunning greeting cards, romantic messages, festival wishes, invitations, and personalized posters in minutes. Share your creation with anyone through a simple direct link.', image: '/images/project-3.jpg', technologies: ['React.js', 'TypeScript'], github: 'https://github.com/TANMAY-S-NINAWE/wishcraft---greeting-card---poster-studio', liveDemo: 'https://tnscards.ai.studio/' },
  { id: 4, title: 'A Typing-Keyboard Piano', description: ' Turn your keyboard into a piano, play your favorite tunes, and learn songs note by note.  ', image: '/images/project-4.jpg', technologies: ['React', 'CSS', 'Vite'], github: 'https://github.com/TANMAY-S-NINAWE/piano', liveDemo: 'https://tanmay-s-ninawe.github.io/piano/' },
  { id: 5, title: 'KEYSTROKE LAB', description: ' Build your typing speed, accuracy, and confidence with fun tests, focused practice, and exciting typing games. No sign-up, no downloads—just type, play, and improve.  ', image: '/images/project-5.jpg', technologies: ['React', 'Tailwind CSS'], github: 'https://github.com/TANMAY-S-NINAWE/KEYSTROKE-LAB-Typing-practice-games', liveDemo: 'https://tanmay-s-ninawe.github.io/KEYSTROKE-LAB-Typing-practice-games/' },
  { id: 6, title: 'NOTESKEEPER', description: ' Capture your thoughts, organize your notes, and keep your ideas in one place. Simple, quick, and always ready when inspiration strikes. ', image: '/images/project-6.jpg', technologies: ['react.js', 'Tailwind CSS'], github: 'https://github.com/TANMAY-S-NINAWE/NoteKeeper', liveDemo: 'https://note-keeper-six-fawn.vercel.app/' },
  { id: 7, title: ' UI Design Project', description: ' Designed a clean, modern, and user-friendly interface with an attractive layout, consistent colors, and smooth navigation to improve the overall user experience.  ', image: '/images/project-7.jpg', technologies: ['React.js',  'Tailwind CSS'], github: 'https://github.com/TANMAY-S-NINAWE/UI-Project ', liveDemo: 'https://ui-project-theta-amber.vercel.app/' },
  { id: 8, title: 'React Mini Projects Using Props', description: ' Developed a reusable Product Card Gallery using React props to display product images, names, prices, and descriptions. This project demonstrates component reusability, data passing through props, and responsive UI design.  ', image: '/images/project-8.jpg', technologies: ['React.js',  'Tailwind CSS'], github: 'https://github.com/TANMAY-S-NINAWE/Props-Project', liveDemo: 'https://props-project-liart.vercel.app/' },
];

export const education = [
  { id: 'edu-1', title: 'Master of Computer Applications (MCA) – Pursuing', subtitle: 'Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) ', period: '2025', description: 'Currently pursuing MCA, with a focus on programming, database management, software development, and computer applications.' },
  { id: 'edu-2', title: 'Bachelor of Computer Applications (BCA)', subtitle: 'Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)', period: '2022 – 2025', description: 'Studied computer applications, programming fundamentals, database management, and software development.' },
];

export const experience = [
  // { id: 'exp-1', title: 'Senior Full Stack Developer', subtitle: 'Northwind Labs', period: '2022 – Present', points: ['Lead a team of 5 building a SaaS analytics platform', 'Reduced API response times by 40% through query and cache optimisation', 'Introduced automated testing and CI/CD, cutting release time in half'] },
  // { id: 'exp-2', title: 'Full Stack Developer', subtitle: 'BrightPath Software', period: '2020 – 2022', points: ['Built customer-facing React apps used by 50k+ people', 'Designed REST and GraphQL APIs with Node.js and PostgreSQL', 'Collaborated with designers to ship a shared component library'] },
  // { id: 'exp-3', title: 'Junior Web Developer', subtitle: 'Pixel & Co.', period: '2018 – 2020', points: ['Developed responsive websites for 20+ clients', 'Improved Lighthouse accessibility scores across all delivered projects'] },
];

export const achievements = [
  // { id: 'awards', category: 'Awards', items: [
  //   { id: 'a1', title: 'Engineering Excellence Award', detail: 'Northwind Labs', year: '2024' },
  //   { id: 'a2', title: 'Best Newcomer', detail: 'BrightPath Software', year: '2020' } ] },
  { id: 'certifications', category: 'Certifications', items: [
    { id: 'c1', title: 'Developing Sites for the Web', detail: 'IBM', year: '2026' },
    // { id: 'c2', title: 'Meta Front-End Developer', detail: 'Coursera', year: '2021' }
  ]
  },
  { id: 'certifications', category: 'Certifications', items: [
    { id: 'c2', title: 'Namaste JavaScript', detail: 'NamasteDev.com', year: '2025' }, 
    // { id: 'c2', title: 'Meta Front-End Developer', detail: 'Coursera', year: '2021' }
  ]
  },
  // { id: 'competitions', category: 'Competitions', items: [
  //   { id: 'k1', title: 'Hackathon Winner – Best Product', detail: 'CodeFest', year: '2023' },
  //   { id: 'k2', title: 'Top 10 Finalist', detail: 'Global Game Jam', year: '2019' } ] },
  // { id: 'milestones', category: 'Professional milestones', items: [
  //   { id: 'm1', title: 'Spoke at ReactConf Local', detail: 'Talk on accessible UI patterns', year: '2024' },
  //   { id: 'm2', title: '1,000+ GitHub stars on open-source work', detail: 'Developer tooling library', year: '2022' } ] },
];
