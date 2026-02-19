import { BrowserRouter as Router } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import WeddingDetails from './pages/WeddingDetails';
import GroomPage from './pages/GroomPage';
import BridePage from './pages/BridePage';
import WelcomePage from './pages/WelcomePage';
import GalleryPage from './pages/GalleryPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <section id="cover">
          <CoverPage />
        </section>
        <section id="details">
          <WeddingDetails />
        </section>
        <section id="groom">
          <GroomPage />
        </section>
        <section id="bride">
          <BridePage />
        </section>
        <section id="gallery">
          <GalleryPage />
        </section>
        <section id="welcome">
          <WelcomePage />
        </section>
      </div>
    </Router>
  );
}

export default App;
