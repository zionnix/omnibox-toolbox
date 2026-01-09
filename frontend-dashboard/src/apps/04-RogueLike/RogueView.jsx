import React, { useEffect, useRef } from 'react';
import Game from './game.js';
import styles from './Rogue.module.css';

const RogueView = () => {
  const gameInstanceRef = useRef(null);
  const containerMountedRef = useRef(false);

  useEffect(() => {
    // Empêcher la double initialisation
    if (containerMountedRef.current) return;
    containerMountedRef.current = true;

    // Délai plus long pour s'assurer que le DOM React est complètement monté
    const initTimeout = setTimeout(() => {
      try {
        // Vérifier que les éléments essentiels existent
        const playBtn = document.getElementById('play-btn');
        const canvas = document.getElementById('game-canvas');
        
        if (!playBtn || !canvas) {
          console.error('❌ Éléments DOM manquants:', { playBtn: !!playBtn, canvas: !!canvas });
          return;
        }

        // Créer et démarrer le jeu
        gameInstanceRef.current = new Game();
        console.log('✅ RogueLike game initialized');
      } catch (error) {
        console.error('❌ Error initializing game:', error);
      }
    }, 200);

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
    <div id="game-container" className={styles.gameContainer}>
      {/* Menu principal */}
      <div id="main-menu" className={`${styles.screen} ${styles.active}`}>
        <div className={styles.titleScreen}>
          <h1 className={styles.gameTitle}>LASTLIGHT</h1>
          <p className={`${styles.subtitle} ${styles.welcomeText}`}>Bienvenue sur LASTLIGHT !</p>
          <div className={styles.menuButtons}>
            <button id="play-btn" className={styles.menuBtn}>🎮 Jouer</button>
            <button id="lore-btn" className={styles.menuBtn}>📜 Lore</button>
            <button id="credits-btn" className={styles.menuBtn}>💥 Crédits</button>
            <button id="quit-btn" className={`${styles.menuBtn} ${styles.quitBtn}`}>🚪 Quitter</button>
          </div>
        </div>
      </div>

      {/* Écran Lore - Page 1 */}
      <div id="lore-screen" className={styles.screen}>
        <div className={styles.loreContainer}>
          <div className={styles.loreHeader}>
            <h1>📜 Le Livre des Légendes</h1>
            <p>L'histoire de la Dernière Lumière...</p>
          </div>
          <div className={styles.loreNavigation}>
            <button id="lore-back-btn" className={styles.menuBtn}>⬅️ Retour au Menu</button>
            <button id="lore-next-btn" className={styles.menuBtn}>➡️ Les Boss</button>
          </div>
        </div>
      </div>

      {/* Écran Lore - Page 2 (Boss) */}
      <div id="lore-screen-2" className={styles.screen}>
        <div className={styles.loreContainer}>
          <div className={styles.loreHeader}>
            <h1>📜 Le Livre des Légendes</h1>
            <p>Les gardiens légendaires...</p>
          </div>
          <div className={styles.loreNavigation}>
            <button id="lore-prev-btn" className={styles.menuBtn}>⬅️ Héros et Monstres</button>
            <button id="lore-back-btn-2" className={styles.menuBtn}>🏠 Retour au Menu</button>
          </div>
        </div>
      </div>

      {/* Écran Crédits */}
      <div id="credits-screen" className={styles.screen}>
        <div className={styles.creditsContainer}>
          <div className={styles.creditsScroll}>
            <div className={styles.creditsContent}>
              <h1>💥 CRÉDITS 💥</h1>
              <h2>🎮 DÉVELOPPEMENT</h2>
              <p>Zionnix - Jules BENOIT</p>
            </div>
          </div>
          <button id="credits-skip-btn" className={`${styles.menuBtn} ${styles.creditsSkip}`}>⬅️ Retour au Menu</button>
        </div>
      </div>

      {/* Menu de sélection de classe */}
      <div id="class-selection" className={styles.screen}>
        <div className={styles.titleScreen}>
          <h1 className={styles.gameTitle}>LASTLIGHT</h1>
          <p className={styles.subtitle}>Choisis ta classe</p>
          <div className={styles.classGrid}>
            <div className={styles.classCard} data-class="archer">
              <div className={`${styles.classIcon} ${styles.archerIcon}`}></div>
              <h3>Archer</h3>
              <div className={styles.classStats}>
                <p>🎯 Portée infinie</p>
                <p>⚡ Attaque rapide</p>
                <p>❤️ Vie faible</p>
                <p>💥 Dégâts faibles</p>
              </div>
            </div>
            <div className={styles.classCard} data-class="knight">
              <div className={`${styles.classIcon} ${styles.knightIcon}`}></div>
              <h3>Chevalier</h3>
              <div className={styles.classStats}>
                <p>⚔️ Attaque moyenne</p>
                <p>💥 Dégâts moyens</p>
                <p>❤️ Vie moyenne</p>
                <p>📏 Portée: 1 case</p>
              </div>
            </div>
            <div className={styles.classCard} data-class="tank">
              <div className={`${styles.classIcon} ${styles.tankIcon}`}></div>
              <h3>Bouclier</h3>
              <div className={styles.classStats}>
                <p>🛡️ Attaque lente</p>
                <p>💥 Dégâts élevés</p>
                <p>❤️❤️ Vie haute</p>
                <p>👊 Corps à corps</p>
              </div>
            </div>
            <div className={styles.classCard} data-class="mage">
              <div className={`${styles.classIcon} ${styles.mageIcon}`}></div>
              <h3>Magicien</h3>
              <div className={styles.classStats}>
                <p>✨ Attaque lente</p>
                <p>💥 Dégâts élevés</p>
                <p>❤️ Vie faible</p>
                <p>📏 Portée: 4 cases</p>
                <p>🔮 Tire à travers murs</p>
              </div>
            </div>
          </div>
          <button id="class-back-btn" className={`${styles.menuBtn} ${styles.backBtn}`}>⬅️ Retour</button>
        </div>
      </div>

      {/* Écran de sélection de perks */}
      <div id="perk-selection" className={styles.screen}>
        <div className={styles.perkSelectionContainer}>
          <div className={styles.perkHeader}>
            <h1 className={styles.levelUpTitle}>⬆️ NIVEAU <span id="new-level">2</span> ⬆️</h1>
            <p className={styles.levelUpSubtitle}>Choisis une amélioration</p>
          </div>
          <div id="perk-choices" className={styles.perkGrid}>
            {/* Les choix de perks seront générés ici par JS */}
          </div>
        </div>
      </div>

      {/* Écran de dialogue de zone */}
      <div id="zone-dialogue" className={styles.screen}>
        <div className={styles.dialogueContainer}>
          <div className={styles.dialogueHero}>
            <img id="dialogue-hero-image" src="" alt="Héros" />
          </div>
          <div className={styles.dialogueContent}>
            <div className={styles.dialogueZoneTitle} id="dialogue-zone-title">Zone 1: Forêt Mystique</div>
            <div className={styles.dialogueBubble}>
              <p id="dialogue-text"></p>
              <span className={styles.dialogueCursor}>▼</span>
            </div>
            <button id="dialogue-finish-btn" className={`${styles.menuBtn} ${styles.dialogueBtn}`} style={{display: 'none'}}>Continuer ➤</button>
          </div>
        </div>
        <p className={styles.dialogueHint}>Clic gauche pour afficher tout le texte</p>
      </div>

      {/* Écran d'animation Seconde Vie */}
      <div id="second-life-screen" className={styles.screen}>
        <div className={styles.secondLifeContainer}>
          <div className={styles.secondLifeCircle}></div>
          <div className={styles.secondLifeHero}>
            <img id="second-life-hero-image" src="" alt="Héros" />
          </div>
          <div className={styles.secondLifeHeart}>💛</div>
          <div className={styles.secondLifeText}>SECONDE VIE</div>
        </div>
      </div>

      {/* Écran de dialogue après Seconde Vie */}
      <div id="second-life-dialogue" className={styles.screen}>
        <div className={styles.secondDialogueContainer}>
          <div className={styles.dialogueAngel}>
            <img id="dialogue-angel-image" src="" alt="Ange" />
            <p className={styles.dialogueSpeakerName}>Amelie - L'Ange Gardien</p>
          </div>
          <div className={styles.dialogueSecondContent}>
            <div className={styles.dialogueBubble}>
              <p id="second-dialogue-text"></p>
              <span className={styles.dialogueCursor}>▼</span>
            </div>
            <button id="second-dialogue-finish-btn" className={`${styles.menuBtn} ${styles.dialogueBtn}`} style={{display: 'none'}}>Continuer ➤</button>
          </div>
          <div className={styles.dialogueSecondHero}>
            <img id="dialogue-second-hero-image" src="" alt="Héros" />
            <p className={styles.dialogueSpeakerName} id="second-hero-name">Héros</p>
          </div>
        </div>
        <p className={styles.dialogueHint}>Clic gauche pour afficher tout le texte</p>
      </div>

      {/* Écran de dialogue avec le boss */}
      <div id="boss-dialogue" className={styles.screen}>
        <div className={styles.secondDialogueContainer}>
          <div className={`${styles.dialogueAngel} ${styles.dialogueBoss}`}>
            <img id="dialogue-boss-image" src="" alt="Boss" />
            <p className={styles.dialogueSpeakerName} id="boss-name">Boss</p>
          </div>
          <div className={styles.dialogueSecondContent}>
            <div className={styles.dialogueBubble}>
              <p id="boss-dialogue-text"></p>
              <span className={styles.dialogueCursor}>▼</span>
            </div>
            <button id="boss-dialogue-finish-btn" className={`${styles.menuBtn} ${styles.dialogueBtn}`} style={{display: 'none'}}>Continuer ➤</button>
          </div>
          <div className={styles.dialogueSecondHero}>
            <img id="dialogue-boss-hero-image" src="" alt="Héros" />
            <p className={styles.dialogueSpeakerName} id="boss-hero-name">Héros</p>
          </div>
        </div>
        <p className={styles.dialogueHint}>Clic gauche pour afficher tout le texte</p>
      </div>

      {/* Écran de jeu principal */}
      <div id="game-screen" className={styles.screen}>
        {/* Bouton retour au menu */}
        <button id="back-to-menu-btn" className={`${styles.menuBtn} ${styles.gameMenuBtn}`}>☰ Menu</button>
        
        {/* HUD supérieur */}
        <div id="hud" className={styles.hud}>
          <div className={styles.hudSection}>
            <div className={styles.playerInfo}>
              <div className={styles.playerAvatar}></div>
              <div className={styles.playerStats}>
                <h3 id="player-class">Archer</h3>
                <div className={styles.statBar}>
                  <span className={styles.statLabel}>HP</span>
                  <div className={`${styles.bar} ${styles.healthBar}`}>
                    <div className={styles.barFill} id="player-health"></div>
                  </div>
                  <span id="health-text">100/100</span>
                </div>
                <div className={styles.statBar}>
                  <span className={styles.statLabel}>XP</span>
                  <div className={`${styles.bar} ${styles.xpBar}`}>
                    <div className={styles.barFill} id="player-xp"></div>
                  </div>
                  <span id="xp-text">0/100</span>
                </div>
                <div id="second-life-indicator" className={styles.secondLifeIndicator} style={{display: 'none'}}>
                  <span className={styles.secondLifeUsedIcon}>💛</span>
                  <span className={styles.secondLifeUsedText}>Seconde vie utilisée</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.hudSection} ${styles.center}`}>
            <div className={styles.levelInfo}>
              <h2 id="level-display">Niveau 1</h2>
              <p id="zone-display">Zone 1: Forêt Mystique</p>
            </div>
          </div>
          <div className={styles.hudSection}>
            <div className={styles.combatLog} id="combat-log">
              <p>Bienvenue dans le donjon...</p>
            </div>
          </div>
        </div>

        {/* Canvas de jeu */}
        <div id="game-canvas-container" className={styles.gameCanvasContainer}>
          <canvas id="game-canvas" className={styles.gameCanvas}></canvas>
        </div>

        {/* Barre de vie du boss */}
        <div id="boss-health-bar" className={styles.bossHealthBar} style={{display: 'none'}}>
          <div className={styles.bossHealthContainer}>
            <span className={styles.bossNameLabel} id="boss-name-label">Boss</span>
            <div className={styles.bossHealthBarOuter}>
              <div className={styles.bossHealthBarInner} id="boss-health-fill"></div>
            </div>
            <span className={styles.bossHealthText} id="boss-health-text">0/0</span>
          </div>
        </div>

        {/* Barre d'amélioration en bas */}
        <div id="upgrades-bar" className={styles.upgradesBar}>
          <h3>Améliorations</h3>
          <div id="upgrades-list"></div>
        </div>
      </div>

      {/* Écran de game over */}
      <div id="game-over" className={styles.screen}>
        <div className={styles.gameOverContent}>
          <h1>GAME OVER</h1>
          <div id="final-stats"></div>
          <button id="restart-btn" className={styles.menuBtn}>Rejouer</button>
        </div>
      </div>

      {/* Écran de victoire */}
      <div id="victory" className={styles.screen}>
        <div className={styles.victoryContent}>
          <h1>🎉 VICTOIRE! 🎉</h1>
          <p className={styles.thanksMessage}>Merci d'avoir joué !</p>
          <p>Tu as vaincu tous les donjons!</p>
          <div id="victory-stats"></div>
          <button id="victory-restart-btn" className={styles.menuBtn}>Rejouer</button>
        </div>
      </div>
    </div>
  );
};

export default RogueView;
