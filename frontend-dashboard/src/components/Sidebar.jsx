import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudSun, Clock, Link as LinkIcon, 
  Scissors, Gamepad2, Sun, LayoutDashboard, Settings, Briefcase,
  X, Info, Palette, Zap, Github
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const menuItems = [
    { name: 'Météo', icon: <CloudSun size={22}/>, path: '/weather', color: 'text-blue-400' },
    { name: 'Horloge', icon: <Clock size={22}/>, path: '/clock', color: 'text-emerald-400' },
    { name: 'LinkTree', icon: <LinkIcon size={22}/>, path: '/links', color: 'text-pink-400' },
    { name: 'Sonic Morph', icon: <Scissors size={22}/>, path: '/sonic-morph', color: 'text-cyan-400' },
    { name: 'Rogue-Like', icon: <Gamepad2 size={22}/>, path: '/rogue-like', color: 'text-red-400' },
    { name: 'Solar System', icon: <Sun size={22}/>, path: '/solar-system', color: 'text-yellow-400' },
    { name: 'JMD Remake', icon: <Briefcase size={22}/>, path: '/jmd', color: 'text-purple-400' },
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-20 hover:w-64 transition-all duration-300 group h-screen bg-brand-gray border-r border-white/10 flex flex-col items-center py-8 z-50"
    >
      <Link to="/" className="mb-10 text-brand-blue hover:text-blue-400 transition-colors">
        <LayoutDashboard size={32} />
      </Link>

      <nav className="flex-1 w-full px-3 space-y-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center p-3 rounded-xl transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-gray-500 hover:bg-white/5'
                }`}
              >
                <span className={`${isActive ? item.color : 'text-inherit'}`}>
                  {item.icon}
                </span>
                <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-brand-blue rounded-r-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <button 
        onClick={() => setShowSettingsModal(true)}
        className="mt-auto text-gray-600 hover:text-white transition-colors"
      >
        <Settings size={22} className="hover:rotate-90 transition-transform duration-500 cursor-pointer" />
      </button>

      {/* Modal des paramètres */}
      <AnimatePresence>
        {showSettingsModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettingsModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Popup */}
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="popup pointer-events-auto w-[700px] h-[85vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-white/10 flex flex-col"
              >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Settings className="text-brand-blue" size={28} />
                  <h2 className="text-2xl font-bold text-white">Paramètres</h2>
                </div>
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8 overflow-y-auto flex-1">
                {/* À propos */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Info size={20} />
                    <h3 className="text-lg font-semibold">À propos</h3>
                  </div>
                  <div className="pl-7 space-y-2 text-gray-300">
                    <p><strong className="text-white">OmniBox Dashboard</strong></p>
                    <p className="text-sm">Collection d'applications web utilitaires</p>
                    <p className="text-sm">Version 1.0.0</p>
                  </div>
                </div>

                {/* Applications disponibles */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Zap size={20} />
                    <h3 className="text-lg font-semibold">Applications</h3>
                  </div>
                  <div className="pl-7 grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <CloudSun size={16} className="text-blue-400" />
                      <span>Météo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-emerald-400" />
                      <span>Horloge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon size={16} className="text-pink-400" />
                      <span>LinkTree</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Scissors size={16} className="text-cyan-400" />
                      <span>Sonic Morph</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gamepad2 size={16} className="text-red-400" />
                      <span>Rogue-Like</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun size={16} className="text-yellow-400" />
                      <span>Solar System</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-purple-400" />
                      <span>JMD Remake</span>
                    </div>
                  </div>
                </div>

                {/* Design */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Palette size={20} />
                    <h3 className="text-lg font-semibold">Design</h3>
                  </div>
                  <div className="pl-7 space-y-2 text-gray-300 text-sm">
                    <p>Thème sombre moderne avec effets glassmorphism</p>
                    <p>Animations fluides via Framer Motion</p>
                    <p>Interface responsive et intuitive</p>
                  </div>
                </div>

                {/* Liens */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Github size={20} />
                    <h3 className="text-lg font-semibold">Liens utiles</h3>
                  </div>
                  <div className="pl-7 space-y-2">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-brand-blue transition-colors"
                    >
                      <Github size={16} />
                      <span>Voir sur GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Footer info */}
                <div className="pt-4 border-t border-white/10 text-center text-xs text-gray-500">
                  <p>Développé avec ⚡ React + Vite + Tailwind CSS</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;