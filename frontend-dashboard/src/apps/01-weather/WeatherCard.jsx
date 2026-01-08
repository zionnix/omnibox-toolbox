import React from 'react';
import { motion } from 'framer-motion';

const WeatherCard = ({ data }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center"
    >
      <div className="text-6xl font-bold mb-2">{Math.round(data.main.temp)}°C</div>
      <div className="text-xl text-blue-300 capitalize">{data.weather[0].description}</div>
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-400">
        <div className="bg-white/5 p-3 rounded-xl">💧 Humidité: {data.main.humidity}%</div>
        <div className="bg-white/5 p-3 rounded-xl">🌬️ Vent: {data.wind.speed}km/h</div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;