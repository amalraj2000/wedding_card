import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GroomPage = () => {
    return (
        <motion.div
            className="page groom-page"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ overflowY: 'visible', display: 'block' }}
        >
            <div className="overlay" style={{ padding: '60px 20px' }}>
                <motion.div
                    className="content-fade-in"
                    style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
                >
                    <p style={{ letterSpacing: '3px' }}>The Groom</p>
                    <h1 className="gold-text">Jo</h1>

                    <div className="geometric-frame">
                        <div className="photo-container">
                            <img src="/images/IMG_2711.JPG.jpeg" alt="Groom" />
                        </div>
                    </div>

                    <div style={{ margin: '2rem 0' }}>
                        <h3 style={{ color: 'var(--gold-static)', fontFamily: 'var(--serif-font)', marginBottom: '1rem' }}>S/o Mr. & Mrs. Joseph</h3>
                        <p style={{ color: '#fff', fontSize: '1rem', textTransform: 'none', letterSpacing: '1px', lineHeight: '1.6' }}>
                            A dedicated professional with an eye for detail and a heart full of dreams. Jo balances his career with a deep love for travel, music, and the simple joys of life.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '2rem', borderTop: '1px solid rgba(197,160,89,0.1)', paddingTop: '2rem' }}>
                        <div>
                            <p style={{ fontSize: '0.7rem', color: 'var(--gold-static)' }}>Interests</p>
                            <p style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'none' }}>Photography, Coding, Coffee</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.7rem', color: 'var(--gold-static)' }}>Origin</p>
                            <p style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'none' }}>Kerala, India</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(197,160,89,0.1)', paddingTop: '2rem' }}>
                        <p style={{ color: 'var(--gold-static)', fontSize: '0.8rem', letterSpacing: '2px' }}>Reception</p>
                        <p style={{ color: '#fff', fontSize: '0.9rem' }}>August 24th, 2026 | 04:00 PM</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GroomPage;
