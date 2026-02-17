import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
                transition: 'var(--transition-normal)'
            }}
        >
            <a href="#" style={{ color: 'var(--text-accent)', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                RK
            </a>

            <ul style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                {['Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                    <li key={index}>
                        <a href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-primary)' }}>
                            <span className="text-accent" style={{ marginRight: '5px' }}>0{index + 2}.</span>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
