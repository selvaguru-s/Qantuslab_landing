import { Zap, DollarSign, Shield, Clock, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get results in hours, not weeks. AI-powered development and automation accelerates every project.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description:
      "Enterprise-grade AI at a fraction of the cost. Small business budgets, big business capabilities.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Your data stays protected. We implement AI security best practices and governance frameworks.",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description:
      "AI agents that work around the clock. Automate repetitive tasks and focus on what matters.",
  },
  {
    icon: Users,
    title: "Human-AI Collaboration",
    description:
      "AI amplifies your team, it doesn't replace them. The best results come from human expertise + AI power.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Clear metrics and outcomes. We track and optimize for real business results, not vanity metrics.",
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose{" "}
            <span className="bg-gradient-orange-blue bg-clip-text text-transparent">
              AI Solutions
            </span>
            ?
          </h2>
          <p className="text-muted-foreground">
            We deliver on the promise of AI: speed, quality, and cost-effectiveness.
            No compromises.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="group">
              <div className="p-6">
                <div className="flex-shrink-0 mb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl glass-strong ${
                    index % 2 === 0 ? 'icon-orb-orange' : 'icon-orb-blue'
                  }`}>
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
