import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl gradient-orange-blue rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Glass overlay for readability */}
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-white/90">
              Join hundreds of businesses already leveraging AI to work smarter,
              faster, and more efficiently. Let&apos;s discuss how AI can help you
              achieve your goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="glass-strong border-white/30 hover:border-white/50">
                <Link href="/contact">
                  Start Your AI Journey
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="glass border-white/30 hover:border-white/50 text-white hover:text-white">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
