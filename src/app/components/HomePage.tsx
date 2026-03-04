import { useState } from "react";
import { EntryDot } from "./EntryDot";
import { MinimalNav } from "./MinimalNav";
import { HeroSection } from "./HeroSection";
import { ProjectPanels } from "./ProjectPanels";
import { SkillsTypography } from "./SkillsTypography";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";

function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
      <p
        className="text-xs tracking-[0.15em] uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#ccc",
          fontWeight: 300,
        }}
      >
        Husain Bhatiya &copy; 2026
      </p>
      <div className="flex gap-8">
        {["LinkedIn", "Behance", "Dribbble"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs tracking-[0.1em] uppercase transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#ccc",
              fontWeight: 300,
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#1a1a1a")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#ccc")
            }
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export function HomePage() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <EntryDot onEnter={() => setEntered(true)} />}

      {entered && (
        <div className="relative z-10" style={{ cursor: "none" }}>
          <MinimalNav />
          <HeroSection />
          <ProjectPanels />
          <SkillsTypography />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}
