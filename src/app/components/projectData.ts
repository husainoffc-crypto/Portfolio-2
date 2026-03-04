export interface ProjectData {
  id: number;
  slug: string;
  name: string;
  description: string;
  tags: string[];
  bgColor: string;
  accentColor: string;
  image: string;
  caseStudy: {
    subtitle: string;
    overview: string;
    role: string;
    duration: string;
    tools: string[];
    heroImage: string;
    challenge: string;
    process: {
      title: string;
      description: string;
      image: string;
    }[];
    outcome: string;
    results: { label: string; value: string }[];
    galleryImages: string[];
    nextProject: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: "food-it",
    name: "Food It",
    description:
      "A food delivery experience designed around warmth, simplicity, and the joy of discovering meals.",
    tags: ["Mobile App", "UI/UX Design", "Figma"],
    bgColor: "#FFF3E8",
    accentColor: "#c57d3c",
    image:
      "https://images.unsplash.com/photo-1705211734796-7cdbcb527636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYXBwJTIwaW50ZXJmYWNlJTIwb3JhbmdlJTIwd2FybXxlbnwxfHx8fDE3NzI2MDUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      subtitle: "Reimagining the food delivery experience",
      overview:
        "Food It is a mobile app that transforms the way users discover and order food. By focusing on visual storytelling and intuitive navigation, the app creates an emotional connection between users and their meals — making every order feel personal and delightful.",
      role: "Lead UI/UX Designer",
      duration: "8 Weeks",
      tools: ["Figma", "Protopie", "Maze", "FigJam"],
      heroImage:
        "https://images.unsplash.com/photo-1659353742089-92747b4674dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBwaG9uZSUyMGhhbmR8ZW58MXx8fHwxNzcyNjA4NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      challenge:
        "Existing food delivery apps overwhelm users with too many choices and cluttered interfaces. Users reported decision fatigue and frustration navigating complex menus. The challenge was to create an experience that felt curated and calm — where discovering food becomes a joy rather than a chore.",
      process: [
        {
          title: "Research & Discovery",
          description:
            "Conducted 12 user interviews and analyzed competitors to understand pain points. Created affinity maps and user personas that revealed a desire for visual-first browsing and simplified ordering flows.",
          image:
            "https://images.unsplash.com/photo-1560719887-fe3105fa1e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjBzdGlja3klMjBub3Rlc3xlbnwxfHx8fDE3NzI1MzQ5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Explored 30+ layout variations for the home feed before settling on a card-based design with large photography. Built interactive prototypes in Figma and tested with 8 participants to validate navigation patterns.",
          image:
            "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MjYwODQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Visual Design & System",
          description:
            "Created a warm, appetizing color palette anchored by organic oranges and creams. Built a scalable component library with 48 components, ensuring consistency across 24 screens.",
          image:
            "https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwVUklMjBraXR8ZW58MXx8fHwxNzcyNjA4NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
      outcome:
        "The final design reduced the average order time by 40% in usability testing. Users praised the clean visual hierarchy and the personalized recommendation engine. The project was selected as a finalist in the local UX design awards.",
      results: [
        { label: "Order Time Reduced", value: "40%" },
        { label: "User Satisfaction", value: "92%" },
        { label: "Screens Designed", value: "24" },
        { label: "Components Built", value: "48" },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1705211734796-7cdbcb527636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYXBwJTIwaW50ZXJmYWNlJTIwb3JhbmdlJTIwd2FybXxlbnwxfHx8fDE3NzI2MDUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1659353742089-92747b4674dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBwaG9uZSUyMGhhbmR8ZW58MXx8fHwxNzcyNjA4NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      nextProject: "lazy-project",
    },
  },
  {
    id: 2,
    slug: "lazy-project",
    name: "Lazy Project",
    description:
      "Minimal architecture portfolio celebrating negative space, clean lines, and structural elegance.",
    tags: ["Web Design", "Architecture", "Minimal"],
    bgColor: "#F5F0EB",
    accentColor: "#8B7D6B",
    image:
      "https://images.unsplash.com/photo-1674796723915-4f06a8e51295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwYmVpZ2UlMjBuZXV0cmFsfGVufDF8fHx8MTc3MjYwNTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      subtitle: "Where architecture meets digital minimalism",
      overview:
        "Lazy Project is a web portfolio for an architectural firm that embraces the philosophy of 'less is more.' The design mirrors the firm's architectural style — using generous white space, precise typography, and subtle motion to create an experience as refined as their buildings.",
      role: "UI/UX Designer & Researcher",
      duration: "6 Weeks",
      tools: ["Figma", "After Effects", "Webflow", "Lottie"],
      heroImage:
        "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMGxhcHRvcCUyMG1vY2t1cHxlbnwxfHx8fDE3NzI2MDg0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      challenge:
        "The client's previous website was visually heavy and failed to convey the elegance of their work. They needed a digital presence that would feel as intentional and restrained as their architecture — every element earning its place on the page.",
      process: [
        {
          title: "Competitive Analysis",
          description:
            "Studied award-winning architectural firm websites to understand how top firms present their work online. Identified patterns of success: large imagery, minimal text, and smooth transitions between projects.",
          image:
            "https://images.unsplash.com/photo-1560719887-fe3105fa1e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjBzdGlja3klMjBub3Rlc3xlbnwxfHx8fDE3NzI1MzQ5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Design Exploration",
          description:
            "Created three distinct design directions ranging from editorial to gallery-like. The client gravitated toward the gallery approach — each project presented as a full-screen immersive experience with careful typographic pairing.",
          image:
            "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MjYwODQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Motion & Development",
          description:
            "Designed micro-interactions using After Effects and Lottie. Implemented the site in Webflow with custom scroll-triggered animations that reveal content in a way that mirrors walking through a building.",
          image:
            "https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwVUklMjBraXR8ZW58MXx8fHwxNzcyNjA4NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
      outcome:
        "The redesigned website saw a 65% increase in average session duration and a 3x increase in project inquiry submissions. The site was featured on Awwwards as an Honorable Mention.",
      results: [
        { label: "Session Duration", value: "+65%" },
        { label: "Inquiry Increase", value: "3x" },
        { label: "Pages Designed", value: "12" },
        { label: "Animations Created", value: "18" },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1674796723915-4f06a8e51295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwYmVpZ2UlMjBuZXV0cmFsfGVufDF8fHx8MTc3MjYwNTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMGxhcHRvcCUyMG1vY2t1cHxlbnwxfHx8fDE3NzI2MDg0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      nextProject: "testing-suite",
    },
  },
  {
    id: 3,
    slug: "testing-suite",
    name: "Testing Suite",
    description:
      "A quality assurance dashboard built for precision — automation scripts, regression reports, and bug lifecycles.",
    tags: ["QA Engineering", "Automation", "Selenium"],
    bgColor: "#EDEDEF",
    accentColor: "#555",
    image:
      "https://images.unsplash.com/photo-1582035100994-9ddfc34b1dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JhcGhpdGUlMjBhYnN0cmFjdCUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNjA1MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      subtitle: "Precision-driven quality assurance",
      overview:
        "The Testing Suite is an internal QA dashboard designed to streamline the quality assurance workflow. From writing automation scripts to tracking bug lifecycles, the tool brings clarity and efficiency to the testing process — helping teams ship with confidence.",
      role: "QA Engineer & UI Designer",
      duration: "10 Weeks",
      tools: ["Selenium", "JIRA", "Figma", "TestRail"],
      heroImage:
        "https://images.unsplash.com/photo-1763568258492-9569a0af2127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwc2NyZWVuJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3MjYwODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      challenge:
        "The QA team was managing test cases across spreadsheets, JIRA, and email — leading to missed regressions and duplicated effort. They needed a unified dashboard that could visualize test coverage, track automation progress, and surface critical bugs instantly.",
      process: [
        {
          title: "Workflow Mapping",
          description:
            "Shadowed the QA team for two weeks to understand their daily workflows. Mapped the complete bug lifecycle from discovery to resolution and identified 7 key friction points in the existing process.",
          image:
            "https://images.unsplash.com/photo-1560719887-fe3105fa1e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjBzdGlja3klMjBub3Rlc3xlbnwxfHx8fDE3NzI1MzQ5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Dashboard Design",
          description:
            "Designed a data-rich dashboard that balances information density with clarity. Used a dark theme with strategic color coding — green for passed, amber for warnings, red for failures — creating an at-a-glance health overview.",
          image:
            "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MjYwODQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Automation & Integration",
          description:
            "Built Selenium-based automation scripts and integrated with JIRA for real-time bug tracking. Designed the reporting module to auto-generate regression summaries after each sprint cycle.",
          image:
            "https://images.unsplash.com/photo-1763568258492-9569a0af2127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwc2NyZWVuJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3MjYwODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
      outcome:
        "The unified dashboard reduced bug duplication by 60% and cut regression testing time in half. The automation suite now covers 85% of critical paths, and the team ships with significantly higher confidence.",
      results: [
        { label: "Bug Duplication", value: "-60%" },
        { label: "Regression Time", value: "-50%" },
        { label: "Automation Coverage", value: "85%" },
        { label: "Test Cases Written", value: "3000+" },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1582035100994-9ddfc34b1dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JhcGhpdGUlMjBhYnN0cmFjdCUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNjA1MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1763568258492-9569a0af2127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwc2NyZWVuJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3MjYwODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      nextProject: "food-it",
    },
  },
];
