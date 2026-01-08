import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-brand-black overflow-hidden">
      {/* --- ARRIÈRE-PLAN DYNAMIQUE --- */}
      <div className="fixed inset-0 z-0">
        {/* Orbe lumineux qui suit (statique ici, mais animable) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"
        />
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="relative z-10 w-full h-full flex flex-col">
        {children}
      </main>

      {/* --- EFFET DE GRAIN (TEXTURE VIVANTE) --- */}
      <div className="fixed inset-0 z-20 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Layout;