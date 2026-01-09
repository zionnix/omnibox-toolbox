import React from 'react';

const RogueView = () => {
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
    color: '#fff'
  };

  return (
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


