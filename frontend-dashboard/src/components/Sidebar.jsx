import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CloudSun, Clock, Link as LinkIcon, 
  Scissors, Gamepad2, Sun, LayoutDashboard, Settings, Briefcase 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Météo', icon: <CloudSun size={22}/>, path: '/weather', color: 'text-blue-400' },
    { name: 'Horloge', icon: <Clock size={22}/>, path: '/clock', color: 'text-emerald-400' },
    { name: 'LinkTree', icon: <LinkIcon size={22}/>, path: '/links', color: 'text-pink-400' },
    { name: 'Sonic Morph', icon: <Scissors size={22}/>, path: '/sonic-morph', color: 'text-cyan-400' },
    { name: 'Rogue-Like', icon: <Gamepad2 size={22}/>, path: '/game', color: 'text-red-400' },
    { name: 'Solar System', icon: <Sun size={22}/>, path: '/solar', color: 'text-yellow-400' },
    { name: 'JMD Remake', icon: <Briefcase size={22}/>, path: '/jmd', color: 'text-purple-400' },
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-20 hover:w-64 transition-all duration-300 group h-screen bg-brand-gray border-r border-white/10 flex flex-col items-center py-8 z-50"
    >
      <div className="mb-10 text-brand-blue">
        <LayoutDashboard size={32} />
      </div>

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

      <div className="mt-auto text-gray-600">
        <Settings size={22} className="hover:rotate-90 transition-transform duration-500 cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default Sidebar;