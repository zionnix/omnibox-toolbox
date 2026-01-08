const Link = require('../models/Link');

// --- RÉCUPÉRER TOUS LES LIENS ---
exports.getAllLinks = async (req, res) => {
  try {
    const links = await Link.find().sort({ order: 1 });
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: "Impossible de récupérer les liens." });
  }
};

// --- AJOUTER UN LIEN ---
exports.createLink = async (req, res) => {
  try {
    const { title, url, icon, order } = req.body;
    const newLink = new Link({ title, url, icon, order });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de la création du lien." });
  }
};

// --- SUPPRIMER UN LIEN ---
exports.deleteLink = async (req, res) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);
    if (!link) return res.status(404).json({ message: "Lien non trouvé" });
    res.json({ message: "Lien supprimé avec succès" });
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de la suppression." });
  }
};

// --- TRACKING DES CLICS (VIVANT) ---
exports.trackClick = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    if (!link) return res.status(404).json({ message: "Lien non trouvé" });
    
    link.clicks += 1;
    await link.save();
    res.json({ message: "Clic enregistré !", clicks: link.clicks });
  } catch (err) {
    res.status(400).json({ message: "Erreur de tracking." });
  }
};