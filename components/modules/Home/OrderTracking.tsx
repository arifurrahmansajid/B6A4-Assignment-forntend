import { Bell, CheckCircle2, MapPin, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Live GPS updates",
    description: "Real-time pinpoint accuracy",
  },
  {
    icon: ShieldCheck,
    title: "Elite Verification",
    description: "Quality-checked providers",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Every milestone notified",
  },
];

const trackingSteps = [
  { label: "Order Confirmed", time: "10:30 AM", completed: true },
  { label: "Chef Preparing", time: "10:35 AM", completed: true },
  { label: "Elite Delivery", time: "10:50 AM", completed: true },
  { label: "Heroic Arrival", time: "Est. 11:05 AM", completed: false },
];

export const OrderTracking = () => {
  return (
    <section id="tracking" className="relative bg-background py-24 overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Live Precision</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                Track Your <br />
                <span className="text-primary italic">Elite Taste</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                Total transparency from kitchen to doorstep. Experience the future of logistics with our heroic real-time tracking engine.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-8 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border/40 flex items-center justify-center shadow-lg transition-all group-hover:bg-primary group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-[10px] uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Order Tracking Card */}
          <div className="relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 bg-card/40 backdrop-blur-2xl rounded-[3rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border/40">
              {/* Header */}
              <div className="flex items-center justify-between mb-10 pb-8 border-b border-border/40">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Order Reference</p>
                  <p className="text-xl font-black text-foreground tracking-tight">#FH-HERO-001</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-4 py-2 bg-emerald-500/10 text-emerald-600 text-xs font-black uppercase tracking-widest rounded-xl border border-emerald-500/20 shadow-sm animate-pulse">
                    In Transit
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-0 px-2">
                {trackingSteps.map((step, index) => (
                  <div key={step.label} className="flex gap-8 group/step">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${step.completed
                          ? "bg-foreground text-background shadow-xl scale-110"
                          : "bg-muted/40 text-muted-foreground/60 scale-100"
                          }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                        )}
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div
                          className={`w-[2px] h-12 transition-all duration-1000 delay-300 ${step.completed ? "bg-foreground" : "bg-border/40"
                            }`}
                        />
                      )}
                    </div>
                    <div className="pb-10 space-y-1">
                      <p
                        className={`text-lg font-black tracking-tight transition-colors ${step.completed
                          ? "text-foreground"
                          : "text-muted-foreground/60"
                          }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/50">
                        {step.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map visualizer */}
              <div
                className="relative overflow-hidden group h-36 bg-foreground rounded-[2rem] border border-white/10 flex items-center justify-center mt-6 transition-all hover:scale-[1.02] active:scale-95"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] pointer-events-none" />
                <div className="absolute inset-0 bg-primary/20 animate-pulse pointer-events-none" />

                <div className="relative z-10 text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">View Live Trajectory</p>
                </div>

                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </div>
            </div>

            {/* Cinematic back-shadow */}
            <div className="absolute -inset-2 -z-10 bg-primary/10 rounded-[3.5rem] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
