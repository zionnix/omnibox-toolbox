import React, { useEffect, useState } from 'react';
import { getLinks, trackClick, addLink, deleteLink, login, logout, isAuthenticated } from '../../services/api';
import { ExternalLink, Plus, Trash2, LogIn, LogOut, Moon, Sun } from 'lucide-react';
import styles from './LinkTree.module.css';

const LinkHub = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [newLink, setNewLink] = useState({ title: '', url: '', icon: '' });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await getLinks();
        setLinks(data);
      } catch (err) {
        console.error("Impossible de charger les liens");
      } finally {
        setLoading(false);
      }
    };
    fetchLinks();
    setIsAdmin(isAuthenticated());
  }, []);
 
  const handleLinkClick = async (id, url) => {
    await trackClick(id);
    window.open(url, '_blank');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      setIsAdmin(true);
      setShowLoginForm(false);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      alert('Erreur de connexion');
    }
  };

  const handleLogout = () => {
    logout();
    setIsAdmin(false);
  };

  const handleAddLink = async (e) => {
    e.preventDefault();
    try {
      const added = await addLink(newLink);
      setLinks([...links, added]);
      setNewLink({ title: '', url: '', icon: '' });
      setShowAddForm(false);
    } catch (error) {
      alert('Erreur lors de l\'ajout du lien');
    }
  };

  const handleDeleteLink = async (id) => {
    if (window.confirm('Supprimer ce lien ?')) {
      try {
        await deleteLink(id);
        setLinks(links.filter(link => link._id !== id));
      } catch (error) {
        alert('Erreur lors de la suppression');
      }
    }
  };

  if (loading) {
    return (
      <div className={`${styles.container} ${styles[theme]}`}>
        <div className={styles.loading}>
          <div className={styles.sakuraPetal}></div>
          <p>道を探しています...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      {/* Animations de pétales de sakura */}
      <div className={styles.sakuraBackground}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.sakuraPetal} style={{ animationDelay: `${i * 2}s`, left: `${i * 12}%` }}></div>
        ))}
      </div>

      {/* Header avec avatar Hinomaru */}
      <div className={styles.header}>
        <div className={styles.hinomaru}>
          <span className={styles.kanji}>道</span>
        </div>
        <h1 className={styles.title}>LinkTree 庭</h1>
        <p className={styles.subtitle}>すべてのリンクが一箇所に</p>

        {/* Boutons de contrôle */}
        <div className={styles.controls}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          {!isAdmin ? (
            <button onClick={() => setShowLoginForm(!showLoginForm)} className={styles.loginBtn}>
              <LogIn size={18} />
              <span>鍵 ENTRER</span>
            </button>
          ) : (
            <>
              <button onClick={() => setShowAddForm(!showAddForm)} className={styles.addBtn}>
                <Plus size={18} />
                <span>追加</span>
              </button>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                <LogOut size={18} />
                <span>終了 QUITTER</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Formulaire de connexion */}
      {showLoginForm && (
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="email"
            placeholder="メール (Email)"
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="パスワード"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>接続</button>
        </form>
      )}

      {/* Formulaire d'ajout de lien */}
      {showAddForm && (
        <form onSubmit={handleAddLink} className={styles.addForm}>
          <input
            type="text"
            placeholder="タイトル (Titre)"
            value={newLink.title}
            onChange={(e) => setNewLink({...newLink, title: e.target.value})}
            className={styles.input}
            required
          />
          <input
            type="url"
            placeholder="URL"
            value={newLink.url}
            onChange={(e) => setNewLink({...newLink, url: e.target.value})}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="アイコン (Icône emoji)"
            value={newLink.icon}
            onChange={(e) => setNewLink({...newLink, icon: e.target.value})}
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>追加</button>
        </form>
      )}

      {/* Grille de liens */}
      <div className={styles.linksGrid}>
        {links.map((link) => (
          <div key={link._id} className={styles.cyberCard}>
            <button
              onClick={() => handleLinkClick(link._id, link.url)}
              className={styles.linkButton}
            >
              <div className={styles.linkContent}>
                {link.icon && <span className={styles.linkIcon}>{link.icon}</span>}
                <span className={styles.linkTitle}>{link.title}</span>
              </div>
              <div className={styles.linkMeta}>
                <ExternalLink size={16} className={styles.externalIcon} />
                <span className={styles.linkClicks}>{link.clicks || 0} クリック</span>
              </div>
            </button>
            
            {isAdmin && (
              <button
                onClick={() => handleDeleteLink(link._id)}
                className={styles.deleteBtn}
                aria-label="Supprimer"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
      </div>

      {links.length === 0 && (
        <div className={styles.empty}>
          <p>リンクがまだありません</p>
          <p className={styles.emptySubtext}>Aucun lien pour le moment</p>
        </div>
      )}
    </div>
  );
};

export default LinkHub;