import { Store, Sparkles, ShieldCheck } from "lucide-react";

export function ProvidersHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-[#020817] pt-20 pb-16 px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Decorative Grid & Vignette */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817]" />

      <div className="relative max-w-7xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Trusted & Verified Partners</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
            Discover Our <br />
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent animate-gradient-x px-2">Top Chefs</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with local culinary experts and verified food providers
            delivering premium home-cooked experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Store className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black uppercase text-white/40 tracking-widest">Global</div>
              <div className="text-sm font-bold text-white">Verified Shops</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Sparkles className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black uppercase text-white/40 tracking-widest">Quality</div>
              <div className="text-sm font-bold text-white">Top Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
