import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Contractor",
        company: "National Instruments",
        date: "Jan 2026 - Aug 2026",
        description: [
            "Built software to monitor, analyze, and manage distributed measurement systems, delivering real-time telemetry and system monitoring for production users.",
            "Developed automated regression test procedures and tools achieving 100% test code coverage, validating performance and ensuring reliable, defect-free operation.",
            "Collaborated across cross-functional engineering teams to deliver customer-critical workflows under tight deadlines"
        ]
    },
    {
        role: "Contractor",
        company: "KLA India",
        date: "Sep 2024 - Dec 2025",
        description: [
            "Developed a C# .NET application to measure and characterize overlay in printed wafers for semiconductor fabrication metrology.",
            "Drove root-cause resolution of release-blocking bugs each cycle and integrated static code analysis into the Jenkins CI/CD pipeline, reducing memory usage by 50%"
        ]
    },
    {
        role: "Intern",
        company: "Soliton Technologies Pvt Ltd",
        date: "Jan 2024 - Aug 2024",
        description: [
            "Contributed to the Protocol Validation Suite (PVS) for I3C and SPI, developing and running tests to validate communication-protocol implementations against specification.",
            "Built automation and tooling to support protocol conformance testing, debugging, and result reporting"
        ]
    },
    {
        role: "Embedded and IoT Intern",
        company: "iQube Innovation Forum - KCT",
        date: "Mar 2021 - Dec 2023",
        description: [
            "Developed low-level embedded C/C++ firmware for AVR, STM32 (ARM Cortex-M), and PIC32 — device drivers, hardware interfaces, interrupts, state machines, and fault handling.",
            "Debugged issues at the firmware/hardware boundary across digital and analog hardware using oscilloscopes and logic analyzers to root-cause FW/HW faults.",
            "Performed hardware bring-up and built communication over SPI, I2C, UART, and CAN; read schematics and datasheets to resolve integration issues.",
            "Built home-automation and industrial IoT solutions using Arduino (Uno/Nano), ESP32, ESP32-CAM, ESP8266, and Raspberry Pi, integrating sensors and actuators for real-world monitoring and control.",
            "Established multi-device communication between ESP32, Raspberry Pi, and Arduino nodes in master-slave configurations, enabling coordinated data collection and control across networked devices"
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
                        className="experience-card"
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
