import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function MinimalNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-16 py-5"
            style={{
              background: "rgba(250, 249, 246, 0.9)",
              backdropFilter: "blur(20px)",
            }}
          >
            <button
              onClick={() => scrollTo("hero")}
              className="cursor-pointer"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1a1a1a",
                fontWeight: 400,
                fontSize: 18,
                background: "none",
                border: "none",
              }}
            >
              HB
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="cursor-pointer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#999",
                    background: "none",
                    border: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#1a1a1a")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#999")
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden cursor-pointer flex flex-col gap-1.5"
              style={{ background: "none", border: "none" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="w-5 h-px"
                style={{ background: "#1a1a1a" }}
              />
              <motion.div
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="w-5 h-px"
                style={{ background: "#1a1a1a" }}
              />
              <motion.div
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="w-5 h-px"
                style={{ background: "#1a1a1a" }}
              />
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex items-center justify-center"
            style={{ background: "rgba(250, 249, 246, 0.98)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className="cursor-pointer text-2xl"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1a1a1a",
                    fontWeight: 400,
                    background: "none",
                    border: "none",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
