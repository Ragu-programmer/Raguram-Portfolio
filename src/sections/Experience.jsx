import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Firmware Team Member",
        company: "Northeastern Electric Racing, Boston, MA",
        date: "Sep 2026 - Present",
        description: [
            "Completed NER’s Firmware Launchpad onboarding, building an STM32 mini car in embedded Rust and Embassy with GPIO, ADC, and I2C.",
            "Advanced to race car development, writing Rust/Embassy firmware for the electric race car’s STM32-based boards."
        ]
    },
    {
        role: "Project Engineer (Contract)",
        company: "Soliton Technologies, Coimbatore, India",
        client: "National Instruments",
        date: "Jan 2026 - Aug 2026",
        description: [
            "Built an auto-scheduling algorithm for NI’s lab-management software that assigns test plans to available test systems, replacing ~1 min of manual effort per item for labs scheduling 500-1,000 work items daily.",
            "Stabilized 1,000-1,200 intermittently failing UI tests by replacing hard-coded timeouts with dynamic asynchronous waits."
        ]
    },
    {
        role: "Project Engineer (Contract)",
        company: "KLA India, Chennai, India",
        date: "Jan 2025 - Dec 2025",
        description: [
            "Introduced SonarQube to KLA’s Optical Metrology Division across ~1,700+ C#/C++ projects in Jenkins CI/CD, enforcing warnings-as-errors and new quality rules that surfaced and resolved ~560+ defects, including the resource leaks behind unexplained memory growth.",
            "Reduced application memory leakage by 50% by fixing all 360 undisposed resources flagged by static analysis, closing a long-open memory investigation in legacy metrology tool software.",
            "Integrated Squish Coco code coverage, new to KLA, into builds for 1,700+ C# and C++ projects with the vendor, auto-generating coverage reports and replacing manual measurement so the SQA team could focus on closing test gaps.",
            "Contributed features to the C++ MFC-to-Blazor recipe editor and C#/WPF result viewer migrations for Archer 800 and ATL 200 tools."
        ]
    },
    {
        role: "Intern",
        company: "Soliton Technologies, Coimbatore, India",
        date: "Jan 2024 - Aug 2024",
        description: [
            "Expanded Soliton’s I2C-only Protocol Validation Suite (PVS) to MIPI I3C by developing LabVIEW functional-compliance tests against the I3C specification, helping launch an I3C validation product sold through NI and showcased at MIPI Alliance Demo Day.",
            "Developed parametric tests measuring I3C bus timing and electrical levels against spec limits on NI PXIe-657x digital pattern instruments, giving silicon vendors pass/fail compliance data for their devices.",
            "Built PVS framework APIs with TestStand/Python integration so chip vendors could run I3C compliance suites from existing automation."
        ]
    },
    {
        role: "Embedded & IoT Intern",
        company: "iQube Innovation Forum, KCT, Coimbatore, India",
        date: "Mar 2021 - Apr 2024",
        description: [
            "Developed low-level embedded C/C++ firmware for AVR, STM32 (ARM Cortex-M), and PIC32 — device drivers, hardware interfaces, interrupts, state machines, and fault handling.",
            "Eliminated 3-5 mm positioning drift in a DD Robocon India 2023 robot’s open-loop DC drive by proposing encoder-feedback motors and writing STM32 PID control firmware, helping the team clear the first two rounds of the national qualifier for ABU Robocon.",
            "Developed battery management firmware for the Robocon robot’s multi-cell Li-ion pack using BMS ICs, current sensing, and ADC measurements, tracking state of charge, battery health, and charge/discharge cycles to predict remaining runtime.",
            "Centralized lab control with an MQTT/Wi-Fi network of 10 ESP32/ESP8266 nodes driving relays for 40-50 appliances and 3 room doors.",
            "Owned electrical wiring and power distribution for the Robocon robot across 15+ PCBs, 20-25 sensors, and 10+ actuators, using oscilloscopes, logic analyzers, and bench testing to isolate faults and speed up team debugging."
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
                        {exp.client && (
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                Client: {exp.client}
                            </p>
                        )}
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