import { motion } from "framer-motion";
import { Activity, Clock, Layers } from "lucide-react";
import { GlowCard } from "./GlowCard";

export const ProjectHero = () => {
  const stats = [
    { icon: Activity, label: "Status", value: "Active", color: "neon-green" },
    { icon: Clock, label: "Duration", value: "12 Months", color: "neon-cyan" },
    { icon: Layers, label: "Tech Stack", value: "5 Technologies", color: "neon-blue" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-12"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-4 gradient-text">
              QUANTUM AI PLATFORM
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Next-generation artificial intelligence powered by quantum computing and cloud infrastructure
            </p>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <GlowCard className="text-center" glowColor="cyan">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-neon-cyan/10">
                    <stat.icon className="h-6 w-6 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="font-orbitron text-lg font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
