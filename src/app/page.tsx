'use client';

import { useState, useMemo } from 'react';
import { legendaryData, characterBuilds } from '@/data/legendaries';
import ItemCard from '@/components/ItemCard';
import CharacterBuild from '@/components/CharacterBuild';
import Filters from '@/components/Filters';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentTab, setCurrentTab] = useState('builds');
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('');
  const [charFilter, setCharFilter] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const categories = [
    { id: 'builds', label: '🎮 Character Builds', icon: '🎮' },
    { id: 'assault-rifles', label: 'Assault Rifles', icon: '🔫', category: 'Assault Rifles' },
    { id: 'pistols', label: 'Pistols', icon: '🔫', category: 'Pistols' },
    { id: 'shotguns', label: 'Shotguns', icon: '🔫', category: 'Shotguns' },
    { id: 'smgs', label: 'SMGs', icon: '🔫', category: 'SMGs' },
    { id: 'snipers', label: 'Snipers', icon: '🎯', category: 'Snipers' },
    { id: 'heavy', label: 'Heavy Weapons', icon: '💥', category: 'Heavy Weapons' },
    { id: 'armor-shields', label: 'Armor Shields', icon: '🛡️', category: 'Armor Shields' },
    { id: 'energy-shields', label: 'Energy Shields', icon: '⚡', category: 'Energy Shields' },
    { id: 'grenades', label: 'Grenades', icon: '💣', category: 'Grenades' },
    { id: 'class-mods', label: 'Class Mods', icon: '🎭', category: 'Class Mods' },
    { id: 'enhancements', label: 'Enhancements', icon: '⚙️', category: 'Enhancements' },
    { id: 'repkits', label: 'Repkits', icon: '🔧', category: 'Repkits' },
    { id: 'all', label: 'All Items', icon: '📋' },
  ];

  const filteredItems = useMemo(() => {
    let items = [...legendaryData];

    // Filter by category
    if (currentTab !== 'all' && currentTab !== 'builds') {
      const category = categories.find(cat => cat.id === currentTab)?.category;
      if (category) {
        items = items.filter(item => item.category === category);
      }
    }

    // Filter by tier
    if (tierFilter) {
      items = items.filter(item => item.tier === tierFilter);
    }

    // Filter by character
    if (charFilter) {
      items = items.filter(item => 
        item.forClass.toLowerCase().includes(charFilter.toLowerCase()) ||
        item.forClass.toLowerCase().includes('all')
      );
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.effect.toLowerCase().includes(search) ||
        item.analysis.toLowerCase().includes(search) ||
        item.dropLocation.toLowerCase().includes(search)
      );
    }

    return items;
  }, [currentTab, tierFilter, charFilter, searchTerm, categories]);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    setTierFilter('');
    setCharFilter('');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen" style={{
      background: '#0a0a0f',
      backgroundImage: `
        radial-gradient(circle at 20% 50%, rgba(155, 89, 182, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(231, 76, 60, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
      `
    }}>
      <Header />
      
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className={`fixed left-0 top-[120px] h-[calc(100vh-120px)] bg-bg-card/95 backdrop-blur-md border-r-2 border-accent/20 transition-all duration-300 z-40 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}>
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs hover:scale-110 transition-transform shadow-lg"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>

          {/* Navigation Items */}
          <nav className="py-6 px-3 space-y-2 overflow-y-auto h-full">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${
                  currentTab === category.id
                    ? 'bg-gradient-to-r from-accent/30 to-blue-500/30 border-2 border-accent shadow-lg shadow-accent/30 text-white'
                    : 'bg-bg-dark/30 border-2 border-transparent hover:bg-bg-hover hover:border-accent/50 text-text-secondary hover:text-white'
                }`}
                title={category.label}
              >
                <span className="text-xl flex-shrink-0">{category.icon}</span>
                {sidebarOpen && (
                  <span className="text-sm truncate">{category.label}</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-16'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Filters - only show for item tabs */}
            {currentTab !== 'builds' && (
              <Filters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                tierFilter={tierFilter}
                setTierFilter={setTierFilter}
                charFilter={charFilter}
                setCharFilter={setCharFilter}
              />
            )}

            {/* Content */}
            <div className="min-h-[400px]">
              {currentTab === 'builds' ? (
                <div>
                  {/* Universal S-Tier Section */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-xl p-6 mb-6 border-2 border-yellow-500/30">
                    <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">
                      🏆 Universal S-Tier Legendaries 🏆
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {legendaryData
                        .filter(item => item.tier === 'S')
                        .slice(0, 8)
                        .map((item, index) => (
                          <div key={index} className="bg-bg-dark/50 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
                            <div className="font-bold text-yellow-400">{item.name}</div>
                            <div className="text-text-secondary text-sm mt-2">
                              {item.category} • {item.effect.substring(0, 50)}...
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Character Builds */}
                  {Object.entries(characterBuilds).map(([key, build]) => (
                    <CharacterBuild key={key} characterKey={key} build={build} />
                  ))}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                      <ItemCard key={index} item={item} />
                    ))}
                  </div>
                  
                  {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-2xl text-text-secondary">
                        No items found matching your filters
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <Footer totalItems={legendaryData.length} showingItems={filteredItems.length} />
          </div>
        </main>
      </div>
    </div>
  );
}

