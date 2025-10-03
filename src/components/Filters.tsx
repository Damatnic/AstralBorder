interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  tierFilter: string;
  setTierFilter: (value: string) => void;
  charFilter: string;
  setCharFilter: (value: string) => void;
}

export default function Filters({
  searchTerm,
  setSearchTerm,
  tierFilter,
  setTierFilter,
  charFilter,
  setCharFilter,
}: FiltersProps) {
  const tiers = ['S', 'A', 'B', 'C'];
  const characters = [
    { id: 'Vex', label: 'Vex', color: 'from-purple-500 to-purple-300' },
    { id: 'Rafa', label: 'Rafa', color: 'from-red-500 to-red-300' },
    { id: 'Aemon', label: 'Aemon', color: 'from-blue-500 to-blue-300' },
    { id: 'Aman', label: 'Aman', color: 'from-green-500 to-green-300' },
  ];

  const tierColors: Record<string, string> = {
    S: 'from-yellow-400 to-yellow-200',
    A: 'from-red-500 to-red-300',
    B: 'from-blue-500 to-blue-300',
    C: 'from-green-500 to-green-300',
  };

  return (
    <div className="bg-bg-card/50 backdrop-blur-sm rounded-xl p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search by name, effect, or analysis..."
          className="flex-1 px-4 py-2 bg-bg-card border-2 border-accent/20 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/30 transition-all"
        />

        {/* Tier Filters */}
        <div className="flex gap-2">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setTierFilter(tierFilter === tier ? '' : tier)}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                tierFilter === tier
                  ? `bg-gradient-to-r ${tierColors[tier]} text-black shadow-lg`
                  : 'bg-bg-card text-text-primary border-2 border-transparent hover:bg-bg-hover'
              }`}
            >
              {tier} Tier
            </button>
          ))}
        </div>

        {/* Character Filters */}
        <div className="flex gap-2">
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => setCharFilter(charFilter === char.id ? '' : char.id)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                charFilter === char.id
                  ? `bg-gradient-to-r ${char.color} text-white shadow-lg`
                  : 'bg-bg-card text-text-primary border-2 border-transparent hover:bg-bg-hover'
              }`}
            >
              {char.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

