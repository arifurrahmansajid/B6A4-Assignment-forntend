import { Store, Sparkles, ShieldCheck } from "lucide-react";

export function ProvidersHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background pt-28 pb-20 px-4 transition-colors duration-500">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse dark:bg-primary/5 transition-opacity duration-1000" />
        <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse dark:bg-emerald-500/5 transition-opacity duration-1000 delay-700" />
      </div>

      {/* Textured Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-black/[0.01] dark:bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center space-y-10 z-10">
        <div className="flex justify-center flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 backdrop-blur-md shadow-sm transition-all hover:scale-105">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/60 dark:text-white/70">Trusted & Verified Providers</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground dark:text-white transition-colors leading-tight">
              Experience The <br />
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-sm px-1">
                Taste of Excellence
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground dark:text-white/50 max-w-2xl mx-auto font-medium leading-relaxed px-4 transition-colors">
              Connect with our elite curated network of certified local chefs and
              premier food providers dedicated to culinary perfection.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6">
          <div className="group flex items-center gap-4 bg-muted/30 dark:bg-white/5 backdrop-blur-xl px-6 py-4 rounded-[1.5rem] border border-border/40 transition-all hover:bg-muted/50 dark:hover:bg-white/10 hover:-translate-y-1">
            <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors">
              <Store className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-[8px] font-black uppercase text-muted-foreground/60 tracking-widest leading-none mb-1">Network</div>
              <div className="text-sm font-bold text-foreground dark:text-white transition-colors">Verified Kitchens</div>
            </div>
          </div>

          <div className="group flex items-center gap-4 bg-muted/30 dark:bg-white/5 backdrop-blur-xl px-6 py-4 rounded-[1.5rem] border border-border/40 transition-all hover:bg-muted/50 dark:hover:bg-white/10 hover:-translate-y-1">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500 transition-colors">
              <Sparkles className="h-5 w-5 text-emerald-500 group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-[8px] font-black uppercase text-muted-foreground/60 tracking-widest leading-none mb-1">Standard</div>
              <div className="text-sm font-bold text-foreground dark:text-white transition-colors">Top Tier Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
