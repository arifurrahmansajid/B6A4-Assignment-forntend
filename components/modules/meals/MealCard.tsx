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
    <div className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full ring-1 ring-white/10">
      {/* Image Container */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden">
        {meal.image ? (
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-primary/5">
            <Utensils className="h-10 w-10 text-primary/20" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10">
          {meal.cuisine && meal.cuisine.length > 0 && (
            <Badge className="bg-white/90 dark:bg-black/90 text-[9px] font-black uppercase tracking-widest px-3 py-1 backdrop-blur-md border-none shadow-lg">
              {meal.cuisine[0]}
            </Badge>
          )}
        </div>

        {/* Status Overlay */}
        {!meal.isAvailable && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-20">
            <span className="text-white font-black text-sm uppercase tracking-widest border border-white/50 px-3 py-1 rounded-lg -rotate-12">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="flex justify-between items-start gap-3">
          <div className="space-y-1 flex-1">
            <h3 className="font-extrabold text-lg tracking-tight leading-tight group-hover:text-primary transition-colors line-clamp-1">
              {meal.name}
            </h3>
            <div className="flex items-center gap-1 text-[9px] text-muted-foreground font-bold uppercase tracking-wider">
              <span className="flex text-amber-500">
                <Star className="h-3 w-3 fill-current" />
              </span>
              Top Choice
            </div>
          </div>
          <div className="flex items-center gap-0.5 text-primary">
            <span className="text-xs font-bold mt-1">৳</span>
            <span className="text-xl font-black tracking-tighter">{meal.price}</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground/80 line-clamp-2 leading-relaxed min-h-[2rem]">
          {meal.description || "Prepared with fresh, locally sourced ingredients by our expert chefs."}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="flex items-center gap-1.5 p-1.5 bg-background/50 rounded-xl border border-border/40">
            <div className="p-1 bg-emerald-500/10 rounded-lg">
              <Clock className="h-2.5 w-2.5 text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] font-black uppercase tracking-tighter text-muted-foreground">Type</span>
              <span className="text-[9px] font-bold truncate capitalize">{meal.mealType || "Main"}</span>
            </div>
          </div>
          {meal.calories && (
            <div className="flex items-center gap-1.5 p-1.5 bg-background/50 rounded-xl border border-border/40">
              <div className="p-1 bg-orange-500/10 rounded-lg">
                <Flame className="h-2.5 w-2.5 text-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] font-black uppercase tracking-tighter text-muted-foreground">Energy</span>
                <span className="text-[9px] font-bold truncate">{meal.calories} kcal</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex gap-2">
          <Link href={`/meals/${meal.id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full h-10 rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all text-[10px] group/btn cursor-pointer"
            >
              <Eye className="h-3 w-3 mr-1.5 transition-transform group-hover/btn:scale-110" />
              Details
            </Button>
          </Link>
          <Button
            onClick={handleAddToCart}
            disabled={!meal.isAvailable}
            className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all text-[10px] cursor-pointer"
          >
            <ShoppingCart className="h-3 w-3 mr-1.5" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
