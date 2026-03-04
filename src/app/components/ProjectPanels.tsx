import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./projectData";

export function ProjectPanels() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="projects" ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Title */}
        <div className="absolute top-12 left-6 md:left-16 z-20" ref={titleRef}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "'Inter', sans-serif", color: "#bbb", fontWeight: 300 }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1a1a",
              fontWeight: 400,
            }}
          >
            Projects
          </motion.h2>
        </div>

        {/* Horizontal scroll panels */}
        <motion.div
          ref={containerRef}
          className="flex h-full pt-28"
          style={{ x, width: `${projects.length * 100}vw` }}
        >
          {projects.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {projects.map((_, i) => (
            <ProgressDot key={i} index={i} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  index,
  scrollProgress,
}: {
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const width = useTransform(
    scrollProgress,
    [index / 3, (index + 0.5) / 3, (index + 1) / 3],
    [8, 32, 8]
  );
  const opacity = useTransform(
    scrollProgress,
    [index / 3, (index + 0.5) / 3, (index + 1) / 3],
    [0.2, 1, 0.2]
  );

  return (
    <motion.div
      className="h-1.5 rounded-full"
      style={{
        width,
        opacity,
        background: "#1a1a1a",
      }}
    />
  );
}

function ProjectPanel({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-full flex items-center justify-center px-6 md:px-16 lg:px-24 transition-colors duration-1000"
      style={{ background: hovered ? project.bgColor : "#FAF9F6" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: project.accentColor,
              fontWeight: 300,
              opacity: 0.7,
            }}
          >
            {project.tags.join(" · ")}
          </p>
          <h3
            className="text-5xl md:text-7xl mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1a1a",
              fontWeight: 400,
              lineHeight: 1.05,
            }}
          >
            {project.name}
          </h3>
          <p
            className="max-w-sm mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#999",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            {project.description}
          </p>
          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => navigate(`/project/${project.slug}`)}
            className="flex items-center gap-2 cursor-pointer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              background: "none",
              border: "none",
            }}
          >
            View Case Study
            <span style={{ transition: "transform 0.3s" }}>→</span>
          </motion.button>
        </div>

        {/* Image */}
        <motion.div
          animate={{
            scale: hovered ? 1.02 : 1,
            y: hovered ? -4 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-72 h-96 md:w-96 md:h-[500px] overflow-hidden flex-shrink-0 cursor-pointer"
          style={{
            borderRadius: 8,
            boxShadow: hovered
              ? "0 30px 60px rgba(0,0,0,0.1)"
              : "0 10px 30px rgba(0,0,0,0.05)",
            transition: "box-shadow 0.6s ease",
          }}
          onClick={() => navigate(`/project/${project.slug}`)}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            style={{
              filter: "contrast(1.03) brightness(1.02)",
              transition: "transform 0.8s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
