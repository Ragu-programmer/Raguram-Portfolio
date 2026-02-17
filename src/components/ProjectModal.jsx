import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(10, 25, 47, 0.7)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        padding: '2rem'
                    }}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2.5rem',
                            borderRadius: '12px',
                            maxWidth: '1000px',
                            width: '90%',
                            position: 'relative',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            border: '1px solid var(--bg-tertiary)'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', marginBottom: '0.5rem', paddingRight: '2rem' }}>
                            {project.title}
                        </h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                            <Calendar size={16} />
                            <span>{project.timeline}</span>
                        </div>

                        <div style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: '1rem' }}>{project.description}</p>
                            {project.details && (
                                <ul style={{ paddingLeft: '20px', marginBottom: '1rem', listStyle: 'disc' }}>
                                    {project.details.map((detail, index) => (
                                        <li key={index} style={{ marginBottom: '0.5rem', paddingLeft: '5px' }}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.8rem' }}>Technologies</h4>
                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', padding: 0 }}>
                                {project.tech.map((tech, i) => (
                                    <li key={i} style={{
                                        color: 'var(--text-accent)',
                                        background: 'rgba(100, 255, 218, 0.1)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '4px',
                                        fontSize: '0.85rem',
                                        fontFamily: 'var(--font-mono)'
                                    }}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
