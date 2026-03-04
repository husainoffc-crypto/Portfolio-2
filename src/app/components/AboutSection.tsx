import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portraitUrl =
  "https://images.unsplash.com/photo-1761522001036-dc4a66722464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMHN0dWRpbyUyMG1pbmltYWx8ZW58MXx8fHwxNzcyNjA1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const lines = [
  "I design systems",
  "that feel effortless",
  "and test them",
  "until they are flawless.",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 0.06]);
  const bgScale = useTransform(scrollYProgress, [0.1, 0.5], [1.1, 1]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background portrait watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: bgOpacity, scale: bgScale }}
      >
        <ImageWithFallback
          src={portraitUrl}
          alt=""
          className="w-[500px] h-[600px] object-cover"
          style={{ filter: "grayscale(100%) contrast(1.2)", borderRadius: 8 }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-16"
          style={{ fontFamily: "'Inter', sans-serif", color: "#bbb", fontWeight: 300 }}
        >
          About
        </motion.p>

        <div className="space-y-2 md:space-y-4">
          {lines.map((line, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className="text-4xl md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: i % 2 === 0 ? "#1a1a1a" : "#c57d3c",
                fontWeight: 400,
                fontStyle: i % 2 !== 0 ? "italic" : "normal",
                lineHeight: 1.2,
              }}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        {/* Info blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { label: "Experience", value: "1+ Years" },
            { label: "Projects", value: "20+" },
            { label: "Clients", value: "7+" },
            { label: "Test Cases", value: "3000+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl md:text-4xl mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1a1a1a",
                  fontWeight: 400,
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#bbb",
                  fontWeight: 300,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
