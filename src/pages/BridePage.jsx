import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageWithLoading from '../components/ImageWithLoading';

const BridePage = () => {
    return (
        <motion.div
            className="page bride-page"
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
                    <p style={{ letterSpacing: '3px' }}>The Bride</p>
                    <h1 className="gold-text">Anisha</h1>

                    <div className="geometric-frame">
                        <div className="photo-container">
                            <ImageWithLoading src="/images/bride.JPG.jpeg" alt="Bride" />
                        </div>
                    </div>

                    <div style={{ margin: '2rem 0' }}>
                        <h3 style={{ color: 'var(--gold-static)', fontFamily: 'var(--serif-font)', marginBottom: '0.5rem' }}>D/o Sabu K.A & Priya Sabu</h3>
                        <p style={{ color: 'rgba(197,160,89,0.8)', fontSize: '0.8rem', marginBottom: '1.5rem', fontFamily: 'var(--serif-font)' }}>
                            Kuzhimalayil (H), Nadakavu, Ernakulam
                        </p>
                        <p style={{ color: '#fff', fontSize: '1rem', textTransform: 'none', letterSpacing: '1px', lineHeight: '1.6' }}>
                            A creative soul who finds inspiration in the beauty of nature and art. Anisha's grace and kindness light up every room, and she is eager to start this new chapter of love and companionship.
                        </p>
                    </div>

                
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BridePage;
