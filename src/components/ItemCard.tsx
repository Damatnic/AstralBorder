import { LegendaryItem } from '@/data/legendaries';

interface ItemCardProps {
  item: LegendaryItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const tierColors: Record<string, string> = {
    S: 'from-yellow-400 to-yellow-200',
    A: 'from-red-500 to-red-300',
    B: 'from-blue-500 to-blue-300',
    C: 'from-green-500 to-green-300',
  };

  const tierBorderColors: Record<string, string> = {
    S: 'border-t-yellow-400',
    A: 'border-t-red-500',
    B: 'border-t-blue-500',
    C: 'border-t-green-500',
  };

  return (
    <div className={`bg-bg-card rounded-xl p-6 border-t-4 ${tierBorderColors[item.tier]} border-l border-r border-b border-transparent hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-text-primary">{item.name}</h3>
        <span className={`px-3 py-1 rounded-full font-bold text-sm bg-gradient-to-r ${tierColors[item.tier]} text-black`}>
          {item.tier}
        </span>
      </div>

      {/* Effect */}
      <div className="text-yellow-400 italic mb-4 text-sm leading-relaxed">
        {item.effect}
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm mb-4">
        <div className="flex">
          <span className="font-semibold text-accent min-w-[100px]">Drop:</span>
          <span className="text-text-secondary flex-1">{item.dropLocation}</span>
        </div>
        {item.manufacturer && (
          <div className="flex">
            <span className="font-semibold text-accent min-w-[100px]">Manufacturer:</span>
            <span className="text-text-secondary flex-1">{item.manufacturer}</span>
          </div>
        )}
        <div className="flex">
          <span className="font-semibold text-accent min-w-[100px]">Best For:</span>
          <span className="text-text-secondary flex-1">{item.forClass}</span>
        </div>
        <div className="flex">
          <span className="font-semibold text-accent min-w-[100px]">Requirements:</span>
          <span className="text-text-secondary flex-1">{item.requirements}</span>
        </div>
      </div>

      {/* Analysis */}
      <div className="pt-4 border-t border-accent/20">
        <p className="text-text-primary text-sm leading-relaxed">{item.analysis}</p>
      </div>
    </div>
  );
}

