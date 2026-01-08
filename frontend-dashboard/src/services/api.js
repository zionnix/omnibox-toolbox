import axios from 'axios';

// URL du backend LinkTree sur Render
const API_URL = import.meta.env.VITE_API_URL || 'https://linktree-k2t6.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- SERVICES POUR LINKTREE ---

// Récupérer tous les liens
export const getLinks = async () => {
  try {
    const response = await api.get('/links');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des liens:", error);
    throw error;
  }
};

// Enregistrer un clic sur un lien (pour les stats vivantes)
export const trackClick = async (linkId) => {
  try {
    const response = await api.patch(`/links/${linkId}/click`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors du tracking du clic:", error);
  }
};

// Ajouter un nouveau lien (nécessite authentification)
export const addLink = async (linkData) => {
  try {
    const response = await api.post('/links', linkData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout du lien:", error);
    throw error;
  }
};

// Supprimer un lien (nécessite authentification)
export const deleteLink = async (id) => {
  try {
    const response = await api.delete(`/links/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression du lien:", error);
    throw error;
  }
};

// --- SERVICES POUR L'AUTHENTIFICATION ---

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    if (response.data.user) {
      // Stocker les infos utilisateur au lieu d'un token
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erreur de connexion";
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('user');
};

export default api;