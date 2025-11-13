import { HeroSection } from "@/components/showcase/HeroSection";
import { FeaturesSection } from "@/components/showcase/FeaturesSection";
import { CTASection } from "@/components/showcase/CTASection";
import { FooterSection } from "@/components/showcase/FooterSection";

const AppShowcase = () => {
  return (
    <div className="min-h-screen bg-app-dark overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default AppShowcase;
