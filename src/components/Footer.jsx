import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Our Special Day</h3>
                        <p className="footer-text">
                            Join us in celebrating the union of two hearts, two families, and two souls.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <div className="footer-links">
                            <a href="/" className="footer-link">Home</a>
                            <a href="/bride" className="footer-link">Bride</a>
                            <a href="/groom" className="footer-link">Groom</a>
                            <a href="/muhoortham" className="footer-link">Muhoortham</a>
                            <a href="/gallery" className="footer-link">Gallery</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Contact</h3>
                        <p className="footer-text">
                            For any queries, please reach out to us.
                        </p>
                        <div className="footer-icons">
                            <span className="footer-icon">📧</span>
                            <span className="footer-icon">📱</span>
                            <span className="footer-icon">💌</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Wedding Website. Made with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
