import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portraitUrl =
  "https://images.unsplash.com/photo-1761522001036-dc4a66722464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMHN0dWRpbyUyMG1pbmltYWx8ZW58MXx8fHwxNzcyNjA1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const sliceRoles = ["Designer", "Thinker", "Tester"];

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageClicked, setImageClicked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Breathing float animation
  useEffect(() => {
    let raf: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      setFloatY(Math.sin(t) * 3);
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-24">
        {/* Portrait — Left side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative flex-shrink-0"
          style={{ transform: `translateY(${floatY}px)` }}
        >
          <div
            className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden cursor-pointer"
            style={{
              borderRadius: 8,
              transform: `perspective(800px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
              transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onClick={() => setImageClicked(!imageClicked)}
          >
            {!imageClicked ? (
              <>
                <ImageWithFallback
                  src={portraitUrl}
                  alt="Husain Bhatiya"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(15%) contrast(1.05)" }}
                />
                {/* Light reflection */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(${120 + mousePos.x * 60}deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)`,
                  }}
                />
              </>
            ) : (
              /* Split into three slices */
              <div className="w-full h-full flex">
                {sliceRoles.map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ x: 0 }}
                    animate={{ x: i === 0 ? -8 : i === 2 ? 8 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 relative overflow-hidden"
                    style={{
                      borderRight: i < 2 ? "2px solid #FAF9F6" : "none",
                    }}
                  >
                    <ImageWithFallback
                      src={portraitUrl}
                      alt={role}
                      className="absolute inset-0 w-[300%] h-full object-cover"
                      style={{
                        left: `${-i * 100}%`,
                        filter: "grayscale(15%) contrast(1.05)",
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-end justify-center pb-6"
                      style={{ background: "linear-gradient(to top, rgba(26,26,26,0.7) 0%, transparent 60%)" }}
                    >
                      <span
                        className="text-xs tracking-[0.15em] uppercase"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#FAF9F6",
                          fontWeight: 300,
                        }}
                      >
                        {role}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          {/* Subtle shadow */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(0,0,0,0.06), transparent)",
              filter: "blur(4px)",
            }}
          />
        </motion.div>

        {/* Text — Right side */}
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#bbb",
                fontWeight: 300,
              }}
            >
              Portfolio — 2026
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1a1a",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Husain
            <br />
            <span style={{ fontStyle: "italic", color: "#c57d3c" }}>Bhatiya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="max-w-md mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#888",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Crafting interfaces that feel invisible — where design serves the
            user and every pixel earns its place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="flex gap-4 flex-wrap"
          >
            <MagneticButton
              label="View Projects"
              primary
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <MagneticButton
              label="About Me"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MagneticButton({
  label,
  primary,
  onClick,
}: {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  return (
    <motion.button
      ref={btnRef}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onClick={onClick}
      className="relative px-7 py-3.5 cursor-pointer"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        borderRadius: 40,
        background: primary ? "#1a1a1a" : "transparent",
        color: primary ? "#FAF9F6" : "#1a1a1a",
        border: primary ? "none" : "1px solid rgba(26,26,26,0.2)",
        transition: "background 0.4s, color 0.4s, border-color 0.4s",
      }}
      onMouseEnter={(e) => {
        if (!primary) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,26,26,0.6)";
        }
      }}
    >
      {label}
    </motion.button>
  );
}
