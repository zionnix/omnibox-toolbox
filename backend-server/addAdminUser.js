require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_URI = process.env.MONGO_URI;

async function addAdminUser() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connecté à MongoDB Atlas');
    console.log('📍 Base de données:', mongoose.connection.db.databaseName);

    // Supprimer l'ancien utilisateur s'il existe
    const deleted = await User.deleteMany({ email: 'admin@omnibox.com' });
    console.log('🗑️ Utilisateurs supprimés:', deleted.deletedCount);

    // Créer un nouvel utilisateur admin
    const adminUser = new User({
      email: 'admin@omnibox.com',
      password: 'admin123',
      username: 'Admin'
    });

    const saved = await adminUser.save();
    console.log('✅ Utilisateur admin créé avec succès');
    console.log('💾 ID:', saved._id);
    console.log('📧 Email:', saved.email);
    console.log('👤 Username:', saved.username);
    console.log('🔑 Mot de passe: admin123');
    console.log('📦 Collection:', User.collection.name);

    await mongoose.connection.close();
    console.log('✅ Connexion fermée');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur:', error);
    process.exit(1);
  }
}

addAdminUser();
