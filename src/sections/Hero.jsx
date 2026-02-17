import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            id="hero"
            className="section container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <motion.p
                className="text-accent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1.1 }}
            >
                Raguram Kasthurisamy
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ fontSize: 'clamp(25px, 8vw, 80px)', fontWeight: 'bold', color: 'var(--text-secondary)', lineHeight: 1.1, marginBottom: '2rem' }}
            >
                Software Engineer
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ maxWidth: '700px', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}
            >
                <p style={{ marginBottom: '1rem' }}>
                    Staff Engineer specializing in <strong>Web Application Development</strong> and <strong>Embedded Systems</strong>. I deliver high-performance solutions for the <span className="text-accent">Semiconductor</span> and <span className="text-accent">Test & Measurement</span> domains, bridging the gap between rigid hardware constraints and scalable enterprise software with expertise in C# .NET, Angular, and Firmware.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                <a href="#projects" className="btn" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>Check out my work!</a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
