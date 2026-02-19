import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CoverPage from './pages/CoverPage';
import WeddingDetails from './pages/WeddingDetails';
import GroomPage from './pages/GroomPage';
import BridePage from './pages/BridePage';
import WelcomePage from './pages/WelcomePage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CoverPage />} />
        <Route path="/details" element={<WeddingDetails />} />
        <Route path="/groom" element={<GroomPage />} />
        <Route path="/bride" element={<BridePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
