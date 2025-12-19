import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Logo } from "@/components/logo";
import { Particles } from "@/components/particles";

export function Hero() {
  const stats = [
    { value: "Fast", label: "Lightning Quick Results", icon: Zap },
    { value: "Reliable", label: "Consistent Quality", icon: Shield },
    { value: "Scalable", label: "Grows With You", icon: TrendingUp },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 md:py-32 gradient-mesh overflow-hidden">
      {/* Particle Effects */}
      <Particles count={30} />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 gradient-radial-orange blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 gradient-radial-blue blur-3xl opacity-30 animate-wave" />

      {/* Additional animated background layer */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-radial-orange blur-3xl opacity-10 animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Large Atom Logo with Glow and Float */}
          <div className="mb-8 flex justify-center animate-fade-in animate-float relative">
            {/* Pulsing glow rings - minimal */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-orange-blue opacity-5 blur-xl pulse-glow-ring" />
            </div>

            {/* Logo with hover effect */}
            <div className="relative z-10 transition-transform duration-300 hover:scale-110">
              <Logo size="xl" showText={false} className="scale-150 md:scale-[2.5] drop-shadow-2xl" />
            </div>
          </div>

          {/* Glass badge */}
          <div className="mb-4 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>AI-Powered Solutions for 2026</span>
          </div>

          {/* Gradient headline */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl animate-slide-up">
            Transform Your Business with{" "}
            <span className="bg-gradient-orange-blue bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto animate-fade-in">
            Small teams accomplishing the work of large organizations. We help
            businesses leverage AI to automate workflows, create content, and
            build custom solutions that drive real results.
          </p>

          {/* Glass CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-scale-in">
            <Button size="lg" variant="gradient" asChild>
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Glass stats cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card rounded-xl p-6 hover-lift">
                <div className={`${index % 2 === 0 ? 'icon-orb-orange' : 'icon-orb-blue'} mb-3`}>
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
