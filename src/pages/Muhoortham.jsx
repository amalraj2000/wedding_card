import { useState, useEffect } from 'react';
import './Muhoortham.css';

function Muhoortham() {
    const weddingDate = new Date('2026-03-15T10:30:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = weddingDate - new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleViewLocation = () => {
        // Replace with actual wedding venue coordinates
        const venueLocation = 'https://www.google.com/maps/place/Taj+Palace,+New+Delhi';
        window.open(venueLocation, '_blank');
    };

    return (
        <div className="muhoortham-page">
            <div className="traditional-bg"></div>

            <div className="container">
                <div className="muhoortham-content fade-in">
                    <h1 className="page-title">Muhoortham</h1>
                    <div className="title-decoration">✦ ❀ ✦</div>

                    <div className="ceremony-card card scale-in">
                        <div className="ceremony-icon">💒</div>

                        <h2 className="ceremony-title">Wedding Ceremony</h2>

                        <div className="date-time-section">
                            <div className="date-box">
                                <span className="date-icon">📅</span>
                                <div className="date-details">
                                    <p className="date-label">Date</p>
                                    <p className="date-value">March 15, 2026</p>
                                    <p className="date-day">Sunday</p>
                                </div>
                            </div>

                            <div className="time-box">
                                <span className="time-icon">🕐</span>
                                <div className="time-details">
                                    <p className="time-label">Auspicious Time</p>
                                    <p className="time-value">10:30 AM</p>
                                    <p className="time-note">Shubh Muhurat</p>
                                </div>
                            </div>
                        </div>

                        <div className="venue-section">
                            <h3 className="venue-title">
                                <span className="venue-icon">📍</span>
                                Venue
                            </h3>
                            <p className="venue-name">Grand Palace Wedding Hall</p>
                            <p className="venue-address">
                                123 Wedding Street, New Delhi, India
                            </p>

                            <button
                                onClick={handleViewLocation}
                                className="btn btn-secondary location-btn"
                            >
                                <span className="map-icon">🗺️</span>
                                View Location
                            </button>
                        </div>
                    </div>

                    <div className="countdown-section">
                        <h2 className="countdown-title">Countdown to Our Special Day</h2>

                        <div className="countdown-timer">
                            <div className="time-unit">
                                <div className="time-value">{timeLeft.days}</div>
                                <div className="time-label">Days</div>
                            </div>

                            <div className="time-separator">:</div>

                            <div className="time-unit">
                                <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                                <div className="time-label">Hours</div>
                            </div>

                            <div className="time-separator">:</div>

                            <div className="time-unit">
                                <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                <div className="time-label">Minutes</div>
                            </div>

                            <div className="time-separator">:</div>

                            <div className="time-unit">
                                <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                <div className="time-label">Seconds</div>
                            </div>
                        </div>
                    </div>

                    <div className="blessing-text">
                        <p>
                            "May this union be blessed with love, joy, and prosperity.
                            We look forward to celebrating this sacred moment with you."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Muhoortham;
