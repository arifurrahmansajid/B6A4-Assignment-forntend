"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, Send, BellRing } from "lucide-react";
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
        <Card className="relative bg-foreground rounded-[3rem] overflow-hidden border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
          {/* Internal Decorative Elements */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <CardContent className="relative z-10 p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <BellRing className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Stay Informed</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                    Join The <br />
                    <span className="text-primary italic">Elite Circle</span>
                  </h2>
                  <p className="text-lg text-white/50 font-medium leading-relaxed max-w-md">
                    Get curated culinary deals, artisan highlights, and heroic offers delivered directly to your professional inbox.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-foreground bg-white/10 overflow-hidden" />
                    ))}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/40">50,000+ Subscribed</p>
                </div>
              </div>

              {/* Right Form */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-white/5 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/10 flex flex-col sm:flex-row gap-4 shadow-2xl"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                    <Input
                      type="email"
                      placeholder="Enter your professional email"
                      className="h-16 pl-14 pr-6 bg-transparent border-none text-white placeholder:text-white/20 text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-16 px-10 rounded-2xl bg-primary text-white hover:bg-white hover:text-foreground transition-all duration-300 font-black uppercase tracking-widest text-xs group/btn"
                  >
                    Subscribe
                    <Send className="ml-3 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </form>
                <p className="mt-4 text-[10px] text-center text-white/30 font-black uppercase tracking-widest">
                  We respect your inbox. No spam, just pure excellence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
