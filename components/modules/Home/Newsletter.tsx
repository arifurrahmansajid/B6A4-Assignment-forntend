"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Send, BellRing } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: connect API here
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <Card className="relative bg-muted/30 dark:bg-card rounded-[3rem] overflow-hidden border border-border/40 shadow-xl transition-colors duration-500">
          {/* Internal Decorative Elements */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.08] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl opacity-50" />

          <CardContent className="relative z-10 p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BellRing className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 dark:text-white/60">Stay Informed</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-[1.1]">
                    Join The <br />
                    <span className="text-primary italic">Elite Circle</span>
                  </h2>
                  <p className="text-base text-muted-foreground dark:text-white/50 font-medium leading-relaxed max-w-md">
                    Get curated culinary deals, artisan highlights, and heroic offers delivered directly to your professional inbox.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2.5">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-background bg-muted overflow-hidden flex items-center justify-center">
                        <span className="text-[8px] font-bold">U{i}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">50,000+ Subscribed</p>
                </div>
              </div>

              {/* Right Form */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-background/50 dark:bg-white/5 backdrop-blur-2xl p-3 md:p-4 rounded-[2rem] border border-border/40 dark:border-white/10 flex flex-col sm:flex-row gap-3 shadow-2xl"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/40" />
                    <Input
                      type="email"
                      placeholder="Professional email"
                      className="h-14 pl-14 pr-6 bg-transparent border-none text-foreground dark:text-white placeholder:text-muted-foreground/40 text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-14 px-8 rounded-xl bg-primary text-white hover:bg-foreground hover:text-background transition-all duration-300 font-black uppercase tracking-widest text-[10px] group/btn shadow-lg shadow-primary/20"
                  >
                    Subscribe
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </form>
                <p className="mt-4 text-[9px] text-center text-muted-foreground/40 font-black uppercase tracking-widest">
                  We respect your inbox. No spam, just excellence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
