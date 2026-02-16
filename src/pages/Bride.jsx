import './Bride.css';

function Bride() {
    return (
        <div className="bride-page">
            <div className="page-header">
                <h1 className="page-title fade-in">The Bride</h1>
                <div className="title-decoration">❀</div>
            </div>

            <div className="container">
                <div className="bride-card card scale-in">
                    <div className="bride-image-container">
                        <img
                            src="/images/bride.png"
                            alt="Bride - Priya"
                            className="bride-image"
                        />
                        <div className="image-decoration"></div>
                    </div>

                    <div className="bride-details">
                        <h2 className="bride-name">Priya Sharma</h2>
                        <div className="detail-divider"></div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">👨‍👩‍👧</span>
                                Parents
                            </h3>
                            <p className="detail-text">
                                <strong>Father:</strong> Mr. Rajesh Sharma<br />
                                <strong>Mother:</strong> Mrs. Sunita Sharma
                            </p>
                        </div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">💼</span>
                                Profession
                            </h3>
                            <p className="detail-text">
                                Software Engineer at Tech Solutions Inc.
                            </p>
                        </div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">✨</span>
                                About
                            </h3>
                            <p className="detail-text bio">
                                Priya is a passionate software engineer with a love for creating innovative solutions.
                                She enjoys reading, traveling, and spending time with her family. Her warm personality
                                and kind heart have touched the lives of everyone around her. She believes in living
                                life to the fullest and cherishing every moment with loved ones.
                            </p>
                        </div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">🎨</span>
                                Hobbies & Interests
                            </h3>
                            <p className="detail-text">
                                Classical Dance, Painting, Cooking, Traveling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bride;
