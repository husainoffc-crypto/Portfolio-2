import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface EntryDotProps {
  onEnter: () => void;
}

export function EntryDot({ onEnter }: EntryDotProps) {
  const [phase, setPhase] = useState<"idle" | "hover" | "expanding" | "done">("idle");
  const [mouseNear, setMouseNear] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!dotRef.current || phase === "expanding" || phase === "done") return;
      const rect = dotRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
      setMouseNear(dist < 200);
      if (dist < 200 && phase === "idle") setPhase("hover");
      if (dist >= 200 && phase === "hover") setPhase("idle");
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [phase]);

  const handleClick = () => {
    if (phase === "hover") {
      setPhase("expanding");
      setTimeout(() => {
        setPhase("done");
        onEnter();
      }, 1200);
    }
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#FAF9F6", cursor: "none" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center" ref={dotRef}>
            {/* The Dot */}
            <motion.div
              animate={{
                width: phase === "expanding" ? 3000 : mouseNear ? 14 : 8,
                height: phase === "expanding" ? 3000 : mouseNear ? 14 : 8,
              }}
              transition={{
                duration: phase === "expanding" ? 1.2 : 0.6,
                ease: phase === "expanding" ? [0.76, 0, 0.24, 1] : "easeOut",
              }}
              className="rounded-full cursor-pointer relative z-10"
              style={{ background: "#1a1a1a" }}
              onClick={handleClick}
            />

            {/* Text that fades in on hover */}
            <AnimatePresence>
              {(phase === "hover") && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: -80 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute whitespace-nowrap"
                    style={{ right: "50%" }}
                  >
                    <h1
                      className="text-3xl md:text-5xl"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#1a1a1a",
                        fontWeight: 400,
                      }}
                    >
                      Husain Bhatiya
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 80 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    className="absolute whitespace-nowrap"
                    style={{ left: "50%" }}
                  >
                    <p
                      className="text-sm tracking-[0.2em] uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#999",
                        fontWeight: 300,
                      }}
                    >
                      UI / UX Designer
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.4, y: 60 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#aaa",
                    }}
                  >
                    Click to enter
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
