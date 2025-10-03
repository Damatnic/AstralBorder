interface FooterProps {
  totalItems: number;
  showingItems: number;
}

export default function Footer({ totalItems, showingItems }: FooterProps) {
  return (
    <div className="text-center py-8 mt-12 border-t border-accent/20">
      <div className="flex justify-center gap-8 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-text-secondary">Total Items:</span>
          <span className="font-bold text-accent">{totalItems}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-secondary">Showing:</span>
          <span className="font-bold text-accent">{showingItems}</span>
        </div>
      </div>
      <div className="text-text-secondary">
        Vault Hunter&apos;s Complete Guide • All Legendary Items & Builds
      </div>
    </div>
  );
}

