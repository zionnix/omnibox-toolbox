const User = require('../models/User');

// --- INSCRIPTION ---
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Cet utilisateur existe déjà." });

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "Compte créé avec succès ! Tu peux maintenant te connecter." });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de l'inscription : " + err.message });
  }
};

// --- CONNEXION ---
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect." });
    }

    res.json({ 
      message: "Connexion réussie !", 
      user: { id: user._id, username: user.username } 
    });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la connexion : " + err.message });
  }
};