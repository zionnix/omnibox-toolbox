import React, { useEffect, useRef } from 'react';
import Game from './game.js';
import './Rogue.css'; // PLAIN CSS - PAS CSS Modules

const RogueView = () => {
  const gameInstanceRef = useRef(null);
  const containerMountedRef = useRef(false);

  useEffect(() => {
    // Empêcher la double initialisation
    if (containerMountedRef.current) return;
    containerMountedRef.current = true;

    // Délai minimal pour s'assurer que le DOM React est complètement monté
    const initTimeout = setTimeout(() => {
      try {
        // Vérifier que les éléments essentiels existent
        const playBtn = document.getElementById('play-btn');
        const canvas = document.getElementById('game-canvas');
        
        if (!playBtn || !canvas) {
          console.error('❌ Éléments DOM manquants:', { playBtn: !!playBtn, canvas: !!canvas });
          return;
        }

        // Créer et démarrer le jeu (setupEventListeners est appelé automatiquement)
        gameInstanceRef.current = new Game();
        console.log('✅ RogueLike game initialized');
      } catch (error) {
        console.error('❌ Error initializing game:', error);
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(initTimeout);
      if (gameInstanceRef.current) {
        // Arrêter la musique et nettoyer
        if (gameInstanceRef.current.stopMusic) {
          gameInstanceRef.current.stopMusic();
        }
        gameInstanceRef.current = null;
      }
      containerMountedRef.current = false;
    };
  }, []);

  return (
    <div id="game-container">
      {/* Menu principal - ACTIVE par défaut */}
      <div id="main-menu" className="screen active">
        <div className="title-screen">
          <h1 className="game-title">LASTLIGHT</h1>
          <p className="subtitle welcome-text">Bienvenue sur LASTLIGHT !</p>
          <div className="menu-buttons">
            <button id="play-btn" className="menu-btn">🎮 Jouer</button>
            <button id="lore-btn" className="menu-btn">📜 Lore</button>
            <button id="credits-btn" className="menu-btn">💥 Crédits</button>
            <button id="quit-btn" className="menu-btn quit-btn">🚪 Quitter</button>
          </div>
        </div>
      </div>

      {/* Écran Lore - Page 1 */}
      <div id="lore-screen" className="screen">
        <div className="lore-container">
          <div className="lore-header">
            <h1>📜 Le Livre des Légendes</h1>
            <p>L'histoire de la Dernière Lumière...</p>
          </div>
          <div className="lore-navigation">
            <button id="lore-back-btn" className="menu-btn">⬅️ Retour au Menu</button>
            <button id="lore-next-btn" className="menu-btn">➡️ Les Boss</button>
          </div>
        </div>
      </div>

      {/* Écran Lore - Page 2 (Boss) */}
      <div id="lore-screen-2" className="screen">
        <div className="lore-container">
          <div className="lore-header">
            <h1>📜 Le Livre des Légendes</h1>
            <p>Les gardiens légendaires...</p>
          </div>
          <div className="lore-navigation">
            <button id="lore-prev-btn" className="menu-btn">⬅️ Héros et Monstres</button>
            <button id="lore-back-btn-2" className="menu-btn">🏠 Retour au Menu</button>
          </div>
        </div>
      </div>

      {/* Écran Crédits */}
      <div id="credits-screen" className="screen">
        <div className="credits-container">
          <div className="credits-scroll">
            <div className="credits-content">
              <h1>💥 CRÉDITS 💥</h1>
              <h2>🎮 DÉVELOPPEMENT</h2>
              <p>Zionnix - Jules BENOIT</p>
            </div>
          </div>
          <button id="credits-skip-btn" className="menuBtn creditsSkip">⬅️ Retour au Menu</button>
        </div>
      </div>

      {/* Menu de sélection de classe */}
      <div id="class-selection" className="screen">
        <div className="title-screen">
          <h1 className="game-title">LASTLIGHT</h1>
          <p className="subtitle">Choisis ta classe</p>
          <div className="class-grid">
            <div className="class-card" data-class="archer">
              <div className="classIcon archerIcon"></div>
              <h3>Archer</h3>
              <div className="class-stats">
                <p>🎯 Portée infinie</p>
                <p>⚡ Attaque rapide</p>
                <p>❤️ Vie faible</p>
                <p>💥 Dégâts faibles</p>
              </div>
            </div>
            <div className="class-card" data-class="knight">
              <div className="classIcon knightIcon"></div>
              <h3>Chevalier</h3>
              <div className="class-stats">
                <p>⚔️ Attaque moyenne</p>
                <p>💥 Dégâts moyens</p>
                <p>❤️ Vie moyenne</p>
                <p>📏 Portée: 1 case</p>
              </div>
            </div>
            <div className="class-card" data-class="tank">
              <div className="classIcon tankIcon"></div>
              <h3>Bouclier</h3>
              <div className="class-stats">
                <p>🛡️ Attaque lente</p>
                <p>💥 Dégâts élevés</p>
                <p>❤️❤️ Vie haute</p>
                <p>👊 Corps à corps</p>
              </div>
            </div>
            <div className="class-card" data-class="mage">
              <div className="classIcon mageIcon"></div>
              <h3>Magicien</h3>
              <div className="class-stats">
                <p>✨ Attaque lente</p>
                <p>💥 Dégâts élevés</p>
                <p>❤️ Vie faible</p>
                <p>📏 Portée: 4 cases</p>
                <p>🔮 Tire à travers murs</p>
              </div>
            </div>
          </div>
          <button id="class-back-btn" className="menuBtn backBtn">⬅️ Retour</button>
        </div>
      </div>

      {/* Écran de sélection de perks */}
      <div id="perk-selection" className="screen">
        <div className="perk-selection-container">
          <div className="perk-header">
            <h1 className="level-up-title">⬆️ NIVEAU <span id="new-level">2</span> ⬆️</h1>
            <p className="level-up-subtitle">Choisis une amélioration</p>
          </div>
          <div id="perk-choices" className="perk-grid">
            {/* Les choix de perks seront générés ici par JS */}
          </div>
        </div>
      </div>

      {/* Écran de dialogue de zone */}
      <div id="zone-dialogue" className="screen">
        <div className="dialogue-container">
          <div className="dialogue-hero">
            <img id="dialogue-hero-image" src="" alt="Héros" />
          </div>
          <div className="dialogue-content">
            <div className="dialogue-zone-title" id="dialogue-zone-title">Zone 1: Forêt Mystique</div>
            <div className="dialogue-bubble">
              <p id="dialogue-text"></p>
              <span className="dialogue-cursor">▼</span>
            </div>
            <button id="dialogue-finish-btn" className="menuBtn dialogueBtn" style={{display: 'none'}}>Continuer ➤</button>
          </div>
        </div>
        <p className="dialogue-hint">Clic gauche pour afficher tout le texte</p>
      </div>

      {/* Écran d'animation Seconde Vie */}
      <div id="second-life-screen" className="screen">
        <div className="second-life-container">
          <div className="second-life-circle"></div>
          <div className="second-life-hero">
            <img id="second-life-hero-image" src="" alt="Héros" />
          </div>
          <div className="second-life-heart">💛</div>
          <div className="second-life-text">SECONDE VIE</div>
        </div>
      </div>

      {/* Écran de dialogue après Seconde Vie */}
      <div id="second-life-dialogue" className="screen">
        <div className="second-dialogue-container">
          <div className="dialogue-angel">
            <img id="dialogue-angel-image" src="" alt="Ange" />
            <p className="dialogue-speaker-name">Amelie - L'Ange Gardien</p>
          </div>
          <div className="dialogue-second-content">
            <div className="dialogue-bubble">
              <p id="second-dialogue-text"></p>
              <span className="dialogue-cursor">▼</span>
            </div>
            <button id="second-dialogue-finish-btn" className="menuBtn dialogueBtn" style={{display: 'none'}}>Continuer ➤</button>
          </div>
          <div className="dialogue-second-hero">
            <img id="dialogue-second-hero-image" src="" alt="Héros" />
            <p className="dialogue-speaker-name" id="second-hero-name">Héros</p>
          </div>
        </div>
        <p className="dialogue-hint">Clic gauche pour afficher tout le texte</p>
      </div>

      {/* Écran de dialogue avec le boss */}
      <div id="boss-dialogue" className="screen">
        <div className="second-dialogue-container">
          <div className="dialogueAngel dialogueBoss">
            <img id="dialogue-boss-image" src="" alt="Boss" />
            <p className="dialogue-speaker-name" id="boss-name">Boss</p>
          </div>
          <div className="dialogue-second-content">
            <div className="dialogue-bubble">
              <p id="boss-dialogue-text"></p>
              <span className="dialogue-cursor">▼</span>
            </div>
            <button id="boss-dialogue-finish-btn" className="menuBtn dialogueBtn" style={{display: 'none'}}>Continuer ➤</button>
          </div>
          <div className="dialogue-second-hero">
            <img id="dialogue-boss-hero-image" src="" alt="Héros" />
            <p className="dialogue-speaker-name" id="boss-hero-name">Héros</p>
          </div>
        </div>
        <p className="dialogue-hint">Clic gauche pour afficher tout le texte</p>
      </div>

      {/* Écran de jeu principal */}
      <div id="game-screen" className="screen">
        {/* Bouton retour au menu */}
        <button id="back-to-menu-btn" className="menuBtn gameMenuBtn">☰ Menu</button>
        
        {/* HUD supérieur */}
        <div id="hud" className="hud">
          <div className="hud-section">
            <div className="player-info">
              <div className="player-avatar"></div>
              <div className="player-stats">
                <h3 id="player-class">Archer</h3>
                <div className="stat-bar">
                  <span className="stat-label">HP</span>
                  <div className="bar healthBar">
                    <div className="bar-fill" id="player-health"></div>
                  </div>
                  <span id="health-text">100/100</span>
                </div>
                <div className="stat-bar">
                  <span className="stat-label">XP</span>
                  <div className="bar xpBar">
                    <div className="bar-fill" id="player-xp"></div>
                  </div>
                  <span id="xp-text">0/100</span>
                </div>
                <div id="second-life-indicator" className="second-life-indicator" style={{display: 'none'}}>
                  <span className="second-life-used-icon">💛</span>
                  <span className="second-life-used-text">Seconde vie utilisée</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hudSection center">
            <div className="level-info">
              <h2 id="level-display">Niveau 1</h2>
              <p id="zone-display">Zone 1: Forêt Mystique</p>
            </div>
          </div>
          <div className="hud-section">
            <div className="combat-log" id="combat-log">
              <p>Bienvenue dans le donjon...</p>
            </div>
          </div>
        </div>

        {/* Canvas de jeu */}
        <div id="game-canvas-container" className="game-canvas-container">
          <canvas id="game-canvas" className="game-canvas"></canvas>
        </div>

        {/* Barre de vie du boss */}
        <div id="boss-health-bar" className="boss-health-bar" style={{display: 'none'}}>
          <div className="boss-health-container">
            <span className="boss-name-label" id="boss-name-label">Boss</span>
            <div className="boss-health-bar-outer">
              <div className="boss-health-bar-inner" id="boss-health-fill"></div>
            </div>
            <span className="boss-health-text" id="boss-health-text">0/0</span>
          </div>
        </div>

        {/* Barre d'amélioration en bas */}
        <div id="upgrades-bar" className="upgrades-bar">
          <h3>Améliorations</h3>
          <div id="upgrades-list"></div>
        </div>
      </div>

      {/* Écran de game over */}
      <div id="game-over" className="screen">
        <div className="game-over-content">
          <h1>GAME OVER</h1>
          <div id="final-stats"></div>
          <button id="restart-btn" className="menu-btn">Rejouer</button>
        </div>
      </div>

      {/* Écran de victoire */}
      <div id="victory" className="screen">
        <div className="victory-content">
          <h1>🎉 VICTOIRE! 🎉</h1>
          <p className="thanks-message">Merci d'avoir joué !</p>
          <p>Tu as vaincu tous les donjons!</p>
          <div id="victory-stats"></div>
          <button id="victory-restart-btn" className="menu-btn">Rejouer</button>
        </div>
      </div>
    </div>
  );
};

export default RogueView;


