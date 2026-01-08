// Script pour créer un utilisateur admin
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function createAdmin() {
  try {
    console.log('🔄 Connexion à MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connecté à MongoDB');
    
    // Vérifier si un admin existe déjà
    const existingAdmin = await User.findOne({ email: 'admin@omnibox.com' });
    
    if (existingAdmin) {
      console.log('⚠️  Un admin existe déjà avec cet email');
      console.log('📧 Email:', existingAdmin.email);
      console.log('👤 Username:', existingAdmin.username);
      process.exit(0);
    }
    
    // Créer un nouvel admin
    const admin = await User.create({
      username: 'admin',
      email: 'admin@omnibox.com',
      password: 'admin123' // Changez ce mot de passe !
    });
    
    console.log('\n✅ Admin créé avec succès !');
    console.log('📧 Email:', admin.email);
    console.log('🔑 Mot de passe: admin123');
    console.log('\n⚠️  IMPORTANT: Changez ce mot de passe après la première connexion !');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

createAdmin();
