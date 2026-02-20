import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoverPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page cover-page">
            <div className="overlay">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="content-fade-in"
                    style={{ textAlign: 'center' }}
                >
                    <p style={{ marginBottom: '2rem' }}>We Invite You To Celebrate</p>

                    <div className="geometric-frame">
                        <div className="photo-container">
                            <img src="/images/IMG_2712.JPG.jpeg" alt="" />
                        </div>
                    </div>

                    <h1 className="gold-text">Joel & Anisha</h1>
                    <p style={{ marginTop: '1.5rem', letterSpacing: '6px' }}>April 18th, 2026</p>

                    <button className="btn-premium" onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}>
                        View Invitation
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default CoverPage;
