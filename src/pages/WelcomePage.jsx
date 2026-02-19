import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="page welcome-page"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
        >
            <div className="overlay">
                <motion.div
                    className="content-fade-in"
                    style={{ textAlign: 'center' }}
                >
                    <p style={{ letterSpacing: '8px', marginBottom: '1rem' }}>Welcome All</p>
                    <h1 className="gold-text">Cheers to Love</h1>

                    <div className="geometric-frame" style={{ maxWidth: '300px' }}>
                        <div className="photo-container">
                            <img src="/images/IMG_2739.JPG.jpeg" alt="Couple" />
                        </div>
                    </div>

                    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <p style={{ color: '#fff', fontSize: '1rem', textTransform: 'none', letterSpacing: '1px', marginBottom: '2rem' }}>
                            We can't wait to celebrate this special day with you. Thank you for being part of our beautiful journey.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <button className="btn-premium" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
                            View Gallery
                        </button>
                    </div>

                    <div style={{ padding: '2rem', border: '1px solid rgba(197,160,89,0.1)' }}>
                        <p style={{ color: 'var(--gold-static)', letterSpacing: '2px', margin: 0 }}>With Love, Jo & Anisha</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WelcomePage;
