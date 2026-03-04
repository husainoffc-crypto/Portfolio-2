import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./projectData";

export function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "#FAF9F6", cursor: "none" }}
      >
        <h1
          className="text-4xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}
        >
          Project not found
        </h1>
        <Link
          to="/"
          className="text-sm uppercase tracking-[0.1em] flex items-center gap-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#999",
            fontWeight: 300,
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;
  const nextProject = projects.find((p) => p.slug === cs.nextProject);

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "#FAF9F6", cursor: "none" }}
    >
      {/* Top nav bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-16 py-5"
        style={{
          background: "rgba(250, 249, 246, 0.9)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-3 group"
          style={{ textDecoration: "none" }}
        >
          <ArrowLeft
            size={16}
            style={{ color: "#999", transition: "transform 0.3s, color 0.3s" }}
            className="group-hover:-translate-x-1"
          />
          <span
            className="text-xs tracking-[0.1em] uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#999",
              fontWeight: 300,
              transition: "color 0.3s",
            }}
          >
            Back
          </span>
        </Link>

        <span
          className="text-xs tracking-[0.1em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#bbb",
            fontWeight: 300,
          }}
        >
          Case Study
        </span>
      </motion.header>

      {/* Hero */}
      <CaseStudyHero project={project} />

      {/* Overview */}
      <OverviewSection project={project} />

      {/* Challenge */}
      <ChallengeSection challenge={cs.challenge} accentColor={project.accentColor} />

      {/* Process steps */}
      <ProcessSection steps={cs.process} accentColor={project.accentColor} />

      {/* Gallery */}
      <GallerySection images={cs.galleryImages} />

      {/* Outcome */}
      <OutcomeSection
        outcome={cs.outcome}
        results={cs.results}
        accentColor={project.accentColor}
      />

      {/* Next project */}
      {nextProject && (
        <NextProjectSection
          project={nextProject}
          onClick={() => navigate(`/project/${nextProject.slug}`)}
        />
      )}
    </div>
  );
}

/* ================================
   HERO SECTION
   ================================ */
function CaseStudyHero({ project }: { project: (typeof projects)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <ImageWithFallback
          src={project.caseStudy.heroImage}
          alt={project.name}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(250,249,246,0) 30%, rgba(250,249,246,1) 100%)`,
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-20"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: project.accentColor,
            fontWeight: 300,
          }}
        >
          {project.tags.join(" · ")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-lg"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#888",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          {project.caseStudy.subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ================================
   OVERVIEW SECTION
   ================================ */
function OverviewSection({ project }: { project: (typeof projects)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cs = project.caseStudy;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { label: "Role", value: cs.role },
            { label: "Duration", value: cs.duration },
            { label: "Tools", value: cs.tools.join(", ") },
            { label: "Year", value: "2025" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#bbb",
                  fontWeight: 300,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#1a1a1a",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Overview text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-3xl"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#bbb",
              fontWeight: 300,
            }}
          >
            Overview
          </p>
          <p
            className="text-xl md:text-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1a1a",
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            {cs.overview}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================
   CHALLENGE SECTION
   ================================ */
function ChallengeSection({
  challenge,
  accentColor,
}: {
  challenge: string;
  accentColor: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24"
      ref={ref}
      style={{ borderTop: "1px solid rgba(26,26,26,0.04)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#bbb",
              fontWeight: 300,
            }}
          >
            The Challenge
          </p>
          <div
            className="w-12 h-px"
            style={{ background: accentColor, opacity: 0.4 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:w-2/3"
        >
          <p
            className="text-lg md:text-xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#555",
              fontWeight: 300,
              lineHeight: 2,
            }}
          >
            {challenge}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================
   PROCESS SECTION
   ================================ */
function ProcessSection({
  steps,
  accentColor,
}: {
  steps: { title: string; description: string; image: string }[];
  accentColor: string;
}) {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24"
      style={{ borderTop: "1px solid rgba(26,26,26,0.04)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-20"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#bbb",
            fontWeight: 300,
          }}
        >
          Design Process
        </motion.p>

        <div className="space-y-32">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={i}
              accentColor={accentColor}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  accentColor,
  reversed,
}: {
  step: { title: string; description: string; image: string };
  index: number;
  accentColor: string;
  reversed: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
    >
      {/* Text */}
      <div className="lg:w-1/2">
        <span
          className="text-xs tracking-[0.15em] uppercase mb-4 block"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: accentColor,
            fontWeight: 300,
            opacity: 0.6,
          }}
        >
          0{index + 1}
        </span>
        <h3
          className="text-3xl md:text-4xl mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#888",
            fontWeight: 300,
            lineHeight: 1.9,
          }}
        >
          {step.description}
        </p>
      </div>

      {/* Image */}
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="overflow-hidden"
          style={{ borderRadius: 8 }}
        >
          <ImageWithFallback
            src={step.image}
            alt={step.title}
            className="w-full h-64 md:h-80 object-cover"
            style={{ filter: "contrast(1.03)" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ================================
   GALLERY SECTION
   ================================ */
function GallerySection({ images }: { images: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24"
      ref={ref}
      style={{ borderTop: "1px solid rgba(26,26,26,0.04)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#bbb",
            fontWeight: 300,
          }}
        >
          Gallery
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="overflow-hidden group"
              style={{ borderRadius: 8 }}
            >
              <ImageWithFallback
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================
   OUTCOME SECTION
   ================================ */
function OutcomeSection({
  outcome,
  results,
  accentColor,
}: {
  outcome: string;
  results: { label: string; value: string }[];
  accentColor: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24"
      ref={ref}
      style={{ borderTop: "1px solid rgba(26,26,26,0.04)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#bbb",
            fontWeight: 300,
          }}
        >
          The Outcome
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-xl md:text-2xl max-w-3xl mb-20"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          {outcome}
        </motion.p>

        {/* Results grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {results.map((r) => (
            <div
              key={r.label}
              className="text-center py-8"
              style={{
                borderTop: `2px solid ${accentColor}20`,
              }}
            >
              <p
                className="text-4xl md:text-5xl mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: accentColor,
                  fontWeight: 400,
                }}
              >
                {r.value}
              </p>
              <p
                className="text-xs tracking-[0.12em] uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#bbb",
                  fontWeight: 300,
                }}
              >
                {r.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================
   NEXT PROJECT SECTION
   ================================ */
function NextProjectSection({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 cursor-pointer group"
      style={{ borderTop: "1px solid rgba(26,26,26,0.04)" }}
      onClick={onClick}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#bbb",
            fontWeight: 300,
          }}
        >
          Next Project
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 transition-colors duration-500"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            fontWeight: 400,
          }}
        >
          {project.name}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 300,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: project.accentColor,
          }}
        >
          View Case Study <ArrowRight size={14} />
        </motion.div>
      </div>
    </section>
  );
}