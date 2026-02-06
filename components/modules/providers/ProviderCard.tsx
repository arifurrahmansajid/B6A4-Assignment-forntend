import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, TrendingUp, Users, ChevronRight, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Provider {
  id: string;
  name: string;
  email: string;
  shopName: string;
  address: string;
  rating: number;
  meals: any[];
  totalOrders: number;
  verified: boolean;
  imageUrl?: string;
  userId: string;
}

interface ProviderCardProps {
  provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Card className="group relative bg-card/40 dark:bg-white/5 backdrop-blur-xl border border-border/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
      {/* Interactive Decoration */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Heart className="h-5 w-5 text-primary fill-primary/10" />
      </div>

      <CardContent className="p-8 space-y-8">
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Avatar className="h-28 w-28 border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <AvatarImage
                src={
                  provider.imageUrl ||
                  `https://api.dicebear.com/7.x/initials/svg?seed=${provider.shopName}`
                }
                alt={provider.shopName}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-emerald-600 text-white text-2xl font-black">
                {provider.shopName?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {provider.verified && (
              <div className="absolute -bottom-1 -right-1 bg-background p-1.5 rounded-full shadow-lg border border-border/40">
                <ShieldCheck className="h-6 w-6 text-emerald-500 fill-emerald-500/10" />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
              {provider.shopName}
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-medium bg-muted/30 px-3 py-1 rounded-full border border-border/40">
              <MapPin className="h-3.5 w-3.5 text-primary/70" />
              <span className="truncate max-w-[180px]">{provider?.address}</span>
            </div>
          </div>

          {provider.rating >= 4.8 && (
            <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
              Top Tier Chef
            </Badge>
          )}
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-3 gap-0 p-1 rounded-3xl bg-muted/30 dark:bg-white/5 border border-border/40">
          <div className="text-center py-4 space-y-1 hover:bg-white/10 transition-colors rounded-2xl">
            <div className="flex items-center justify-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-black text-sm text-foreground">
                {provider.rating?.toFixed(1) || 5.0}
              </span>
            </div>
            <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Rating</p>
          </div>
          <div className="text-center py-4 space-y-1 border-x border-border/40 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span className="font-black text-sm text-foreground">
                {provider.meals.length || 0}
              </span>
            </div>
            <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Meals</p>
          </div>
          <div className="text-center py-4 space-y-1 hover:bg-white/10 transition-colors rounded-2xl">
            <div className="flex items-center justify-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-emerald-500" />
              <span className="font-black text-sm text-foreground">
                {provider.totalOrders || 10}
              </span>
            </div>
            <p className="text-[9px] font-black uppercase text-muted-foreground/60 tracking-widest">Orders</p>
          </div>
        </div>

        <Link href={`/providers/${provider?.userId}`} className="block">
          <Button
            className="w-full h-14 bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-500 rounded-2xl font-black uppercase tracking-widest text-xs group/btn shadow-xl shadow-black/5"
          >
            Explore Menu
            <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
