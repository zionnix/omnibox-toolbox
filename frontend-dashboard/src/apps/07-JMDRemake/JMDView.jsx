import React from 'react';
import { motion } from 'framer-motion';
import styles from './JMD.module.scss';

const JMDView = () => {
  const services = [
    { icon: '📱', title: 'Social Media Management', description: 'Stratégie de contenu et gestion complète de vos réseaux sociaux pour booster votre visibilité' },
    { icon: '📊', title: 'Marketing Digital', description: 'Campagnes publicitaires optimisées sur Meta Ads (Facebook & Instagram) pour maximiser votre ROI' },
    { icon: '🎬', title: 'Montage Vidéo / Photo', description: 'Création de contenus visuels impactants adaptés aux publicités digitales' },
    { icon: '✍️', title: 'Copywriting', description: 'Rédaction de textes publicitaires percutants pour capter l\'attention et convaincre' }
  ];

  const portfolioItems = [
    { id: 1, title: "Spicy Ramen Campaign" },
    { id: 2, title: "Halloween Promo" },
    { id: 3, title: "Conference Digitale" },
    { id: 4, title: "Promo Automne" },
    { id: 5, title: "PepeStudio 2025" }
  ];

  const stats = [
    { number: 10, label: "certifications" },
    { number: 5, label: "clients actifs", suffix: "+" },
    { number: 2, label: "années d'expérience", suffix: "+" },
    { number: 11, label: "projets réussis" }
  ];

  return (
    <div className={styles.jmd}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.heroSubtitle}>Marketing Digital</p>
            <h1 className={styles.heroTitle}>
              Boostez votre présence <span className={styles.heroAccent}>digitale</span>
            </h1>
            <p className={styles.heroDescription}>
              Je vous accompagne dans votre transformation digitale avec des stratégies 
              marketing performantes et des visuels qui captent l'attention.
            </p>
            <a 
              href="mailto:jules_benoit@outlook.com" 
              className={styles.heroCta}
            >
              Prendre rendez-vous
            </a>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroPlaceholder}>
              <span>🚀</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statsItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className={styles.statsNumber}>
                  {stat.number}{stat.suffix || ''}
                </h3>
                <p className={styles.statsLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <motion.div
            className={styles.servicesHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.servicesSubtitle}>Ce que je propose</p>
            <h2 className={styles.servicesTitle}>Services marketing digital</h2>
            <p className={styles.servicesDescription}>
              Des solutions complètes pour propulser votre présence en ligne
            </p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={styles.portfolio}>
        <div className={styles.portfolioContainer}>
          <motion.div
            className={styles.portfolioHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.portfolioSubtitle}>Mes créations</p>
            <h2 className={styles.portfolioTitle}>Des visuels qui captent l'attention</h2>
            <p className={styles.portfolioDescription}>
              Découvrez quelques-unes de mes réalisations pour des marques et entreprises
            </p>
          </motion.div>

          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.portfolioCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.portfolioImage}>
                  <div className={styles.portfolioOverlay}>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>Prêt à digitaliser votre entreprise ?</h2>
          <p className={styles.ctaDescription}>
            Discutons de votre projet et voyons comment je peux vous aider
          </p>
          <a href="mailto:jules_benoit@outlook.com" className={styles.ctaButton}>
            Contactez-moi
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default JMDView;
