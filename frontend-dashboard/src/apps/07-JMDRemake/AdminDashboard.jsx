import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAppointments, updateAppointmentStatus, deleteAppointment } from '../../services/api';
import styles from './AdminDashboard.module.scss';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('jmd_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadAppointments();
    }
  }, []);

  const loadAppointments = async () => {
    setLoading(true);
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (err) {
      console.error('Error loading appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'nico' && password === '1234') {
      localStorage.setItem('jmd_admin_auth', 'true');
      setIsAuthenticated(true);
      loadAppointments();
      setError('');
    } else {
      setError('Identifiants incorrects');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jmd_admin_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      loadAppointments();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rendez-vous ?')) {
      try {
        await deleteAppointment(id);
        loadAppointments();
      } catch (err) {
        console.error('Error deleting appointment:', err);
      }
    }
  };

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    validated: appointments.filter(a => a.status === 'validated').length,
    refused: appointments.filter(a => a.status === 'refused').length
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <motion.div
          className={styles.loginBox}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.loginIcon}>📋</div>
          <h1 className={styles.loginTitle}>Tableau de bord</h1>
          <p className={styles.loginSubtitle}>Connexion administrateur</p>
          
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label>Nom d'utilisateur</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="nico"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••"
                required
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button type="submit" className={styles.loginButton}>
              Se connecter
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>📋 Tableau de bord</h1>
          <p className={styles.subtitle}>Gestion des rendez-vous</p>
        </div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Déconnexion
        </button>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard} style={{ borderColor: '#4a9eff' }}>
          <div className={styles.statIcon}>📋</div>
          <div className={styles.statNumber}>{stats.total}</div>
          <div className={styles.statLabel}>TOTAL</div>
        </div>
        <div className={styles.statCard} style={{ borderColor: '#ffa940' }}>
          <div className={styles.statIcon}>⏳</div>
          <div className={styles.statNumber}>{stats.pending}</div>
          <div className={styles.statLabel}>EN ATTENTE</div>
        </div>
        <div className={styles.statCard} style={{ borderColor: '#52c41a' }}>
          <div className={styles.statIcon}>✅</div>
          <div className={styles.statNumber}>{stats.validated}</div>
          <div className={styles.statLabel}>VALIDÉES</div>
        </div>
        <div className={styles.statCard} style={{ borderColor: '#f5222d' }}>
          <div className={styles.statIcon}>✖️</div>
          <div className={styles.statNumber}>{stats.refused}</div>
          <div className={styles.statLabel}>REFUSÉES</div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <button
          className={filter === 'all' ? styles.filterActive : ''}
          onClick={() => setFilter('all')}
        >
          Tous
        </button>
        <button
          className={filter === 'pending' ? styles.filterActive : ''}
          onClick={() => setFilter('pending')}
        >
          En attente ({stats.pending})
        </button>
        <button
          className={filter === 'validated' ? styles.filterActive : ''}
          onClick={() => setFilter('validated')}
        >
          Validées ({stats.validated})
        </button>
        <button
          className={filter === 'refused' ? styles.filterActive : ''}
          onClick={() => setFilter('refused')}
        >
          Refusées ({stats.refused})
        </button>
      </div>

      {/* Appointments List */}
      <div className={styles.appointmentsList}>
        <h2 className={styles.listTitle}>
          Rendez-vous ({filteredAppointments.length})
        </h2>
        
        {loading ? (
          <div className={styles.loading}>Chargement...</div>
        ) : filteredAppointments.length === 0 ? (
          <div className={styles.empty}>
            📭 Aucun rendez-vous à afficher
          </div>
        ) : (
          filteredAppointments.map((appointment) => (
            <motion.div
              key={appointment._id}
              className={styles.appointmentCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.appointmentHeader}>
                <div>
                  <h3 className={styles.appointmentName}>{appointment.name}</h3>
                  <p className={styles.appointmentEmail}>{appointment.email}</p>
                </div>
                <span className={`${styles.badge} ${styles[appointment.status]}`}>
                  {appointment.status === 'pending' && '⏳ En attente'}
                  {appointment.status === 'validated' && '✅ Validée'}
                  {appointment.status === 'refused' && '✖️ Refusée'}
                </span>
              </div>

              <div className={styles.appointmentDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📅</span>
                  <span>{new Date(appointment.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>🕒</span>
                  <span>{appointment.time}</span>
                </div>
                {appointment.phone && (
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📱</span>
                    <span>{appointment.phone}</span>
                  </div>
                )}
              </div>

              {appointment.message && (
                <div className={styles.appointmentMessage}>
                  <strong>Message :</strong>
                  <p>{appointment.message}</p>
                </div>
              )}

              <div className={styles.appointmentActions}>
                {appointment.status === 'pending' && (
                  <>
                    <button
                      className={styles.validateButton}
                      onClick={() => handleStatusChange(appointment._id, 'validated')}
                    >
                      ✅ Valider
                    </button>
                    <button
                      className={styles.refuseButton}
                      onClick={() => handleStatusChange(appointment._id, 'refused')}
                    >
                      ✖️ Refuser
                    </button>
                  </>
                )}
                {appointment.status !== 'pending' && (
                  <button
                    className={styles.resetButton}
                    onClick={() => handleStatusChange(appointment._id, 'pending')}
                  >
                    ↩️ Remettre en attente
                  </button>
                )}
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(appointment._id)}
                >
                  🗑️ Supprimer
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
