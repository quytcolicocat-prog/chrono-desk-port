import { motion } from "framer-motion";
import { Brain, Zap, Shield, Layers, Network, TrendingUp } from "lucide-react";
import { GlowCard } from "./GlowCard";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    points: [
      "Transformer architecture with quantum optimization",
      "Multi-agent collaboration system",
      "Memory and personalized learning",
      "Real-time inference with low latency",
    ],
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Quantum Computing",
    points: [
      "GPU/TPU development support",
      "Cloud computing integration",
      "Edge AI deployment capabilities",
      "Distributed processing framework",
    ],
    color: "blue",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    points: [
      "Big data driven analytics",
      "Privacy protection protocols",
      "Federated learning architecture",
      "Quantum encryption standards",
    ],
    color: "green",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    points: [
      "Microservices architecture",
      "Auto-scaling capabilities",
      "Load balancing optimization",
      "Multi-region deployment",
    ],
    color: "cyan",
  },
  {
    icon: Network,
    title: "Data Management",
    points: [
      "Common data management platform",
      "Real-time data processing",
      "Distributed storage system",
      "Advanced caching mechanisms",
    ],
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    points: [
      "Predictive analytics engine",
      "Performance monitoring",
      "Business intelligence tools",
      "Custom reporting dashboards",
    ],
    color: "green",
  },
];

export const FeaturesGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="font-orbitron text-3xl font-bold mb-6 glow-text">
        KEY FEATURES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <GlowCard
              glowColor={feature.color as "cyan" | "blue" | "green"}
              className="h-full"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className={`
                  p-4 rounded-lg mb-4
                  ${feature.color === "cyan" && "bg-neon-cyan/10"}
                  ${feature.color === "blue" && "bg-neon-blue/10"}
                  ${feature.color === "green" && "bg-neon-green/10"}
                `}>
                  <feature.icon className={`
                    h-8 w-8
                    ${feature.color === "cyan" && "text-neon-cyan"}
                    ${feature.color === "blue" && "text-neon-blue"}
                    ${feature.color === "green" && "text-neon-green"}
                  `} />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className={`
                      mt-1 text-lg
                      ${feature.color === "cyan" && "text-neon-cyan"}
                      ${feature.color === "blue" && "text-neon-blue"}
                      ${feature.color === "green" && "text-neon-green"}
                    `}>
                      ✓
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
