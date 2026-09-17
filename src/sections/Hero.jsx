import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Hero = () => {
  const name = "Raguram Kasthurisamy";
  const role = "Embedded Firmware Engineer";

  return (
    <section
      id="hero"
      className="section container"
      style={{
        minHeight: "80vh",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Header Content (Name & Role) - Full Width */}
      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <motion.p
          className="text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontFamily: "var(--font-mono)", marginBottom: "1rem" }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: "bold",
            color: "var(--text-primary)",
            lineHeight: 1.1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {name.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                marginRight: "1rem",
              }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "inline-block" }}
                  transition={{
                    duration: 0,
                    delay: 0.1 + (wordIndex * 5 + charIndex) * 0.1,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            style={{
              color: "var(--text-accent)",
              marginLeft: "5px",
              display: "inline-block",
            }}
          >
            _
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            fontSize: "clamp(25px, 6vw, 60px)",
            fontWeight: "bold",
            color: "var(--text-secondary)",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          {role}
        </motion.h2>
      </div>

      {/* Content Row (About & Image) */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse", // Mobile: Image top, Text bottom
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          gap: "3rem", // Increased gap for better separation
        }}
      >
        {/* About Text & CTA */}
        <div style={{ flex: "2 1 400px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            style={{
              maxWidth: "100%",
              color: "var(--text-secondary)",
              marginBottom: "2.5rem",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            <p style={{ marginBottom: "1rem" }}>
              Engineer with hands-on experience across both{" "}
              <strong>embedded firmware / systems</strong> and{" "}
              <strong>enterprise software</strong>. On the embedded side, I build{" "}
              <strong>firmware for microcontrollers</strong> and work under real
              hardware constraints, backed by a strong foundation in{" "}
              <strong>computer architecture</strong>. On the software side, I develop{" "}
              <strong>distributed backend services in C# .NET</strong> and{" "}
              <strong>production-grade front-end applications in Angular</strong>, with
              experience across the{" "}
              <strong>Semiconductor and Test &amp; Measurement</strong> domains. I treat
              scalable enterprise architecture and low-level system design as distinct
              but complementary disciplines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            <a
              href="/resume.pdf"
              download="Raguram_Kasthurisamy_Resume.pdf"
              className="btn"
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              Download my resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
