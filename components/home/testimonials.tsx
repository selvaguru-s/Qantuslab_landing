import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AI Solutions helped us automate our customer support, reducing response times by 80%. Our team now focuses on complex issues while AI handles the routine.",
    author: "Karthick",
    role: "Design and Development engineer at Trane Technologies",
  },
  {
    quote:
      "We went from spending 20 hours a week on content creation to 2 hours. The AI-generated content is indistinguishable from human-written, and our engagement is up 150%.",
    author: "prakash",
    role: "Content Creator",
  },
  {
    quote:
      "The custom AI agent they built for our sales team is like having 10 additional employees. It qualifies leads, schedules meetings, and follows up - all automatically.",
    author: "Akeens",
    role: "UK based entrepreneur",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50 -z-10" />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Trusted by{" "}
            <span className="bg-gradient-orange-blue bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="text-muted-foreground">
            See how companies are transforming their operations with our AI
            solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="gradient-border">
              <Card className="relative h-full">
                <CardContent className="pt-6">
                  <div className="icon-orb-blue mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  <blockquote className="mb-6 text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
