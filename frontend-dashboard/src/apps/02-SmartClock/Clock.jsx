import React, { useState, useEffect } from 'react';
import styles from './Clock.module.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [showCityInput, setShowCityInput] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [cityTimezoneOffset, setCityTimezoneOffset] = useState(0);

  const API_KEY = '840f2e7255bcf146931fd21cbbbe7b97';

  const GEO_URL = (q, limit = 1) =>
    `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(q)}&limit=${limit}&appid=${API_KEY}`;

  const WEATHER_URL = (lat, lon) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=fr`;

  // Obtenir la date/heure selon le fuseau horaire de la ville
  const getCityTime = () => {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utcTime + (cityTimezoneOffset * 1000));
  };

  // Mise à jour de l'heure chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCityTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [cityTimezoneOffset]);

  // Obtenir la position de l'utilisateur au chargement
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lon: longitude });
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
          searchCity('Paris');
        }
      );
    } else {
      searchCity('Paris');
    }
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(WEATHER_URL(lat, lon));
      const data = await response.json();
      setTemperature(Math.round(data.main.temp));
      setCity(data.name);
      setCityTimezoneOffset(data.timezone);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo:', error);
    }
  };

  const searchCity = async (cityName) => {
    try {
      const response = await fetch(GEO_URL(cityName));
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon, name } = data[0];
        setCoordinates({ lat, lon });
        setCity(name);
        fetchWeatherData(lat, lon);
        setShowCityInput(false);
        setCitySearch('');
      }
    } catch (error) {
      console.error('Erreur lors de la recherche de ville:', error);
    }
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (citySearch.trim()) {
      searchCity(citySearch);
    }
  };

  // Calcul des pourcentages pour les arcs
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsPercent = (seconds / 60) * 100;
  const minutesPercent = (minutes / 60) * 100;
  const hoursPercent = ((hours % 12) / 12) * 100 + (minutes / 60) * (100 / 12);

  // Jours de la semaine
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const currentDayIndex = time.getDay() === 0 ? 6 : time.getDay() - 1;

  // Formatage de la date
  const months = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];
  const day = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();

  // Déterminer si on utilise "de" ou "d'"
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  const preposition = city && vowels.includes(city[0]) ? "d'" : 'de ';

  // Génération du calendrier du mois
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // Ajuster pour que lundi soit le premier jour (0)
    const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    const days = [];
    
    // Ajouter les jours vides au début
    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(null);
    }
    
    // Ajouter tous les jours du mois
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const calendarDays = getDaysInMonth(time);
  const currentDay = time.getDate();

  return (
    <div className={styles.smartClock}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          HEURE DANS LA VILLE {preposition.toUpperCase()}{city.toUpperCase() || 'CHARGEMENT...'}
        </h1>
      </header>

      <main className={styles.mainContent}>
        {/* Partie gauche - Température */}
        <div className={styles.leftSection}>
          <div className={styles.temperatureCircle}>
            <span className={styles.tempValue}>{temperature !== null ? `${temperature}°` : '--°'}</span>
          </div>
          <div className={styles.cityName}>{city || 'Chargement...'}</div>
          <button 
            className={styles.changeCityBtn} 
            onClick={() => setShowCityInput(!showCityInput)}
          >
            Changer de ville
          </button>

          {showCityInput && (
            <form onSubmit={handleCitySubmit} className={styles.cityInputForm}>
              <div className={styles.cityInputRow}>
                <input
                  type="text"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  placeholder="Nom de la ville"
                  className={styles.cityInput}
                  autoFocus
                />
                <button type="submit" className={styles.submitBtn}>OK</button>
              </div>
            </form>
          )}
        </div>

        {/* Partie centrale - Horloge */}
        <div className={styles.centerSection}>
          <div className={styles.clockContainer}>
            <svg className={styles.clockSvg} viewBox="0 0 200 200">
              {/* Arc pour les heures (bleu) */}
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="rgba(100, 100, 100, 0.2)"
                strokeWidth="8"
              />
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="#00A8FF"
                strokeWidth="8"
                strokeDasharray={`${(hoursPercent / 100) * 534.07} 534.07`}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                className={styles.arcAnimation}
              />

              {/* Arc pour les minutes (vert) */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="rgba(100, 100, 100, 0.2)"
                strokeWidth="8"
              />
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#00FF87"
                strokeWidth="8"
                strokeDasharray={`${(minutesPercent / 100) * 439.82} 439.82`}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                className={styles.arcAnimation}
              />

              {/* Arc pour les secondes (rouge) */}
              <circle
                cx="100"
                cy="100"
                r="55"
                fill="none"
                stroke="rgba(100, 100, 100, 0.2)"
                strokeWidth="8"
              />
              <circle
                cx="100"
                cy="100"
                r="55"
                fill="none"
                stroke="#FF3366"
                strokeWidth="8"
                strokeDasharray={`${(secondsPercent / 100) * 345.58} 345.58`}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                className={styles.arcAnimation}
              />
            </svg>

            <div className={styles.timeDisplay}>
              <div className={styles.timeNumbers}>
                <span className={styles.hours}>{String(hours).padStart(2, '0')}</span>
                <span className={styles.separator}>:</span>
                <span className={styles.minutes}>{String(minutes).padStart(2, '0')}</span>
                <span className={styles.separator}>:</span>
                <span className={styles.seconds}>{String(seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite - Calendrier */}
        <div className={styles.rightSection}>
          <div className={styles.dateDisplay}>
            <span className={styles.day}>{day}</span>
            <span className={styles.month}>{month}</span>
            <span className={styles.year}>{year}</span>
          </div>
          
          <div className={styles.weekDisplay}>
            {daysOfWeek.map((dayLetter, index) => (
              <div key={index} className={styles.dayItem}>
                <span className={styles.dayInitial}>{dayLetter}</span>
                <div className={`${styles.dayIndicator} ${index <= currentDayIndex ? styles.completed : ''}`}>
                  {index <= currentDayIndex && (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M3 8l3 3 7-7"
                        fill="none"
                        stroke="#00FF87"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Calendrier mensuel */}
          <div className={styles.monthCalendar}>
            <div className={styles.calendarHeader}>
              {daysOfWeek.map((dayLetter, index) => (
                <div key={index} className={styles.calendarHeaderDay}>
                  {dayLetter}
                </div>
              ))}
            </div>
            <div className={styles.calendarGrid}>
              {calendarDays.map((dayNum, index) => (
                <div
                  key={index}
                  className={`${styles.calendarDay} ${
                    dayNum === currentDay ? styles.currentDay : ''
                  } ${dayNum === null ? styles.emptyDay : ''}`}
                >
                  {dayNum !== null && dayNum}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clock;