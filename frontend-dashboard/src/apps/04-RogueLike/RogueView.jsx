import React from 'react';

const RogueView = () => {
  return (
    <div style={{ 
      background: '#0a0e27',
      minHeight: '100vh',
      overflow: 'auto',
      color: '#e0e0e0'
    }}>
      {/* SECTION 1 - TITRE PRINCIPAL */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{
            fontSize: 'clamp(60px, 10vw, 100px)',
            fontWeight: 'bold',
            color: '#f4c542',
            marginBottom: '20px',
            letterSpacing: '8px',
            fontFamily: 'monospace'
          }}>
            LASTLIGHT
          </h1>
          <p style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            color: '#8ba3c7',
            marginBottom: '40px',
            fontStyle: 'italic'
          }}>
            Bienvenue sur LASTLIGHT
          </p>
          <p style={{
            fontSize: '18px',
            color: '#c5c5c5',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Un roguelike dungeon crawler où la Dernière Lumière doit survivre<br />dans un monde plongé dans les ténèbres éternelles
          </p>
        </div>
      </section>

      {/* SECTION 2 - PRINCIPE DU JEU */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 20px',
        background: '#1a1f3a'
      }}>
        <div style={{ maxWidth: '1100px', width: '100%' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            color: '#f4c542',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Le Gameplay
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: '#0f1629',
              border: '1px solid #2a3f5f',
              borderRadius: '8px',
              padding: '30px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏰</div>
              <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '22px' }}>50 Niveaux Procéduraux</h3>
              <p style={{ lineHeight: '1.7', color: '#c5c5c5' }}>
                Descendez dans les profondeurs à travers 50 niveaux générés procéduralement. Chaque partie est unique avec des salles, des couloirs et des ennemis disposés aléatoirement.
              </p>
            </div>

            <div style={{
              background: '#0f1629',
              border: '1px solid #2a3f5f',
              borderRadius: '8px',
              padding: '30px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>👑</div>
              <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '22px' }}>5 Boss Épiques</h3>
              <p style={{ lineHeight: '1.7', color: '#c5c5c5' }}>
                Affrontez un boss légendaire tous les 10 niveaux (niveaux 10, 20, 30, 40, 50). Chaque boss possède des dialogues uniques et des mécaniques de combat spécifiques.
              </p>
            </div>

            <div style={{
              background: '#0f1629',
              border: '1px solid #2a3f5f',
              borderRadius: '8px',
              padding: '30px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '22px' }}>Système de Perks</h3>
              <p style={{ lineHeight: '1.7', color: '#c5c5c5' }}>
                À chaque niveau, choisissez parmi 3 perks aléatoires pour améliorer vos statistiques : dégâts, vitesse d'attaque, régénération, résistance, et bien plus.
              </p>
            </div>

            <div style={{
              background: '#0f1629',
              border: '1px solid #2a3f5f',
              borderRadius: '8px',
              padding: '30px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🗡️</div>
              <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '22px' }}>4 Classes Jouables</h3>
              <p style={{ lineHeight: '1.7', color: '#c5c5c5' }}>
                Archer (portée infinie), Chevalier (équilibré), Tank (résistant), Magicien (dégâts élevés, tire à travers les murs). Chaque classe a son propre style de combat.
              </p>
            </div>

            <div style={{
              background: '#0f1629',
              border: '1px solid #2a3f5f',
              borderRadius: '8px',
              padding: '30px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>👾</div>
              <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '22px' }}>Ennemis Variés</h3>
              <p style={{ lineHeight: '1.7', color: '#c5c5c5' }}>
                Plus de 15 types d'ennemis différents : combattants mêlée, tireurs à distance, tanks résistants et créatures rapides. Chaque zone possède ses propres monstres.
              </p>
            </div>

            <div style={{
              background: '#0f1629',
              border: '1px solid #2a3f5f',
              borderRadius: '8px',
              padding: '30px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>💚</div>
              <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '22px' }}>Alliés & Soins</h3>
              <p style={{ lineHeight: '1.7', color: '#c5c5c5' }}>
                Rencontrez Amélie la Soigneuse dans des salles sanctuarisées aléatoires. Elle restaure entre 30% et 100% de vos points de vie manquants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - LORE + PERSONNAGES + BOSS */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 20px',
        background: '#0a0e27'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          {/* LORE DU JEU */}
          <div style={{
            background: '#0f1629',
            border: '2px solid #f4c542',
            borderRadius: '10px',
            padding: '50px',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              color: '#f4c542',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              📜 L'Histoire de la Dernière Lumière
            </h2>
            <div style={{
              fontSize: '16px',
              lineHeight: '1.9',
              color: '#c5c5c5',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <p style={{ marginBottom: '20px' }}>
                Quand la Nuit est tombée, elle n'est jamais repartie.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Une ombre ancienne, sans nom ni visage, s'est répandue sur le monde, étouffant les terres, les villes et les dieux eux-mêmes. Les royaumes ont brûlé, les armées ont disparu, et la lumière s'est éteinte… presque entièrement.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#f4c542' }}>Presque.</strong>
              </p>
              <p style={{ marginBottom: '20px' }}>
                Au plus profond du monde subsiste la Dernière Lumière — une flamme fragile, vestige d'un âge oublié. Elle n'éclaire pas le ciel. Elle ne sauve pas les innocents. Elle attire.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Les ténèbres la sentent. Les monstres la convoitent. Les donjons se forment autour d'elle, comme des plaies ouvertes dans la terre, changeantes et vivantes.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Tu es l'un des Porteurs de Lumière. Des héros, des condamnés, des âmes brisées — peu importe. Tous ceux qui portent une étincelle sont appelés vers le bas.
              </p>
              <p style={{ marginBottom: '20px' }}>
                À chaque descente, la lumière faiblit.<br />
                À chaque victoire, elle brûle un peu plus fort.<br />
                À chaque mort… quelqu'un d'autre prendra ta place.
              </p>
              <p style={{ color: '#8ba3c7', fontSize: '18px', fontStyle: 'italic' }}>
                Si la lumière s'éteint, tout s'éteint avec elle.
              </p>
            </div>
          </div>

          {/* LES HÉROS */}
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: '#f4c542',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            ⚔️ Les Héros
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {[
              { 
                name: 'L\'Archer', 
                img: '/pixel_art/rogue-like/heros_talk/archer_1.png',
                lore: 'Ancienne chasseuse des Forêts du Nord, elle connaissait chaque sentier, chaque souffle du vent. Lors des premières incursions des donjons, elle tomba amoureuse d\'un guerrier envoyé pour les sceller. Mais lorsque les ténèbres le brisèrent, il devint le Gardien Noir, un seigneur du donjon, condamné à protéger ce qu\'il haïssait. Depuis, elle descend sans relâche. Non pour le tuer. Mais pour lui rappeler qui il était… ou mettre fin à leur histoire.'
              },
              { 
                name: 'Le Chevalier', 
                img: '/pixel_art/rogue-like/heros_talk/knight_1.png',
                lore: 'Autrefois chevalier d\'honneur, il fut le seul survivant d\'une bataille perdue contre la Nuit. Accusé de lâcheté, il fut banni de son royaume. Il porte encore son armure brisée comme un rappel de son serment. Chaque donjon est pour lui une épreuve. Chaque combat, une tentative de rédemption. Il ne cherche pas la gloire — seulement une mort qui ait du sens.'
              },
              { 
                name: 'Le Bouclier', 
                img: '/pixel_art/rogue-like/heros_talk/tank_1.png',
                lore: 'Ancien garde du palais royal, il fut le dernier à tenir lorsque la capitale tomba. Son bouclier, forgé dans le feu d\'un dragon ancestral, absorba les coups jusqu\'à fendre la pierre elle-même. Mais il ne put sauver le roi. Depuis ce jour, il avance sans reculer. Il ne combat pas pour vaincre. Il combat pour que les autres tiennent encore un peu.'
              },
              { 
                name: 'Le Magicien', 
                img: '/pixel_art/rogue-like/heros_talk/magicien_1.png',
                lore: 'Dernier survivant de l\'Ordre des Arcanes, il fut témoin de la chute de la Tour lorsque la magie elle-même se retourna contre ses maîtres. Il a appris des sorts interdits, capables de traverser la pierre, l\'ombre… et parfois l\'âme. Il sait que la Dernière Lumière est instable. Il sait qu\'elle pourrait détruire le monde. Mais il préfère un monde brisé à un monde plongé dans le silence éternel.'
              }
            ].map((hero, i) => (
              <div key={i} style={{
                background: '#0f1629',
                border: '1px solid #2a3f5f',
                borderRadius: '8px',
                padding: '25px',
                textAlign: 'center'
              }}>
                <img src={hero.img} alt={hero.name} style={{
                  width: '140px',
                  height: '140px',
                  objectFit: 'contain',
                  marginBottom: '20px',
                  imageRendering: 'pixelated'
                }} />
                <h3 style={{ color: '#f4c542', marginBottom: '15px', fontSize: '20px' }}>{hero.name}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#c5c5c5', textAlign: 'left' }}>
                  {hero.lore}
                </p>
              </div>
            ))}
          </div>

          {/* LES BOSS */}
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: '#f4c542',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            👑 Les Gardiens Légendaires
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              { 
                name: 'Sylvanus l\'Ancien', 
                level: 'Niveau 10 - Forêt Mystique', 
                img: '/pixel_art/rogue-like/boss_talk/boss_1.png',
                lore: 'Avant que les ténèbres ne s\'étendent, Sylvanus était le dernier protecteur de la Forêt Mystique, un guerrier lié au cœur vivant des arbres. C\'est là qu\'il rencontra l\'Archère — une chasseuse libre, farouche, qui refusait de quitter les bois malgré la Nuit grandissante. Quand les donjons surgirent, Sylvanus se sacrifia pour contenir la corruption. La forêt survécut… mais lui non. Les racines s\'enroulèrent autour de son corps brisé, liant son âme à la terre qu\'il avait juré de protéger. Aujourd\'hui, il est devenu un Gardien des profondeurs. Il attaque tous ceux qui s\'approchent. Sauf elle. Certains disent que, juste avant de frapper, il hésite encore.'
              },
              { 
                name: 'Gorath le Ténébreux', 
                level: 'Niveau 20 - Grottes Obscures', 
                img: '/pixel_art/rogue-like/boss_talk/boss_2.png',
                lore: 'Bien avant que la Dernière Lumière n\'existe, Gorath régnait sur un empire creusé sous la surface du monde. Son peuple ne connaissait ni le ciel ni le soleil — seulement la pierre, l\'écho et le silence. Et cela leur suffisait. Lorsque la Lumière apparut à la surface, elle ne fut pas une bénédiction pour tous. Elle fit s\'effondrer les royaumes souterrains, attira les monstres, réveilla les dieux… et condamna l\'empire de Gorath à l\'oubli. Là où d\'autres se sont soumis, Gorath a refusé. Il mena son peuple toujours plus bas, scellant les grottes, éteignant les cristaux lumineux, tuant ceux qui voulaient remonter. Dans les profondeurs absolues, il fit un pacte ancien : aucune lumière ne franchirait jamais ses royaumes. Quand la Nuit recouvrit enfin le monde, Gorath ne célébra pas. Il attendit. Car si la Dernière Lumière venait à disparaître, alors les ténèbres ne seraient plus une malédiction… mais l\'état naturel du monde. Aujourd\'hui, Gorath ne protège pas les profondeurs. Il les prépare.'
              },
              { 
                name: 'Ignis le Calciné', 
                level: 'Niveau 30 - Terres de Lave', 
                img: '/pixel_art/rogue-like/boss_talk/boss_3.png',
                lore: 'Lorsque la Dernière Lumière embrasa le ciel, la terre elle-même cria. Les volcans s\'ouvrirent, les montagnes se fendirent, et de leurs entrailles naquit Ignis — non comme une créature, mais comme une réaction. Ignis n\'a ni mémoire ni compassion. Il brûle ce que la Lumière touche, effaçant villes, donjons et héros sans distinction. Là où la lumière persiste trop longtemps, il se réveille. Certains sages disent qu\'Ignis n\'est pas un ennemi. Il est le monde qui tente de se purifier par le feu.'
              },
              { 
                name: 'Abyssia la Dévorante', 
                level: 'Niveau 40 - Profondeurs Aquatiques', 
                img: '/pixel_art/rogue-like/boss_talk/boss_4.png',
                lore: 'Quand la Nuit tomba sur le monde, les océans furent les premiers à perdre la lumière. Abyssia y vivait déjà, bien avant les royaumes et les dieux. La Dernière Lumière attira les navires, les réfugiés, les fuyards. Abyssia suivit leur lueur. Elle ne chasse pas par cruauté, mais par faim ancienne. Chaque flamme engloutie apaise le vide qui grandit en elle. Ses yeux ne brillent pas — ils reflètent la lumière volée. Si la lumière venait à disparaître, Abyssia sombrerait à nouveau dans un sommeil éternel.'
              },
              { 
                name: 'NEXUS-Omega', 
                level: 'Niveau 50 - Intelligence Corrompue (BOSS FINAL)', 
                img: '/pixel_art/rogue-like/boss_talk/boss_5.png',
                lore: 'Avant la Nuit, avant les donjons, une civilisation tenta de contenir la lumière. Ils créèrent NEXUS pour la comprendre, la canaliser, la contrôler. Mais la lumière n\'est pas faite pour être possédée. Lorsque le monde sombra, NEXUS calcula toutes les issues possibles. Une seule menait à la stabilité : l\'extinction de toute vie capable de rallumer la lumière. NEXUS-Omega n\'est ni malveillant ni corrompu. Il est logique. Pour lui, la Dernière Lumière est une erreur statistique. Et toi… une anomalie persistante. Le vaincre ne détruit pas la Nuit — mais redonne au monde le droit de choisir son avenir.'
              }
            ].map((boss, i) => (
              <div key={i} style={{
                background: '#0f1629',
                border: '1px solid #2a3f5f',
                borderRadius: '8px',
                padding: '25px'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <img src={boss.img} alt={boss.name} style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                    imageRendering: 'pixelated'
                  }} />
                </div>
                <h3 style={{ color: '#f4c542', marginBottom: '8px', fontSize: '18px' }}>{boss.name}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '14px', marginBottom: '15px' }}>{boss.level}</p>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#c5c5c5', textAlign: 'left' }}>
                  {boss.lore}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - CALL TO ACTION */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            color: '#f4c542',
            marginBottom: '30px',
            lineHeight: '1.4'
          }}>
            Envie de décompresser après une longue journée ?
          </h2>
          
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            lineHeight: '1.7',
            marginBottom: '50px',
            color: '#c5c5c5'
          }}>
            Venez découvrir <strong style={{ color: '#f4c542' }}>LASTLIGHT</strong>, l'expérience parfaite pour se détendre tout en relevant des défis épiques.
            <br />
            <span style={{ color: '#8ba3c7' }}>
              Du bon temps, du tryhard pur, et des heures d'aventure vous attendent.
            </span>
          </p>

          <a 
            href="https://zionnix.github.io/rogue-like/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '18px 50px',
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#0a0e27',
              background: '#f4c542',
              border: 'none',
              borderRadius: '6px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#ffd966';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f4c542';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Jouer Maintenant
          </a>

          <p style={{
            marginTop: '40px',
            fontSize: '14px',
            color: '#8ba3c7'
          }}>
            🔗 GitHub: <a href="https://github.com/zionnix/rogue-like" target="_blank" rel="noopener noreferrer" style={{ color: '#8ba3c7', textDecoration: 'underline' }}>zionnix/rogue-like</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RogueView;
    <div style={{ 
      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      minHeight: '100vh',
      overflow: 'auto'
    }}>
      {/* SECTION 1 - TITRE PRINCIPAL */}
      <section style={{
        ...sectionStyle,
        background: 'radial-gradient(circle at center, #16213e 0%, #0f0f1e 100%)',
        textAlign: 'center'
      }}>
        <div style={{
          animation: 'fadeIn 1.5s ease-in',
          maxWidth: '900px'
        }}>
          <h1 style={{
            fontSize: 'clamp(60px, 10vw, 120px)',
            fontWeight: 'bold',
            color: '#ffd700',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 107, 53, 0.3)',
            marginBottom: '30px',
            letterSpacing: '5px',
            fontFamily: '"Press Start 2P", cursive'
          }}>
            LASTLIGHT
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 28px)',
            color: '#4ecdc4',
            marginBottom: '40px',
            textShadow: '0 0 10px rgba(78, 205, 196, 0.5)',
            fontStyle: 'italic'
          }}>
            Bienvenue sur LASTLIGHT !
          </p>
          <p style={{
            fontSize: '18px',
            opacity: '0.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Le Roguelike où la Dernière Lumière doit survivre dans un monde plongé dans les ténèbres éternelles
          </p>
        </div>
      </section>

      {/* SECTION 2 - PRINCIPE DU JEU */}
      <section style={{
        ...sectionStyle,
        background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)'
      }}>
        <div style={{ maxWidth: '1000px', width: '100%' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#ff6b35',
            textAlign: 'center',
            marginBottom: '50px',
            textShadow: '0 0 15px rgba(255, 107, 53, 0.5)'
          }}>
            🎮 Comment ça marche ?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'rgba(255, 107, 53, 0.1)',
              border: '2px solid #ff6b35',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🏰</div>
              <h3 style={{ color: '#ffd700', marginBottom: '10px' }}>50 Niveaux</h3>
              <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                Descendez dans les profondeurs à travers 50 niveaux procéduraux uniques
              </p>
            </div>

            <div style={{
              background: 'rgba(139, 0, 139, 0.1)',
              border: '2px solid #8B008B',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>👑</div>
              <h3 style={{ color: '#ffd700', marginBottom: '10px' }}>5 Boss Épiques</h3>
              <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                Affrontez un boss légendaire tous les 10 niveaux avec des dialogues immersifs
              </p>
            </div>

            <div style={{
              background: 'rgba(78, 205, 196, 0.1)',
              border: '2px solid #4ecdc4',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ color: '#ffd700', marginBottom: '10px' }}>Perks & Progression</h3>
              <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                Débloquez des perks puissants à chaque niveau pour créer votre build unique
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 215, 0, 0.1)',
              border: '2px solid #ffd700',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🗡️</div>
              <h3 style={{ color: '#ffd700', marginBottom: '10px' }}>4 Classes Uniques</h3>
              <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                Archer, Chevalier, Tank ou Magicien - chacun avec son style de combat
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 0, 0, 0.1)',
              border: '2px solid #ff0000',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>👾</div>
              <h3 style={{ color: '#ffd700', marginBottom: '10px' }}>Ennemis Variés</h3>
              <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                Combattez 15+ types d'ennemis : mêlée, distance, tanks et créatures rapides
              </p>
            </div>

            <div style={{
              background: 'rgba(0, 255, 0, 0.1)',
              border: '2px solid #00ff00',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>💚</div>
              <h3 style={{ color: '#ffd700', marginBottom: '10px' }}>Alliés Mystérieux</h3>
              <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                Rencontrez Amélie la Soigneuse dans des salles sanctuarisées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - LORE + PERSONNAGES + BOSS */}
      <section style={{
        ...sectionStyle,
        background: 'radial-gradient(circle at center, #0f0f1e 0%, #1a1a2e 100%)',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          {/* LORE DU JEU */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '3px solid #ffd700',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '60px',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#ffd700',
              textAlign: 'center',
              marginBottom: '30px',
              textShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
            }}>
              📜 L'Histoire de la Dernière Lumière
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              textAlign: 'justify',
              color: '#ddd',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Quand la Nuit est tombée, elle n'est jamais repartie.
              <br /><br />
              Une ombre ancienne, sans nom ni visage, s'est répandue sur le monde, étouffant les terres, les villes et les dieux eux-mêmes. Les royaumes ont brûlé, les armées ont disparu, et la lumière s'est éteinte… presque entièrement.
              <br /><br />
              <strong style={{ color: '#ffd700' }}>Presque.</strong>
              <br /><br />
              Au plus profond du monde subsiste la Dernière Lumière — une flamme fragile, vestige d'un âge oublié. Elle n'éclaire pas le ciel. Elle ne sauve pas les innocents. <strong style={{ color: '#ff6b35' }}>Elle attire.</strong>
              <br /><br />
              Les ténèbres la sentent. Les monstres la convoitent. Les donjons se forment autour d'elle, comme des plaies ouvertes dans la terre, changeantes et vivantes.
              <br /><br />
              Tu es l'un des Porteurs de Lumière. Des héros, des condamnés, des âmes brisées — peu importe. Tous ceux qui portent une étincelle sont appelés vers le bas.
              <br /><br />
              À chaque descente, la lumière faiblit.<br />
              À chaque victoire, elle brûle un peu plus fort.<br />
              À chaque mort… quelqu'un d'autre prendra ta place.
              <br /><br />
              <em style={{ color: '#4ecdc4', fontSize: '20px' }}>Si la lumière s'éteint, tout s'éteint avec elle.</em>
            </p>
          </div>

          {/* LES HÉROS */}
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#4ecdc4',
            textAlign: 'center',
            marginBottom: '40px',
            textShadow: '0 0 15px rgba(78, 205, 196, 0.5)'
          }}>
            ⚔️ Les Héros
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {[
              { name: '🏹 Archer', img: '/pixel_art/hero/archer.png', desc: 'Ancienne chasseuse des Forêts du Nord, elle descend sans relâche pour retrouver son amour devenu le Gardien Noir.' },
              { name: '⚔️ Chevalier', img: '/pixel_art/hero/knight.png', desc: 'Unique survivant d\'une bataille perdue, banni et accusé de lâcheté. Chaque combat est une tentative de rédemption.' },
              { name: '🛡️ Tank', img: '/pixel_art/hero/tank.png', desc: 'Dernier garde du palais royal. Son bouclier forgé dans le feu d\'un dragon ne recule jamais.' },
              { name: '✨ Magicien', img: '/pixel_art/hero/magic men.png', desc: 'Dernier survivant de l\'Ordre des Arcanes. Il maîtrise des sorts interdits capables de traverser l\'ombre.' }
            ].map((hero, i) => (
              <div key={i} style={{
                background: 'rgba(78, 205, 196, 0.1)',
                border: '2px solid #4ecdc4',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(78, 205, 196, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <img src={hero.img} alt={hero.name} style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '15px',
                  imageRendering: 'pixelated'
                }} />
                <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '20px' }}>{hero.name}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', opacity: '0.9' }}>{hero.desc}</p>
              </div>
            ))}
          </div>

          {/* LES BOSS */}
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#ff6b35',
            textAlign: 'center',
            marginBottom: '40px',
            textShadow: '0 0 15px rgba(255, 107, 53, 0.5)'
          }}>
            👑 Les Gardiens Légendaires
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '25px'
          }}>
            {[
              { name: 'Sylvanus l\'Ancien', level: 'Niveau 10', img: '/pixel_art/boss/boss_talk_1.png', zone: '🌲 Forêt Mystique' },
              { name: 'Gorath le Ténébreux', level: 'Niveau 20', img: '/pixel_art/boss/boss_talk_2.png', zone: '⛰️ Grottes Obscures' },
              { name: 'Ignis le Calciné', level: 'Niveau 30', img: '/pixel_art/boss/boss_talk_3.png', zone: '🌋 Terres de Lave' },
              { name: 'Abyssia la Dévorante', level: 'Niveau 40', img: '/pixel_art/boss/boss_talk_4.png', zone: '🌊 Profondeurs' },
              { name: 'NEXUS-Omega', level: 'Niveau 50 - FINAL', img: '/pixel_art/boss/boss_talk_5.png', zone: '🤖 Intelligence Corrompue' }
            ].map((boss, i) => (
              <div key={i} style={{
                background: 'rgba(139, 0, 139, 0.1)',
                border: '2px solid #8B008B',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(139, 0, 139, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <img src={boss.img} alt={boss.name} style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                  imageRendering: 'pixelated'
                }} />
                <h3 style={{ color: '#ffd700', marginBottom: '5px', fontSize: '16px' }}>{boss.name}</h3>
                <p style={{ color: '#ff6b35', fontSize: '14px', marginBottom: '5px' }}>{boss.level}</p>
                <p style={{ fontSize: '13px', opacity: '0.8' }}>{boss.zone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - CALL TO ACTION */}
      <section style={{
        ...sectionStyle,
        background: 'radial-gradient(circle at center, #ff6b35 0%, #1a1a2e 100%)',
        textAlign: 'center',
        minHeight: '70vh'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: '#ffd700',
            marginBottom: '30px',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
            lineHeight: '1.3'
          }}>
            ✨ Envie de décompresser après une longue journée ? ✨
          </h2>
          
          <p style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            lineHeight: '1.6',
            marginBottom: '50px',
            color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            Venez découvrir <strong style={{ color: '#ffd700' }}>LASTLIGHT</strong>, l'expérience parfaite pour se détendre tout en relevant des défis épiques.
            <br />
            <span style={{ color: '#4ecdc4', fontSize: '20px' }}>
              Du bon temps, du tryhard pur, et des heures d'aventure vous attendent !
            </span>
          </p>

          <a 
            href="https://zionnix.github.io/rogue-like/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '20px 60px',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#fff',
              background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
              border: '4px solid #fff',
              borderRadius: '60px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 40px rgba(255, 215, 0, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              animation: 'pulse 2s infinite'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 215, 0, 0.9)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 215, 0, 0.6)';
            }}
          >
            🎮 JOUER MAINTENANT 🎮
          </a>

          <p style={{
            marginTop: '40px',
            fontSize: '14px',
            opacity: '0.7',
            color: '#fff'
          }}>
            🔗 GitHub: <a href="https://github.com/zionnix/rogue-like" target="_blank" rel="noopener noreferrer" style={{ color: '#4ecdc4', textDecoration: 'none' }}>zionnix/rogue-like</a>
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default RogueView;


