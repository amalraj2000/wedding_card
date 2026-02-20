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
                                <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>April 18th, 2026</p>
                                <p style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '2px' }}>At 10:30 AM</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="gold-text" style={{ fontSize: '1.8rem' }}>Reception</h2>
                            <div style={{ margin: '1rem 0', borderTop: '1px solid rgba(197,160,89,0.2)', borderBottom: '1px solid rgba(197,160,89,0.2)', padding: '1rem 0' }}>
                                <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>April 18th, 2026</p>
                                <p style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '2px' }}>04:00 PM Onwards</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <p style={{ fontSize: '0.7rem', color: 'var(--gold-static)', letterSpacing: '2px' }}>WEDDING VENUE</p>
                            <h2 style={{ fontFamily: 'var(--serif-font)', color: '#fff', fontSize: '1.2rem', margin: '0.5rem 0' }}>St. George Jacobite Syrian Church</h2>
                            <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>Kunnapilly</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=9.87769880460515,76.41152863359349" target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '0.7rem', padding: '8px 15px' }}>
                                View Wedding Location
                            </a>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <p style={{ fontSize: '0.7rem', color: 'var(--gold-static)', letterSpacing: '2px' }}>RECEPTION VENUE</p>
                            <h2 style={{ fontFamily: 'var(--serif-font)', color: '#fff', fontSize: '1.2rem', margin: '0.5rem 0' }}>St. George Church Parish Hall</h2>
                            <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>Arakkunnam</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=St.+George+Church+Parish+Hall+Arakkunnam" target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '0.7rem', padding: '8px 15px' }}>
                                View Reception Location
                            </a>
                        </div>
                    </div>


                    <div style={{ marginTop: '3rem', fontSize: '0.8rem', opacity: 0.7, color: 'var(--gold-static)' }}>
                        <p>Join us as we begin our forever</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WeddingDetails;
