import './Groom.css';

function Groom() {
    return (
        <div className="groom-page">
            <div className="page-header">
                <h1 className="page-title fade-in">The Groom</h1>
                <div className="title-decoration">❀</div>
            </div>

            <div className="container">
                <div className="groom-card card scale-in">
                    <div className="groom-image-container">
                        <img
                            src="/images/groom.png"
                            alt="Groom - Rahul"
                            className="groom-image"
                        />
                        <div className="image-decoration"></div>
                    </div>

                    <div className="groom-details">
                        <h2 className="groom-name">Rahul Mehta</h2>
                        <div className="detail-divider"></div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">👨‍👩‍👧</span>
                                Parents
                            </h3>
                            <p className="detail-text">
                                <strong>Father:</strong> Mr. Anil Mehta<br />
                                <strong>Mother:</strong> Mrs. Kavita Mehta
                            </p>
                        </div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">💼</span>
                                Profession
                            </h3>
                            <p className="detail-text">
                                Senior Business Analyst at Global Enterprises Ltd.
                            </p>
                        </div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">✨</span>
                                About
                            </h3>
                            <p className="detail-text bio">
                                Rahul is a dedicated professional with a keen eye for detail and a passion for
                                problem-solving. He loves sports, music, and exploring new places. His cheerful
                                nature and positive outlook on life inspire everyone around him. He values family
                                traditions and believes in building strong relationships based on trust and respect.
                            </p>
                        </div>

                        <div className="detail-section">
                            <h3 className="detail-title">
                                <span className="detail-icon">🎯</span>
                                Hobbies & Interests
                            </h3>
                            <p className="detail-text">
                                Cricket, Guitar, Photography, Adventure Sports
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Groom;
