"use client";

import { Input } from "@/components/ui/input";
import { MealsClientPropsType } from "@/types/meal.type";
import { Loader, Search, Utensils, Sparkles } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { MealCard } from "./MealCard";
import { FilterValues, MealFilters } from "./MealFilters";
import PaginationControls from "./Pagination";
import { cn } from "@/lib/utils";

export function MealsClient({
  initialMeals,
  initialPagination,
  cuisines,
  dietaryOptions,
  mealTypes,
}: MealsClientPropsType) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [filters, setFilters] = useState<FilterValues>({
    cuisine: searchParams.get("cuisine") || "All",
    dietary: searchParams.get("dietary")?.split(",").filter(Boolean) || [],
    mealType: searchParams.get("mealType") || "All",
    spiceLevel: searchParams.get("spiceLevel") || "All",
    priceRange: [
      parseInt(searchParams.get("minPrice") || "0"),
      parseInt(searchParams.get("maxPrice") || "1000"),
    ],
    sortBy: searchParams.get("sortBy") || "createdAt",
    sortOrder: searchParams.get("sortOrder") || "desc",
  });

  // Debounce search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";
      if (searchQuery !== currentSearch) {
        updateURL(1, filters, searchQuery);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const updateURL = useCallback(
    (page: number, currentFilters: FilterValues, search: string) => {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      if (search) params.set("search", search);
      if (currentFilters.cuisine !== "All")
        params.set("cuisine", currentFilters.cuisine);
      if (currentFilters.dietary.length > 0)
        params.set("dietary", currentFilters.dietary.join(","));
      if (currentFilters.mealType !== "All")
        params.set("mealType", currentFilters.mealType);
      if (currentFilters.spiceLevel !== "All")
        params.set("spiceLevel", currentFilters.spiceLevel);
      if (currentFilters.priceRange[0] !== 0)
        params.set("minPrice", currentFilters.priceRange[0].toString());
      if (currentFilters.priceRange[1] !== 1000)
        params.set("maxPrice", currentFilters.priceRange[1].toString());
      params.set("sortBy", currentFilters.sortBy);
      params.set("sortOrder", currentFilters.sortOrder);

      startTransition(() => {
        router.push(`/meals?${params.toString()}`);
      });
    },
    [router],
  );

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
    updateURL(1, newFilters, searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handlePageChange = (page: number) => {
    updateURL(page, filters, searchQuery);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
        {/* Loading Overlay */}
        {isPending && (
          <div className="fixed inset-0 bg-background/40 backdrop-blur-[2px] z-50 flex items-center justify-center">
            <div className="bg-card/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-border/50 animate-in fade-in zoom-in duration-300">
              <div className="relative">
                <Loader className="h-10 w-10 text-primary animate-spin" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-emerald-500 animate-pulse" />
              </div>
              <p className="font-black text-primary tracking-widest uppercase text-xs">Refreshing Menu</p>
            </div>
          </div>
        )}

        {/* Sidebar - Desktop Only for now to keep it "same feature" */}
        <aside className="lg:col-span-3">
          <MealFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearSearch={handleClearSearch}
            cuisines={cuisines}
            dietaryOptions={dietaryOptions}
            mealTypes={mealTypes}
          />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-9 space-y-10">
          {/* Enhanced Search Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-xl group-focus-within:bg-primary/10 transition-all duration-500" />
            <div className="relative flex items-center">
              <div className="absolute left-5 text-muted-foreground group-focus-within:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <Input
                placeholder="What are you craving? Search by dish, flavor or cuisine..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-14 h-16 bg-card/60 backdrop-blur-xl border-border/40 hover:border-border/60 focus:border-primary/50 rounded-[2rem] text-lg font-medium transition-all shadow-sm ring-0"
              />
              <div className="absolute right-5 flex items-center gap-1">
                <div className="hidden sm:flex text-[10px] font-black uppercase tracking-tighter text-muted-foreground bg-muted/50 px-2 py-1 rounded-md border border-border/50">
                  ⌘ K
                </div>
              </div>
            </div>
          </div>

          {/* Meals Grid */}
          <div className="space-y-12">
            {initialMeals.length === 0 ? (
              <div className="relative py-32 rounded-[3.5rem] bg-card/30 backdrop-blur-sm border border-dashed border-border/60 overflow-hidden flex flex-col items-center text-center px-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-8 ring-1 ring-primary/10">
                  <Utensils className="h-10 w-10 text-primary/40" />
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-3">No Flavors Found</h3>
                <p className="text-muted-foreground max-w-[280px] leading-relaxed font-medium">
                  We couldn't find any matches. Try broadening your exploration or clearing filters.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {initialMeals.map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center pt-10 border-t border-border/30">
                  <PaginationControls meta={initialPagination} />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
