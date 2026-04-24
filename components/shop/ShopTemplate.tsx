'use client';

import { useState, useMemo } from 'react';
import FilterBar from './FilterBar';
import FilterDrawer from './FilterDrawer';
import ProductCard from '@/components/product/ProductCard';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { Product } from '@/data/products';
import { getAllProducts } from '@/lib/get-product';
import { useEffect } from 'react';

interface ShopTemplateProps {
  initialCategory?: string;
  initialType?: string;
  title: string;
  subtitle: string;
}

export default function ShopTemplate({ 
  initialCategory, 
  initialType, 
  title, 
  subtitle 
}: ShopTemplateProps) {
  
  // State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<any>({
    region: initialCategory ? [initialCategory] : [],
    type: initialType ? [initialType] : [],
    diet: [],
    occasion: [],
    priceRange: [0, 50],
  });
  const [sortValue, setSortValue] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(12);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAllProducts();
      setProducts(data);
    }
    load();
  }, []);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const regionMatch = filters.region.length === 0 || filters.region.includes(product.region);
      const typeMatch = filters.type.length === 0 || filters.type.includes(product.type);
      const dietMatch = filters.diet.length === 0 || filters.diet.every((d: string) => product.diet.includes(d as any));
      const occasionMatch = filters.occasion.length === 0 || filters.occasion.includes(product.occasion);
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      return regionMatch && typeMatch && dietMatch && occasionMatch && priceMatch;
    }).sort((a, b) => {
      if (sortValue === 'price-low-high') return a.price - b.price;
      if (sortValue === 'price-high-low') return b.price - a.price;
      if (sortValue === 'a-z') return a.name.localeCompare(b.name);
      return 0; // Default: Newest (mocked)
    });
  }, [filters, sortValue]);

  const activeFilterCount = Object.values(filters).reduce((acc: number, val: any) => 
    acc + (Array.isArray(val) ? (typeof val[0] === 'number' ? 0 : val.length) : 0), 0
  );

  const removeFilter = (category: string, value: string) => {
    setFilters({
      ...filters,
      [category]: filters[category].filter((v: string) => v !== value)
    });
  };

  const clearFilters = () => {
    setFilters({
      region: [],
      type: [],
      diet: [],
      occasion: [],
      priceRange: [0, 50],
    });
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Strip */}
      <div className="bg-off-white py-20 mt-[72px] border-b border-border">
        <Container>
          <Reveal>
            <SectionLabel text="THE SWEET VAULT ↗" />
            <h1 className="text-display-md font-clash mt-4 mb-3">{title}</h1>
            <p className="text-body-lg text-text-secondary max-w-[600px]">{subtitle}</p>
          </Reveal>
        </Container>
      </div>

      {/* Sticky Filter Bar */}
      <FilterBar 
        onOpenFilters={() => setIsFilterOpen(true)}
        activeFilterCount={activeFilterCount}
        activeFilters={filters}
        onRemoveFilter={removeFilter}
        onClearAll={clearFilters}
        sortValue={sortValue}
        onSortChange={setSortValue}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalResults={products.length}
        filteredCount={filteredProducts.length}
      />

      {/* Main Grid */}
      <Container className="pt-16">
        {filteredProducts.length > 0 ? (
          <>
            <div className={
              viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16"
              : "flex flex-col gap-8"
            }>
              {filteredProducts.slice(0, visibleCount).map((product, i) => (
                <Reveal key={product.id} delay={i % 6 * 0.05}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>

            {visibleCount < filteredProducts.length && (
              <div className="mt-24 flex justify-center">
                <Button 
                  variant="secondary" 
                  onClick={() => setVisibleCount(v => v + 12)}
                  className="px-16"
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="py-32 text-center">
            <h3 className="text-heading-lg mb-4">No sweets found matching those filters.</h3>
            <p className="text-body-lg text-text-secondary mb-8">Try clearing your selection to see the full vault.</p>
            <Button variant="primary" onClick={clearFilters}>Clear All Filters</Button>
          </div>
        )}
      </Container>

      {/* Slide-out Drawer */}
      <FilterDrawer 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
        resultCount={filteredProducts.length}
      />
    </div>
  );
}
