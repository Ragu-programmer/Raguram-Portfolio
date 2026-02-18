import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Monitor, Cpu, Trophy } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

const projects = [
    {
        title: "Desktop Application for Overlay Measurement in Semiconductor Wafers",
        description: "A high-performance desktop application designed for overlay measurement in semiconductor wafers. Contributed to architecture and platform-level development to support precision measurement in semiconductor fabrication.",
        tech: ["C# .NET", "WPF", "C++", "Jenkins", "Git"],
        links: { github: "#", external: "#" },
        type: "app",
        timeline: "May 2025 - Dec 2025",
        details: [
            "Led the adoption of static code analysis tools (SonarQube, Cppcheck) across the division for C# and C++ projects, improving overall code quality and compliance by approximately 80%.",
            "Drove feature-level task breakdown and timeline planning, enabling predictable execution and on-time delivery of all feature milestones.",
            "Resolved critical show-stopper issues during release cycles, preventing delivery delays and ensuring stable, on-time releases.",
            "Eliminated numerous compiler warnings and code smells, reducing technical debt and improving long-term maintainability and code safety.",
            "Leveraged AI-driven automation capabilities that reduced manual effort and improved the overall efficiency of script generation.",
        ]
    },
    {
        title: "Desktop Application for Targets Identification in Semiconductor Wafers",
        description: "A specialized desktop application used to accurately identify and validate targets on semiconductor wafers, enabling measurement workflows in semiconductor manufacturing.",
        tech: ["C# .NET", "FlaUI", "Azure Pipelines", "Git"],
        links: { github: "#", external: "#" },
        type: "app",
        timeline: "Jan 2025 - May 2025",
        details: [
            "Developed a utility to automatically generate UI automation tests for newly added test cases from a specified directory, reducing manual test development effort.",
            "Implemented Azure Pipelines workflows to execute automated UI tests as part of CI, ensuring consistent validation and early defect detection on code changes.",
            "Added and optimized FlaUI-based UI automation tests for newly introduced features, minimizing test execution time by half and reducing flaky test failures by approximately 50%.",
            "Integrated new UI automation tests with Azure Test Suites and configured scheduled weekly and monthly test runs to introduce continuous quality monitoring and test execution consistency."
        ]
    },
    {
        title: "Web Application for Semiconductor Test Data Management and Visualization",
        description: "A comprehensive full-stack software application designed to help manage, monitor, and analyze measurement systems in large-scale, distributed environments.",
        tech: ["Angular", "RxJS", "TypeScript", "REST API", "Playwright"],
        links: { github: "#", external: "#" },
        type: "app",
        timeline: "Sept 2024 - Jan 2025",
        details: [
            "Primarily contributed to scalable application design and development by enforcing coding standards and clean code practices, improving long-term maintainability and extensibility.",
            "Designed and implemented table-based UI workflows with search, filtering, and summary tiles, improving data discoverability and user task efficiency by approximately 50%",
            "Delivered critical UI/UX enhancements aligned with customer requirements, eliminating redundant user actions, and simplifying workflows.",
            "Monitored and improved the performance of the application by removing unnecessary UI-triggered API calls, improving page response time by approximately 3 seconds.",
            "Delivered features with 80%+ automated test coverage using Jasmine and Playwright, reducing regression defects and improving release stability."
        ]
    },
    {
        title: "Custom Bootloader for STM 32 MCU",
        description: "Built a custom STM32 bootloader supporting firmware updates over UART/SPI with packet framing, sequencing, and checksum-based integrity verification.",
        tech: ["C", "STM32", "UART/SPI", "Embedded"],
        links: { github: "#", external: "#" },
        type: "embedded",
        timeline: "Jan 2024 - May 2024",
        details: [
            "Built a custom STM32 bootloader supporting firmware updates over UART/SPI.",
            "Implemented packet framing, sequencing, and checksum-based integrity verification.",
            "Implemented flash erase/write program operations using STM32’s Flash Control interface.",
            "Added recovery paths for corrupted firmware transfers to address reliability constraints."
        ]
    },
    {
        title: "Real-time scheduler",
        description: "Implemented a cooperative real-time scheduler for PIC32 inspired by the RTScheduler architecture, featuring a determinstic task dispatcher.",
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
