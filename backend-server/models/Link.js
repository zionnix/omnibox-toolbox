const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String }, // Ex: "Github", "Twitter"
  clicks: { type: Number, default: 0 }, // Pour rendre le site vivant avec des stats !
  order: { type: Number } // Pour gérer l'ordre d'affichage
});

module.exports = mongoose.model('Link', LinkSchema);