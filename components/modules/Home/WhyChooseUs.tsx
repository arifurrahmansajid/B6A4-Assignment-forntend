import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Clock,
  Star,
  Sparkles,
  Zap
} from "lucide-react";

const features = [
  {
    title: "Elite Security",
    description:
      "Our multi-layered security protocols and verified payment gateways ensure your data remains heroic and untouched.",
    icon: ShieldCheck,
    color: "text-primary"
  },
  {
    title: "Sonic Delivery",
    description:
      "Experience rapid-response logistics designed to deliver your culinary masterpieces in record-breaking time.",
    icon: Zap,
    color: "text-amber-500"
  },
  {
    title: "Always Active",
    description:
      "Our professional support concierge is standing by 24/7 to ensure your experience is nothing short of perfect.",
    icon: Clock,
    color: "text-emerald-500"
  },
  {
    title: "Vetted Quality",
    description:
      "We only partner with elite, certified providers who meet our rigorous standards for culinary excellence.",
    icon: Star,
    color: "text-primary"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-background overflow-hidden transition-colors duration-500">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Hero Standard</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            Why We Are <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Unrivaled</span>
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just deliver food; we provide an elite culinary gateway prioritized by speed, security, and absolute perfection.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative h-full bg-card/40 backdrop-blur-xl border border-border/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-muted/50 border border-border/40 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-xl">
                    <feature.icon className={`h-8 w-8 ${feature.color} group-hover:text-emerald-400 Transition-all`} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-700 group-hover:w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
