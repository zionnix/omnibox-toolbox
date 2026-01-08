require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_URI = process.env.MONGO_URI;

async function addAdminUser() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connecté à MongoDB Atlas');

    // Supprimer l'ancien utilisateur s'il existe
    await User.deleteMany({ email: 'admin@omnibox.com' });

    // Créer un nouvel utilisateur admin
    const adminUser = new User({
      email: 'admin@omnibox.com',
      password: 'admin123',
      username: 'Admin'
    });

    await adminUser.save();
    console.log('✅ Utilisateur admin créé avec succès');
    console.log('📧 Email: admin@omnibox.com');
    console.log('🔑 Mot de passe: admin123');

    await mongoose.connection.close();
    console.log('✅ Connexion fermée');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur:', error);
    process.exit(1);
  }
}

addAdminUser();
