import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createAppointment, getBookedSlots } from '../../services/api';
import styles from './JMD.module.scss';

const JMDView = () => {
  const [showModal, setShowModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30', 
    '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  useEffect(() => {
    if (showContactForm) {
      loadBookedSlots();
    }
  }, [showContactForm]);

  const loadBookedSlots = async () => {
    try {
      const slots = await getBookedSlots();
      setBookedSlots(slots);
    } catch (error) {
      console.error('Error loading booked slots:', error);
    }
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Premier jour du mois
    const firstDay = new Date(year, month, 1);
    // Dernier jour du mois
    const lastDay = new Date(year, month + 1, 0);
    
    // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
    let firstDayOfWeek = firstDay.getDay();
    // Ajuster pour que lundi soit 0
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    const days = [];
    
    // Ajouter les jours vides au début
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Ajouter tous les jours du mois
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
      
      // Skip dimanche (0)
      if (dayOfWeek !== 0 && date >= today) {
        days.push(date);
      } else if (dayOfWeek === 0) {
        days.push(null); // Dimanche = case vide
      } else {
        days.push(null); // Jours passés = case vide
      }
    }
    
    return days;
  };

  const nextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    setCurrentMonth(next);
  };

  const prevMonth = () => {
    const prev = new Date(currentMonth);
    prev.setMonth(prev.getMonth() - 1);
    // Ne pas revenir avant le mois actuel
    const today = new Date();
    if (prev >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(prev);
    }
  };

  const isTimeSlotBooked = (date, time) => {
    if (!date) return false;
    const dateStr = date.toISOString().split('T')[0];
    return bookedSlots.some(slot => {
      const slotDate = new Date(slot.date).toISOString().split('T')[0];
      return slotDate === dateStr && slot.time === time;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Veuillez sélectionner une date et une heure');
      return;
    }

    setSubmitting(true);
    try {
      await createAppointment({
        ...formData,
        date: selectedDate.toISOString(),
        time: selectedTime
      });
      
      setSuccessMessage('Votre demande de rendez-vous a été envoyée avec succès !');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSelectedDate(null);
      setSelectedTime('');
      
      setTimeout(() => {
        setShowContactForm(false);
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Erreur détaillée:', error);
      alert('Erreur lors de l\'envoi de la demande: ' + (error.message || 'Veuillez réessayer'));
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    { icon: '📱', title: 'Gestion Réseaux Sociaux', description: 'Stratégie de contenu, création de posts, planification et analyses pour maximiser votre présence sur Facebook, Instagram, TikTok et LinkedIn.' },
    { icon: '🎨', title: 'Création Visuelle', description: 'Design graphique percutant pour vos campagnes publicitaires, stories engageantes et contenus visuels.' },
    { icon: '📊', title: 'Publicité Digitale', description: 'Campagnes Meta Ads et Google Ads optimisées pour maximiser votre ROI et atteindre votre audience cible.' },
    { icon: '💡', title: 'Stratégie Marketing', description: 'Audit, conseil et accompagnement personnalisé pour développer votre présence digitale et atteindre vos objectifs.' },
    { icon: '🎬', title: 'Montage Vidéo / Photo', description: 'Création de contenus visuels impactants adaptés aux publicités digitales pour maximiser l\'engagement et la conversion sur vos campagnes publicitaires.' },
    { icon: '✍️', title: 'Copywriting', description: 'Rédaction de textes publicitaires percutants pour capter l\'attention, convaincre et inciter votre audience à passer à l\'action par l\'impact de votre objectif publicitaire.' }
  ];

  const portfolioItems = [
    { id: 1, title: "Spicy Ramen Campaign", image: "/png/jmd-remake/spicy-ramen.png" },
    { id: 2, title: "Halloween Promo", image: "/png/jmd-remake/Halloween-Promo.png" },
    { id: 3, title: "Conference Digitale", image: "/png/jmd-remake/Je-Me-Digitalise-conference.png" },
    { id: 4, title: "Promo Automne", image: "/png/jmd-remake/Promo-Automne-Chat.png" },
    { id: 5, title: "PepeStudio 2025", image: "/png/jmd-remake/PepeStudio-2025.png" }
  ];

  const stats = [
    { number: 10, label: "certifications" },
    { number: 5, label: "clients actifs", suffix: "+" },
    { number: 2, label: "années d'expérience", suffix: "+" },
    { number: 11, label: "projets réussis" }
  ];

  const certifications = [
    { name: "Meta Certified Digital Marketing Associate", image: "/png/jmd-remake/Meta-Certification.png", color: "#0081FB" },
    { name: "Google Analytics Certified", image: "/png/jmd-remake/Google-Analytics.png", color: "#F4B400" },
    { name: "Canva Essentials", image: "/png/jmd-remake/Canva-Essentials.png", color: "#00C4CC" },
    { name: "Google Ads Display Certified", image: "/png/jmd-remake/Google-Ads-Display.png", color: "#4285F4" },
    { name: "Canva Graphic Design 101", image: "/png/jmd-remake/Canva-Graphic-Design-101.png", color: "#8B3DFF" },
    { name: "Google Ads Search Certified", image: "/png/jmd-remake/Google-Ads-Search.png", color: "#34A853" },
    { name: "Canva AI in the Classroom", image: "/png/jmd-remake/Canva-Ai-in-the-Classroom.png", color: "#FF6B9D" },
    { name: "Google Ads Creative Certified", image: "/png/jmd-remake/Google-Ads-Creative.png", color: "#EA4335" },
    { name: "Canva Teacher Essentials", image: "/png/jmd-remake/Canva-Teacher-Essentials.png", color: "#FF7A00" },
    { name: "Google Ads Measurement Certified", image: "/png/jmd-remake/Google-Ads-Measurement.png", color: "#FBBC04" }
  ];

  return (
    <div className={styles.jmd}>
      {/* Modal Pop-up */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalIcon}>⚠️</div>
              <h2 className={styles.modalTitle}>Information importante</h2>
              <p className={styles.modalText}>
                Ce site web est une <span className={styles.modalHighlight}>refonte</span> d'un site d'un ami, réalisée avec son autorisation.
              </p>
              <p className={styles.modalSubtext}>Le véritable site web est le suivant :</p>
              <a 
                href="https://nice-jemedigitalise.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.modalLink}
              >
                https://nice-jemedigitalise.com/
              </a>
              <p className={styles.modalNote}>
                Si vous avez besoin de services, passez <span className={styles.modalHighlight}>UNIQUEMENT</span> par son site web officiel.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className={styles.modalButton}
              >
                J'ai compris, continuer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Certifications Section */}
      <section className={styles.certifications}>
        <div className={styles.certificationsContainer}>
          <motion.div
            className={styles.certificationsHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.certificationsSubtitle}>MES CERTIFICATIONS</p>
            <h2 className={styles.certificationsTitle}>Une expertise validée par les leaders du digital</h2>
          </motion.div>
  
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={styles.certCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{ borderColor: cert.color }}
              >
                <div className={styles.certIcon}>
                  <img src={cert.image} alt={cert.name} className={styles.certImage} />
                </div>
                <h3 className={styles.certName}>{cert.name}</h3>
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
                <div 
                  className={styles.portfolioImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
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
          <button 
            onClick={() => setShowContactForm(true)}
            className={styles.ctaButton}
          >
            Discutons de votre projet
          </button>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            className={styles.contactBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              className={styles.contactModal}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton}
                onClick={() => setShowContactForm(false)}
              >
                ✕
              </button>

              <div className={styles.contactGrid}>
                {/* Contact Form */}
                <div className={styles.contactForm}>
                  <h2 className={styles.contactFormTitle}>Contactez-moi</h2>
                  
                  {successMessage && (
                    <div className={styles.successMessage}>
                      ✅ {successMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label>Nom complet *</label>
                      <input 
                        type="text" 
                        placeholder="Votre nom" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email *</label>
                      <input 
                        type="email" 
                        placeholder="votre@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Téléphone</label>
                      <input 
                        type="tel" 
                        placeholder="+32 XXX XX XX XX" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Message</label>
                      <textarea 
                        placeholder="Décrivez brièvement votre projet..." 
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Choisissez une date *</label>
                      
                      <div className={styles.calendarHeader}>
                        <button 
                          type="button"
                          className={styles.monthNavButton}
                          onClick={prevMonth}
                        >
                          ←
                        </button>
                        <h3 className={styles.monthTitle}>
                          {currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button 
                          type="button"
                          className={styles.monthNavButton}
                          onClick={nextMonth}
                        >
                          →
                        </button>
                      </div>

                      <div className={styles.calendarWeekDays}>
                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                          <div key={i} className={styles.weekDay}>{day}</div>
                        ))}
                      </div>

                      <div className={styles.calendarGrid}>
                        {generateCalendarDays().map((date, index) => {
                          if (!date) {
                            return <div key={index} className={styles.emptyDay}></div>;
                          }

                          const isSelected = selectedDate && 
                            date.toDateString() === selectedDate.toDateString();
                          const dayNum = date.getDate();
                          const hasBookedSlots = timeSlots.some(time => isTimeSlotBooked(date, time));
                          
                          return (
                            <button
                              key={index}
                              type="button"
                              className={`${styles.dateButton} ${isSelected ? styles.selected : ''} ${hasBookedSlots ? styles.hasBookings : ''}`}
                              onClick={() => setSelectedDate(date)}
                            >
                              {dayNum}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {selectedDate && (
                      <div className={styles.formGroup}>
                        <label>Choisissez une heure *</label>
                        <div className={styles.timeGrid}>
                          {timeSlots.map((time) => {
                            const isBooked = isTimeSlotBooked(selectedDate, time);
                            const isSelected = selectedTime === time;
                            
                            return (
                              <button
                                key={time}
                                type="button"
                                className={`${styles.timeButton} ${isSelected ? styles.selected : ''} ${isBooked ? styles.booked : ''}`}
                                onClick={() => !isBooked && setSelectedTime(time)}
                                disabled={isBooked}
                              >
                                {time}
                                {isBooked && <span className={styles.bookedMark}>✕</span>}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={submitting || !selectedDate || !selectedTime}
                    >
                      {submitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactInfoTitle}>Informations de contact</h3>
                  
                  <div className={styles.contactInfoItem}>
                    <span className={styles.contactInfoIcon}>📧</span>
                    <div>
                      <p className={styles.contactInfoLabel}>Email</p>
                      <a href="mailto:jules_benoit@outlook.com" className={styles.contactInfoValue}>
                        jules_benoit@outlook.com
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactInfoItem}>
                    <span className={styles.contactInfoIcon}>📱</span>
                    <div>
                      <p className={styles.contactInfoLabel}>Téléphone</p>
                      <p className={styles.contactInfoValue}>+32 498 84 66 36</p>
                    </div>
                  </div>

                  <div className={styles.contactInfoItem}>
                    <span className={styles.contactInfoIcon}>🕒</span>
                    <div>
                      <p className={styles.contactInfoLabel}>Horaires</p>
                      <p className={styles.contactInfoValue}>
                        Lundi - vendredi : 17h - 20h<br />
                        Weekend : 10h - 18h<br />
                        Jours fériés : 10h - 18h
                      </p>
                    </div>
                  </div>

                  <div className={styles.socialLinks}>
                    <p className={styles.socialTitle}>Suivez-moi</p>
                    <div className={styles.socialButtons}>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                        Instagram
                      </a>
                      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                        TikTok
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3 className={styles.footerLogo}>Je Me Digitalise</h3>
              <p className={styles.footerTagline}>Votre partenaire digital</p>
            </div>

            <div className={styles.footerLinks}>
              <a href="#accueil" className={styles.footerLink}>Accueil</a>
              <a href="#services" className={styles.footerLink}>Services</a>
              <a href="#portfolio" className={styles.footerLink}>Portfolio</a>
              <button onClick={() => setShowContactForm(true)} className={styles.footerLink}>Contact</button>
            </div>

            <div className={styles.footerSocial}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                Instagram
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                TikTok
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                YouTube
              </a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2026 Je Me Digitalise. Tous droits réservés.</p>
            <a href="/jmd/admin" className={styles.adminLink}>Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JMDView;
