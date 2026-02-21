import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageWithLoading from '../components/ImageWithLoading';


const GroomPage = () => {
    return (
        <motion.div
            className="page groom-page"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ overflowY: 'visible' }}
        >
            <div className="overlay">
                <motion.div
                    className="content-fade-in"
                    style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
                >
                    <p style={{ letterSpacing: '3px' }}>The Groom</p>
                    <h1 className="gold-text">Joel</h1>

                    <div className="geometric-frame">
                        <div className="photo-container">
                            <ImageWithLoading src="/images/IMG_2711.JPG.jpeg" alt="Groom" />
                        </div>
                    </div>

                    <div style={{ margin: '2rem 0' }}>
                        <h3 style={{ color: 'var(--gold-static)', fontFamily: 'var(--serif-font)', marginBottom: '0.5rem' }}>S/o Baby K.Y & Sherly Baby</h3>
                        <p style={{ color: 'rgba(197,160,89,0.8)', fontSize: '0.8rem', marginBottom: '1.5rem', fontFamily: 'var(--serif-font)' }}>
                            kallarikattukunnel (H), Chethicode, Ernakulam
                        </p>
                        <p style={{ color: '#fff', fontSize: '1rem', textTransform: 'none', letterSpacing: '1px', lineHeight: '1.6' }}>
                            Joel balances his career with a deep love and finds a simple joys of life as success
                        </p>
                    </div>


                    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(197,160,89,0.1)', paddingTop: '2rem' }}>
                        <p style={{ color: 'var(--gold-static)', fontSize: '0.8rem', letterSpacing: '2px' }}>Reception</p>
                        <p style={{ color: '#fff', fontSize: '0.9rem' }}>April 18th, 2026 | 04:00 PM</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GroomPage;
