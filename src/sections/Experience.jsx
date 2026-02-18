import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Project Engineer - Contract",
        company: "KLA India",
        date: "Feb 2025 - Dec 2025",
        description: [
            "Developing scalable software features using C# .NET, WPF to enable multi-head and dual-stage functionality for measuring overlay in printed wafers during semiconductor fabrication.",
            "Integrated a Static Code Analysis tool into the existing architecture and Jenkins CI/CD pipeline, to enforce high coding standards and clean code practices.",
            "Resolving critical showstopper bugs during releases, while addressing key software Infrastructure team backlogs, enhancing overall system reliability and maintainability"
        ]
    },
    {
        role: "Project Engineer",
        company: "Soliton Technologies Pvt Ltd",
        date: "Jan 2024 - Feb 2025",
        description: [
            "Developed test-sequence logic, timing-validation modules, and automated compliance checks for the SoundWire (I2S) protocol validation suite.",
            "Implemented core frontend and backend components for an IC and battery testing web application called SLE (SystemLink Enterprise), including advanced search, sorting, filtering, and summary-tile features that improved user efficiency.",
            "Refactored and expanded test suites to achieve 100% automated test coverage, strengthening regression reliability and release confidence"
        ]
    },
    {
        role: "Level-3 Embedded and IOT Team Member",
        company: "iQube Innovation Centre - KCT",
        date: "Sep 2021 - May 2024",
        description: [
            "Built solutions using embedded systems for multiple real-world industrial problem statements.",
            "Learned and Developed embedded firmware on AVR, STM-32 and PIC microcontrollers, covering peripheral integration, protocol communication, and hardware-software integration.",
            "Participated in multiple national-level events like Smart India Hackathon-2022 conducted by Central Govt of India, Robocon 2023 conducted by DD Robocon and other inter-college level events"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                Where I've Worked
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
