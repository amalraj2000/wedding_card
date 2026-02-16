import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content fade-in">
                    <div className="decorative-element top-left">✦</div>
                    <div className="decorative-element top-right">✦</div>

                    <h1 className="hero-title">
                        <span className="bride-name">Priya</span>
                        <span className="ampersand">&</span>
                        <span className="groom-name">Rahul</span>
                    </h1>

                    <p className="hero-subtitle">
                        Two hearts, one soul
                    </p>

                    <div className="hero-date">
                        <span className="date-icon">📅</span>
                        <span>March 15, 2026</span>
                    </div>

                    <Link to="/muhoortham" className="btn btn-primary hero-btn">
                        View Details
                    </Link>

                    <div className="decorative-element bottom-left">✦</div>
                    <div className="decorative-element bottom-right">✦</div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>

            <section className="welcome-section">
                <div className="container">
                    <h2 className="section-title fade-in">Welcome to Our Wedding</h2>
                    <p className="section-text fade-in">
                        We are delighted to invite you to celebrate the beginning of our forever.
                        Join us as we embark on this beautiful journey together, surrounded by the
                        love and blessings of our families and friends.
                    </p>

                    <div className="info-cards">
                        <div className="info-card scale-in">
                            <div className="card-icon">👰</div>
                            <h3>Meet the Bride</h3>
                            <p>Learn more about Priya and her journey</p>
                            <Link to="/bride" className="card-link">Read More →</Link>
                        </div>

                        <div className="info-card scale-in">
                            <div className="card-icon">🤵</div>
                            <h3>Meet the Groom</h3>
                            <p>Learn more about Rahul and his journey</p>
                            <Link to="/groom" className="card-link">Read More →</Link>
                        </div>

                        <div className="info-card scale-in">
                            <div className="card-icon">📸</div>
                            <h3>Photo Gallery</h3>
                            <p>Browse our beautiful moments together</p>
                            <Link to="/gallery" className="card-link">View Gallery →</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
