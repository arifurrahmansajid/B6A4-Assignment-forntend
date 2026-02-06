import { Search, ShoppingBag, Truck, ChevronRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Select Marketplace",
    description:
      "Explore hundreds of elite restaurants and verified food providers nearby. Filter by your perfect cuisine and elite ratings.",
  },
  {
    icon: ShoppingBag,
    title: "Secure Checkout",
    description:
      "Add your favorite masterpieces to the cart and checkout with our ultra-secure, multi-method payment gateway.",
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    description:
      "Watch your order in real-time with cinematic tracking. Our elite fleet ensures your meal arrives fresh and heroically fast.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-secondary/10 overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-primary/40 rounded-full" />
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Elite Experience</span>
            <div className="h-[1px] w-8 bg-primary/40 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
            How It <span className="text-primary italic">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Experience the future of food delivery through our streamlined, elite three-step professional process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              {/* Step number watermark */}
              <span className="absolute top-10 right-10 text-8xl font-black text-primary/5 pointer-events-none group-hover:text-primary/10 transition-colors">
                0{index + 1}
              </span>

              {/* Icon Orb */}
              <div className="relative mb-10 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-colors" />
                <div className="relative w-20 h-20 rounded-[1.5rem] bg-foreground flex items-center justify-center shadow-xl group-hover:bg-primary transition-colors duration-500">
                  <step.icon className="w-9 h-9 text-background group-hover:rotate-6 transition-transform" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Connector for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 opacity-20">
                  <ChevronRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}

              {/* Decorative accent */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary/20 rounded-full group-hover:w-16 group-hover:bg-primary/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
