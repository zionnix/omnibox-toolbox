/**
 * 🎮 FICHIER DE CONFIGURATION DU JEU ROGUELIKE
 * 
 * Ce fichier permet de modifier facilement les paramètres du jeu
 * sans toucher au code principal.
 */

// ===== CONFIGURATION GÉNÉRALE =====
export const GAME_CONFIG = {
    // Taille de la grille du donjon
    GRID_SIZE: 50,              // Cases de large/haut
    
    // Taille des cellules en pixels
    CELL_SIZE: 32,              // Pixels par case
    
    // Canvas et viewport sont maintenant calculés dynamiquement
    // dans game.js pour s'adapter à la taille de l'écran
    
    // Niveaux
    TOTAL_LEVELS: 50,           // Nombre total de niveaux
    LEVELS_PER_ZONE: 10,        // Niveaux par zone thématique
};

// ===== CONFIGURATION DES CLASSES =====
export const CLASS_CONFIG = {
    archer: {
        name: 'Archer',
        health: 80,
        damage: 15,
        attackSpeed: 0.5,
        range: Infinity,
        color: '#2ecc71'
    },
    
    knight: {
        name: 'Chevalier',
        health: 120,
        damage: 25,
        attackSpeed: 1,
        range: 1,
        color: '#3498db'
    },
    
    tank: {
        name: 'Bouclier',
        health: 180,
        damage: 40,
        attackSpeed: 1.5,
        range: 1,
        color: '#e67e22'
    },
    
    mage: {
        name: 'Magicien',
        health: 70,
        damage: 35,
        attackSpeed: 1.2,
        range: 4,
        color: '#9b59b6'
    }
};

// ===== CONFIGURATION DES ENNEMIS =====
export const ENEMY_CONFIG = {
    BASE_HEALTH: 50,
    BASE_DAMAGE: 10,
    ATTACK_SPEED: 1,
    
    BOSS_HEALTH_MULT: 4,
    BOSS_DAMAGE_MULT: 3,
    
    NORMAL_XP: 20,
    BOSS_XP: 100,
    
    DIFFICULTY_INCREMENT: 0.1,
    
    MIN_ENEMIES: 5,
    MAX_ENEMIES: 15,
    ENEMY_SCALE_FACTOR: 0.2,
};

// ===== CONFIGURATION DE LA GÉNÉRATION DE DONJON =====
export const DUNGEON_CONFIG = {
    MIN_ROOMS: 8,
    MAX_EXTRA_ROOMS: 5,
    
    MIN_ROOM_SIZE: 5,
    MAX_ROOM_SIZE: 13,
    
    ROOM_MARGIN: 2,
    EDGE_MARGIN: 2,
};

// ===== CONFIGURATION DU SYSTÈME DE PROGRESSION =====
export const PROGRESSION_CONFIG = {
    INITIAL_XP_REQUIRED: 100,
    XP_MULTIPLIER: 1.5,
    
    UPGRADES: {
        damage: {
            name: 'Dégâts',
            icon: '⚔️',
            value: 5
        },
        health: {
            name: 'Vie Max',
            icon: '❤️',
            value: 20
        },
        speed: {
            name: 'Vitesse',
            icon: '⚡',
            value: -0.1
        },
        range: {
            name: 'Portée',
            icon: '🎯',
            value: 1
        }
    }
};

// ===== CONFIGURATION DES ZONES =====
export const ZONE_CONFIG = {
    1: {
        name: 'Forêt Mystique',
        colors: ['#2d5016', '#4a7c2f', '#6b9d4a'],
        enemyTypes: 6
    },
    2: {
        name: 'Grottes Obscures',
        colors: ['#3d3d3d', '#5a5a5a', '#787878'],
        enemyTypes: 6
    },
    3: {
        name: 'Terres de Lave',
        colors: ['#8b0000', '#a52a2a', '#dc143c'],
        enemyTypes: 6
    },
    4: {
        name: 'Profondeurs Aquatiques',
        colors: ['#001f3f', '#0074d9', '#39cccc'],
        enemyTypes: 6
    },
    5: {
        name: 'Cité Futuriste',
        colors: ['#1a1a2e', '#2a2a4e', '#3a3a6e'],
        enemyTypes: 6
    }
};

// ===== CONFIGURATION UI =====
export const UI_CONFIG = {
    PRIMARY_COLOR: '#ff6b9d',
    SECONDARY_COLOR: '#4ecdc4',
    ACCENT_COLOR: '#ffd93d',
    DANGER_COLOR: '#ff4757',
    SUCCESS_COLOR: '#2ed573',
    
    ANIMATION_SPEED: 0.3,
    
    MAX_LOG_ENTRIES: 50,
};

// ===== MODE DEBUG =====
export const DEBUG_CONFIG = {
    ENABLED: false,
    SHOW_GRID: false,
    SHOW_HITBOXES: false,
    GOD_MODE: false,
    INSTANT_KILL: false,
    SHOW_FPS: false,
};

// ===== CONFIGURATION AVANCÉE =====
export const ADVANCED_CONFIG = {
    TARGET_FPS: 60,
    
    COLLISION_BUFFER: 0,
    
    CAMERA_SMOOTH: true,
    CAMERA_SPEED: 0.1,
    
    AUTO_SAVE: false,
    SAVE_INTERVAL: 30,
};

// ===== CONFIGURATION DES PERKS =====
export const PERKS = {
    DAMAGE_BOOST: {
        id: 'damage_boost',
        name: 'Force Brute',
        icon: '💪',
        description: 'Augmente les dégâts de 10%',
        rarity: 'common',
        maxLevel: 10
    },
    HEALTH_BOOST: {
        id: 'health_boost',
        name: 'Vitalité',
        icon: '❤️',
        description: '+50 HP maximum',
        rarity: 'common',
        maxLevel: 10
    },
    ATTACK_SPEED: {
        id: 'attack_speed',
        name: 'Vitesse d\'Attaque',
        icon: '⚡',
        description: '+10% vitesse d\'attaque',
        rarity: 'common',
        maxLevel: 5
    },
    SHIELD: {
        id: 'shield',
        name: 'Bouclier Magique',
        icon: '🛡️',
        description: 'Bouclier qui bloque les dégâts (3s actif, 10s cooldown)',
        rarity: 'rare',
        maxLevel: 5
    },
    CRITICAL: {
        id: 'critical',
        name: 'Coup Critique',
        icon: '💥',
        description: 'Chance de faire 150% de dégâts (15% au niv1, 100% au niv10)',
        rarity: 'rare',
        maxLevel: 10
    },
    KNOCKBACK: {
        id: 'knockback',
        name: 'Repoussement',
        icon: '👊',
        description: 'Repousse les ennemis de N cases',
        rarity: 'uncommon',
        maxLevel: 3
    },
    REGENERATION: {
        id: 'regeneration',
        name: 'Régénération',
        icon: '💚',
        description: 'Régénère 50% HP sur 3 secondes après chaque kill',
        rarity: 'rare',
        maxLevel: 1
    },
    FIREBALL: {
        id: 'fireball',
        name: 'Boule de Feu',
        icon: '🔥',
        description: 'Tire automatiquement des boules de feu (cooldown 5s)',
        rarity: 'epic',
        maxLevel: 5
    },
    SECOND_LIFE: {
        id: 'second_life',
        name: 'Seconde Vie',
        icon: '💛',
        description: 'Reviens à 50% HP une fois par partie',
        rarity: 'legendary',
        maxLevel: 1
    },
    MAGIC_RINGS: {
        id: 'magic_rings',
        name: 'Anneaux Magiques',
        icon: '✨',
        description: 'Anneaux qui tournent et font des dégâts (niveau 6: permanent)',
        rarity: 'epic',
        maxLevel: 6
    },
    MOVE_SPEED: {
        id: 'move_speed',
        name: 'Vélocité',
        icon: '🏃',
        description: '+10% vitesse de déplacement par niveau (max 80%)',
        rarity: 'uncommon',
        maxLevel: 8
    },
    DOUBLE_SHOT: {
        id: 'double_shot',
        name: 'Tir Double',
        icon: '🏹',
        description: 'Tire deux projectiles au lieu d\'un (Archer/Mage)',
        rarity: 'rare',
        maxLevel: 1
    },
    DOUBLE_STRIKE: {
        id: 'double_strike',
        name: 'Frappe Double',
        icon: '⚔️',
        description: 'Frappe deux fois au lieu d\'une (Chevalier/Tank)',
        rarity: 'rare',
        maxLevel: 1
    }
};

// ===== DONNÉES DES ZONES =====
export const ZONES = {
    1: {
        name: 'Forêt Mystique',
        description: 'Une forêt ancienne corrompue par les ténèbres',
        boss: 'Sylvanus le Gardien',
        music: 'level1.mp3'
    },
    2: {
        name: 'Grottes Obscures',
        description: 'Des cavernes profondes pleines de dangers',
        boss: 'Le Gardien des Cavernes',
        music: 'level2.mp3'
    },
    3: {
        name: 'Terres de Lave',
        description: 'Un volcan en éruption plein de créatures de feu',
        boss: 'Le Gardien du Volcan',
        music: 'level3.mp3'
    },
    4: {
        name: 'Profondeurs Aquatiques',
        description: 'Les abysses mystérieux d\'un océan oublié',
        boss: 'Le Gardien des Profondeurs',
        music: 'level4.mp3'
    },
    5: {
        name: 'Cité Futuriste',
        description: 'Une métropole technologique hostile',
        boss: 'Le Gardien de la Cité',
        music: 'level5.mp3'
    }
};

// ===== DIALOGUES DES HÉROS PAR ZONE =====
export const HERO_DIALOGUES = {
    archer: {
        1: [
            "Cette forêt... Elle respire la corruption.",
            "Mes flèches trouveront leur cible, même dans l'obscurité.",
            "Gardien de la forêt, montre-toi!",
        ],
        2: [
            "Ces cavernes... Froides et hostiles.",
            "Mes sens sont en alerte. Quelque chose nous observe.",
            "L'écho de mes pas résonne étrangement...",
        ],
        3: [
            "Cette chaleur... Insupportable.",
            "Le feu ne m'arrêtera pas.",
            "Les flammes dansent, mais je reste concentré.",
        ],
        4: [
            "L'eau... Partout autour de moi.",
            "Je dois rester prudent dans ces profondeurs.",
            "La pression augmente, mais je continue.",
        ],
        5: [
            "Une cité du futur... Impressionnant.",
            "La technologie ne surpassera pas mon arc.",
            "Dernier niveau. Je dois tout donner.",
        ]
    },
    knight: {
        1: [
            "Cette forêt corrompue ne m'effraie pas.",
            "Mon épée tranchera à travers les ténèbres.",
            "Pour l'honneur et la gloire!",
        ],
        2: [
            "Ces grottes cachent de vieux secrets.",
            "Mon armure me protégera des ombres.",
            "En avant, sans peur!",
        ],
        3: [
            "Les flammes de l'enfer ne me brûleront pas.",
            "Mon courage est plus fort que le feu.",
            "Je suis le chevalier des terres de lave!",
        ],
        4: [
            "Les profondeurs ne m'arrêteront pas.",
            "Mon épée fend l'eau comme la pierre.",
            "Gardien des eaux, prépare-toi!",
        ],
        5: [
            "La technologie contre l'acier... Intéressant.",
            "Ma lame trouvera toujours son chemin.",
            "C'est ici que tout se termine!",
        ]
    },
    mage: {
        1: [
            "La magie de cette forêt... Je la sens.",
            "Mes sorts perceront les ténèbres.",
            "La lumière vaincra l'obscurité!",
        ],
        2: [
            "Ces cavernes résonnent de magie noire.",
            "Mes arcanes sont prêts.",
            "L'obscurité rencontrera ma lumière!",
        ],
        3: [
            "Le feu élémentaire... Un défi intéressant.",
            "Magie contre magie. Voyons qui l'emportera.",
            "Les flammes obéissent au plus puissant!",
        ],
        4: [
            "L'eau, élément de vie... Et de mort.",
            "Mes sorts s'adaptent à chaque élément.",
            "La magie aquatique ne m'impressionne pas.",
        ],
        5: [
            "Technologie et magie... Le choc des ères.",
            "Ma magie est intemporelle.",
            "La dernière lumière brillera à jamais!",
        ]
    },
    tank: {
        1: [
            "Cette forêt tombera sous mon bouclier.",
            "Rien ne peut me renverser.",
            "Je suis le mur infranchissable!",
        ],
        2: [
            "Ces grottes... Parfait pour tester ma force.",
            "Mon bouclier résiste à tout.",
            "En avant, sans faillir!",
        ],
        3: [
            "Le feu contre l'acier... Je parie sur l'acier.",
            "Ma défense est impénétrable.",
            "Les flammes ne passeront pas!",
        ],
        4: [
            "L'eau ne peut rien contre ma force.",
            "Je suis le roc dans la tempête.",
            "Aucune vague ne me renversera!",
        ],
        5: [
            "Technologie moderne contre force brute.",
            "Mon bouclier ne connaît pas la défaite.",
            "C'est le dernier combat. Je tiendrai bon!",
        ]
    }
};

// ===== CLASSES (Alias pour compatibilité) =====
export const CLASSES = CLASS_CONFIG;

// ===== EXPORT DE LA CONFIGURATION COMPLÈTE =====
const CONFIG = {
    ...GAME_CONFIG,
    CLASSES: CLASS_CONFIG,
    ENEMY: ENEMY_CONFIG,
    DUNGEON: DUNGEON_CONFIG,
    PROGRESSION: PROGRESSION_CONFIG,
    ZONES: ZONE_CONFIG,
    UI: UI_CONFIG,
    DEBUG: DEBUG_CONFIG,
    ADVANCED: ADVANCED_CONFIG,
    PERKS: PERKS,
    ZONE_DATA: ZONES,
    HERO_DIALOGUES: HERO_DIALOGUES
};

export default CONFIG;
