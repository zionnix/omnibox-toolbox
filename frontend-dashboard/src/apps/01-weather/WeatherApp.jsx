import { useState, useEffect, useRef } from 'react';
import styles from './Weather.module.scss';

const API_KEY = '840f2e7255bcf146931fd21cbbbe7b97';
const GEO_URL = (q, limit = 1) => 
  `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(q)}&limit=${limit}&appid=${API_KEY}`;
const FORECAST_URL = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=fr`;

export default function WeatherApp() {
  const [cityInput, setCityInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [currentUnit, setCurrentUnit] = useState('C');
  const [theme, setTheme] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceTimer = useRef(null);

  // Load history on mount
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setHistory(savedHistory);
  }, []);

  // City autocomplete
  const handleCityInput = async (value) => {
    setCityInput(value);
    
    clearTimeout(debounceTimer.current);
    
    if (value.trim().length < 2) {
      setShowSuggestions(false);
      setSuggestions([]);
      return;
    }

    debounceTimer.current = setTimeout(async () => {
      try {
        const response = await fetch(GEO_URL(value, 5));
        const cities = await response.json();
        
        if (cities.length > 0) {
          setSuggestions(cities);
          setShowSuggestions(true);
        } else {
          setShowSuggestions(false);
          setSuggestions([]);
        }
      } catch (err) {
        console.error('Erreur autocomplétion:', err);
      }
    }, 300);
  };

  // Select suggestion
  const handleSuggestionClick = async (city) => {
    const name = `${city.name}${city.state ? ', ' + city.state : ''}, ${city.country}`;
    setCityInput(name);
    setShowSuggestions(false);
    setSuggestions([]);

    try {
      setLoading(true);
      const data = await fetchWeatherByCoords(city.lat, city.lon);
      storeHistory(name, city.lat, city.lon);
      showWeather(data, name);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather by city name
  const fetchWeather = async (city) => {
    try {
      const geoRes = await fetch(GEO_URL(city));
      const geoData = await geoRes.json();
      if (!geoData.length) throw new Error("Ville introuvable");
      const {lat, lon, name, country} = geoData[0];

      const weatherRes = await fetch(FORECAST_URL(lat, lon));
      const data = await weatherRes.json();
      if (data.cod !== "200") throw new Error("Erreur API météo");

      const displayName = `${name}, ${country}`;
      storeHistory(displayName, lat, lon);
      return { data, displayName };
    } catch(err) {
      console.error(err);
      alert("Impossible de récupérer la météo : " + err.message);
      throw err;
    }
  };

  // Fetch weather by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    const weatherRes = await fetch(FORECAST_URL(lat, lon));
    const data = await weatherRes.json();
    if (data.cod !== "200") throw new Error("Erreur API météo");
    return data;
  };

  // Show weather data
  const showWeather = (data, name) => {
    setWeatherData(data);
    setDisplayName(name);
  };

  // Store search history
  const storeHistory = (displayName, lat, lon) => {
    try {
      const list = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      const entry = { displayName, lat, lon, ts: Date.now() };
      const filtered = list.filter(i => i.displayName !== displayName);
      filtered.unshift(entry);
      const sliced = filtered.slice(0, 8);
      localStorage.setItem('searchHistory', JSON.stringify(sliced));
      setHistory(sliced);
    } catch (e) {
      console.warn(e);
    }
  };

  // Handle validate button
  const handleValidate = async () => {
    if (!cityInput.trim()) return;
    setShowSuggestions(false);
    try {
      setLoading(true);
      const {data, displayName} = await fetchWeather(cityInput.trim());
      showWeather(data, displayName);
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle geolocation
  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchWeatherByCoords(latitude, longitude);
          const name = `${data.city.name}, ${data.city.country}`;
          storeHistory(name, latitude, longitude);
          showWeather(data, name);
        } catch (err) {
          console.error('Erreur fetch météo:', err);
          alert("Impossible de récupérer la météo : " + err.message);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error('Erreur géolocalisation:', error);
        let message = "Impossible d'accéder à votre position.";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            message = "Vous avez refusé l'accès à votre position.";
            break;
          case error.POSITION_UNAVAILABLE:
            message = "Votre position est indisponible.";
            break;
          case error.TIMEOUT:
            message = "La demande de géolocalisation a expiré.";
            break;
        }
        alert(message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  // Toggle temperature unit
  const toggleUnit = () => {
    setCurrentUnit(prev => prev === 'C' ? 'F' : 'C');
  };

  // Toggle theme
  const toggleTheme = () => {
    const themes = ['', 'sombre', 'clair'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Temperature conversion
  const convertTemp = (tempC) => {
    return currentUnit === 'C' ? tempC : (tempC * 9/5) + 32;
  };

  const formatTemp = (tempC) => {
    const v = Math.round(convertTemp(tempC));
    return `${v}°${currentUnit}`;
  };

  // Clothing advice
  const clothingAdvice = (temp, pop) => {
    const t = Math.round(temp);
    const parts = [];
    if (t <= 0) parts.push("Gros manteau et gants ❄️");
    else if (t <= 8) parts.push("Manteau chaud");
    else if (t <= 15) parts.push("Veste / pull");
    else if (t <= 22) parts.push("T-shirt + légère couche");
    else parts.push("Tenue légère 🌞");

    if (pop >= 60) parts.push("Parapluie requis");
    else if (pop >= 30) parts.push("Parapluie conseillé");

    return parts.join(' — ');
  };

  // Draw sparkline (SVG)
  const drawSparkline = (values, hours = []) => {
    const w = 300, h = 120, padLeft = 30, padRight = 10, padTop = 20, padBottom = 25;
    if (!values.length) return '';
    const min = Math.min(...values), max = Math.max(...values), range = Math.max(1, max - min);
    const step = (w - padLeft - padRight) / (values.length - 1);
    const pts = values.map((v,i) => {
      const x = padLeft + i * step;
      const y = padTop + (h - padTop - padBottom) - ((v - min) / range * (h - padTop - padBottom));
      return `${x},${y}`;
    }).join(' ');
    
    // Axe Y (température)
    const yAxisLine = `<line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${h - padBottom}" stroke="rgba(255,255,255,0.3)" stroke-width="1" />`;
    const yLabels = [min, (min + max) / 2, max].map((temp, i) => {
      const y = h - padBottom - (i * (h - padTop - padBottom) / 2);
      return `<text x="${padLeft - 5}" y="${y + 3}" text-anchor="end" fill="rgba(255,255,255,0.7)" font-size="10">${Math.round(temp)}°</text>`;
    }).join('');
    
    // Axe X (heures)
    const xAxisLine = `<line x1="${padLeft}" y1="${h - padBottom}" x2="${w - padRight}" y2="${h - padBottom}" stroke="rgba(255,255,255,0.3)" stroke-width="1" />`;
    const xLabels = hours.slice(0, values.length).map((hour, i) => {
      const x = padLeft + i * step;
      return `<text x="${x}" y="${h - 5}" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10">${hour}</text>`;
    }).join('');
    
    // Points et valeurs
    const circles = values.map((v, i) => {
      const x = padLeft + i * step;
      const y = padTop + (h - padTop - padBottom) - ((v - min) / range * (h - padTop - padBottom));
      return `<circle cx="${x}" cy="${y}" r="3" fill="#00b4ff" />`;
    }).join('');
    
    const valueLabels = values.map((v, i) => {
      const x = padLeft + i * step;
      const y = padTop + (h - padTop - padBottom) - ((v - min) / range * (h - padTop - padBottom));
      return `<text x="${x}" y="${y - 6}" text-anchor="middle" fill="#00b4ff" font-size="10" font-weight="600">${Math.round(v)}°</text>`;
    }).join('');
    
    return `${yAxisLine}${xAxisLine}${yLabels}${xLabels}<polyline fill="none" stroke="#00b4ff" stroke-width="2" points="${pts}" />${circles}${valueLabels}`;
  };

  // Render forecast chart
  const renderForecastChart = (values, labels = []) => {
    const w = 600, h = 180, padLeft = 40, padRight = 20, padTop = 30, padBottom = 35;
    if (!values.length) return '';
    const min = Math.min(...values), max = Math.max(...values), range = Math.max(1, max-min);
    const step = (w - padLeft - padRight) / (values.length - 1);
    const pts = values.map((v,i) => {
      const x = padLeft + i * step;
      const y = padTop + (h - padTop - padBottom) - ((v - min) / range * (h - padTop - padBottom));
      return `${x},${y}`;
    }).join(' ');
    
    // Axe Y (température)
    const yAxisLine = `<line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${h - padBottom}" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />`;
    const tempSteps = 4;
    const yLabels = Array.from({length: tempSteps + 1}, (_, i) => {
      const temp = min + (range / tempSteps) * i;
      const y = h - padBottom - (i * (h - padTop - padBottom) / tempSteps);
      const gridLine = `<line x1="${padLeft}" y1="${y}" x2="${w - padRight}" y2="${y}" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="3,3" />`;
      return `${gridLine}<text x="${padLeft - 8}" y="${y + 4}" text-anchor="end" fill="rgba(255,255,255,0.8)" font-size="11">${Math.round(temp)}°</text>`;
    }).join('');
    
    // Axe X (jours)
    const xAxisLine = `<line x1="${padLeft}" y1="${h - padBottom}" x2="${w - padRight}" y2="${h - padBottom}" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />`;
    const xLabels = labels.slice(0, values.length).map((label, i) => {
      const x = padLeft + i * step;
      return `<text x="${x}" y="${h - 10}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11">${label}</text>`;
    }).join('');
    
    // Points et valeurs
    const circles = values.map((v, i) => {
      const x = padLeft + i * step;
      const y = padTop + (h - padTop - padBottom) - ((v - min) / range * (h - padTop - padBottom));
      return `<circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="#00b4ff" stroke-width="2" />`;
    }).join('');
    
    const valueLabels = values.map((v, i) => {
      const x = padLeft + i * step;
      const y = padTop + (h - padTop - padBottom) - ((v - min) / range * (h - padTop - padBottom));
      return `<text x="${x}" y="${y - 8}" text-anchor="middle" fill="#fff" font-size="12" font-weight="600">${Math.round(v)}°</text>`;
    }).join('');
    
    return `${yAxisLine}${xAxisLine}${yLabels}${xLabels}<polyline fill="none" stroke="#fff" stroke-width="2.5" points="${pts}" />${circles}${valueLabels}`;
  };

  // Render forecast cards
  const renderForecast = () => {
    if (!weatherData) return { cards: [], chart: '' };
    
    const tz = weatherData.city.timezone || 0;
    const days = {};
    
    // Grouper toutes les prévisions par jour (y compris les jours partiels)
    weatherData.list.forEach(item => {
      const d = new Date((item.dt + tz) * 1000);
      const day = d.toISOString().slice(0,10);
      days[day] = days[day] || [];
      days[day].push(item);
    });
    
    // Prendre tous les jours disponibles (généralement 5-6, parfois 7 selon l'heure)
    const keys = Object.keys(days).sort();
    const cards = keys.map(k => {
      const items = days[k];
      const temps = items.map(i => i.main.temp);
      const min = Math.min(...temps), max = Math.max(...temps);
      const icon = items[0].weather[0].icon;
      const label = new Date(k).toLocaleDateString(undefined, {weekday:'short', day:'numeric'});
      return { label, icon, min, max };
    });
    
    const chartValues = keys.map(k => {
      const items = days[k];
      const avg = items.reduce((s,i)=>s+i.main.temp,0)/items.length;
      return currentUnit === 'C' ? avg : (avg * 9/5) + 32;
    });
    
    const chartLabels = cards.map(c => c.label);
    
    return { cards, chart: renderForecastChart(chartValues, chartLabels) };
  };

  const themeClass = theme ? `theme-${theme}` : '';
  const forecast = renderForecast();

  return (
    <div className={`${styles.weatherApp} ${themeClass}`}>
      {/* Intro section */}
      {!weatherData && (
        <main className={styles.hero}>
          <div className={styles.intro}>
            <h1>Météo interactive</h1>
            <p className={styles.subtitle}>
              Tape une ville ou clique sur <strong>Votre position</strong>
            </p>

            <div className={styles.controls}>
              <div className={styles.search}>
                <input
                  id="cityInput"
                  placeholder="Chercher une ville (ex : Lisbonne, Liège...)"
                  autoComplete="off"
                  value={cityInput}
                  onChange={(e) => handleCityInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleValidate()}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul className={`${styles.suggestions} ${styles.show}`}>
                    {suggestions.map((city, idx) => {
                      const displayName = `${city.name}${city.state ? ', ' + city.state : ''}, ${city.country}`;
                      return (
                        <li key={idx} onClick={() => handleSuggestionClick(city)}>
                          {displayName}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <div className={styles.buttons}>
                <button type="button" className={styles.btn} onClick={handleValidate} disabled={loading}>
                  {loading ? 'Chargement...' : 'Valider'}
                </button>
                <button type="button" className={styles.btn} onClick={handleGeolocation} disabled={loading}>
                  {loading ? 'Localisation...' : 'Votre position'}
                </button>
                <button type="button" className={`${styles.btn} ${styles.ghost}`} onClick={toggleUnit}>
                  {currentUnit === 'C' ? '°C' : '°F'}
                </button>
                <button type="button" className={`${styles.btn} ${styles.ghost}`} onClick={toggleTheme}>
                  {theme === '' ? 'Défaut' : theme === 'sombre' ? 'Sombre' : 'Clair'}
                </button>
              </div>
            </div>

            {history.length > 0 && (
              <div className={styles.historyWrap}>
                <h4>Recherches récentes</h4>
                <div className={styles.historyList}>
                  {history.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={styles.historyBtn}
                      onClick={async () => {
                        try {
                          setLoading(true);
                          const data = await fetchWeatherByCoords(item.lat, item.lon);
                          showWeather(data, item.displayName);
                        } catch(e) {
                          console.error(e);
                        } finally {
                          setLoading(false);
                        }
                      }}
                    >
                      {item.displayName}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      )}

      {/* Weather panel */}
      {weatherData && (
        <section className={styles.weatherPanel}>
          <div className={styles.container}>
            <header className={styles.top}>
              <div className={styles.place}>{displayName}</div>
              <div className={styles.time}>
                {new Date((weatherData.list[0].dt + (weatherData.city.timezone || 0)) * 1000).toLocaleString()}
              </div>
            </header>

            <div className={styles.mainRow}>
              <div className={styles.left}>
                <div className={styles.bigWeather}>
                  <div className={styles.temp}>{formatTemp(weatherData.list[0].main.temp)}</div>
                  <div className={styles.desc}>{weatherData.list[0].weather[0].description}</div>
                  <div className={styles.minmax}>
                    Min {formatTemp(weatherData.list[0].main.temp_min)} / Max {formatTemp(weatherData.list[0].main.temp_max)}
                  </div>
                </div>

                <div className={styles.precip}>
                  Probabilité précip. {Math.round((weatherData.list[0].pop || 0) * 100)}%
                </div>
                <div className={styles.advice}>
                  {clothingAdvice(weatherData.list[0].main.temp, Math.round((weatherData.list[0].pop || 0) * 100))}
                </div>
              </div>

              <div className={styles.right}>
                <div className={`${styles.card} ${styles.small}`}>
                  <h4>Évolution température (24h)</h4>
                  <svg 
                    id="sparkline" 
                    viewBox="0 0 300 120" 
                    preserveAspectRatio="xMidYMid meet"
                    dangerouslySetInnerHTML={{
                      __html: drawSparkline(
                        weatherData.list.slice(0, 8).map(h => 
                          currentUnit === 'C' ? h.main.temp : (h.main.temp * 9/5) + 32
                        ),
                        weatherData.list.slice(0, 8).map(h => {
                          const d = new Date((h.dt + (weatherData.city.timezone || 0)) * 1000);
                          return `${d.getHours()}h`;
                        })
                      )
                    }}
                  />
                </div>

                <div className={`${styles.card} ${styles.small}`}>
                  <h4>Prochaines heures</h4>
                  <div className={styles.hourLabels}>
                    <span>Heure</span>
                    <span>Temp.</span>
                    <span>Pluie</span>
                  </div>
                  <div className={styles.hourItems}>
                    {weatherData.list.slice(0, 12).map((h, idx) => {
                      const d = new Date((h.dt + (weatherData.city.timezone || 0)) * 1000);
                      return (
                        <div key={idx} className={styles.hourItem}>
                          <div className={styles.hourTime}>{d.getHours()}h</div>
                          <div className={styles.hourTemp}>{formatTemp(h.main.temp)}</div>
                          <div className={styles.hourRain}>{Math.round((h.pop||0)*100)}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <section className={styles.forecastSection}>
              <h4>Prévisions {forecast.cards.length} jours</h4>
              <div className={styles.forecastCards}>
                {forecast.cards.map((card, idx) => (
                  <div key={idx} className={styles.forecastCard}>
                    <div className={styles.fDay}>{card.label}</div>
                    <img src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`} alt="" />
                    <div className={styles.fTemp}>
                      {Math.round(convertTemp(card.min))} / {Math.round(convertTemp(card.max))}°{currentUnit}
                    </div>
                  </div>
                ))}
              </div>
              <h5 className={styles.chartTitle}>Évolution des températures moyennes</h5>
              <svg 
                viewBox="0 0 600 180" 
                className={styles.forecastChart}
                preserveAspectRatio="xMidYMid meet"
                dangerouslySetInnerHTML={{ __html: forecast.chart }}
              />
            </section>

            <footer className={styles.controlsRow}>
              <button 
                type="button" 
                className={`${styles.btn} ${styles.ghost}`}
                onClick={() => setWeatherData(null)}
              >
                Rechercher une autre ville
              </button>
            </footer>
          </div>
        </section>
      )}
    </div>
  );
}