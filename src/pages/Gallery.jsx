import './Gallery.css';

function Gallery() {
    // Placeholder images - user can replace these later
    const galleryImages = [
        {
            id: 1,
            src: 'https://via.placeholder.com/600x400/DC143C/FFFFFF?text=Wedding+Photo+1',
            alt: 'Wedding Photo 1',
            caption: 'Beautiful Moments'
        },
        {
            id: 2,
            src: 'https://via.placeholder.com/600x400/800020/FFFFFF?text=Wedding+Photo+2',
            alt: 'Wedding Photo 2',
            caption: 'Sacred Ceremony'
        },
        {
            id: 3,
            src: 'https://via.placeholder.com/600x400/D4AF37/FFFFFF?text=Wedding+Photo+3',
            alt: 'Wedding Photo 3',
            caption: 'Precious Memories'
        },
        {
            id: 4,
            src: 'https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=Wedding+Photo+4',
            alt: 'Wedding Photo 4',
            caption: 'Joyful Celebration'
        },
        {
            id: 5,
            src: 'https://via.placeholder.com/600x400/9DC183/FFFFFF?text=Wedding+Photo+5',
            alt: 'Wedding Photo 5',
            caption: 'Traditional Rituals'
        },
        {
            id: 6,
            src: 'https://via.placeholder.com/600x400/E6E6FA/333333?text=Wedding+Photo+6',
            alt: 'Wedding Photo 6',
            caption: 'Family Blessings'
        },
        {
            id: 7,
            src: 'https://via.placeholder.com/600x400/FFE4E1/333333?text=Wedding+Photo+7',
            alt: 'Wedding Photo 7',
            caption: 'Love & Laughter'
        },
        {
            id: 8,
            src: 'https://via.placeholder.com/600x400/FFF8DC/333333?text=Wedding+Photo+8',
            alt: 'Wedding Photo 8',
            caption: 'Forever Together'
        }
    ];

    return (
        <div className="gallery-page">
            <div className="page-header">
                <h1 className="page-title fade-in">Photo Gallery</h1>
                <p className="page-subtitle">Capturing our beautiful moments</p>
                <div className="title-decoration">✦ ❀ ✦</div>
            </div>

            <div className="container">
                <div className="gallery-note">
                    <p>📸 <em>Replace these placeholder images with your actual wedding photos</em></p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="gallery-item scale-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="image-wrapper">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-caption">{image.caption}</h3>
                                        <div className="overlay-icon">🔍</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-footer">
                    <p className="footer-note">
                        More photos coming soon! Stay tuned for updates.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
