import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const name = "Raguram Kasthurisamy";
    const role = "Software Engineer";

    return (
        <section
            id="hero"
            className="section container"
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
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
                transition={{ delay: 0.2, staggerChildren: 0.1 }} // Slower stagger for typing feel
                style={{
                    fontSize: "clamp(40px, 8vw, 80px)",
                    fontWeight: "bold",
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center"
                }}
            >
                {name.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, display: "none" }} // Hide initially
                        animate={{ opacity: 1, display: "inline-block" }}
                        transition={{ duration: 0, delay: 0.1 + index * 0.1 }} // Instant appear
                        style={{ marginRight: char === " " ? "0.5rem" : "0" }}
                    >
                        {char}
                    </motion.span>
                ))}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    style={{ color: "var(--text-accent)", marginLeft: "5px", display: "inline-block" }}
                >
                    _
                </motion.span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }} // Delays until name finish
                style={{
                    fontSize: "clamp(25px, 8vw, 80px)",
                    fontWeight: "bold",
                    color: "var(--text-secondary)",
                    lineHeight: 1.1,
                    marginBottom: "2rem",
                    marginTop: "10px"
                }}
            >
                {role}
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{
                    maxWidth: "700px",
                    color: "var(--text-secondary)",
                    marginBottom: "3rem",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                }}
            >
                <p style={{ marginBottom: "1rem" }}>
                    Engineer with experience in <strong>enterprise software</strong> for{" "}
                    <strong>Semiconductor and Test & Measurement domains</strong>, and a
                    strong foundation in{" "}
                    <strong>embedded firmware and computer architecture</strong>. I
                    develop distributed backend services in C# .NET and production-grade
                    front-end applications in Angular, while also building firmware and
                    working under hardware constraints in embedded environments. My work
                    spans scalable enterprise architectures and low-level system design as
                    distinct but complementary disciplines.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.5 }}
            >
                <a
                    href="#projects"
                    className="btn"
                    style={{ fontSize: "1rem", padding: "1rem 2rem" }}
                >
                    Check out my work!
                </a>
            </motion.div>
        </section>
    );
};


export default Hero;
