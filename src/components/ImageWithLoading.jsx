import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageWithLoading = ({ src, alt, className, style }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            className={`image-loading-container ${className || ''}`}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                ...style
            }}
        >
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="skeleton-loader"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1
                        }}
                    />
                )}
            </AnimatePresence>

            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 1.05
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onLoad={() => setIsLoaded(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
        </div>
    );
};

export default ImageWithLoading;
