import { Metadata } from "next";
import { Target, Heart, Lightbulb, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Qantuslab",
  description:
    "Learn about Qantuslab - innovating the future with AI and technology solutions.",
};

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "We measure success by your outcomes, not hours logged. Every solution is designed with clear ROI in mind.",
  },
  {
    icon: Heart,
    title: "Human-First AI",
    description:
      "AI amplifies human potential, it doesn't replace it. We build solutions that empower your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the cutting edge of AI technology, bringing you the latest capabilities as they emerge.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We're not just vendors, we're partners. Your success is our success, and we're invested in the long term.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            About Qantuslab
          </h1>
          <p className="text-lg text-muted-foreground">
            We're dedicated to helping businesses leverage the power of
            artificial intelligence and modern technology to achieve their goals.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Qantuslab, we believe in making advanced technology
                accessible and practical for businesses of all sizes.
              </p>
              <p>
                Our focus is on delivering solutions that drive real value,
                combining cutting-edge AI capabilities with deep understanding
                of business needs.
              </p>
              <p>
                Whether you're looking to automate processes, enhance customer
                experiences, or unlock insights from your data, we're here to
                help you navigate the possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <div className="mx-auto max-w-2xl">
            <Rocket className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Let&apos;s discuss how we can help you achieve your goals.
              Get in touch with us today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
