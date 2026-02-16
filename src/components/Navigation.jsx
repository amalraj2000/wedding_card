import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <span className="logo-icon">💍</span>
                    <span className="logo-text">Our Wedding</span>
                </Link>

                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/')}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/bride"
                            className={`nav-link ${isActive('/bride')}`}
                            onClick={closeMenu}
                        >
                            Bride
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/groom"
                            className={`nav-link ${isActive('/groom')}`}
                            onClick={closeMenu}
                        >
                            Groom
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/muhoortham"
                            className={`nav-link ${isActive('/muhoortham')}`}
                            onClick={closeMenu}
                        >
                            Muhoortham
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/gallery"
                            className={`nav-link ${isActive('/gallery')}`}
                            onClick={closeMenu}
                        >
                            Gallery
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
