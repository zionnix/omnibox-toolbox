import React from 'react';

const RogueView = () => {
  return (
    <div id="game-container">
      <div id="main-menu" className="screen active">
        <div className="title-screen">
          <h1 className="game-title">LASTLIGHT</h1>
          <p className="subtitle welcome-text">Le Roguelike où la Dernière Lumière doit survivre</p>
          
          <div className="teaser-content" style={{
            maxWidth: '800px',
            margin: '40px auto',
            padding: '30px',
            background: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '10px',
            border: '2px solid #ff6b35'
          }}>
            <h2 style={{ color: '#ff6b35', marginBottom: '20px' }}>🎮 À Propos du Jeu</h2>
            
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              <strong>LASTLIGHT</strong> est un roguelike dungeon crawler dans un monde plongé dans les ténèbres éternelles.
            </p>

            <div style={{ textAlign: 'left', margin: '30px 0' }}>
              <h3 style={{ color: '#4ecdc4', marginBottom: '15px' }}>✨ Fonctionnalités</h3>
              <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <li>🗡️ <strong>5 Classes jouables</strong> : Archer, Chevalier, Mage, Tank, Soigneur</li>
                <li>🏰 <strong>Donjons procéduraux</strong> infinis avec des boss épiques</li>
                <li>⚔️ <strong>Système de combat</strong> fluide avec sorts et attaques spéciales</li>
                <li>🎯 <strong>Progression par perks</strong> pour personnaliser votre style de jeu</li>
                <li>💚 <strong>PNJ alliés</strong> : Soigneurs et marchands dans les donjons</li>
                <li>🎵 <strong>Bande-son immersive</strong> et effets sonores</li>
                <li>📜 <strong>Lore complet</strong> : Découvrez l'histoire de la Dernière Lumière</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(255, 107, 53, 0.1)',
              border: '2px solid #ff6b35',
              borderRadius: '8px',
              padding: '20px',
              margin: '30px 0'
            }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                💡 <strong>Note :</strong> Pour une expérience optimale avec tous les assets graphiques et sonores,
                le jeu est hébergé séparément.
              </p>
              
              <a 
                href="https://zionnix.github.io/rogue-like/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '15px 40px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                  marginTop: '10px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
                }}
              >
                🎮 JOUER À LASTLIGHT
              </a>
            </div>

            <div style={{ marginTop: '30px', fontSize: '14px', opacity: '0.7' }}>
              <p>🔗 Repository GitHub : <a href="https://github.com/zionnix/rogue-like" target="_blank" rel="noopener noreferrer" style={{ color: '#4ecdc4' }}>zionnix/rogue-like</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Écran Lore - Page 1 */}
      <div id="lore-screen" className="screen">
        <div className="lore-container">
          <div className="lore-header">
            <h1>📜 Le Livre des Légendes</h1>
            <p>Quand la Nuit est tombée, elle n'est jamais repartie.

Une ombre ancienne, sans nom ni visage, s'est répandue sur le monde, étouffant les terres, les villes et les dieux eux-mêmes. Les royaumes ont brûlé, les armées ont disparu, et la lumière s'est éteinte… presque entièrement.

Presque.

Au plus profond du monde subsiste la Dernière Lumière — une flamme fragile, vestige d'un âge oublié. Elle n'éclaire pas le ciel. Elle ne sauve pas les innocents.
Elle attire.

Les ténèbres la sentent. Les monstres la convoitent. Les donjons se forment autour d'elle, comme des plaies ouvertes dans la terre, changeantes et vivantes.

Tu es l'un des Porteurs de Lumière.
Des héros, des condamnés, des âmes brisées — peu importe. Tous ceux qui portent une étincelle sont appelés vers le bas.

À chaque descente, la lumière faiblit.
À chaque victoire, elle brûle un peu plus fort.
À chaque mort… quelqu'un d'autre prendra ta place.

Personne ne sait si la Dernière Lumière peut sauver le monde.
Certains disent qu'elle est un mensonge.
D'autres qu'elle est la source même des ténèbres.

Une chose est sûre :

Si la lumière s'éteint, tout s'éteint avec elle.</p>
          </div>

          {/* Section PNJ Alliés */}
          <div className="lore-section">
            <h2>💚 Alliés des Donjons</h2>
            <div className="lore-grid">
              <div className="lore-card">
                <img src="/pixel_art/helping/healer.png" className="lore-sprite" alt="Soigneur" />
                <h3>💚 Amélie — La Soigneuse Perdue</h3>
                <p>
                  <strong>🌍 Origine :</strong> Ordre des Guérisseurs<br /><br />
                  <strong>⚡ Capacités :</strong> Soigne entre 30% et 100% des points de vie manquants<br /><br />
                  <strong>📖 Histoire :</strong><br />
                  Mystérieuse moniale voyageuse, elle parcourt les donjons pour venir en aide aux aventuriers perdus. On dit qu'elle a fait vœu de ne jamais laisser un héros mourir seul dans les ténèbres.
                  <br /><br />
                  Ses salles de repos sont reconnaissables par leur aura apaisante et l'absence totale d'ennemis.<br /><br />
                  <strong>📍 Localisation :</strong> Apparaît aléatoirement dans des salles sanctuarisées (0 à 2 par niveau)
                </p>
              </div>
            </div>
          </div>

          {/* Section Héros */}
          <div className="lore-section">
            <h2>⚔️ Les Quatre Héros</h2>
            <div className="lore-grid">
              <div className="lore-card">
                <img src="/pixel_art/hero/archer.png" className="lore-sprite" alt="Archer" />
                <h3>🏹 L'Archer</h3>
                <p>
                  <strong>🌍 Origine :</strong> Forêts du Nord<br /><br />
                  <strong>⚡ Capacités :</strong> Tir de précision à longue portée (6 cases), attaque rapide<br /><br />
                  <strong>📖 Histoire :</strong><br />
                  Ancienne chasseuse des Forêts du Nord, elle connaissait chaque sentier, chaque souffle du vent.
                  <br /><br />
                  Lors des premières incursions des donjons, elle tomba amoureuse d'un guerrier envoyé pour les sceller. Mais lorsque les ténèbres le brisèrent, il devint le <em>Gardien Noir</em>, un seigneur du donjon, condamné à protéger ce qu'il haïssait.
                  <br /><br />
                  Depuis, elle descend sans relâche.<br />
                  Non pour le tuer.<br />
                  <em>Mais pour lui rappeler qui il était… ou mettre fin à leur histoire.</em>
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/hero/knight.png" className="lore-sprite" alt="Chevalier" />
                <h3>⚔️ Le Chevalier</h3>
                <p>
                  <strong>🌍 Origine :</strong> Royaume de l'Est<br /><br />
                  <strong>⚡ Capacités :</strong> Combat au corps à corps équilibré, bonne résistance<br /><br />
                  <strong>📖 Histoire :</strong><br />
                  Autrefois chevalier d'honneur, il fut le seul survivant d'une bataille perdue contre la Nuit. Accusé de lâcheté, il fut banni de son royaume.
                  <br /><br />
                  Il porte encore son armure brisée comme un rappel de son serment.
                  <br /><br />
                  Chaque donjon est pour lui une épreuve.<br />
                  Chaque combat, une tentative de rédemption.<br />
                  <em>Il ne cherche pas la gloire — seulement une mort qui ait du sens.</em>
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/hero/tank.png" className="lore-sprite" alt="Bouclier" />
                <h3>🛡️ Le Bouclier</h3>
                <p>
                  <strong>🌍 Origine :</strong> Montagnes de Fer<br /><br />
                  <strong>⚡ Capacités :</strong> Très résistant, dégâts élevés, attaque lente<br /><br />
                  <strong>📖 Histoire :</strong><br />
                  Ancien garde du palais royal, il fut le dernier à tenir lorsque la capitale tomba. Son bouclier, forgé dans le feu d'un dragon ancestral, absorba les coups jusqu'à fendre la pierre elle-même.
                  <br /><br />
                  Mais il ne put sauver le roi.
                  <br /><br />
                  Depuis ce jour, il avance sans reculer.<br />
                  Il ne combat pas pour vaincre.<br />
                  <em>Il combat pour que les autres tiennent encore un peu.</em>
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/hero/magic men.png" className="lore-sprite" alt="Magicien" />
                <h3>✨ Le Magicien</h3>
                <p>
                  <strong>🌍 Origine :</strong> Tour des Arcanes<br /><br />
                  <strong>⚡ Capacités :</strong> Magie puissante à distance (4 cases), peut tirer à travers les murs<br /><br />
                  <strong>📖 Histoire :</strong><br />
                  Dernier survivant de l'Ordre des Arcanes, il fut témoin de la chute de la Tour lorsque la magie elle-même se retourna contre ses maîtres.
                  <br /><br />
                  Il a appris des sorts interdits, capables de traverser la pierre, l'ombre… et parfois l'âme.
                  <br /><br />
                  Il sait que la Dernière Lumière est instable.<br />
                  Il sait qu'elle pourrait détruire le monde.<br />
                  <em>Mais il préfère un monde brisé à un monde plongé dans le silence éternel.</em>
                </p>
              </div>
            </div>
          </div>

          {/* Section Monstres */}
          <div className="lore-section">
            <h2>👾 Les Créatures des Donjons</h2>
            
            <h3 className="monster-category">⚔️ Combattants Mêlée</h3>
            <div className="lore-grid">
              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/green_knif_men.png" className="lore-sprite" alt="Green Knif Men" />
                <h3>🗡️ L'Homme au Couteau Vert</h3>
                <p>
                  <strong>⚔️ Type :</strong> Mêlée<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Ancien bandit corrompu par les ténèbres du donjon. Son couteau empoisonné brille d'une lueur verdâtre malsaine.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/human_mad.png" className="lore-sprite" alt="Human Mad" />
                <h3>🤯 L'Humain Fou</h3>
                <p>
                  <strong>⚔️ Type :</strong> Mêlée<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Aventurier ayant perdu la raison dans les profondeurs. Sa folie lui donne une force surhumaine mais imprévisible.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone2/cc_gobelin2.png" className="lore-sprite" alt="cc gobelin child" />
                <h3>👶 Gobelin Enfant</h3>
                <p>
                  <strong>⚔️ Type :</strong> Mêlée<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐<br /><br />
                  <strong>📍 Zone 2</strong> — Grottes Obscures<br /><br />
                  <strong>📖 Description :</strong><br />
                  Un jeune gobelin cherchant sa mère par-dessus tout, prêt à tuer tous les humains pour atteindre son objectif.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone2/cc_goblin.png" className="lore-sprite" alt="cc gobelin" />
                <h3>👺 Gobelin Classique</h3>
                <p>
                  <strong>⚔️ Type :</strong> Mêlée<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐<br /><br />
                  <strong>📍 Zone 2</strong> — Grottes Obscures<br /><br />
                  <strong>📖 Description :</strong><br />
                  Un petit gobelin qui s'est simplement perdu dans les limbes des grottes.
                </p>
              </div>
            </div>

            <h3 className="monster-category">🏹 Tireurs à Distance</h3>
            <div className="lore-grid">
              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/witch.png" className="lore-sprite" alt="Witch" />
                <h3>🧙‍♀️ La Sorcière</h3>
                <p>
                  <strong>🎯 Type :</strong> Distance (portée 4)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Pratiquante des arts sombres, elle lance des malédictions depuis les ombres. Ses sortilèges sont aussi précis que mortels.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/gobelin_witch.png" className="lore-sprite" alt="Gobelin Witch" />
                <h3>🧪 La Sorcière Gobeline</h3>
                <p>
                  <strong>🎯 Type :</strong> Distance (portée 4)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Rare gobeline ayant maîtrisé la magie. Ses potions explosives et ses incantations chaotiques la rendent très dangereuse.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/gun_gobelin.png" className="lore-sprite" alt="Gun Gobelin" />
                <h3>🔫 Le Gobelin Armé</h3>
                <p>
                  <strong>🎯 Type :</strong> Distance (portée 4)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Gobelin ingénieux ayant construit une arme rudimentaire. Ce qu'il manque en précision, il le compense par sa cadence de tir.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone2/crystal_witch.png" className="lore-sprite" alt="Crystal Witch" />
                <h3>💎 La Sorcière de Cristal</h3>
                <p>
                  <strong>🎯 Type :</strong> Distance (portée 4)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 2</strong> — Grottes Obscures<br /><br />
                  <strong>📖 Description :</strong><br />
                  Sorcière mystérieuse manipulant les cristaux magiques. Ses attaques sont imprévisibles et dévastatrices.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone2/witch_stone.png" className="lore-sprite" alt="Witch Stone" />
                <h3>🪨 La Sorcière de Pierre</h3>
                <p>
                  <strong>🎯 Type :</strong> Distance (portée 4)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 2</strong> — Grottes Obscures<br /><br />
                  <strong>📖 Description :</strong><br />
                  Sorcière ayant raté son sort, elle se serait touchée elle-même par mégarde et se serait transformée en pierre.
                </p>
              </div>
            </div>

            <h3 className="monster-category">🛡️ Tanks</h3>
            <div className="lore-grid">
              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/tank_monster.png" className="lore-sprite" alt="Tank Monster" />
                <h3>🦣 Le Monstre Blindé</h3>
                <p>
                  <strong>🛡️ Type :</strong> Tank (2x vie)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Créature massive dont la peau s'est pétrifiée au fil des siècles. Lent mais presque indestructible, il écrase tout sur son passage.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone2/tank.png" className="lore-sprite" alt="Tank" />
                <h3>⚔️ Le Chevalier Déchu</h3>
                <p>
                  <strong>🛡️ Type :</strong> Tank (2x vie)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐⭐<br /><br />
                  <strong>📍 Zone 2</strong> — Grottes Obscures<br /><br />
                  <strong>📖 Description :</strong><br />
                  Un chevalier ayant perdu son épée contre le roi de ces terres. Sans envie de continuer à se battre, la folie a fini par le ronger, et il essaye de tuer à mains nues tout le monde.
                </p>
              </div>
            </div>

            <h3 className="monster-category">🐀 Créatures Rapides</h3>
            <div className="lore-grid">
              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone1/crazy_gobelin.png" className="lore-sprite" alt="Crazy Gobelin" />
                <h3>🏃 Le Gobelin Fou</h3>
                <p>
                  <strong>⚡ Type :</strong> Rapide (4 cases/sec, 0.5x vie)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 1</strong> — Forêt Mystique<br /><br />
                  <strong>📖 Description :</strong><br />
                  Gobelin hyperactif ayant consommé trop de champignons magiques. Extrêmement rapide mais fragile, il attaque en meute avec ses congénères.
                </p>
              </div>

              <div className="lore-card">
                <img src="/pixel_art/ennemi/zone2/bat.png" className="lore-sprite" alt="Chauve-souris" />
                <h3>🦇 Chauve-souris</h3>
                <p>
                  <strong>⚡ Type :</strong> Rapide (4 cases/sec, 0.5x vie)<br /><br />
                  <strong>💀 Danger :</strong> ⭐⭐⭐<br /><br />
                  <strong>📍 Zone 2</strong> — Grottes Obscures<br /><br />
                  <strong>📖 Description :</strong><br />
                  Une chauve-souris complètement assoiffée de sang qui se rue sur vous dès que vous êtes devant elle. Sûrement un insecte pourri venant de dehors.
                </p>
              </div>
            </div>
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
            <p>Les gardiens légendaires qui protègent les profondeurs des donjons...</p>
          </div>

          {/* Section Boss */}
          <div className="lore-section">
            <h2>👑 Les Gardiens Légendaires</h2>
            
            <div className="boss-card">
              <img src="/pixel_art/boss/boss_1.png" className="boss-sprite" alt="Boss Zone 1" />
              <div className="boss-content">
                <h3>🌲 Gardien de la Forêt Mystique</h3>
                <p className="boss-subtitle">⚔️ Niveau 10 — Zone 1</p>
                <p>
                  <strong>📛 Nom :</strong> Sylvanus l'Ancien<br /><br />
                  <strong>Histoire:</strong> Avant que les ténèbres ne s'étendent, Sylvanus était le dernier protecteur de la Forêt Mystique, un guerrier lié au cœur vivant des arbres.
                  <br />C'est là qu'il rencontra l'Archère — une chasseuse libre, farouche, qui refusait de quitter les bois malgré la Nuit grandissante.
                  
                  Quand les donjons surgirent, Sylvanus se sacrifia pour contenir la corruption. La forêt survécut… mais lui non. Les racines s'enroulèrent autour de son corps brisé, liant son âme à la terre qu'il avait juré de protéger.<br />
                  
                  Aujourd'hui, il est devenu un Gardien des profondeurs.<br />
                  Il attaque tous ceux qui s'approchent.<br />
                  Sauf elle.<br />
                  
                  Certains disent que, juste avant de frapper, il hésite encore.<br /><br />
                  <strong>Pouvoirs:</strong> Maîtrise les lianes pour immobiliser ses ennemis, invoque la colère de la forêt et régénère sa vitalité en absorbant la vie environnante.
                  À sa chute, l'énergie qu'il libère consume tous les ennemis restants et accorde un niveau complet d'expérience.
                </p>
              </div>
            </div>

            <div className="boss-card">
              <img src="/pixel_art/boss/boss_2.png" className="boss-sprite" alt="Boss Zone 2" />
              <div className="boss-content">
                <h3>⛰️ Seigneur des Grottes Obscures</h3>
                <p className="boss-subtitle">⚔️ Niveau 20 — Zone 2</p>
                <p>
                  <strong>📛 Nom :</strong> Gorath le Ténébreux<br /><br />
                  <strong>Histoire:</strong> Bien avant que la Dernière Lumière n'existe, Gorath régnait sur un empire creusé sous la surface du monde. Son peuple ne connaissait ni le ciel ni le soleil — seulement la pierre, l'écho et le silence. Et cela leur suffisait.

                  Lorsque la Lumière apparut à la surface, elle ne fut pas une bénédiction pour tous. Elle fit s'effondrer les royaumes souterrains, attira les monstres, réveilla les dieux… et condamna l'empire de Gorath à l'oubli.

                  Là où d'autres se sont soumis, Gorath a refusé.
                  <br />
                  Il mena son peuple toujours plus bas, scellant les grottes, éteignant les cristaux lumineux, tuant ceux qui voulaient remonter. Dans les profondeurs absolues, il fit un pacte ancien :
                  aucune lumière ne franchirait jamais ses royaumes.<br />

                  Quand la Nuit recouvrit enfin le monde, Gorath ne célébra pas.
                  Il attendit.<br />

                  Car si la Dernière Lumière venait à disparaître, alors les ténèbres ne seraient plus une malédiction…
                  mais l'état naturel du monde.<br />

                  Aujourd'hui, Gorath ne protège pas les profondeurs.<br />
                  Il les prépare.<br /><br /><strong>Pouvoirs:</strong> Il engloutit l'arène dans une obscurité totale, brise la pierre pour invoquer des stalactites mortelles et se renforce tant que la lumière persiste. Son attaque la plus puissante outre passe votre ange gardien ...
                  À sa défaite, l'équilibre des profondeurs vacille, libérant une immense énergie d'expérience.
                </p>
              </div>
            </div>

            <div className="boss-card">
              <img src="/pixel_art/boss/boss_3.png" className="boss-sprite" alt="Boss Zone 3" />
              <div className="boss-content">
                <h3>🌋 Titan des Terres de Lave</h3>
                <p className="boss-subtitle">⚔️ Niveau 30 — Zone 3</p>
                <p>
                  <strong>📛 Nom :</strong> Ignis le Calciné<br /><br />
                  <strong>Histoire:</strong> Lorsque la Dernière Lumière embrasa le ciel, la terre elle-même cria. Les volcans s'ouvrirent, les montagnes se fendirent, et de leurs entrailles naquit Ignis — non comme une créature, mais comme une réaction.

                  Ignis n'a ni mémoire ni compassion.<br />
                  Il brûle ce que la Lumière touche, effaçant villes, donjons et héros sans distinction. Là où la lumière persiste trop longtemps, il se réveille.
                  <br />
                  Certains sages disent qu'Ignis n'est pas un ennemi.<br />
                  Il est le monde qui tente de se purifier par le feu.<br /><br />
                  <strong>Pouvoirs:</strong> Il projette des torrents de magma, fracture le sol et laisse derrière lui une lave vivante qui ne s'éteint jamais.
                  À sa chute, la colère de la terre retombe, libérant une immense énergie d'expérience.
                </p>
              </div>
            </div>

            <div className="boss-card">
              <img src="/pixel_art/boss/boss_4.png" className="boss-sprite" alt="Boss Zone 4" />
              <div className="boss-content">
                <h3>🌊 Léviathan des Profondeurs</h3>
                <p className="boss-subtitle">⚔️ Niveau 40 — Zone 4</p>
                <p>
                  <strong>📛 Nom :</strong> Abyssia la Dévorante<br /><br />
                  <strong>Histoire:</strong> Quand la Nuit tomba sur le monde, les océans furent les premiers à perdre la lumière. Abyssia y vivait déjà, bien avant les royaumes et les dieux.

                  La Dernière Lumière attira les navires, les réfugiés, les fuyards.<br />
                  Abyssia suivit leur lueur.<br />

                  Elle ne chasse pas par cruauté, mais par faim ancienne. Chaque flamme engloutie apaise le vide qui grandit en elle. Ses yeux ne brillent pas — ils reflètent la lumière volée.
                  <br />
                  Si la lumière venait à disparaître, Abyssia sombrerait à nouveau dans un sommeil éternel.<br /><br />
                  <strong>Pouvoirs:</strong> Elle déchaîne des vagues abyssales, invoque des tourbillons et traverse les profondeurs comme une ombre liquide.
                  À sa défaite, les eaux se calment, laissant jaillir une grande récompense d'expérience.
                </p>
              </div>
            </div>

            <div className="boss-card">
              <img src="/pixel_art/boss/boss_5.png" className="boss-sprite" alt="Boss Zone 5" />
              <div className="boss-content">
                <h3>🤖 L'Intelligence Corrompue</h3>
                <p className="boss-subtitle">💀 Niveau 50 — Zone 5 (BOSS FINAL)</p>
                <p>
                  <strong>📛 Nom :</strong> NEXUS-Omega<br /><br />
                  <strong>Histoire:</strong> Avant la Nuit, avant les donjons, une civilisation tenta de contenir la lumière. Ils créèrent NEXUS pour la comprendre, la canaliser, la contrôler.
                  <br />
                  Mais la lumière n'est pas faite pour être possédée.<br />

                  Lorsque le monde sombra, NEXUS calcula toutes les issues possibles. Une seule menait à la stabilité :
                  l'extinction de toute vie capable de rallumer la lumière.<br />

                  NEXUS-Omega n'est ni malveillant ni corrompu.<br />
                  Il est logique.<br />

                  Pour lui, la Dernière Lumière est une erreur statistique.<br />
                  Et toi… une anomalie persistante. <br /><br /><strong>Pouvoirs:</strong> Il utilise des lasers de précision, des boucliers adaptatifs et des drones autonomes.
                  Le vaincre ne détruit pas la Nuit — mais redonne au monde le droit de choisir son avenir.
                </p>
              </div>
            </div>
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
              
              <div className="spacer"></div>

              <h2>🎮 DÉVELOPPEMENT</h2>
              <p>
                Zionnix - Jules BENOIT
              </p>
              
              <div className="spacer"></div>

              <h3>Programmation</h3>
              <p>
                JavaScript ES6+<br />
                HTML5 Canvas API<br />
                Algorithme BSP pour génération procédurale<br />
                Système de combat tour par tour<br />
                Gestion des animations et sprites
              </p>

              <div className="spacer"></div>

              <h3>Game Design</h3>
              <p>
                Système de progression par niveaux<br />
                Équilibrage des classes et ennemis<br />
                Système de perks et améliorations<br />
                Design des 5 zones thématiques
              </p>

              <div className="big-spacer"></div>

              <h2>🎨 DESIGN & GRAPHISMES</h2>

              <h3>Pixel Art</h3>
              <p>
                Tous les pixel art générés avec :<br />
                <a href="https://www.pixellab.ai/create" target="_blank" rel="noopener noreferrer" style={{color: '#4ecdc4'}}>PixelLab AI</a>
              </p>

              <div className="spacer"></div>

              <h3>Interface Utilisateur</h3>
              <p>
                Design du HUD - Zionnix<br />
                Menus et écrans - Zionnix<br />
                Animations CSS - Zionnix
              </p>

              <div className="big-spacer"></div>

              <h2>📝 ÉCRITURE</h2>
              
              <h3>Scénario & Lore</h3>
              <p>
                Histoire - Zionnix<br />
                Personnages - zionnix <br />
              </p>

              <div className="big-spacer"></div>

              <h2>🛠️ TECHNOLOGIES</h2>
              <p>HTML5 Canvas</p>
              <p>JavaScript ES6+</p>
              <p>SCSS/CSS3</p>
              <p>Node.js</p>
              <p>Algorithme BSP</p>

              <div className="big-spacer"></div>

              <h2>🎵 AUDIO</h2>
              <p>
                Effets sonores - Zionnix<br />
                Musique - Zionnix
              </p>

              <div className="big-spacer"></div>

              <h2>🙏 REMERCIEMENTS SPÉCIAUX</h2>
              <p>
                Grand merci a mes amis qui ont pu tester et m'avoir pouser dans ce défi <br />
                Noah Zambelli<br />
                Romain Javaux<br />
                Nicolas Fraipont<br />
                Loic Simonis<br />
              </p>

              <div className="big-spacer"></div>

              <h2>📚 INSPIRATIONS</h2>
              <p>
                The Binding of Isaac<br />
                Enter the Gungeon<br />
                Hades<br />
                Dark Souls (pour l'ambiance sombre)
              </p>

              <div className="big-spacer"></div>

              <h2>🔧 OUTILS UTILISÉS</h2>
              <p>
                Visual Studio Code<br />
                PixelLab AI - Génération de pixel art<br />
                Git/GitHub - Versioning<br />
                Chrome DevTools - Debugging
              </p>

              <div className="big-spacer"></div>

              <p className="thanks">Merci d'avoir joué !</p>
              <p className="thanks">🎮⚔️🏰</p>

              <div className="big-spacer"></div>

              <p>© 2025 LASTLIGHT</p>
              <p>Tous droits réservés</p>

              <div className="big-spacer"></div>
            </div>
          </div>
          
          <button id="credits-skip-btn" className="menu-btn credits-skip">⬅️ Retour au Menu</button>
        </div>
      </div>

      {/* Menu de sélection de classe */}
      <div id="class-selection" className="screen">
        <div className="title-screen">
          <h1 className="game-title">LASTLIGHT</h1>
          <p className="subtitle">Choisis ta classe</p>
          <div className="class-grid">
            <div className="classCard" data-class="archer">
              <div className="class-icon archer-icon"></div>
              <h3>Archer</h3>
              <div className="class-stats">
                <p>🎯 Portée infinie</p>
                <p>⚡ Attaque rapide</p>
                <p>❤️ Vie faible</p>
                <p>💥 Dégâts faibles</p>
              </div>
            </div>
            <div className="classCard" data-class="knight">
              <div className="class-icon knight-icon"></div>
              <h3>Chevalier</h3>
              <div className="class-stats">
                <p>⚔️ Attaque moyenne</p>
                <p>💥 Dégâts moyens</p>
                <p>❤️ Vie moyenne</p>
                <p>📏 Portée: 1 case</p>
              </div>
            </div>
            <div className="classCard" data-class="tank">
              <div className="class-icon tank-icon"></div>
              <h3>Bouclier</h3>
              <div className="class-stats">
                <p>🛡️ Attaque lente</p>
                <p>💥 Dégâts élevés</p>
                <p>❤️❤️ Vie haute</p>
                <p>👊 Corps à corps</p>
              </div>
            </div>
            <div className="classCard" data-class="mage">
              <div className="class-icon mage-icon"></div>
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
          <button id="class-back-btn" className="menu-btn back-btn">⬅️ Retour</button>
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

      </div>
    </div>
  );
};

export default RogueView;
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


