import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  { word: "FIGMA", detail: "Primary design tool — components, auto-layout, prototyping" },
  { word: "AUTOMATION", detail: "Selenium, scripted test suites, CI/CD integration" },
  { word: "USER EXPERIENCE", detail: "Research, personas, journey mapping, usability testing" },
  { word: "PROTOTYPING", detail: "Interactive prototypes, micro-interactions, motion design" },
  { word: "TESTING", detail: "Smoke, regression, functional, and exploratory testing" },
  { word: "DESIGN SYSTEMS", detail: "Scalable component libraries, tokens, documentation" },
];

export function SkillsTypography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: "'Inter', sans-serif", color: "#bbb", fontWeight: 300 }}
        >
          Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl md:text-5xl mb-20"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            fontWeight: 400,
          }}
        >
          Skills
        </motion.h2>

        <div className="space-y-2">
          {skills.map((skill, i) => (
            <SkillWord key={skill.word} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillWord({
  skill,
  index,
  isInView,
}: {
  skill: { word: string; detail: string };
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15 + index * 0.08, ease: "easeOut" }}
      className="group relative py-5 md:py-6 cursor-pointer"
      style={{
        borderBottom: "1px solid rgba(26,26,26,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <h3
          className="text-3xl md:text-5xl lg:text-6xl transition-all"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: hovered ? "#1a1a1a" : "rgba(26,26,26,0.25)",
            fontWeight: 400,
            letterSpacing: hovered ? "0.06em" : "0em",
            transition: "color 0.5s ease, letter-spacing 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {skill.word}
        </h3>

        {/* Arrow indicator */}
        <motion.span
          animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl hidden md:block"
          style={{ color: "#c57d3c" }}
        >
          →
        </motion.span>
      </div>

      {/* Detail text that slides in */}
      <motion.div
        initial={false}
        animate={{
          height: hovered ? "auto" : 0,
          opacity: hovered ? 1 : 0,
          marginTop: hovered ? 12 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#999",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 500,
          }}
        >
          {skill.detail}
        </p>
      </motion.div>

      {/* Subtle accent line on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-px origin-left"
        style={{ background: "#c57d3c", width: "100%" }}
      />
    </motion.div>
  );
}
