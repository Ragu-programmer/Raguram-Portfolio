import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Languages": [
        "C / Embedded C",
        "C++",
        "Assembly",
        "Rust",
        "Python",
        "C# .NET",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Shell Scripting"
    ],
    "MCUs & Architectures": [
        "ARM Cortex-M (STM32)",
        "RISC-V",
        "AVR",
        "PIC32",
        "ESP32 / ESP8266",
        "Arduino",
        "Raspberry Pi",
        "Computer Architecture"
    ],
    "Firmware & RTOS": [
        "Bare-metal Programming",
        "Low-level Device Drivers",
        "Bootloaders",
        "Flash Programming",
        "Interrupts & NVIC",
        "DMA and Memory Management",
        "RTOS-based Systems",
        "Zephyr RTOS",
        "Embassy (Async Rust)",
        "nRF Connect SDK",
        "Closed-loop Control (PID / PD)"
    ],
    "Protocols & Peripherals": [
        "Microcontroller Peripherals",
        "UART / USART",
        "SPI",
        "I2C",
        "MIPI I3C",
        "CAN",
        "MQTT",
        "Wi-Fi",
        "ADC / DAC",
        "Timers & PWM",
        "GPIO"
    ],
    "Hardware & Debug": [
        "Hardware Bring-up",
        "Hardware Debugging",
        "Schematics & Datasheets",
        "PCB Design",
        "KiCad",
        "Altium Designer",
        "Proteus Simulator",
        "Oscilloscopes & Logic Analyzers",
        "JTAG / GDB Debuggers",
        "Sensor & Actuator Integration"
    ],
    "Testing & Quality": [
        "Unit & Integration Testing",
        "Automation Testing",
        "Static Code Analysis",
        "Ceedling, Unity & CMock",
        "GoogleTest",
        "Cppcheck",
        "SonarQube",
        "Squish Coco (Code Coverage)",
        "LabVIEW",
        "TestStand"
    ],
    "Software Development": [
        "WPF",
        "Blazor",
        "Angular",
        "RxJS",
        "REST API Design",
        "Agile"
    ],
    "Developer Tools": [
        "STM32CubeIDE",
        "Visual Studio",
        "VS Code",
        "Git / GitHub",
        "CMake",
        "CI/CD (Jenkins)",
        "Azure DevOps",
        "Jira",
        "Linux & Windows"
    ],
    "Generative AI": [
        "LLM",
        "Prompt Engineering",
        "RAG",
        "MCP",
        "AI Agents and Skills",
        "LLM-assisted Debugging"
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="section container">
            {/* Scoped to #skills so it overrides the global .skills-grid rule */}
            <style>{`
                #skills .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 2.5rem 2rem;
                }
                @media (max-width: 900px) {
                    #skills .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                }
                @media (max-width: 560px) {
                    #skills .skills-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                Skills & Technologies
                <span style={{ marginLeft: '20px', height: '1px', background: 'var(--bg-tertiary)', flex: 1, maxWidth: '300px' }}></span>
            </h2>

            <div className="skills-grid">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 3) * 0.1 }}
                    >
                        <h3 style={{ color: 'var(--text-accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>{category}</h3>
                        <ul style={{ padding: 0, display: 'grid', gap: '10px' }}>
                            {items.map((skill) => (
                                <li key={skill} style={{ display: 'flex', alignItems: 'flex-start', lineHeight: 1.4, color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                                    <span style={{ color: 'var(--text-accent)', marginRight: '10px', flexShrink: 0 }}>▹</span>
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
