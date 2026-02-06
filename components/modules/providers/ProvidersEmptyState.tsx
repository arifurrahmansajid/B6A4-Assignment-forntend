"use client";

import { Button } from "@/components/ui/button";
import { Search, XCircle, Sparkles } from "lucide-react";

interface ProvidersEmptyStateProps {
  onClearFilters: () => void;
}

export function ProvidersEmptyState({
  onClearFilters,
}: ProvidersEmptyStateProps) {
  return (
    <div className="relative flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl flex items-center justify-center animate-pulse group-hover:bg-primary/30 transition-colors" />
        <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-muted/40 dark:bg-card/40 backdrop-blur-2xl border border-border/40 shadow-2xl transition-transform duration-500 group-hover:scale-110">
          <Search className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 bg-background p-1 rounded-full border border-border/40 shadow-lg">
            <XCircle className="h-5 w-5 text-destructive fill-destructive/10" />
          </div>
        </div>
        <Sparkles className="absolute -bottom-3 -left-3 h-6 w-6 text-amber-400 animate-bounce delay-300 opacity-40" />
      </div>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground dark:text-white transition-colors">
          No Culinary Masters <br /> Found
        </h3>
        <p className="text-muted-foreground dark:text-white/50 font-medium leading-relaxed text-base transition-colors">
          We couldn&apos;t find any providers matching your current search.
          Try clearing your filters to see our full elite network.
        </p>
      </div>

      <div className="mt-10">
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="h-12 px-8 rounded-xl border-2 hover:bg-foreground hover:text-background transition-all font-black uppercase tracking-widest text-[9px] shadow-lg"
        >
          Reset All Filters
        </Button>
      </div>
    </div>
  );
}
