import { useState, useEffect, useRef } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { EntryDot } from "./components/EntryDot";
import { MinimalNav } from "./components/MinimalNav";
import { HeroSection } from "./components/HeroSection";
import { ProjectPanels } from "./components/ProjectPanels";
import { SkillsTypography } from "./components/SkillsTypography";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    const imageData = ctx.createImageData(256, 256);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 12;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
      style={{
        opacity: 0.4,
        mixBlendMode: "multiply",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%",
      }}
    />
  );
}

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

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "#FAF9F6",
        cursor: "none",
      }}
    >
      <CustomCursor />
      <NoiseTexture />

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
    </div>
  );
}