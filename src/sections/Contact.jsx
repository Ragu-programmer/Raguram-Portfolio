import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';

const contactInfo = [
    { icon: <MapPin size={20} />, text: 'Coimbatore, Tamil Nadu, India' },
    { icon: <Phone size={20} />, text: '+91 926687929', href: 'tel:+91926687929' },
    { icon: <Mail size={20} />, text: 'raguramk20@gmail.com', href: 'mailto:raguramk20@gmail.com' }
];

const socialLinks = [
    { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/raguram-kasthurisamy', label: 'LinkedIn' },
    { icon: <Github size={22} />, href: 'https://github.com/Ragu-programmer', label: 'GitHub' },
    { icon: <Instagram size={22} />, href: 'https://www.instagram.com/raguram', label: 'Instagram' }
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'a2ac7150-424f-41ec-8695-e33668452abf', // Replace with your Web3Forms access key
                    name: formData.name,
                    contact: formData.contact,
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                    subject: `Portfolio Contact from ${formData.name}`
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', contact: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '0.85rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid transparent',
        borderRadius: '6px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'var(--transition-fast)',
    };

    return (
        <section id="contact" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    color: 'var(--text-primary)',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                }}>
                    Get in Touch
                </h2>
                <div style={{
                    width: '60px',
                    height: '3px',
                    background: 'var(--text-accent)',
                    marginBottom: '2.5rem'
                }} />

                {/* Two-Column Layout */}
                <div className="contact-grid">
                    {/* Left Column: Contact Info */}
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                                >
                                    <span style={{ color: 'var(--text-accent)', display: 'flex', alignItems: 'center' }}>
                                        {item.icon}
                                    </span>
                                    {item.href ? (
                                        <a href={item.href} className="nav-link" style={{ fontSize: '1.05rem' }}>
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                                            {item.text}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="social-icon"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="contact-input"
                            style={inputStyle}
                        />
                        <input
                            type="text"
                            name="contact"
                            placeholder="Your Email or Phone"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            className="contact-input"
                            style={inputStyle}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="contact-input"
                            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                        />
                        <button
                            type="submit"
                            className="btn"
                            disabled={status === 'sending'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.85rem 1.5rem',
                                fontSize: '1rem',
                                alignSelf: 'flex-start',
                                opacity: status === 'sending' ? 0.7 : 1
                            }}
                        >
                            <Send size={18} />
                            {status === 'sending' && 'Sending...'}
                            {status === 'success' && 'Message Sent! ✓'}
                            {status === 'error' && 'Failed, try again'}
                            {status === 'idle' && 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
