"use client";

import { useMemo, useState } from "react";
import { ProviderCard } from "./ProviderCard";
import { ProvidersEmptyState } from "./ProvidersEmptyState";
import { ProvidersSearchFilter } from "./ProvidersSearchFilter";

interface Provider {
  id: string;
  name: string;
  email: string;
  shopName: string;
  address: string;
  rating: number;
  meals: any[];
  totalOrders: number;
  verified: boolean;
  imageUrl?: string;
  userId: string;
}

interface ProvidersClientProps {
  initialProviders: Provider[];
}

export function ProvidersClient({ initialProviders }: ProvidersClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProviders = useMemo(() => {
    return initialProviders.filter((provider) => {
      const matchesSearch =
        provider.shopName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.address?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [initialProviders, searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-500">
      {/* Premium Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse dark:bg-primary/5 transition-opacity duration-1000" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse dark:bg-emerald-500/5 transition-opacity duration-1000 delay-1000" />
      </div>

      <ProvidersSearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalProviders={initialProviders.length}
        filteredCount={filteredProviders.length}
      />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {filteredProviders.length === 0 ? (
          <ProvidersEmptyState onClearFilters={handleClearFilters} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
