import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WeddingDetails = () => {
    return (
        <motion.div
            className="page details-page"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="overlay">
                <motion.div
                    className="content-fade-in"
                    style={{ textAlign: 'center', width: '100%', maxWidth: '600px' }}
                >
                    <p style={{ marginBottom: '1rem' }}>The Celebration</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '2rem 0' }}>
                        <div>
                            <h2 className="gold-text" style={{ fontSize: '1.8rem' }}>Muhoortham</h2>
                            <div style={{ margin: '1rem 0', borderTop: '1px solid rgba(197,160,89,0.2)', borderBottom: '1px solid rgba(197,160,89,0.2)', padding: '1rem 0' }}>
                                <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>August 24th, 2026</p>
                                <p style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '2px' }}>10:30 AM - 12:00 PM</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="gold-text" style={{ fontSize: '1.8rem' }}>Reception</h2>
                            <div style={{ margin: '1rem 0', borderTop: '1px solid rgba(197,160,89,0.2)', borderBottom: '1px solid rgba(197,160,89,0.2)', padding: '1rem 0' }}>
                                <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>August 24th, 2026</p>
                                <p style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '2px' }}>04:00 PM Onwards</p>
                            </div>
                        </div>
                    </div>

                    <p style={{ marginBottom: '0.5rem' }}>Common Venue</p>
                    <h2 style={{ fontFamily: 'var(--serif-font)', color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>Luxury Convention Center</h2>

                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        View Location
                    </a>

                    <div style={{ marginTop: '3rem', fontSize: '0.8rem', opacity: 0.7, color: 'var(--gold-static)' }}>
                        <p>Join us as we begin our forever</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WeddingDetails;
