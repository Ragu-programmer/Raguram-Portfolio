import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Monitor, Cpu, Trophy } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

const projects = [
    {
        title: "Bare-Metal UART Driver Study, STM32U575",
        description: "Designed, implemented, and benchmarked three bare-metal USART drivers (polling, interrupt-driven, and DMA-based) on a Cortex-M33 to study how data-transfer strategy affects CPU load and data integrity.",
        tech: ["Embedded C", "STM32U575", "Cortex-M33", "USART", "GPDMA", "Bare-Metal"],
        links: { github: "https://github.com/Ragu-programmer/Device-Driver-Development-STM32-MCU", external: "#" },
        type: "embedded",
        timeline: "Sept 2026 - Oct 2026",
        details: [
            "Investigated how data-transfer strategy affects CPU load and data integrity on a Cortex-M33 by designing, implementing, and benchmarking three bare-metal USART drivers without HAL: polling, interrupt-driven, and DMA-based.",
            "Built each tier at register level from the RM0456 reference manual, configuring RCC clocks, GPIO alternate functions, NVIC priorities, and GPDMA channels.",
            "Used lock-free ring buffers for interrupt-driven I/O and circular GPDMA reception.",
            "Benchmarked all three tiers on hardware, confirming CPU availability improved from polling to interrupts to DMA.",
            "Cut CPU interrupts per 100-byte transfer from 100 to 1 with GPDMA, identifying DMA as the best fit for high-throughput streams."
        ]
    },
    {
        title: "STM32-based Robot Actuator Controller",
        description: "Built an STM32F446RE gripper controller with PWM drive, quadrature encoders, UART commands, and interrupt-based position updates.",
        tech: ["Embedded C", "STM32F446RE", "PWM", "Quadrature Encoder", "UART", "PD Control"],
        links: { github: "https://github.com/Ragu-programmer/STM-32_Motor_Controller", external: "#" },
        type: "embedded",
        timeline: "Jun 2023 - Dec 2023",
        details: [
            "Developed closed-loop position-control firmware for an STM32F446RE robotic gripper actuator in modular C, integrating 20 kHz PWM motor drive, quadrature encoder feedback, a UART command interface, and an interrupt-driven 1 kHz control loop.",
            "Transitioned from time-based open-loop actuation to encoder-feedback closed-loop position control, improving positioning consistency by ~5× and reducing motion variation from ~17% to within ±2%.",
            "Tuned practical PD control with startup boost, dead zone compensation, velocity-aware arrival detection, software limits, and homing-settle calibration to handle actuator friction, inertia, and backlash."
        ]
    },
    {
        title: "Custom STM32 Bootloader",
        description: "An STM32 bootloader for in-field firmware updates over UART/SPI, with a packet-based transfer protocol, CRC validation, and fault-tolerant recovery to prevent bricking.",
        tech: ["Embedded C", "C++", "STM32", "UART", "SPI", "CRC", "Qt"],
        links: { github: "https://github.com/Ragu-programmer/Custom-Bootloader-for-STM-32-MCU", external: "#" },
        type: "embedded",
        timeline: "May 2023 - Oct 2023",
        details: [
            "Developed an STM32 bootloader in C/C++ for in-field firmware updates over UART/SPI, with flash partitioning and a safe jump-to-application routine.",
            "Designed a packet-based transfer protocol with error handling and retransmission for reliable firmware delivery.",
            "Implemented CRC/checksum validation and a fault-tolerant recovery state machine to prevent bricking on failed or corrupted updates.",
            "Built a companion Qt C++ GUI that parses hex files and transmits them to the bootloader, making firmware flashing quick and user-friendly."
        ]
    },
    {
        title: "Real-time scheduler",
        description: "Implemented a cooperative real-time scheduler for PIC32 inspired by the RTScheduler architecture, featuring a deterministic task dispatcher.",
        tech: ["C", "PIC32", "RTOS", "Data Structures"],
        links: { github: "#", external: "#" },
        type: "embedded",
        timeline: "Oct 2023 - Dec 2023",
        details: [
            "Implemented a cooperative real-time scheduler for PIC32 inspired by the RTScheduler architecture.",
            "Created a tick generator using hardware timers and a deterministic task dispatcher.",
            "Designed task-control structures and interrupt-driven I/O routines without any RTOS.",
            "Demonstrated efficient scheduling, concurrency control, and memory-constrained design limits."
        ]
    },
    {
        title: "Robocon 2023",
        description: "Designed I2C master-slave communication link between controllers and sensor control units for two robots. Implemented PID-based path following logic.",
        tech: ["Embedded C", "I2C", "PID Control", "Robotics"],
        links: { github: "#", external: "#" },
        type: "competition",
        timeline: "Dec 2022 - Jun 2023",
        details: [
            "Designed I2C master-slave communication link between controllers and sensor control units for two robots.",
            "Participated in Robocon 2023, an international collegiate robotics competition.",
            "Implemented PID-based path following logic without HAL drivers.",
            "Achieved improved robot’s path-tracking accuracy through custom control algorithms."
        ]
    },
    {
        title: "i-Stacker (Smart India Hackathon 2022)",
        description: "A problem statement to build an autonomous robot to load/unload rice bags and stack them in FCI godowns proposed by the Central Government of India in Smart India Hackathon 2022.",
        tech: ["Robotics", "Automation", "Embedded Systems"],
        links: { github: "#", external: "#" },
        type: "competition",
        timeline: "Apr 2022 - Aug 2022",
        details: [
            "Built an autonomous robot to load/unload rice bags and stack them in FCI godowns.",
            "Addressed a problem statement proposed by the Central Govt. of India in Smart India Hackathon 2022.",
            "Implemented autonomous navigation and object manipulation logic.",
            "Integrated sensor systems for obstacle detection and precise stacking."
        ]
    }
];

const getIcon = (type) => {
    switch (type) {
        case 'app': return <Monitor size={40} />;
        case 'embedded': return <Cpu size={40} />;
        case 'competition': return <Trophy size={40} />;
        default: return <Folder size={40} />;
    }
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                Some Things I've Built
                <span style={{ marginLeft: '20px', height: '1px', background: 'var(--bg-tertiary)', flex: 1, maxWidth: '300px' }}></span>
            </h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        layoutId={`project-${index}`}
                        onClick={() => setSelectedProject(project)}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text-accent)' }}>
                            {getIcon(project.type)}
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} onClick={(e) => e.stopPropagation()}><Github size={20} /></a>
                                <a href={project.links.external} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} onClick={(e) => e.stopPropagation()}><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-accent)', marginBottom: '1rem' }}>{project.timeline}</p>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', flexGrow: 1 }}>
                            {project.description}
                        </p>

                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: 0, fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginTop: 'auto' }}>
                            {project.tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
};

export default Projects;
