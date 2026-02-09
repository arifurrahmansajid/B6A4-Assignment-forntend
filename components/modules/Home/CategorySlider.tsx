"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Category = {
  name: string;
  image?: string | null;
  _count?: {
    meals: number;
  };
};

type CategorySliderProps = {
  categories?: Category[];
};

export function CategorySlider({ categories }: CategorySliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const getCategoryImage = (categoryName?: string) => {
    const images: Record<string, string> = {
      pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
      burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
      sushi: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
      pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
      salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      dessert: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
      drinks: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=400&fit=crop",
      chicken: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
      seafood: "https://images.unsplash.com/photo-1559737558-2f5a2f9f0f8b?w=400&h=400&fit=crop",
      vegetarian: "https://images.unsplash.com/photo-1540914124281-342587941389?w=400&h=400&fit=crop",
    };

    const key = categoryName?.toLowerCase() ?? "";
    return (
      images[key] ||
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
    );
  };

  if (!categories || categories.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/30 mb-4">
          <Sparkles className="h-10 w-10 text-muted-foreground/40" />
        </div>
        <p className="text-muted-foreground font-medium">Curating flavors for you...</p>
      </div>
    );
  }

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/40 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Explore Cuisines</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
              Popular <span className="text-primary">Categories</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base font-medium">
            Dive into a world of curated flavors ranging from local favorites to global delicacies.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            dragFree: true,
          }}
          className="w-full relative group/carousel"
        >
          <CarouselContent className="-ml-6">
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="group cursor-pointer">
                  <Card className="relative h-72 sm:h-80 overflow-hidden border-none rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <CardContent className="p-0 h-full relative">
                      {/* Image */}
                      <Image
                        src={category.image || getCategoryImage(category.name)}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-2">
                        <span className="text-white font-black text-base md:text-lg transition-all duration-300 group-hover:text-primary leading-tight">
                          {category.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="h-[2px] w-4 bg-primary/60 rounded-full" />
                          <span className="text-[10px] font-black uppercase text-white/50 tracking-[0.1em]">
                            {category._count?.meals ?? 0} Meals
                          </span>
                        </div>
                      </div>

                      {/* Hover Effect Ring */}
                      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[2.5rem] transition-all duration-500 scale-95 group-hover:scale-100" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <div className="absolute top-[-100px] right-4 flex gap-3">
            <CarouselPrevious className="static h-12 w-12 rounded-2xl border-border/40 bg-background/50 backdrop-blur-md shadow-xl translate-y-0 hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="static h-12 w-12 rounded-2xl border-border/40 bg-background/50 backdrop-blur-md shadow-xl translate-y-0 hover:bg-primary hover:text-white transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
