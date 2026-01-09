import React, { useState, useEffect } from 'react';
import styles from './Solar.module.css';

const SolarSystem = () => {
  const [paused, setPaused] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mettre à jour l'heure chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Périodes orbitales en jours terrestres
  const orbitalPeriods = {
    mercury: 88,
    venus: 225,
    earth: 365.25,
    mars: 687,
    jupiter: 4333, // 11.9 ans
    saturn: 10759, // 29.5 ans
    uranus: 30687, // 84 ans
    neptune: 60190, // 165 ans
    pluto: 90560 // 248 ans
  };

  // Calculer la position réelle de chaque planète
  const calculatePlanetPosition = (planet) => {
    // Date de référence : 1er janvier 2000, 12h00 UTC
    const referenceDate = new Date('2000-01-01T12:00:00Z');
    const daysSinceReference = (currentTime - referenceDate) / (1000 * 60 * 60 * 24);
    
    // Calculer l'angle en fonction de la période orbitale
    const period = orbitalPeriods[planet];
    const angle = ((daysSinceReference / period) * 360) % 360;
    
    return angle;
  };

  const planetData = {
    mercury: { name: "Mercure", temp: "167°C", year: "88 jours", sunDistance: "57,9 millions km", earthDistance: "91,7 millions km", rotation: "58,6 jours" },
    venus: { name: "Vénus", temp: "464°C", year: "225 jours", sunDistance: "108,2 millions km", earthDistance: "41,4 millions km", rotation: "243 jours" },
    earth: { name: "Terre", temp: "15°C", year: "365 jours", sunDistance: "149,6 millions km", earthDistance: "0 km", rotation: "24 heures" },
    mars: { name: "Mars", temp: "-65°C", year: "687 jours", sunDistance: "227,9 millions km", earthDistance: "78 millions km", rotation: "24,6 heures" },
    jupiter: { name: "Jupiter", temp: "-110°C", year: "11,9 ans", sunDistance: "778,5 millions km", earthDistance: "628,7 millions km", rotation: "9,9 heures" },
    saturn: { name: "Saturne", temp: "-140°C", year: "29,5 ans", sunDistance: "1,43 milliards km", earthDistance: "1,35 milliards km", rotation: "10,7 heures" },
    uranus: { name: "Uranus", temp: "-195°C", year: "84 ans", sunDistance: "2,87 milliards km", earthDistance: "2,73 milliards km", rotation: "17,2 heures" },
    neptune: { name: "Neptune", temp: "-200°C", year: "165 ans", sunDistance: "4,5 milliards km", earthDistance: "4,35 milliards km", rotation: "16,1 heures" },
    pluto: { name: "Pluton", temp: "-225°C", year: "248 ans", sunDistance: "5,9 milliards km", earthDistance: "5,75 milliards km", rotation: "6,4 jours" }
  };

  const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

  const toggleRotation = () => {
    setPaused(!paused);
  };

  const selectPlanet = (key) => {
    if (activePlanet === key) {
      setActivePlanet(null);
      setShowInfo(false);
      setShowDisplay(false);
      return;
    }
    setActivePlanet(key);
    setShowInfo(true);
    setShowDisplay(true);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Système Solaire</h1>
        <div className={styles.timeDisplay}>
          <div className={styles.currentDate}>{formatDate(currentTime)}</div>
          <div className={styles.currentTime}>{formatTime(currentTime)}</div>
        </div>
      </header>

      {/* Panel gauche */}
      <div className={styles.panel}>
        <h2 className={styles.titrePanel}>Planètes</h2>
        <ul className={styles.planetList}>
          {planets.map((planet) => (
            <li
              key={planet}
              className={activePlanet === planet ? styles.selected : ''}
              onClick={() => selectPlanet(planet)}
            >
              {planetData[planet].name}
            </li>
          ))}
        </ul>

        <div className={`${styles.infoBox} ${showInfo ? styles.active : ''}`}>
          {activePlanet && (
            <>
              <p><strong>Nom :</strong> {planetData[activePlanet].name}</p>
              <p><strong>Température :</strong> {planetData[activePlanet].temp}</p>
              <p><strong>Rotation autour du soleil :</strong> {planetData[activePlanet].year}</p>
              <p><strong>Distance du soleil :</strong> {planetData[activePlanet].sunDistance}</p>
              <p><strong>Distance à la Terre :</strong> {planetData[activePlanet].earthDistance}</p>
              <p><strong>Rotation sur elle-même :</strong> {planetData[activePlanet].rotation}</p>
            </>
          )}
        </div>
      </div>

      {/* Système solaire central */}
      <div className={styles.system}>
        {/* Soleil */}
        <div className={`${styles.systemOrbit} ${styles.systemOrbitSun}`}>
          <img src="/png/solar-system/sun.png" alt="Sun" className={`${styles.systemIcon} ${styles.systemIconSun}`} />
        </div>

        {/* Planètes avec orbites */}
        {planets.map((planet, index) => {
          const angle = calculatePlanetPosition(planet);
          
          return (
            <div
              key={planet}
              className={`${styles.systemOrbit} ${styles[`systemOrbit${planet.charAt(0).toUpperCase() + planet.slice(1)}`]} ${activePlanet === planet ? styles.selectedOrbit : ''}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`
              }}
            >
              <div
                className={`${styles.systemPlanet} ${styles[`systemPlanet${planet.charAt(0).toUpperCase() + planet.slice(1)}`]} ${activePlanet === planet ? styles.selectedPlanet : ''}`}
                onClick={() => selectPlanet(planet)}
              >
                <img src={`/png/solar-system/${planet}.png`} alt={planetData[planet].name} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Display de planète à droite */}
      <div className={`${styles.planetDisplay} ${showDisplay ? styles.active : ''}`}>
        {activePlanet && (
          <img
            src={`/png/solar-system/${activePlanet}.png`}
            alt={planetData[activePlanet].name}
            className={styles.planetDisplayImg}
          />
        )}
      </div>

      {/* Bouton pause */}
      <button
        className={styles.toggleButton}
        onClick={toggleRotation}
      >
        {paused ? '▶️ Reprendre' : '⏸ Pause'}
      </button>
    </div>
  );
};

export default SolarSystem;
