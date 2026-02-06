"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight, Sparkles, Star, Users, MapPin, ShieldCheck, ShoppingBag } from "lucide-react";
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
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#020817] pt-20">
      {/* Cinematic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-[50%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse opacity-50" />
        <div className="absolute bottom-[10%] -right-[5%] w-[50%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-1000 opacity-30" />
      </div>

      {/* Textured Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817] pointer-events-none" />

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col gap-10">
            {/* Premium Badge */}
            <div className="flex items-center gap-3 w-fit px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#020817] bg-primary/20 flex items-center justify-center overflow-hidden">
                    <Users className="h-3 w-3 text-primary" />
                  </div>
                ))}
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-1" />
              <div className="flex items-center gap-1.5 ">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">4.9/5 Elite Rating</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white transition-all">
                Savor The <br />
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent animate-gradient-x px-2">Heroic Taste.</span>
              </h1>
              <p className="text-xl text-white/60 max-w-xl font-medium leading-relaxed">
                Connecting you with elite culinary masters and verified local kitchens for a premium home-dining experience tailored to your excellence.
              </p>
            </div>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/meals">
                <Button size="lg" className="h-16 px-10 rounded-[1.5rem] bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-300 font-black uppercase tracking-widest text-xs group shadow-2xl shadow-black/20">
                  Explore Marketplace
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/become-provider">
                <Button size="lg" variant="outline" className="h-16 px-10 rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all font-black uppercase tracking-widest text-xs shadow-xl">
                  Partner With Us
                </Button>
              </Link>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-3 gap-8 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="space-y-1">
                <p className="text-3xl font-black text-white">500<span className="text-primary font-normal">+</span></p>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/40 leading-none">Global Kitchens</p>
              </div>
              <div className="w-[1px] h-full bg-white/10" />
              <div className="space-y-1">
                <p className="text-3xl font-black text-white">15<span className="text-emerald-500 font-normal">m</span></p>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/40 leading-none">Swift Delivery</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUALS ================= */}
          <div className="relative">
            {/* Visual Backdrops */}
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

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
                    <div className="relative group p-4">
                      <div className="relative h-[550px] lg:h-[650px] w-full overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Floating Premium Card */}
                      <div className="absolute bottom-12 -left-6 bg-white/10 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/20 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-emerald-400/20 animate-ping rounded-2xl" />
                            <ShieldCheck className="h-7 w-7 text-emerald-400 relative z-10" />
                          </div>
                          <div>
                            <p className="font-black text-lg text-white leading-tight">Elite Secure</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Verified Provider</p>
                          </div>
                        </div>
                      </div>

                      {/* Floating Active Order Bag */}
                      <div className="absolute top-12 -right-6 bg-primary/20 backdrop-blur-2xl p-6 rounded-[2rem] border border-primary/20 shadow-2xl transition-all duration-500 group-hover:translate-y-2 group-hover:-translate-x-2">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                            <ShoppingBag className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-black text-sm text-white">Live Tracking</p>
                            <p className="text-[10px] font-black uppercase text-white/50">Active Order</p>
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
