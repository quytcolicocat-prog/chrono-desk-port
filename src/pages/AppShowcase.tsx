import { HeroSection } from "@/components/showcase/HeroSection";
import { FeaturesSection } from "@/components/showcase/FeaturesSection";
import { CTASection } from "@/components/showcase/CTASection";
import { FooterSection } from "@/components/showcase/FooterSection";
import { AnimatedBackground } from "@/components/showcase/AnimatedBackground";

const AppShowcase = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default AppShowcase;
