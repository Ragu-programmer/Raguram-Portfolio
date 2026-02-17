import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Staff Engineer - Contract",
        company: "KLA India",
        date: "Feb 2025 - Dec 2025",
        description: [
            "Developing scalable software features using C# .NET, WPF, and Blazor to enable multi-head functionality.",
            "Integrated Static Code Analysis tools into Jenkins CI/CD pipelines to enforce high coding standards.",
            "Resolving critical showstopper bugs effectively during release cycles."
        ]
    },
    {
        role: "Project Engineer",
        company: "Soliton Technologies Pvt Ltd",
        date: "Jan 2024 - Feb 2025",
        description: [
            "Developed test-sequence logic and automated compliance checks for SoundWire (I2S) protocol validation.",
            "Implemented core frontend/backend for 'SLE' web app using advanced searching and filtering.",
            "Refactored test suites to achieve 100% automated test coverage."
        ]
    },
    {
        role: "Embedded and IOT Intern",
        company: "iQube Innovation Centre - KCT",
        date: "Sep 2021 - May 2024",
        description: [
            "Built embedded systems solutions for industrial problems using AVR, STM-32, and PIC microcontrollers.",
            "Participated in national-level hackathons like Smart India Hackathon-2022 and Robocon 2023."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                <span className="text-accent" style={{ marginRight: '10px', fontFamily: 'var(--font-mono)' }}>02.</span> Where I've Worked
                <span style={{ marginLeft: '20px', height: '1px', background: 'var(--bg-tertiary)', flex: 1, maxWidth: '300px' }}></span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            padding: '2rem',
                            background: 'var(--bg-secondary)',
                            borderRadius: '8px',
                            borderLeft: '4px solid var(--text-accent)'
                        }}
                    >
                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                            {exp.role} <span className="text-accent">@ {exp.company}</span>
                        </h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            {exp.date}
                        </p>
                        <ul style={{ paddingLeft: '20px' }}>
                            {exp.description.map((item, i) => (
                                <li key={i} style={{ marginBottom: '10px', color: 'var(--text-secondary)', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '-20px', color: 'var(--text-accent)' }}>▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
