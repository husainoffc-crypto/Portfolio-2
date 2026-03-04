import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowRight, X, Send } from "lucide-react";

export function ContactSection() {
  const [formOpen, setFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-32 relative"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ fontFamily: "'Inter', sans-serif", color: "#bbb", fontWeight: 300 }}
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          Let's create
          <br />
          <span style={{ fontStyle: "italic", color: "#c57d3c" }}>
            something meaningful.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16 max-w-md mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#999",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Have a project in mind? I'd love to hear about it. Let's build
          something beautiful together.
        </motion.p>

        {/* The single glowing button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <GlowButton
            label="Start a conversation"
            onClick={() => setFormOpen(true)}
          />
        </motion.div>
      </div>

      {/* Sliding form sheet */}
      <AnimatePresence>
        {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}

function GlowButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.2, y: y * 0.2 });
  };

  return (
    <motion.button
      ref={btnRef}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPos({ x: 0, y: 0 });
      }}
      onClick={onClick}
      className="relative px-10 py-5 cursor-pointer overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: 14,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        borderRadius: 60,
        background: "#1a1a1a",
        color: "#FAF9F6",
        border: "none",
        boxShadow: hovered
          ? "0 0 40px rgba(197, 125, 60, 0.25), 0 0 80px rgba(197, 125, 60, 0.1)"
          : "0 4px 20px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.6s ease",
      }}
    >
      <span className="relative z-10 flex items-center gap-3">
        {label}
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </span>
      {/* Subtle inner glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(197, 125, 60, 0.15), transparent 70%)",
        }}
      />
    </motion.button>
  );
}

function ContactForm({ onClose }: { onClose: () => void }) {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto"
      style={{
        background: "#FAF9F6",
        borderTop: "1px solid rgba(26,26,26,0.06)",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: "0 -20px 60px rgba(0,0,0,0.08)",
      }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[-1]"
        style={{ background: "rgba(26,26,26,0.2)" }}
        onClick={onClose}
      />

      <div className="max-w-xl mx-auto px-6 md:px-12 py-10">
        {/* Handle bar */}
        <div className="flex justify-center mb-6">
          <div
            className="w-10 h-1 rounded-full"
            style={{ background: "rgba(26,26,26,0.1)" }}
          />
        </div>

        <div className="flex items-center justify-between mb-10">
          <h3
            className="text-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1a1a",
              fontWeight: 400,
            }}
          >
            Send a message
          </h3>
          <button
            onClick={onClose}
            className="p-2 cursor-pointer rounded-full transition-colors"
            style={{
              background: "rgba(26,26,26,0.04)",
              color: "#1a1a1a",
            }}
          >
            <X size={18} />
          </button>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            focused={focused}
            setFocused={setFocused}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            focused={focused}
            setFocused={setFocused}
          />
          <div>
            <label
              className="block mb-2 text-xs tracking-[0.15em] uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: focused === "message" ? "#c57d3c" : "#bbb",
                fontWeight: 300,
                transition: "color 0.3s",
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full px-0 py-3 resize-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 15,
                color: "#1a1a1a",
                background: "transparent",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: `1px solid ${focused === "message" ? "#c57d3c" : "rgba(26,26,26,0.1)"}`,
                outline: "none",
                transition: "border-color 0.3s",
                lineHeight: 1.7,
              }}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 flex items-center justify-center gap-2 cursor-pointer mt-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: 60,
              background: "#1a1a1a",
              color: "#FAF9F6",
              border: "none",
            }}
          >
            <Send size={14} />
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  focused,
  setFocused,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  focused: string | null;
  setFocused: (v: string | null) => void;
}) {
  return (
    <div>
      <label
        className="block mb-2 text-xs tracking-[0.15em] uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: focused === name ? "#c57d3c" : "#bbb",
          fontWeight: 300,
          transition: "color 0.3s",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-0 py-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 15,
          color: "#1a1a1a",
          background: "transparent",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: `1px solid ${focused === name ? "#c57d3c" : "rgba(26,26,26,0.1)"}`,
          outline: "none",
          transition: "border-color 0.3s",
        }}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
      />
    </div>
  );
}
