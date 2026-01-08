const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
  pageViews: { 
    type: Number, 
    default: 0 
  },
  projectInteractions: [
    {
      projectName: { type: String, required: true }, // ex: "RogueLike", "SonicMorph"
      clickCount: { type: Number, default: 0 }
    }
  ],
  lastVisit: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

module.exports = mongoose.model('Stats', StatsSchema);