import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WeddingDetails = () => {
    const navigate = useNavigate();

    const handleSwipe = (event, info) => {
        if (info.offset.x < -100) {
            navigate('/groom');
        }
    };

    return (
        <motion.div
            className="page details-page"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="overlay">
                <motion.div
                    className="content-fade-in"
                    style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}
                >
                    <p style={{ marginBottom: '1rem' }}>The Celebration</p>
                    <h1 className="gold-text">Muhoortham</h1>

                    <div style={{ margin: '3rem 0', borderTop: '1px solid rgba(197,160,89,0.2)', borderBottom: '1px solid rgba(197,160,89,0.2)', padding: '2rem 0' }}>
                        <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>August 24th, 2026</p>
                        <p style={{ color: '#fff', fontSize: '1rem', letterSpacing: '2px' }}>10:30 AM - 12:00 PM</p>
                    </div>

                    <p style={{ marginBottom: '0.5rem' }}>Venue</p>
                    <h2 style={{ fontFamily: 'var(--serif-font)', color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>Luxury Convention Center</h2>

                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        Open Location
                    </a>

                    <p style={{ marginTop: '4rem', fontSize: '0.7rem', opacity: 0.5 }}>Swipe left to meet the couple</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WeddingDetails;
