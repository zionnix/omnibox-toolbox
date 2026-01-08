import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Importation de tes composants (on les créera juste après)
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

// Importation de tes dossiers projets
import WeatherApp from './01-weather/WeatherApp';
import Clock from './02-SmartClock/Clock';
import LinkHub from './06-LinkTree/LinkHub';
// Importe les autres ici au fur et à mesure...

// Composant pour animer chaque page
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="h-full w-full"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><div className="text-white p-10"><h1>Bienvenue dans OmniBox</h1><p>Sélectionne un outil dans le menu.</p></div></PageWrapper>} />
        <Route path="/weather" element={<PageWrapper><WeatherApp /></PageWrapper>} />
        <Route path="/clock" element={<PageWrapper><Clock /></PageWrapper>} />
        <Route path="/links" element={<PageWrapper><LinkHub /></PageWrapper>} />
        {/* Ajoute tes autres routes ici */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-black overflow-hidden font-sans">
        <Sidebar />
        <div className="flex-1 relative overflow-auto">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;