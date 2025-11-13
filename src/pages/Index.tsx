import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ProjectHero } from "@/components/ProjectHero";
import { OverviewSection } from "@/components/OverviewSection";
import { TechArchitecture } from "@/components/TechArchitecture";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { StatsChart } from "@/components/StatsChart";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
      {/* Sidebar - 30% */}
      <aside className="w-full md:w-[30%] hidden md:block">
        <ProjectSidebar />
      </aside>

      {/* Main Content - 70% */}
      <main className="w-full md:w-[70%] overflow-y-auto">
        <div className="container mx-auto px-6 md:px-12 py-8">
          <ProjectHero />
          <OverviewSection />
          <TechArchitecture />
          <FeaturesGrid />
          <StatsChart />
        </div>
      </main>
    </div>
  );
};

export default Index;
