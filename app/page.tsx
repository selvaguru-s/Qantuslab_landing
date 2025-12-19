import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { Features } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
