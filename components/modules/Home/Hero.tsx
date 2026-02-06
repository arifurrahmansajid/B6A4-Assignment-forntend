"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight, Star, Users, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

// images - Note: These must exist in public/
import hero1 from "../../../public/hero-food.jpg";
import hero2 from "../../../public/hero-food-2.jpg";
import hero3 from "../../../public/hero-food-3.jpg";

const heroImages = [
  { src: hero1, alt: "Delicious food delivery" },
  { src: hero2, alt: "Fresh meals from restaurants" },
  { src: hero3, alt: "Fast food delivery service" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20 transition-colors duration-500">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Textured Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-black/[0.015] dark:bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* ================= HEADER SECTION ================= */}
        <div className="max-w-4xl space-y-8 mb-16 px-4">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/40 backdrop-blur-xl shadow-2xl animate-fade-in transition-transform hover:scale-105">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70">The Future of Flavor</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight text-foreground dark:text-white">
            Beyond Taste. <br />
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent animate-gradient-x">Beyond Excellence.</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground dark:text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover a curated world of culinary masterpieces delivered with heroic speed
            and verified elite security. Your journey to excellence starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/meals">
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-500 font-black uppercase tracking-widest text-xs group shadow-xl">
                Explore The Menu
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/become-provider">
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl border-border/60 bg-background/50 backdrop-blur-lg hover:bg-muted transition-all font-black uppercase tracking-widest text-xs">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>

        {/* ================= MAIN VISUAL (CAROUSEL) ================= */}
        <div className="relative w-full max-w-6xl mt-10">
          {/* Main Carousel Wrapper with deep shadows and border */}
          <div className="relative group p-4 md:p-8">
            {/* Visual Backdrops */}
            <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[120px] scale-90 group-hover:scale-100 transition-transform duration-1000 opacity-40" />

            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="relative z-20 w-full"
            >
              <CarouselContent>
                {heroImages.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[450px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-[3rem] md:rounded-[4rem] border-8 border-background shadow-[0_48px_80px_-24px_rgba(0,0,0,0.15)]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Floating Elements Positioned Differently */}

            {/* Elite Badge - Top Left Overlapping */}
            <div className="absolute -top-4 -left-4 md:top-12 md:-left-12 z-30 bg-background/90 dark:bg-card/95 backdrop-blur-2xl px-6 py-4 rounded-[2rem] border border-border/40 shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-black text-sm md:text-base text-foreground dark:text-white">Elite Service</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Order Indicator - Bottom Right Overlapping */}
            <div className="absolute -bottom-4 -right-4 md:bottom-20 md:-right-12 z-30 bg-primary px-8 py-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(var(--primary),0.3)] transition-all duration-700 hover:scale-105 group/indicator">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center animate-pulse">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="font-black text-xs text-white uppercase tracking-[0.1em]">Fast Delivery</p>
                  <p className="text-[9px] font-black uppercase text-white/70 tracking-widest leading-none">Under 15 Mins</p>
                </div>
              </div>
            </div>

            {/* Satisfied Users Circle - Top Right Overlapping */}
            <div className="absolute -top-6 -right-4 md:-top-4 md:right-0 z-30 flex items-center gap-3 bg-background p-3 rounded-full border border-border/40 shadow-xl">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[8px] font-bold">U{i}</div>
                ))}
              </div>
              <div className="pr-4">
                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">50k+ Happy</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="mt-12 md:mt-24 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-muted/30 dark:bg-white/5 border border-border/40 backdrop-blur-sm space-y-1 group hover:bg-primary/5 transition-colors duration-500">
              <p className="text-3xl font-black text-foreground dark:text-white group-hover:text-primary transition-colors">500<span className="text-primary font-light">+</span></p>
              <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Elite Kitchens</p>
            </div>
            <div className="p-6 rounded-3xl bg-muted/30 dark:bg-white/5 border border-border/40 backdrop-blur-sm space-y-1 group hover:bg-emerald-400/5 transition-colors duration-500">
              <p className="text-3xl font-black text-foreground dark:text-white group-hover:text-emerald-500 transition-colors">15<span className="text-emerald-500 font-light">m</span></p>
              <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Sonic Delivery</p>
            </div>
            <div className="p-6 rounded-3xl bg-muted/30 dark:bg-white/5 border border-border/40 backdrop-blur-sm space-y-1 group hover:bg-primary/5 transition-colors duration-500">
              <p className="text-3xl font-black text-foreground dark:text-white group-hover:text-primary transition-colors">1M<span className="text-primary font-light">+</span></p>
              <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Served Meals</p>
            </div>
            <div className="p-6 rounded-3xl bg-muted/30 dark:bg-white/5 border border-border/40 backdrop-blur-sm space-y-1 group hover:bg-emerald-400/5 transition-colors duration-500">
              <p className="text-3xl font-black text-foreground dark:text-white group-hover:text-emerald-500 transition-colors">Elite</p>
              <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Quality Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
