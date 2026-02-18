import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '100px' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <p className="text-accent" style={{ fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>What's Next?</p>
                <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 'bold' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                    I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:raguramk20@gmail.com" className="btn" style={{ fontSize: '1.1rem', padding: '1.25rem 2.5rem' }}>
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
