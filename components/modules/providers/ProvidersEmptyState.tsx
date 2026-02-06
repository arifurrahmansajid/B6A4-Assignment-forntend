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
    <div className="relative flex flex-col items-center justify-center py-32 px-4 text-center">
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="relative mb-10 group">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl flex items-center justify-center animate-pulse group-hover:bg-primary/30 transition-colors" />
        <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-[2.5rem] bg-card/40 backdrop-blur-2xl border border-border/40 shadow-2xl transition-transform duration-500 group-hover:scale-110">
          <Search className="h-12 w-12 text-primary group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-2 -right-2 bg-background p-1.5 rounded-full border border-border/40 shadow-lg">
            <XCircle className="h-6 w-6 text-destructive fill-destructive/10" />
          </div>
        </div>
        <Sparkles className="absolute -bottom-4 -left-4 h-8 w-8 text-amber-400 animate-bounce delay-300 opacity-50" />
      </div>

      <div className="max-w-lg space-y-6">
        <h3 className="text-4xl font-black tracking-tight text-foreground dark:text-white transition-colors">
          No Skilled Chefs <br /> Found Yet
        </h3>
        <p className="text-muted-foreground dark:text-white/60 font-medium leading-relaxed text-lg transition-colors">
          We couldn&apos;t find any providers matching your current vision.
          Try expanding your horizons or starting fresh with a reset.
        </p>
      </div>

      <div className="mt-12">
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="h-14 px-10 rounded-[1.25rem] border-2 hover:bg-primary hover:text-white hover:border-primary transition-all font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:shadow-primary/20"
        >
          Reset All Filters
        </Button>
      </div>
    </div>
  );
}
