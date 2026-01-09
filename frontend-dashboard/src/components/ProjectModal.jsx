import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Code, Zap, Target } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project, onContinue }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-2xl w-full ${project.bgColor} backdrop-blur-xl border ${project.borderColor} rounded-3xl shadow-2xl overflow-hidden`}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} className="text-white" />
                  </button>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-white">
                      {project.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{project.name}</h2>
                  </div>
                  
                  <p className="text-white/90 text-lg">{project.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Détails du projet */}
                {project.details && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Sparkles size={20} />
                      <h3 className="text-xl font-semibold">Fonctionnalités</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {project.details.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.details?.tech && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Code size={20} />
                      <h3 className="text-xl font-semibold">Technologies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.details.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Points clés */}
                {project.details?.highlights && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Zap size={20} />
                      <h3 className="text-xl font-semibold">Points clés</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {project.details.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Objectif */}
                {project.details?.goal && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-400">
                      <Target size={20} />
                      <h3 className="text-xl font-semibold">Objectif</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {project.details.goal}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-6 pt-0 flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-gray-300 font-medium"
                >
                  Retour
                </button>
                <button
                  onClick={onContinue}
                  className={`flex-1 px-6 py-3 bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-${project.color}/30 rounded-xl transition-all text-white font-semibold`}
                >
                  Découvrir le projet →
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
