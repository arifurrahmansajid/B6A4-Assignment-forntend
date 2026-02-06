"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Filter, X, ChevronRight, Utensils, Heart, Clock, Flame, Banknote, ListOrdered } from "lucide-react";
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
    <div className="sticky top-24 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary/5">
      <div className="p-6 space-y-8 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Filter className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-black tracking-tight">Refine Menu</h2>
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="h-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all rounded-lg"
            >
              <X className="h-3 w-3 mr-1" />
              Reset
            </Button>
          )}
        </div>

        <div className="space-y-8 pb-4">
          {/* Cuisine Filter */}
          <FilterSection title="Cuisines" icon={<Utensils className="h-3 w-3" />}>
            <RadioGroup value={filters.cuisine} onValueChange={handleCuisineChange} className="gap-1">
              {cuisineList.map((cuisine) => (
                <FilterItem key={cuisine} id={`cuisine-${cuisine}`} value={cuisine} label={cuisine} isChecked={filters.cuisine === cuisine} />
              ))}
            </RadioGroup>
          </FilterSection>

          <Separator className="bg-border/30" />

          {/* Dietary Filter */}
          <FilterSection title="Preferences" icon={<Heart className="h-3 w-3" />}>
            <div className="space-y-1">
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
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold border border-transparent transition-all cursor-pointer peer-data-[state=checked]:bg-emerald-500/10 peer-data-[state=checked]:border-emerald-500/20 peer-data-[state=checked]:text-emerald-600 hover:bg-muted/50 capitalize"
                  >
                    <div className="w-4 h-4 rounded border border-input flex items-center justify-center transition-all peer-data-[state=checked]:bg-emerald-500 peer-data-[state=checked]:border-emerald-500">
                      {filters.dietary.includes(option) && <X className="h-2.5 w-2.5 text-white" />}
                    </div>
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </FilterSection>

          <Separator className="bg-border/30" />

          {/* Meal Type Filter */}
          <FilterSection title="Serve Type" icon={<Clock className="h-3 w-3" />}>
            <RadioGroup value={filters.mealType} onValueChange={handleMealTypeChange} className="gap-1">
              {mealTypeList.map((type) => (
                <FilterItem key={type} id={`mealType-${type}`} value={type} label={type} isChecked={filters.mealType === type} />
              ))}
            </RadioGroup>
          </FilterSection>

          <Separator className="bg-border/30" />

          {/* Spice Level Filter */}
          <FilterSection title="Spice Level" icon={<Flame className="h-3 w-3" />}>
            <RadioGroup value={filters.spiceLevel} onValueChange={handleSpiceLevelChange} className="flex flex-wrap gap-2">
              {spiceLevels.map((level) => (
                <div key={level} className="relative flex-1 min-w-[60px]">
                  <RadioGroupItem value={level} id={`spice-${level}`} className="peer sr-only" />
                  <Label
                    htmlFor={`spice-${level}`}
                    className="flex items-center justify-center px-2 py-2 rounded-xl text-[10px] font-black border border-border/50 transition-all cursor-pointer peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary hover:bg-muted/50 uppercase tracking-tighter"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FilterSection>

          <Separator className="bg-border/30" />

          {/* Price Range Filter */}
          <FilterSection title="Price Range" icon={<Banknote className="h-3 w-3" />}>
            <div className="pt-2 px-1 space-y-4">
              <Slider
                min={0}
                max={1000}
                step={10}
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                className="w-full"
              />
              <div className="flex justify-between items-center bg-muted/30 p-2 rounded-xl border border-border/30">
                <div className="text-[10px] font-black tracking-tighter px-2">৳{filters.priceRange[0]}</div>
                <div className="w-4 h-[1px] bg-border/50" />
                <div className="text-[10px] font-black tracking-tighter px-2">৳{filters.priceRange[1]}</div>
              </div>
            </div>
          </FilterSection>

          <Separator className="bg-border/30" />

          {/* Sorting Controls */}
          <FilterSection title="Organization" icon={<ListOrdered className="h-3 w-3" />}>
            <div className="space-y-4 pt-1">
              <div className="space-y-2">
                <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Sort By</Label>
                <RadioGroup value={filters.sortBy} onValueChange={handleSortByChange} className="grid grid-cols-2 gap-2">
                  {sortOptions.map((option) => (
                    <div key={option.value} className="relative">
                      <RadioGroupItem value={option.value} id={`sort-${option.value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`sort-${option.value}`}
                        className="block text-center px-2 py-2 rounded-xl text-[10px] font-bold border border-border/50 transition-all cursor-pointer peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary peer-data-[state=checked]:border-primary/20 hover:bg-muted/50"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Order</Label>
                <RadioGroup value={filters.sortOrder} onValueChange={handleSortOrderChange} className="grid grid-cols-2 gap-2">
                  {sortOrders.map((order) => (
                    <div key={order.value} className="relative">
                      <RadioGroupItem value={order.value} id={`order-${order.value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`order-${order.value}`}
                        className="block text-center px-2 py-2 rounded-xl text-[10px] font-bold border border-border/50 transition-all cursor-pointer peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary peer-data-[state=checked]:border-primary/20 hover:bg-muted/50"
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
    <div className="space-y-4">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
        <span className="p-1.5 bg-background border border-border/50 rounded-lg shadow-sm">{icon}</span>
        {title}
      </h3>
      {children}
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
          "flex-1 px-3 py-2 rounded-xl text-sm font-bold border border-transparent transition-all cursor-pointer flex items-center justify-between group-hover:bg-muted/50",
          isChecked ? "bg-primary/10 border-primary/20 text-primary shadow-sm" : "text-muted-foreground"
        )}
      >
        {label}
        {isChecked && <ChevronRight className="h-3 w-3 animate-in fade-in slide-in-from-left-2 duration-300" />}
      </Label>
    </div>
  );
}
