import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CloudSun, Clock, Link as LinkIcon, 
  Scissors, Gamepad2, Sun, Briefcase,
  Github, Code2, Brain, Zap
} from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const projects = [
    {
      name: 'Météo',
      description: 'Application météo en temps réel avec géolocalisation',
      icon: <CloudSun size={40} />,
      path: '/weather',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      showModal: true,
      details: {
        features: [
          'Géolocalisation automatique pour afficher la météo locale',
          'Recherche de villes en temps réel',
          'Données météo actualisées (température, humidité, vent)',
          'Design moderne et responsive avec animations',
          'Intégration API OpenWeatherMap'
        ],
        tech: ['React', 'OpenWeatherMap API', 'Geolocation API', 'CSS Modules'],
        highlights: [
          'Interface utilisateur intuitive et élégante',
          'Gestion des erreurs et états de chargement',
          'Données précises et à jour'
        ],
        goal: 'Créer une application météo simple et efficace qui permet de consulter rapidement les conditions météorologiques actuelles avec une interface moderne et agréable.'
      }
    },
    {
      name: 'Horloge Intelligente',
      description: 'Horloge mondiale avec fuseaux horaires',
      icon: <Clock size={40} />,
      path: '/clock',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      showModal: true,
      details: {
        features: [
          'Affichage de l\'heure en temps réel',
          'Support de multiples fuseaux horaires mondiaux',
          'Interface élégante avec animations CSS',
          'Format 12h/24h configurable',
          'Design minimaliste et moderne'
        ],
        tech: ['React', 'JavaScript Date API', 'CSS Modules', 'Animations CSS'],
        highlights: [
          'Précision au niveau de la seconde',
          'Visualisation claire et lisible',
          'Parfait pour suivre plusieurs fuseaux horaires'
        ],
        goal: 'Développer une horloge mondiale élégante et fonctionnelle qui facilite le suivi de l\'heure dans différents pays, idéale pour le travail à distance et la coordination internationale.'
      }
    },
    {
      name: 'LinkTree',
      description: 'Page de liens personnalisée avec analytics',
      icon: <LinkIcon size={40} />,
      path: '/links',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      showModal: true,
      details: {
        features: [
          'Page de liens personnalisée style "link in bio"',
          'Système de statistiques et analytics en temps réel',
          'Gestion de portefeuille de projets',
          'Formulaire de contact intégré',
          'Backend Node.js avec MongoDB',
          'Interface d\'administration complète'
        ],
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'TailwindCSS'],
        highlights: [
          'Suivi des clics et visites en temps réel',
          'Design personnalisable et responsive',
          'Parfait pour les réseaux sociaux et portfolios'
        ],
        goal: 'Créer une alternative complète à Linktree avec analytics avancés, permettant de centraliser tous ses liens importants et de suivre leur performance avec précision.'
      }
    },
    {
      name: 'Sonic Morph',
      description: 'Convertisseur audio/vidéo avec FFmpeg',
      icon: <Scissors size={40} />,
      path: '/sonic-morph',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      showModal: true,
      details: {
        features: [
          'Conversion de fichiers audio/vidéo dans de multiples formats',
          'Powered by FFmpeg.wasm (exécution dans le navigateur)',
          'Support de MP3, MP4, WAV, AVI, et bien plus',
          'Traitement local sans upload sur serveur',
          'Interface drag & drop intuitive',
          'Prévisualisation avant conversion'
        ],
        tech: ['React', 'FFmpeg.wasm', 'WebAssembly', 'File API'],
        highlights: [
          'Conversion 100% côté client pour la confidentialité',
          'Aucune limite de taille de fichier (selon votre RAM)',
          'Rapide et efficace grâce à FFmpeg'
        ],
        goal: 'Offrir un outil de conversion audio/vidéo puissant et gratuit qui fonctionne directement dans le navigateur, sans nécessiter d\'upload de fichiers vers un serveur, garantissant ainsi confidentialité et rapidité.'
      }
    },
    {
      name: 'LASTLIGHT',
      description: 'Roguelike dungeon crawler avec 50 niveaux',
      icon: <Gamepad2 size={40} />,
      path: '/rogue-like',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      showModal: false
    },
    {
      name: 'Solar System',
      description: 'Simulation interactive du système solaire',
      icon: <Sun size={40} />,
      path: '/solar-system',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      showModal: true,
      details: {
        features: [
          'Visualisation 3D interactive du système solaire',
          'Simulation réaliste des orbites planétaires',
          'Informations détaillées sur chaque planète',
          'Contrôles de caméra (zoom, rotation, navigation)',
          'Échelle de temps ajustable',
          'Rendu optimisé avec Three.js'
        ],
        tech: ['React', 'Three.js', 'WebGL', 'JavaScript'],
        highlights: [
          'Graphismes 3D fluides et immersifs',
          'Physique orbitale précise',
          'Expérience éducative et interactive'
        ],
        goal: 'Créer une expérience visuelle captivante et éducative permettant d\'explorer notre système solaire de manière interactive, avec des représentations précises des planètes et de leurs orbites.'
      }
    },
    {
      name: 'JMD Remake',
      description: 'Portfolio professionnel avec admin dashboard',
      icon: <Briefcase size={40} />,
      path: '/jmd',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      showModal: false
    }
  ];

  const techStack = [
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'Express', color: 'text-gray-400' },
    { name: 'MongoDB', color: 'text-emerald-500' },
    { name: 'Vite', color: 'text-purple-400' },
    { name: 'TailwindCSS', color: 'text-cyan-500' },
    { name: 'Framer Motion', color: 'text-pink-400' }
  ];

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    
    // Si le projet doit afficher un modal, on l'ouvre
    if (project.showModal) {
      setSelectedProject(project);
      setIsModalOpen(true);
    } else {
      // Sinon, navigation directe (pour Rogue Like et JMD Remake)
      navigate(project.path);
    }
  };

  const handleContinueToProject = () => {
    if (selectedProject) {
      navigate(selectedProject.path);
      setIsModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bienvenue dans OmniBox
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Portfolio interactif & Collection d'outils
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
            {/* Photo de profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
            </motion.div>

            {/* Texte À propos */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Code2 size={32} className="text-blue-400" />
                <h2 className="text-3xl font-bold">À propos</h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Je suis un <span className="text-blue-400 font-semibold">jeune développeur web full-stack</span> passionné 
                par la création d'applications modernes et performantes. J'utilise les technologies les plus récentes pour 
                construire des expériences utilisateur fluides et intuitives.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain size={24} className="text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-400">Intelligence Artificielle</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              J'ai une <span className="text-purple-400 font-semibold">utilisation efficace et raisonnée de l'IA</span>. 
              Je l'utilise principalement pour <span className="text-purple-400">automatiser des tâches récurrentes</span> et 
              optimiser mon workflow de développement, tout en gardant le contrôle créatif sur mes projets.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap size={24} className="text-yellow-400" />
              <h3 className="text-xl font-semibold">Stack Technique</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`px-4 py-2 rounded-full bg-white/5 border border-white/10 ${tech.color} font-medium`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to={project.path}
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  <div className={`${project.bgColor} ${project.borderColor} border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-${project.color}/20`}>
                    <div className={`mb-4 bg-gradient-to-br ${project.color} bg-clip-text text-transparent`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 text-sm text-blue-400 flex items-center gap-2">
                      Découvrir
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-500 mt-16 pb-8"
        >
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://github.com/zionnix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-sm">
            Fait avec ❤️ et beaucoup de ☕
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        onContinue={handleContinueToProject}
      />
    </div>
  );
};

export default Home;
