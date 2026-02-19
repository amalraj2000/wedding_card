import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = [
        { id: 'cover', label: 'Home', icon: '🏠' },
        { id: 'details', label: 'Event', icon: '📅' },
        { id: 'groom', label: 'Groom', icon: '🤵' },
        { id: 'bride', label: 'Bride', icon: '👰' },
        { id: 'gallery', label: 'Gallery', icon: '📸' },
        { id: 'welcome', label: 'Welcome', icon: '🎉' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: 'rgba(28, 28, 28, 0.8)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(197, 160, 89, 0.3)',
                padding: '10px 0'
            }}
        >
            <div className="navbar-content" style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="nav-item"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            opacity: 0.7,
                            transition: 'opacity 0.3s'
                        }}
                    >
                        <span className="nav-icon" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{item.icon}</span>
                        <span className="nav-label" style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
