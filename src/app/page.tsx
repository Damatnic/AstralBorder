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

  const categories = [
    { id: 'builds', label: '🎮 Character Builds' },
    { id: 'assault-rifles', label: '🔫 Assault Rifles', category: 'Assault Rifles' },
    { id: 'pistols', label: '🔫 Pistols', category: 'Pistols' },
    { id: 'shotguns', label: '🔫 Shotguns', category: 'Shotguns' },
    { id: 'smgs', label: '🔫 SMGs', category: 'SMGs' },
    { id: 'snipers', label: '🎯 Snipers', category: 'Snipers' },
    { id: 'heavy', label: '💥 Heavy Weapons', category: 'Heavy Weapons' },
    { id: 'armor-shields', label: '🛡️ Armor Shields', category: 'Armor Shields' },
    { id: 'energy-shields', label: '⚡ Energy Shields', category: 'Energy Shields' },
    { id: 'grenades', label: '💣 Grenades', category: 'Grenades' },
    { id: 'class-mods', label: '🎭 Class Mods', category: 'Class Mods' },
    { id: 'repkits', label: '🔧 Repkits', category: 'Repkits' },
    { id: 'all', label: '📋 All Items' },
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
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="bg-bg-card/50 backdrop-blur-sm rounded-xl p-4 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  currentTab === category.id
                    ? 'bg-gradient-to-r from-accent/20 to-blue-500/20 border-2 border-accent shadow-lg shadow-accent/30'
                    : 'bg-bg-card border-2 border-transparent hover:bg-bg-hover hover:shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

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
    </div>
  );
}

