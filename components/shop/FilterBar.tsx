'use client';

import { LayoutGrid, List, ChevronDown, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { cn } from '@/components/ui/Container';

interface FilterBarProps {
  onOpenFilters: () => void;
  activeFilterCount: number;
  activeFilters: any;
  onRemoveFilter: (category: string, value: string) => void;
  onClearAll: () => void;
  sortValue: string;
  onSortChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalResults: number;
  filteredCount: number;
}

export default function FilterBar({
  onOpenFilters,
  activeFilterCount,
  activeFilters,
  onRemoveFilter,
  onClearAll,
  sortValue,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalResults,
  filteredCount
}: FilterBarProps) {
  
  const flattenedFilters = Object.entries(activeFilters).flatMap(([category, values]: [string, any]) => 
    Array.isArray(values) ? values.map(v => ({ category, value: v })) : []
  );

  return (
    <div className="sticky top-[72px] z-[50] w-full bg-white border-b border-border py-4 transition-all duration-300">
      <Container className="flex items-center justify-between">
        {/* Left: Active Filters */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth flex-grow mr-8">
          {flattenedFilters.length > 0 ? (
            <>
              {flattenedFilters.map(({ category, value }) => (
                <button 
                  key={`${category}-${value}`}
                  onClick={() => onRemoveFilter(category, value)}
                  className="flex-shrink-0 flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-mono-xs font-mono transition-transform active:scale-95 group"
                >
                  <span className="uppercase">{value}</span>
                  <X size={12} className="group-hover:text-magenta transition-colors" />
                </button>
              ))}
              <button 
                onClick={onClearAll}
                className="text-mono-xs text-text-muted hover:text-magenta transition-colors whitespace-nowrap"
              >
                CLEAR ALL
              </button>
            </>
          ) : (
            <span className="text-mono-xs text-text-muted uppercase tracking-widest whitespace-nowrap lg:block hidden">
              Filtering 20+ global sweet drops
            </span>
          )}
        </div>

        {/* Centre/Right: Actions */}
        <div className="flex items-center gap-8 flex-shrink-0">
          {/* Main Filter Trigger */}
          <button 
            onClick={onOpenFilters}
            className="flex items-center gap-3 text-body-sm font-semibold uppercase tracking-wider group relative"
          >
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-magenta text-black text-[10px] font-bold rounded-full flex items-center justify-center -mr-1">
                {activeFilterCount}
              </span>
            )}
            <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center transition-transform group-hover:rotate-180">
              <ChevronDown size={10} strokeWidth={3} />
            </div>
          </button>

          <Divider />

          {/* Sort Dropdown Placeholder */}
          <div className="relative group lg:block hidden">
            <button className="flex items-center gap-2 text-body-sm font-medium text-text-primary hover:text-magenta transition-colors">
              Sort: <span className="font-semibold uppercase">{sortValue.replace('-', ' ')}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white border border-border py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[60] shadow-sm">
              {['Newest', 'Price: Low-High', 'Price: High-Low', 'A-Z'].map((option) => (
                <button 
                  key={option}
                  onClick={() => onSortChange(option.toLowerCase().replace(': ', '-'))}
                  className={cn(
                    "w-full text-left px-5 py-2 text-[13px] hover:bg-off-white hover:text-magenta transition-colors",
                    sortValue === option.toLowerCase().replace(': ', '-') ? "text-magenta font-semibold" : "text-text-secondary"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <Divider className="lg:block hidden" />

          {/* View Toggles */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onViewModeChange('grid')}
              className={cn(
                "p-1 transition-colors",
                viewMode === 'grid' ? "text-magenta" : "text-text-muted hover:text-text-primary"
              )}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => onViewModeChange('list')}
              className={cn(
                "p-1 transition-colors",
                viewMode === 'list' ? "text-magenta" : "text-text-muted hover:text-text-primary"
              )}
            >
              <List size={20} />
            </button>
          </div>

          <Divider className="sm:block hidden" />

          {/* Count */}
          <span className="text-mono-xs text-text-muted whitespace-nowrap sm:block hidden">
            {filteredCount} OF {totalResults} PRODUCTS
          </span>
        </div>
      </Container>
    </div>
  );
}

function Divider({ className }: { className?: string }) {
  return <div className={cn("w-[1px] h-4 bg-border", className)} />;
}
