export default function Header() {
  return (
    <div className="bg-gradient-to-b from-bg-card/95 to-bg-dark/95 backdrop-blur-md border-b-2 border-accent/30 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 
          className="text-5xl font-bold text-center bg-gradient-to-r from-accent via-yellow-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider mb-2"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        >
          🔥 Borderlands 4 Legendaries 🔥
        </h1>
        <div className="text-center text-text-secondary text-lg">
          Complete Tier List & Character Build Guide
        </div>
      </div>
    </div>
  );
}

