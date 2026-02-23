import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageWithLoading from '../components/ImageWithLoading';

const GalleryPage = () => {
    const navigate = useNavigate();
    const images = [
        "/images/IMG_2703.JPG.jpeg",
        "/images/IMG_2704.JPG.jpeg",
        "/images/IMG_2705.JPG.jpeg",
        "/images/IMG_2711.JPG.jpeg",
        "/images/IMG_2712.JPG.jpeg",
        "/images/IMG_2723.JPG.jpeg",
        "/images/IMG_2728.JPG.jpeg",
        "/images/IMG_2739.JPG.jpeg",
        "/images/cover.jpeg"
    ];

    return (
        <motion.div
            className="page gallery-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ overflowY: 'auto', display: 'block', padding: '40px 20px' }}
        >
            <div className="overlay" style={{ display: 'block', maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="content-fade-in"
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{ letterSpacing: '5px' }}>Moments Captured</p>
                    <h1 className="gold-text">Photo Gallery</h1>
                    <div style={{ width: '50px', height: '1px', background: 'var(--gold-static)', margin: '1rem auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px',
                    paddingBottom: '4rem'
                }}>
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="geometric-frame"
                            style={{ margin: 0, height: '350px' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="photo-container">
                                <ImageWithLoading src={img} alt={`Gallery ${index}`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button className="btn-premium" onClick={() => document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' })}>
                        Back to Welcome
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryPage;
