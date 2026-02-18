import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Embedded & IoT": ["Microcontroller Peripherals", "Bare-metal Programming", "Bootloaders", "Flash Programming", "Communication Protocols (I2C, SPI, UART)", "PCB Design", "Hardware Debugging"],
    "Software Development": ["C# .NET", "Angular", "RxJS", "Razor Pages", "REST API Design", "Automation Testing", "CI/CD (Jenkins)"],
    "Languages": ["C", "C#", "Python", "Typescript", "JavaScript", "HTML", "CSS"],
    "Generative AI": ["LLM", "Prompt Engineering", "RAG", "AI Agents"],
    "Tools": ["Visual Studio", "VS Code", "Proteus Simulator", "STM32Cube IDE", "KiCAD", "Altium Designer", "Git", "Azure DevOps"]
};

const Skills = () => {
    return (
        <section id="skills" className="section container" style={{ maxWidth: '800px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                Skills & Technologies
                <span style={{ marginLeft: '20px', height: '1px', background: 'var(--bg-tertiary)', flex: 1, maxWidth: '300px' }}></span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 style={{ color: 'var(--text-accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>{category}</h3>
                        <ul style={{ padding: 0, display: 'grid', gap: '10px' }}>
                            {items.map((skill, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                                    <span style={{ color: 'var(--text-accent)', marginRight: '10px' }}>▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
