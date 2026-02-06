import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, TrendingUp, Users, ChevronRight, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

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
    <Card className="group relative bg-muted/20 dark:bg-card/40 backdrop-blur-xl border border-border/40 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Interactive Decoration */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Heart className="h-4 w-4 text-primary fill-primary/10" />
      </div>

      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Avatar className="h-20 w-20 md:h-24 md:w-24 border-4 border-background shadow-xl transition-transform duration-500 group-hover:scale-110">
              <AvatarImage
                src={
                  provider.imageUrl ||
                  `https://api.dicebear.com/7.x/initials/svg?seed=${provider.shopName}`
                }
                alt={provider.shopName}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-emerald-600 text-white text-xl font-black">
                {provider.shopName?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {provider.verified && (
              <div className="absolute -bottom-0.5 -right-0.5 bg-background p-1 rounded-full shadow-md border border-border/40">
                <ShieldCheck className="h-5 w-5 text-emerald-500 fill-emerald-500/10" />
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg md:text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
              {provider.shopName}
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground font-medium bg-background/50 px-3 py-1 rounded-full border border-border/40">
              <MapPin className="h-3 w-3 text-primary/70" />
              <span className="truncate max-w-[150px]">{provider?.address}</span>
            </div>
          </div>

          {provider.rating >= 4.8 && (
            <Badge className="bg-primary/10 text-primary border-none text-[8px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full">
              Pioneer Chef
            </Badge>
          )}
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-3 gap-0 p-1 rounded-[1.5rem] bg-background/50 dark:bg-white/5 border border-border/40">
          <div className="text-center py-3 space-y-0.5">
            <div className="flex items-center justify-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="font-black text-xs text-foreground">
                {provider.rating?.toFixed(1) || 5.0}
              </span>
            </div>
            <p className="text-[8px] font-black uppercase text-muted-foreground/50 tracking-widest">Rating</p>
          </div>
          <div className="text-center py-3 space-y-0.5 border-x border-border/40">
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span className="font-black text-xs text-foreground">
                {provider.meals.length || 0}
              </span>
            </div>
            <p className="text-[8px] font-black uppercase text-muted-foreground/50 tracking-widest">Meals</p>
          </div>
          <div className="text-center py-3 space-y-0.5">
            <div className="flex items-center justify-center gap-1">
              <Users className="h-3 w-3 text-emerald-500" />
              <span className="font-black text-xs text-foreground">
                {provider.totalOrders || 0}
              </span>
            </div>
            <p className="text-[8px] font-black uppercase text-muted-foreground/50 tracking-widest">Orders</p>
          </div>
        </div>

        <Link href={`/providers/${provider?.userId}`} className="block">
          <Button
            className="w-full h-12 bg-foreground text-background dark:bg-white dark:text-black hover:bg-primary hover:text-white transition-all duration-300 rounded-xl font-black uppercase tracking-widest text-[10px] group/btn shadow-lg"
          >
            Explore Menu
            <ChevronRight className="h-4 w-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
