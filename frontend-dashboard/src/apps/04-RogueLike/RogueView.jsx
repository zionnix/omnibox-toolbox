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
    </div>
  );
};

export default RogueView;


