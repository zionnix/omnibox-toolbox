const express = require('express');
const router = express.Router();
const User = require('../models/User');

// --- INSCRIPTION (À utiliser une seule fois pour créer ton compte) ---
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "L'utilisateur existe déjà" });

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès !" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- CONNEXION (Login) ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    // Dans un vrai projet pro, on utiliserait un JWT (Token) ici
    res.json({ 
      message: "Connexion réussie !", 
      user: { id: user._id, username: user.username } 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;