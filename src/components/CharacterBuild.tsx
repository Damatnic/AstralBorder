import { CharacterBuild as CharacterBuildType } from '@/data/legendaries';
import { legendaryData } from '@/data/legendaries';

interface CharacterBuildProps {
  characterKey: string;
  build: CharacterBuildType;
}

export default function CharacterBuild({ characterKey, build }: CharacterBuildProps) {
  const characterColors: Record<string, string> = {
    vex: 'from-purple-500 to-purple-300',
    rafa: 'from-red-500 to-red-300',
    aemon: 'from-blue-500 to-blue-300',
    aman: 'from-green-500 to-green-300',
  };

  return (
    <div className="bg-bg-card rounded-2xl p-8 mb-8 border-2 border-transparent hover:border-accent/50 transition-all">
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${characterColors[characterKey]} flex items-center justify-center text-4xl shadow-lg`}>
          {build.icon}
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{build.name}</h2>
          <p className="text-text-secondary text-lg leading-relaxed">{build.description}</p>
        </div>
      </div>

      {/* Playstyle */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-accent mb-3">Playstyle</h3>
        <p className="text-text-secondary leading-relaxed">{build.playstyle}</p>
      </div>

      {/* Recommended Weapons */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-accent mb-3">Recommended Weapons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {build.recommended.weapons.map((weaponName) => {
            const item = legendaryData.find((i) => i.name === weaponName);
            if (!item) return null;
            return (
              <div
                key={weaponName}
                className="bg-bg-dark/50 p-4 rounded-lg border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <div className="font-bold mb-1">{item.name}</div>
                <div className="text-yellow-400 text-xs mb-2">Tier {item.tier}</div>
                <div className="text-text-secondary text-xs">
                  {item.effect.substring(0, 60)}...
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shields & Support Gear */}
      <div>
        <h3 className="text-xl font-bold text-accent mb-3">Shields & Support Gear</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[...build.recommended.shields, ...build.recommended.grenades].map((itemName) => {
            const item = legendaryData.find((i) => i.name === itemName);
            if (!item) return null;
            return (
              <div
                key={itemName}
                className="bg-bg-dark/50 p-3 rounded-lg border border-accent/20 hover:border-accent/50 transition-all"
              >
                <div className="font-bold text-sm">{item.name}</div>
                <div className="text-text-secondary text-xs mt-1">
                  {item.category} • Tier {item.tier}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

