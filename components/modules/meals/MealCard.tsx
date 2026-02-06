"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { MealCardProps } from "@/types/meal.type";
import { Clock, Eye, Flame, ShoppingCart, Utensils, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export function MealCard({ meal }: MealCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image,
      isAvailable: meal.isAvailable,
      providerId: meal.providerId,
    });
    toast.success(`${meal.name} added to cart!`);
  };

  return (
    <div className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full ring-1 ring-white/10">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        {meal.image ? (
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-primary/5">
            <Utensils className="h-12 w-12 text-primary/20" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10">
          {meal.cuisine && meal.cuisine.length > 0 && (
            <Badge className="bg-white/90 dark:bg-black/90 text-[10px] font-black uppercase tracking-widest px-3 py-1 backdrop-blur-md border-none shadow-lg">
              {meal.cuisine[0]}
            </Badge>
          )}
        </div>

        {/* Status Overlay */}
        {!meal.isAvailable && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-20">
            <span className="text-white font-black text-lg uppercase tracking-widest border-2 border-white/50 px-4 py-1.5 rounded-lg -rotate-12">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1 flex-1">
            <h3 className="font-extrabold text-xl tracking-tight leading-tight group-hover:text-primary transition-colors line-clamp-1">
              {meal.name}
            </h3>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
              <span className="flex text-amber-500">
                <Star className="h-3 w-3 fill-current" />
              </span>
              Top Choice
            </div>
          </div>
          <div className="flex items-center gap-0.5 text-primary">
            <span className="text-sm font-bold mt-1">৳</span>
            <span className="text-2xl font-black tracking-tighter">{meal.price}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed min-h-[2.5rem]">
          {meal.description || "Prepared with fresh, locally sourced ingredients by our expert chefs."}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 p-2 bg-background/50 rounded-2xl border border-border/40">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg">
              <Clock className="h-3 w-3 text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black uppercase tracking-tighter text-muted-foreground">Type</span>
              <span className="text-[10px] font-bold truncate capitalize">{meal.mealType || "Main"}</span>
            </div>
          </div>
          {meal.calories && (
            <div className="flex items-center gap-2 p-2 bg-background/50 rounded-2xl border border-border/40">
              <div className="p-1.5 bg-orange-500/10 rounded-lg">
                <Flame className="h-3 w-3 text-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-tighter text-muted-foreground">Energy</span>
                <span className="text-[10px] font-bold truncate">{meal.calories} kcal</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex gap-2">
          <Link href={`/meals/${meal.id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full h-11 rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all text-xs group/btn cursor-pointer"
            >
              <Eye className="h-3.5 w-3.5 mr-2 transition-transform group-hover/btn:scale-110" />
              Details
            </Button>
          </Link>
          <Button
            onClick={handleAddToCart}
            disabled={!meal.isAvailable}
            className="flex-1 h-11 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs cursor-pointer"
          >
            <ShoppingCart className="h-3.5 w-3.5 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
