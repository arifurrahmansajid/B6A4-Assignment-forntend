"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Filter, X, ChevronRight, Utensils, Heart, Clock, Flame, Banknote, ListOrdered, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MealFiltersProps {
  onFilterChange: (filters: FilterValues) => void;
  onClearSearch: () => void;
  filters: FilterValues;
  cuisines?: string[];
  dietaryOptions?: string[];
  mealTypes?: string[];
}

export interface FilterValues {
  cuisine: string;
  dietary: string[];
  mealType: string;
  spiceLevel: string;
  priceRange: [number, number];
  sortBy: string;
  sortOrder: string;
}

const spiceLevels = ["All", "Low", "Medium", "High"];
const sortOptions = [
  { value: "createdAt", label: "Newest First" },
  { value: "price", label: "Price" },
  { value: "name", label: "Name" },
  { value: "calories", label: "Calories" },
];
const sortOrders = [
  { value: "desc", label: "Descending" },
  { value: "asc", label: "Ascending" },
];

export function MealFilters({
  onFilterChange,
  onClearSearch,
  filters,
  cuisines = [],
  dietaryOptions = [],
  mealTypes = [],
}: MealFiltersProps) {
  const cuisineList = ["All", ...cuisines];
  const mealTypeList = ["All", ...mealTypes];

  const handleCuisineChange = (value: string) => {
    onFilterChange({ ...filters, cuisine: value });
  };

  const handleDietaryChange = (dietary: string) => {
    const newDietary = filters.dietary.includes(dietary)
      ? filters.dietary.filter((d) => d !== dietary)
      : [...filters.dietary, dietary];
    onFilterChange({ ...filters, dietary: newDietary });
  };

  const handleMealTypeChange = (value: string) => {
    onFilterChange({ ...filters, mealType: value });
  };

  const handleSpiceLevelChange = (value: string) => {
    onFilterChange({ ...filters, spiceLevel: value });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleSortByChange = (value: string) => {
    onFilterChange({ ...filters, sortBy: value });
  };

  const handleSortOrderChange = (value: string) => {
    onFilterChange({ ...filters, sortOrder: value });
  };

  const handleClearFilters = () => {
    onClearSearch();
    onFilterChange({
      cuisine: "All",
      dietary: [],
      mealType: "All",
      spiceLevel: "All",
      priceRange: [0, 1000],
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const hasActiveFilters =
    filters.cuisine !== "All" ||
    filters.dietary.length > 0 ||
    filters.mealType !== "All" ||
    filters.spiceLevel !== "All" ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 1000 ||
    filters.sortBy !== "createdAt" ||
    filters.sortOrder !== "desc";

  return (
    <div className="sticky top-24 bg-card/70 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-300">
      <div className="p-8 space-y-12 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border/10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl ring-1 ring-primary/20">
              <Filter className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground/90">Refine Menu</h2>
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="h-10 px-4 text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all rounded-xl"
            >
              Reset All
            </Button>
          )}
        </div>

        <div className="space-y-12">
          {/* Cuisine Filter */}
          <FilterSection title="Cuisines" icon={<Utensils className="h-5 w-5" />}>
            <RadioGroup value={filters.cuisine} onValueChange={handleCuisineChange} className="grid grid-cols-1 gap-2">
              {cuisineList.map((cuisine) => (
                <FilterItem key={cuisine} id={`cuisine-${cuisine}`} value={cuisine} label={cuisine} isChecked={filters.cuisine === cuisine} />
              ))}
            </RadioGroup>
          </FilterSection>

          {/* Dietary Filter */}
          <FilterSection title="Preferences" icon={<Heart className="h-5 w-5" />}>
            <div className="space-y-2">
              {dietaryOptions.map((option) => (
                <div key={option} className="group relative">
                  <Checkbox
                    id={`dietary-${option}`}
                    checked={filters.dietary.includes(option)}
                    onCheckedChange={() => handleDietaryChange(option)}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`dietary-${option}`}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium border border-transparent transition-all cursor-pointer peer-data-[state=checked]:bg-emerald-500/10 peer-data-[state=checked]:text-emerald-700 hover:bg-muted/50 capitalize"
                  >
                    <div className="w-6 h-6 rounded-lg border-2 border-input flex items-center justify-center transition-all peer-data-[state=checked]:bg-emerald-500 peer-data-[state=checked]:border-emerald-500">
                      {filters.dietary.includes(option) && <Check className="h-4 w-4 text-white" />}
                    </div>
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Meal Type Filter */}
          <FilterSection title="Serve Type" icon={<Clock className="h-5 w-5" />}>
            <RadioGroup value={filters.mealType} onValueChange={handleMealTypeChange} className="grid grid-cols-1 gap-2">
              {mealTypeList.map((type) => (
                <FilterItem key={type} id={`mealType-${type}`} value={type} label={type} isChecked={filters.mealType === type} />
              ))}
            </RadioGroup>
          </FilterSection>

          {/* Spice Level Filter */}
          <FilterSection title="Spice Intensity" icon={<Flame className="h-5 w-5" />}>
            <RadioGroup value={filters.spiceLevel} onValueChange={handleSpiceLevelChange} className="grid grid-cols-2 gap-3">
              {spiceLevels.map((level) => (
                <div key={level} className="relative">
                  <RadioGroupItem value={level} id={`spice-${level}`} className="peer sr-only" />
                  <Label
                    htmlFor={`spice-${level}`}
                    className="flex items-center justify-center px-4 py-4 rounded-2xl text-sm font-semibold border-2 border-border/40 transition-all cursor-pointer peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white peer-data-[state=checked]:border-primary hover:bg-muted/50 uppercase tracking-tight"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FilterSection>

          {/* Price Range Filter */}
          <FilterSection title="Price Range" icon={<Banknote className="h-5 w-5" />}>
            <div className="pt-6 px-3 space-y-8">
              <Slider
                min={0}
                max={1000}
                step={10}
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                className="w-full"
              />
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1 bg-muted/40 py-4 px-5 rounded-2xl border border-border/30 text-center">
                  <span className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1 opacity-70">Minimum</span>
                  <span className="text-base font-semibold text-foreground">৳{filters.priceRange[0]}</span>
                </div>
                <div className="text-muted-foreground/30 font-light text-2xl">—</div>
                <div className="flex-1 bg-muted/40 py-4 px-5 rounded-2xl border border-border/30 text-center">
                  <span className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1 opacity-70">Maximum</span>
                  <span className="text-base font-semibold text-foreground">৳{filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
          </FilterSection>

          {/* Sorting Organization */}
          <FilterSection title="Organization" icon={<ListOrdered className="h-5 w-5" />}>
            <div className="space-y-8 pt-4">
              <div className="space-y-4">
                <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 ml-2">Sort Criteria</Label>
                <RadioGroup value={filters.sortBy} onValueChange={handleSortByChange} className="grid grid-cols-2 gap-3">
                  {sortOptions.map((option) => (
                    <div key={option.value} className="relative">
                      <RadioGroupItem value={option.value} id={`sort-${option.value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`sort-${option.value}`}
                        className="block text-center px-3 py-4 rounded-2xl text-xs font-semibold border-2 border-border/40 transition-all cursor-pointer peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary peer-data-[state=checked]:border-primary/30 hover:bg-muted/50"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 ml-2">Order Direction</Label>
                <RadioGroup value={filters.sortOrder} onValueChange={handleSortOrderChange} className="grid grid-cols-2 gap-3">
                  {sortOrders.map((order) => (
                    <div key={order.value} className="relative">
                      <RadioGroupItem value={order.value} id={`order-${order.value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`order-${order.value}`}
                        className="block text-center px-3 py-4 rounded-2xl text-xs font-semibold border-2 border-border/40 transition-all cursor-pointer peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary peer-data-[state=checked]:border-primary/30 hover:bg-muted/50"
                      >
                        {order.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </FilterSection>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80 flex items-center gap-4">
        <span className="p-2 bg-background/50 border border-border/30 rounded-xl text-primary/80 shadow-sm">{icon}</span>
        {title}
      </h3>
      <div className="px-1">
        {children}
      </div>
    </div>
  );
}

function FilterItem({ id, value, label, isChecked }: { id: string; value: string; label: string; isChecked: boolean }) {
  return (
    <div className="group flex items-center">
      <RadioGroupItem value={value} id={id} className="peer sr-only" />
      <Label
        htmlFor={id}
        className={cn(
          "flex-1 px-6 py-5 rounded-[1.5rem] text-[15px] font-medium border border-transparent transition-all cursor-pointer flex items-center justify-between group-hover:bg-muted/50",
          isChecked
            ? "bg-primary/10 text-primary border-primary/20 shadow-sm"
            : "text-muted-foreground/90"
        )}
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-2 h-2 rounded-full transition-all ring-4 ring-primary/10",
            isChecked ? "bg-primary scale-100" : "bg-transparent scale-0"
          )} />
          {label}
        </div>
        {isChecked && <ChevronRight className="h-5 w-5 text-primary/80 animate-in fade-in slide-in-from-left-2 duration-300" />}
      </Label>
    </div>
  );
}
