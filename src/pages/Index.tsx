import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CabinsPreviewSection } from "@/components/home/CabinsPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CabinsPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
