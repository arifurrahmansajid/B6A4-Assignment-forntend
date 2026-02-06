"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight, Star, Users, ShieldCheck, ShoppingBag } from "lucide-react";
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background pt-20 transition-colors duration-500">
      {/* Cinematic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-[50%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse opacity-40 dark:opacity-30" />
        <div className="absolute bottom-[10%] -right-[5%] w-[50%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-1000 opacity-20 dark:opacity-10" />
      </div>

      {/* Textured Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />

      <div className="section-container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Premium Badge */}
            <div className="flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 backdrop-blur-md shadow-sm transition-transform hover:scale-105">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center overflow-hidden">
                    <Users className="h-2.5 w-2.5 text-primary" />
                  </div>
                ))}
              </div>
              <div className="h-3 w-[1px] bg-foreground/10 mx-1" />
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.1em] text-foreground/70 dark:text-white/80">4.9/5 Elite Rating</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground dark:text-white">
                Savor The <br />
                <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent animate-gradient-x px-1">Heroic Taste.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground dark:text-white/60 max-w-xl font-medium leading-relaxed">
                Connecting you with elite culinary masters and verified local kitchens for a premium home-dining experience tailored to your excellence.
              </p>
            </div>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link href="/meals">
                <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 rounded-2xl bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-300 font-black uppercase tracking-widest text-[10px] sm:text-xs group shadow-xl shadow-black/5">
                  Explore Menu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/become-provider">
                <Button size="lg" variant="outline" className="h-14 md:h-16 px-8 md:px-10 rounded-2xl border-border/60 bg-background/50 backdrop-blur-md hover:bg-muted transition-all font-black uppercase tracking-widest text-[10px] sm:text-xs">
                  Partner With Us
                </Button>
              </Link>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-8 p-6 md:p-8 rounded-[2rem] bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 backdrop-blur-xl w-fit">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-foreground dark:text-white">500<span className="text-primary font-normal">+</span></p>
                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-muted-foreground/50 leading-none">Global Kitchens</p>
              </div>
              <div className="space-y-1 border-l border-border/40 pl-8">
                <p className="text-2xl md:text-3xl font-black text-foreground dark:text-white">15<span className="text-emerald-500 font-normal">m</span></p>
                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-muted-foreground/50 leading-none">Swift Delivery</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUALS ================= */}
          <div className="relative mt-12 lg:mt-0">
            {/* Visual Backdrops */}
            <div className="absolute -inset-8 bg-primary/20 rounded-full blur-[100px] animate-pulse opacity-40 dark:opacity-20" />

            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full relative z-20"
            >
              <CarouselContent>
                {heroImages.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group p-2 md:p-4">
                      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-border/40 shadow-2xl">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Floating Premium Card */}
                      <div className="absolute bottom-10 -left-4 md:-left-6 bg-background/80 dark:bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-border/40 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 w-fit">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-emerald-500 relative z-10" />
                          </div>
                          <div>
                            <p className="font-black text-sm md:text-base text-foreground dark:text-white leading-tight">Elite Secure</p>
                            <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Verified Provider</p>
                          </div>
                        </div>
                      </div>

                      {/* Floating Active Order Bag */}
                      <div className="absolute top-10 -right-4 md:-right-6 bg-primary/10 dark:bg-primary/20 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-primary/20 shadow-2xl transition-all duration-500 group-hover:translate-y-2 group-hover:-translate-x-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center">
                            <ShoppingBag className="h-4 w-4 md:h-5 md:h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-black text-[10px] md:text-xs text-foreground dark:text-white tracking-tight">Live Tracking</p>
                            <p className="text-[8px] md:text-[9px] font-black uppercase text-muted-foreground/60">Active Order</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
