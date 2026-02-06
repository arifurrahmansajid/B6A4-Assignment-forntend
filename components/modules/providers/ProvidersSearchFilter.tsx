"use client";

import { Input } from "@/components/ui/input";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

interface ProvidersSearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalProviders: number;
  filteredCount: number;
}

export function ProvidersSearchFilter({
  searchQuery,
  onSearchChange,
  totalProviders,
  filteredCount,
}: ProvidersSearchFilterProps) {
  return (
    <section className="sticky top-20 z-40 w-full bg-background/60 backdrop-blur-xl border-b border-border/40 py-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Centered Search Group */}
          <div className="w-full max-w-2xl relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-2xl group-focus-within:bg-primary/10 transition-all duration-500" />
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search for shope name or culinary location..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-14 pr-12 h-16 bg-card/50 border-border/60 rounded-[2rem] focus:ring-primary/20 focus:border-primary transition-all text-base shadow-xl shadow-black/5 placeholder:text-muted-foreground/50"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 border-l border-border/40 pl-4 py-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Results Indicator */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 flex items-center gap-3 shadow-inner">
              <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold text-foreground tracking-wide">
                {filteredCount} Chefs Found
              </span>
              <span className="text-[10px] font-black uppercase text-muted-foreground/60 border-l border-border/40 pl-3 leading-none">
                of {totalProviders} Total
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
