export interface LegendaryItem {
  category: string;
  tier: string;
  name: string;
  effect: string;
  dropLocation: string;
  requirements: string;
  manufacturer?: string;
  forClass: string;
  analysis: string;
}

export const legendaryData: LegendaryItem[] = [
  // Assault Rifles
  { category: "Assault Rifles", tier: "S", name: "Wombo Combo", effect: "Rip Rockets – Automatically fires rockets from underbarrel as you shoot", dropLocation: "Gruntubulous Vork, Baby Grunt, Lil Grunt (Rippa Roadbirds)", requirements: "None", forClass: "All (esp. Rafa, Vex)", analysis: "Top-tier mobbing and bossing; high splash; any element; rockets are kinetic for anti-shield/armor; great explosive synergy." },
  { category: "Assault Rifles", tier: "S", name: "Aegon's Dream", effect: "Prophetic – Alternates incendiary and cryo damage per shot", dropLocation: "Horace, Hungering Plain", requirements: "Down and Outbound", forClass: "All, esp. Vex", analysis: "Early-game carry; handles all health bars; easy to farm; versatile." },
  { category: "Assault Rifles", tier: "S", name: "Lucian's Flank", effect: "Trample – Critical hits refill up to 2 ammo in mag & ricochet", dropLocation: "Primordial Guardian Inceptus", requirements: "Vex – Vault Key", forClass: "All (crit builds)", analysis: "Infinite ammo with good aim; ricochets clear mobs; melts bosses." },
  { category: "Assault Rifles", tier: "A", name: "Rowan's Call", effect: "Critical hits ricochet and return 2 ammo", dropLocation: "World Drop", requirements: "None", forClass: "All", analysis: "Great for crit builds but outclassed by Lucian's Flank." },
  { category: "Assault Rifles", tier: "A", name: "Kaos", effect: "Spawns homing projectiles on kill", dropLocation: "Scrap Trap", requirements: "None", forClass: "All", analysis: "Solid mobbing weapon with chain potential." },
  { category: "Assault Rifles", tier: "B", name: "Breath of the Dying", effect: "Corrosive balls on kill", dropLocation: "Blinding Banshee", requirements: "None", forClass: "All", analysis: "Good for corrosive builds but situational." },
  { category: "Assault Rifles", tier: "B", name: "Damned", effect: "No reload needed", dropLocation: "Agonizer 9000", requirements: "None", forClass: "All", analysis: "Infinite mag but low damage output." },
  { category: "Assault Rifles", tier: "B", name: "Ogre", effect: "Explosive rounds", dropLocation: "King Bobo", requirements: "None", forClass: "Moze", analysis: "Great for explosive builds only." },
  { category: "Assault Rifles", tier: "C", name: "Bearcat", effect: "Grenades instead of bullets", dropLocation: "DJ Deadsk4g", requirements: "None", forClass: "All", analysis: "Too slow and clunky for most content." },
  { category: "Assault Rifles", tier: "C", name: "Lead Sprinkler", effect: "Splits into 3 projectiles", dropLocation: "Captain Haunt", requirements: "Event", forClass: "All", analysis: "Spread too wide to be effective." },
  
  // Pistols
  { category: "Pistols", tier: "S", name: "Songb Bird", effect: "Dueling Pistol – +100% damage for 5s after swapping (stacking glitch)", dropLocation: "Rick and Roller", requirements: "None", forClass: "All", analysis: "Broken infinite stacking allows absurd damage; trivializes content." },
  { category: "Pistols", tier: "S", name: "Phantom Flame", effect: "Midday – Zoom-in lock-on, fires full mag instantly", dropLocation: "Pango & Bango", requirements: "None", forClass: "All (esp. Rafa, Vex)", analysis: "Instant mag dump with lock-on; huge burst vs bosses/mobs." },
  { category: "Pistols", tier: "S", name: "King's Call", effect: "Queen's Call – Critical kills spawn homing projectiles", dropLocation: "Tyreen", requirements: "Story", forClass: "All crit builds", analysis: "Infinite ammo and chain kills with good aim." },
  { category: "Pistols", tier: "A", name: "Maggie", effect: "Fires 6 projectiles", dropLocation: "Tremendous Rex", requirements: "None", forClass: "All", analysis: "Classic powerhouse, great all-arounder." },
  { category: "Pistols", tier: "A", name: "Hellshock", effect: "Switch between shock/fire", dropLocation: "Gigamind", requirements: "None", forClass: "All", analysis: "Versatile elemental coverage." },
  { category: "Pistols", tier: "B", name: "Infinity", effect: "Infinite ammo", dropLocation: "Anointed Alpha", requirements: "None", forClass: "All", analysis: "No reload but weak damage." },
  { category: "Pistols", tier: "B", name: "Flood", effect: "Full auto, high fire rate", dropLocation: "Lagromar", requirements: "None", forClass: "All", analysis: "Spray and pray weapon, ammo hungry." },
  { category: "Pistols", tier: "C", name: "Gunerang", effect: "Reload throws gun like boomerang", dropLocation: "Rakkman", requirements: "None", forClass: "All", analysis: "Gimmicky and impractical." },
  
  // Shotguns
  { category: "Shotguns", tier: "S", name: "Hot Slugger", effect: "Blazing Barrel – On kill, +30% damage for 10s (max 3 stacks)", dropLocation: "Callous Harbringer", requirements: "None", forClass: "All (esp. Vex, Rafa, Aemon)", analysis: "Best shotgun; massive one-shot potential; easy stacking; works for any build." },
  { category: "Shotguns", tier: "S", name: "BOD", effect: "All-Rounder – Counts as all gun types at once", dropLocation: "Axemaul", requirements: "None", forClass: "All", analysis: "Insane synergy with all weapon bonuses; extremely versatile." },
  { category: "Shotguns", tier: "S", name: "Rebound", effect: "Critical Cascade – Critical hits spawn bouncing projectiles", dropLocation: "World Drop", requirements: "None", forClass: "All", analysis: "Room clearer; crits chain into more damage." },
  { category: "Shotguns", tier: "A", name: "Hellwalker", effect: "Doom music plays, fire damage", dropLocation: "Road Dog", requirements: "None", forClass: "All", analysis: "Style points and solid damage." },
  { category: "Shotguns", tier: "A", name: "Reflux", effect: "Chains corrosive between enemies", dropLocation: "GenIVIV", requirements: "None", forClass: "All", analysis: "Great for grouped enemies." },
  { category: "Shotguns", tier: "B", name: "Conference Call", effect: "Projectiles spawn more projectiles", dropLocation: "Katagawa Ball", requirements: "None", forClass: "All", analysis: "Classic but outclassed now." },
  { category: "Shotguns", tier: "B", name: "Brainstormer", effect: "Chains lightning", dropLocation: "Katagawa Jr.", requirements: "None", forClass: "All", analysis: "Good for shields, bad for armor." },
  { category: "Shotguns", tier: "C", name: "Flakker", effect: "Explosive spam", dropLocation: "Manvark", requirements: "None", forClass: "Moze", analysis: "Nerfed too hard, slow projectiles." },
  
  // SMGs
  { category: "SMGs", tier: "S", name: "Chaos", effect: "Double Torgue stickies, up to 4% damage per sticky", dropLocation: "Guardian Orgo", requirements: "Vault cleared", manufacturer: "Vladof", forClass: "All (esp. Vex, Rafa)", analysis: "Best sticky SMG; shreds mobs/bosses; scales with splash/sticky builds." },
  { category: "SMGs", tier: "S", name: "Plasma Coil", effect: "Superheated; extremely high fire rate; multiple elements", dropLocation: "Timekeeper", requirements: "The Timekeeper's Order", manufacturer: "Maliwan", forClass: "All (esp. Harlo, Aman, Vex)", analysis: "Melts shields/armor; adaptable; great for procs." },
  { category: "SMGs", tier: "A", name: "Kaoson", effect: "Sticky explosions", dropLocation: "Captain Traunt", requirements: "None", manufacturer: "DAHL", forClass: "All", analysis: "Solid explosive SMG option." },
  { category: "SMGs", tier: "A", name: "Flipper", effect: "9 projectiles", dropLocation: "Minosaur", requirements: "None", manufacturer: "Maliwan", forClass: "All", analysis: "High damage but ammo hungry." },
  { category: "SMGs", tier: "B", name: "Cutsman", effect: "Projectiles split horizontally", dropLocation: "Borman Nates", requirements: "None", manufacturer: "Maliwan", forClass: "All", analysis: "Good for large hitboxes only." },
  { category: "SMGs", tier: "B", name: "Night Hawkin", effect: "Freezes by day, burns by night", dropLocation: "Demoskaggon", requirements: "None", manufacturer: "DAHL", forClass: "All", analysis: "Gimmicky but fun." },
  { category: "SMGs", tier: "C", name: "Vanquisher", effect: "Sliding increases damage", dropLocation: "World Drop", requirements: "None", manufacturer: "DAHL", forClass: "All", analysis: "Slide mechanic too clunky." },
  
  // Snipers
  { category: "Snipers", tier: "S", name: "Borstel Ballista", effect: "Propagation – spirals extra projectiles with range", dropLocation: "Timekeeper", requirements: "Story", manufacturer: "Jakobs", forClass: "All (esp. Vex, Aman)", analysis: "Highest damage at distance; great for bosses and mobs." },
  { category: "Snipers", tier: "S", name: "Complex Root", effect: "Sierpinski – diverging projectiles", dropLocation: "Mimicron", requirements: "None", manufacturer: "Maliwan", forClass: "All", analysis: "Multihit/ricochet synergy; top-tier killer." },
  { category: "Snipers", tier: "A", name: "Sandhawk", effect: "Splits into bird pattern", dropLocation: "Katagawa Jr.", requirements: "None", manufacturer: "DAHL", forClass: "All", analysis: "Multiple hits on large targets." },
  { category: "Snipers", tier: "A", name: "Lyuda", effect: "Splits into 3 projectiles", dropLocation: "Tremendous Rex", requirements: "None", manufacturer: "Vladof", forClass: "All", analysis: "Classic boss melter." },
  { category: "Snipers", tier: "B", name: "Krakatoa", effect: "Volcano on crit", dropLocation: "Tumorhead", requirements: "None", manufacturer: "Maliwan", forClass: "All", analysis: "Good for stationary targets." },
  { category: "Snipers", tier: "B", name: "Headsplosion", effect: "Crit explosions", dropLocation: "King Bobo", requirements: "None", manufacturer: "Jakobs", forClass: "All", analysis: "Fun but inconsistent." },
  { category: "Snipers", tier: "C", name: "ASMD", effect: "Energy orb combo", dropLocation: "World Drop", requirements: "None", manufacturer: "Maliwan", forClass: "All", analysis: "Too complex for minimal payoff." },
  
  // Heavy Weapons
  { category: "Heavy Weapons", tier: "S", name: "Streamer", effect: "Stationary projectiles fire beams forward", dropLocation: "The Oppressor", requirements: "Main Mission", manufacturer: "Ripper", forClass: "All", analysis: "Melts bosses/mobs with stationary beams; great in chokepoints." },
  { category: "Heavy Weapons", tier: "S", name: "Disc Jockey", effect: "Energy discs bounce 5x, +20% damage each bounce", dropLocation: "Sidney Pointylegs", requirements: "None", manufacturer: "Ripper", forClass: "All", analysis: "Bouncing discs stack damage; clears rooms and tight spaces." },
  { category: "Heavy Weapons", tier: "A", name: "Backburner", effect: "Homing novas", dropLocation: "The Agonizer 9000", requirements: "None", manufacturer: "Vladof", forClass: "All", analysis: "Great for second winds." },
  { category: "Heavy Weapons", tier: "A", name: "Plaguebearer", effect: "Corrosive orbs split", dropLocation: "Warden", requirements: "None", manufacturer: "Torgue", forClass: "All", analysis: "Room clearer extraordinaire." },
  { category: "Heavy Weapons", tier: "B", name: "Ion Cannon", effect: "Delete button", dropLocation: "Fabricator", requirements: "None", manufacturer: "Vladof", forClass: "All", analysis: "One shot, one kill, one ammo." },
  { category: "Heavy Weapons", tier: "B", name: "Yellowcake", effect: "Split mortar", dropLocation: "Fish Slap", requirements: "Event", manufacturer: "COV", forClass: "All", analysis: "Seasonal powerhouse." },
  { category: "Heavy Weapons", tier: "C", name: "Tunguska", effect: "Big boom", dropLocation: "World Drop", requirements: "None", manufacturer: "Torgue", forClass: "All", analysis: "More likely to kill you than enemies." },
  
  // Armor Shields
  { category: "Armor Shields", tier: "S", name: "Firewerks", effect: "Bundled – On kill or segment break, fires homing missiles", dropLocation: "Splashzone", requirements: "Recruitment Drive", forClass: "All (esp. Rafa, mobbing)", analysis: "Clears rooms with missile swarms; passive triggers; scales well." },
  { category: "Armor Shields", tier: "S", name: "Onion", effect: "Shallot Shell – On armor segment break, immunity to all damage for 2s", dropLocation: "Sludgemaw", requirements: "All Charged Up & Null and Void", forClass: "All", analysis: "Ultimate panic button; perfect for aggressive/tanky play." },
  { category: "Armor Shields", tier: "A", name: "Recharger", effect: "Instant recharge on break", dropLocation: "Urist McEnforcer", requirements: "None", forClass: "All", analysis: "Reliable reset button." },
  { category: "Armor Shields", tier: "A", name: "Stop-Gap", effect: "5s immunity on break", dropLocation: "El Dragón Jr.", requirements: "None", forClass: "All", analysis: "Cheese mechanics with this." },
  { category: "Armor Shields", tier: "B", name: "Transformer", effect: "Absorbs shock damage", dropLocation: "Killavolt", requirements: "None", forClass: "All", analysis: "Shock immunity is nice but situational." },
  { category: "Armor Shields", tier: "B", name: "Red Suit", effect: "Radiation immunity", dropLocation: "Atomic", requirements: "None", forClass: "All", analysis: "Niche but useful." },
  { category: "Armor Shields", tier: "C", name: "Rough Rider", effect: "No shield, health/speed boost", dropLocation: "The Unstoppable", requirements: "None", forClass: "All", analysis: "Outdated design philosophy." },
  
  // Energy Shields
  { category: "Energy Shields", tier: "S", name: "Super Soldier", effect: "Power Play – Overshield on fill; +25% ROF & speed while full; +1 ammo/s", dropLocation: "Vile Lictor", requirements: "His Vile Sanctum", forClass: "All (DPS/infinite ammo)", analysis: "Broken-level sustain; infinite ammo on mags; top pick." },
  { category: "Energy Shields", tier: "S", name: "Watts 4 Dinner", effect: "Overshield Eater – 12% chance enemies drop Overshield; +25% shock with Overshield", dropLocation: "Primordial Guardian Origo", requirements: "Vault Key Fragments", forClass: "All", analysis: "Constant Overshield drops; perfect for shock/fast-firing builds." },
  { category: "Energy Shields", tier: "A", name: "Revolter", effect: "Shock nova and damage on break", dropLocation: "Sumo", requirements: "None", forClass: "All", analysis: "ASS anoint synergy is godly." },
  { category: "Energy Shields", tier: "A", name: "Infernal Wish", effect: "Projectiles shoot extra shot", dropLocation: "Captain Haunt", requirements: "Event", forClass: "All", analysis: "Double your DPS, double your fun." },
  { category: "Energy Shields", tier: "B", name: "Messy Breakup", effect: "Decoys on break", dropLocation: "GenIVIV", requirements: "None", forClass: "All", analysis: "Distracts enemies nicely." },
  { category: "Energy Shields", tier: "B", name: "Frozen Heart", effect: "Freezing nova", dropLocation: "Aurelia", requirements: "None", forClass: "All", analysis: "Good CC option." },
  { category: "Energy Shields", tier: "C", name: "Whiskey Tango Foxtrot", effect: "IEDs when damaged", dropLocation: "World Drop", requirements: "None", forClass: "All", analysis: "More harmful to you than enemies." },
  
  // Grenades
  { category: "Grenades", tier: "S", name: "Crit Knife (Vivisecting Throwing Knife)", effect: "Guarantees crits for 5s; can roll amp & lifesteal", dropLocation: "Epic/World Drop", requirements: "None", forClass: "All", analysis: "Turns all damage into crits for 5s; melts bosses; universal." },
  { category: "Grenades", tier: "S", name: "Firepot", effect: "Spawns homing Torgue stickies over time; scales with weapon damage", dropLocation: "Leader Willem", requirements: "Long side quest chain", forClass: "All", analysis: "Best for weapon builds; stickies track and scale with gun buffs." },
  { category: "Grenades", tier: "S", name: "It's Piss", effect: "Removes debuffs and debuffs enemies", dropLocation: "Sloth", requirements: "None", forClass: "All", analysis: "Utility king; cleanses and amplifies." },
  { category: "Grenades", tier: "A", name: "Lightspeed", effect: "Teleports and damages", dropLocation: "Voltborn", requirements: "None", forClass: "All", analysis: "Mobility and damage combo." },
  { category: "Grenades", tier: "A", name: "Hex", effect: "Homing MIRV", dropLocation: "Sky Bullies", requirements: "None", forClass: "All", analysis: "Tracks everything, good proc rate." },
  { category: "Grenades", tier: "B", name: "Storm Front", effect: "Tesla spawner", dropLocation: "El Dragón Jr.", requirements: "None", forClass: "All", analysis: "Good for shields, that's it." },
  { category: "Grenades", tier: "B", name: "Quasar", effect: "Singularity shock", dropLocation: "Private Beans", requirements: "None", forClass: "All", analysis: "Groups enemies nicely." },
  { category: "Grenades", tier: "C", name: "Fastball", effect: "Baseball grenade", dropLocation: "Boll", requirements: "None", forClass: "All", analysis: "Fun but impractical." },
  
  // Class Mods
  { category: "Class Mods", tier: "S", name: "Avatar", effect: "Vex/minions gain damage per active Attunement; DR vs element", dropLocation: "Primordial Guardian Inceptus", requirements: "Vex – Vault Key Fragments", forClass: "Siren (Vex)", analysis: "Best overall for Siren; ramps DPS & tankiness." },
  { category: "Class Mods", tier: "S", name: "Blacksmith", effect: "Kills restore Forgedrone duration; each active Forgedrone boosts gun dmg", dropLocation: "Vile Lictor", requirements: "Amon – His Vile Sanctum", forClass: "Forgeknight (Amon)", analysis: "Core for drone/gun builds; long uptime and snowball DPS." },
  { category: "Class Mods", tier: "S", name: "Seeing Dead", effect: "Kill skills activate on damage", dropLocation: "Jackbot", requirements: "None", forClass: "Operative (Zane)", analysis: "Permanent kill skills, enough said." },
  { category: "Class Mods", tier: "A", name: "Phasezerker", effect: "Rush stacks on action skill", dropLocation: "Trial Boss", requirements: "None", forClass: "Siren (Amara)", analysis: "Speed demon playstyle enabler." },
  { category: "Class Mods", tier: "A", name: "Executor", effect: "Crit damage when moving", dropLocation: "Trial Boss", requirements: "None", forClass: "Operative (Zane)", analysis: "Mobile crit machine." },
  { category: "Class Mods", tier: "B", name: "Driver", effect: "Speed = damage", dropLocation: "Sylestro", requirements: "None", forClass: "Siren (Amara)", analysis: "Zoom zoom boom boom." },
  { category: "Class Mods", tier: "B", name: "Hustler", effect: "Crit chance on everything", dropLocation: "The Ruiner", requirements: "None", forClass: "Gunner (Moze)", analysis: "RNG crits everywhere." },
  { category: "Class Mods", tier: "C", name: "Tr4iner", effect: "Pet buffs", dropLocation: "World Drop", requirements: "None", forClass: "Beastmaster (FL4K)", analysis: "Pet builds still weak." },
  
  // Repkits
  { category: "Repkits", tier: "S", name: "Mega Triple Bypass", effect: "3 charges; 30% chance to replenish on kill", dropLocation: "Backhive", requirements: "None", manufacturer: "Order", forClass: "All", analysis: "Near-infinite uptime; fits every build." },
  { category: "Repkits", tier: "S", name: "War Paint", effect: "+30% fire rate & speed for 15s; cooldown -2s when hit", dropLocation: "Saddleback", requirements: "None", manufacturer: "Torgue", forClass: "All", analysis: "High ROF and speed; keeps momentum." },
  { category: "Repkits", tier: "A", name: "Adrenaline", effect: "Instant reload and action skill cooldown", dropLocation: "Gigamind", requirements: "None", manufacturer: "Hyperion", forClass: "All", analysis: "Burst potential is high." },
  { category: "Repkits", tier: "A", name: "Last Stand", effect: "Invulnerability when low", dropLocation: "Phoenix", requirements: "None", manufacturer: "Pangolin", forClass: "All", analysis: "Clutch saves guaranteed." },
  { category: "Repkits", tier: "B", name: "Snowshoe", effect: "Freezing stomp", dropLocation: "Aurelia", requirements: "None", manufacturer: "Hyperion", forClass: "All", analysis: "CC option for melee builds." },
  { category: "Repkits", tier: "B", name: "Otto Idol", effect: "Health on kill", dropLocation: "Tyreen", requirements: "None", manufacturer: "Eridian", forClass: "All", analysis: "Sustain for aggressive play." },
  { category: "Repkits", tier: "C", name: "Loaded Dice", effect: "Luck up, health down", dropLocation: "World Drop", requirements: "None", manufacturer: "Eridian", forClass: "All", analysis: "Luck doesn't matter enough." }
];

export interface CharacterBuild {
  name: string;
  icon: string;
  description: string;
  playstyle: string;
  recommended: {
    weapons: string[];
    shields: string[];
    grenades: string[];
    classMods: string[];
    repkits: string[];
  };
}

export const characterBuilds: Record<string, CharacterBuild> = {
  vex: {
    name: "Vex (Siren)",
    icon: "🔮",
    description: "Master of elemental chaos and crowd control. Vex leverages Attunements to devastate battlefields with cascading elemental damage.",
    playstyle: "Focus on stacking Attunements for maximum damage multipliers. Use Phasegrasp to group enemies, then melt them with elemental weapons.",
    recommended: {
      weapons: ["Wombo Combo", "Aegon's Dream", "Phantom Flame", "Plasma Coil", "Borstel Ballista"],
      shields: ["Super Soldier", "Watts 4 Dinner"],
      grenades: ["Crit Knife (Vivisecting Throwing Knife)", "It's Piss"],
      classMods: ["Avatar", "Phasezerker"],
      repkits: ["Mega Triple Bypass", "War Paint"]
    }
  },
  rafa: {
    name: "Rafa (Gunner)",
    icon: "💥",
    description: "Walking arsenal with unlimited firepower. Rafa specializes in splash damage and never running out of ammo.",
    playstyle: "Stack splash damage bonuses and use weapons with high fire rate. Iron Bear provides burst damage and second winds.",
    recommended: {
      weapons: ["Wombo Combo", "Songb Bird", "Hot Slugger", "Chaos", "Streamer"],
      shields: ["Firewerks", "Super Soldier"],
      grenades: ["Firepot", "Crit Knife (Vivisecting Throwing Knife)"],
      classMods: ["Hustler", "Blast Master"],
      repkits: ["War Paint", "Mega Triple Bypass"]
    }
  },
  aemon: {
    name: "Aemon (Forgeknight)",
    icon: "⚙️",
    description: "Technological warfare specialist with autonomous drones. Aemon excels at sustained DPS through Forgedrone synergy.",
    playstyle: "Maintain multiple Forgedrones for stacking damage bonuses. Use kill chains to refresh drone duration indefinitely.",
    recommended: {
      weapons: ["Hot Slugger", "BOD", "Lucian's Flank", "Disc Jockey", "Complex Root"],
      shields: ["Onion", "Revolter"],
      grenades: ["Lightspeed", "Hex"],
      classMods: ["Blacksmith", "Techspert"],
      repkits: ["Adrenaline", "War Paint"]
    }
  },
  aman: {
    name: "Aman (Operative)",
    icon: "🕵️",
    description: "Master assassin with cloaking technology. Aman dominates through critical hits and tactical positioning.",
    playstyle: "Use action skills to reposition and land critical hits. Clone and barrier provide survivability while dealing massive damage.",
    recommended: {
      weapons: ["Songb Bird", "Borstel Ballista", "King's Call", "Plasma Coil", "Sandhawk"],
      shields: ["Super Soldier", "Revolter"],
      grenades: ["Crit Knife (Vivisecting Throwing Knife)", "Lightspeed"],
      classMods: ["Seeing Dead", "Executor"],
      repkits: ["Mega Triple Bypass", "Adrenaline"]
    }
  }
};

