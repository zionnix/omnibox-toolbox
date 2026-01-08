// Script pour ajouter des liens de test dans MongoDB
require('dotenv').config();
const mongoose = require('mongoose');
const Link = require('./models/Link');

const testLinks = [
  {
    title: "Portfolio",
    url: "https://github.com/zionnix",
    icon: "💼",
    order: 1,
    clicks: 0
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com",
    icon: "💼",
    order: 2,
    clicks: 0
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    icon: "🐦",
    order: 3,
    clicks: 0
  },
  {
    title: "Instagram",
    url: "https://instagram.com",
    icon: "📸",
    order: 4,
    clicks: 0
  }                                                                                 
];

async function addTestLinks() {
  try {
    console.log('🔄 Connexion à MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connecté à MongoDB');
    
    // Supprimer les anciens liens
    await Link.deleteMany({});
    console.log('🗑️  Anciens liens supprimés');
    
    // Ajouter les nouveaux liens
    for (const link of testLinks) {
      await Link.create(link);
      console.log(`✅ Lien ajouté: ${link.title}`);
    }
    
    console.log('\n🎉 Terminé ! ' + testLinks.length + ' liens ajoutés.');
    
    // Afficher les liens pour vérification
    const allLinks = await Link.find();
    console.log('\n📋 Liens dans la base:');
    allLinks.forEach(link => {
      console.log(`  - ${link.title}: ${link.url}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

addTestLinks();
