const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Ajouté : Import de la connexion DB

const app = express();

// --- CONNEXION BASE DE DONNÉES ---
// On utilise ta config db.js au lieu de mongoose.connect directement
connectDB(); 

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json());

// --- ROUTES ---
// On branche tes fichiers de routes ici
app.use('/api/links', require('./routes/linkRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // Ajouté : Ta route login/register
app.use('/api/appointments', require('./routes/appointmentRoutes')); // Ajouté : Gestion rendez-vous

// Route de test
app.get('/', (req, res) => {
  res.send('OmniBox API is running... ⚡');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});