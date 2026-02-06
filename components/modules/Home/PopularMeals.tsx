"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Clock,
  Flame,
  Star,
  ChevronRight,
  TrendingUp,
  UtensilsCrossed,
  Heart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  prepTime?: number;
  calories?: number;
  category?: {
    name: string;
  };
  isAvailable?: boolean;
}

interface ProviderMealsGridProps {
  meals: Meal[];
}

export function PopularMeals({ meals }: ProviderMealsGridProps) {
  if (!meals || meals.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative flex flex-col items-center justify-center p-20 text-center bg-muted/20 rounded-[3rem] border-2 border-dashed border-border/40">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl -z-10" />
          <div className="w-20 h-20 bg-background rounded-3xl shadow-xl flex items-center justify-center mb-6">
            <UtensilsCrossed className="h-10 w-10 text-muted-foreground/40" />
          </div>
          <h3 className="text-2xl font-black tracking-tight mb-2 text-foreground">Awaiting Masterpieces</h3>
          <p className="text-muted-foreground font-medium max-w-sm text-sm">Our chefs are currently refining their menus. Check back shortly for new culinary experiences.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-border/40 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Top Trending</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
            Most Loved <span className="text-primary">Dishes</span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 md:text-right">
          <p className="text-muted-foreground font-medium text-base leading-snug max-w-xs">
            Hand-picked selections based on customer reviews and popularity.
          </p>
          <Link href="/meals" className="group flex items-center md:justify-end gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
            Explore Full Menu
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {meals.map((meal) => (
          <Card
            key={meal.id}
            className="group relative bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 py-0"
          >
            {/* Overlay Decoration */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl cursor-not-allowed">
                <Heart className="h-4 w-4 text-white" />
              </div>
            </div>

            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 animate-pulse -z-10" />
              {meal.image && (
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4 flex gap-2">
                {meal?.category && (
                  <Badge className="bg-primary hover:bg-primary/90 text-white border-none text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl backdrop-blur-md">
                    {meal.category.name}
                  </Badge>
                )}
              </div>

              {!meal.isAvailable && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-30">
                  <Badge variant="destructive" className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-2xl border-none shadow-2xl">
                    Sold Out
                  </Badge>
                </div>
              )}
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="font-black text-lg tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight line-clamp-1">
                  {meal.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium line-clamp-2 min-h-[40px]">
                  {meal.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/70 border-t border-border/40 pt-4">
                {meal.rating && (
                  <div className="flex items-center gap-1.5 bg-amber-400/10 text-amber-600 px-2 py-1 rounded-lg">
                    <Star className="h-3 w-3 fill-amber-400" />
                    <span>{meal.rating.toFixed(1)}</span>
                  </div>
                )}
                {meal.prepTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-primary/70" />
                    <span>{meal.prepTime} Min</span>
                  </div>
                )}
                {meal.calories && (
                  <div className="flex items-center gap-1.5">
                    <Flame className="h-3 w-3 text-emerald-500/70" />
                    <span>{meal.calories} Cal</span>
                  </div>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 leading-none mb-1">Price</span>
                <div className="flex items-center text-xl font-black text-foreground">
                  <span className="text-primary mr-0.5">৳</span>
                  {meal.price}
                </div>
              </div>
              <Link
                href={`/meals/${meal.id}`}
                className="flex-1 h-12 inline-flex items-center justify-center bg-foreground text-background font-black uppercase tracking-widest text-[9px] rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-black/5 group/btn"
              >
                View Details
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
