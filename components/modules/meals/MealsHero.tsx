import { Search, Sparkles } from "lucide-react";

export function MealsHero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-24 px-4 sm:px-6 lg:px-8 border-b border-primary/10">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] -right-[15%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 animate-in fade-in slide-in-from-top duration-1000">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span>The Art of Gourmet Dining</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9] animate-in fade-in slide-in-from-bottom duration-700">
            Taste the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-primary animate-gradient">Extraordinary</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Embark on a culinary journey through a curated selection of
            premium meals, handcrafted by master chefs and delivered
            to your doorstep with absolute elegance.
          </p>

          <div className="flex justify-center gap-3 pt-4 animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="h-1 w-12 rounded-full bg-primary/50" />
            <div className="h-1 w-4 rounded-full bg-primary/20" />
            <div className="h-1 w-4 rounded-full bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
