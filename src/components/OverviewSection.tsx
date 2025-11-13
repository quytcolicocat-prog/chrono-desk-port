import { motion } from "framer-motion";
import { GlowCard } from "./GlowCard";

export const OverviewSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="font-orbitron text-3xl font-bold mb-6 glow-text">
        PROJECT OVERVIEW
      </h2>
      
      <GlowCard glowColor="cyan">
        <div className="space-y-4">
          <p className="text-foreground/90 leading-relaxed">
            Our Quantum AI Platform represents a paradigm shift in artificial intelligence, 
            combining the computational power of quantum processors with cloud-based scalability 
            and advanced neural network architectures.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-orbitron text-lg font-semibold text-neon-cyan mb-3">
                Key Objectives
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">▹</span>
                  <span>Develop quantum-classical hybrid algorithms for AI optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">▹</span>
                  <span>Build scalable cloud infrastructure for distributed computing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">▹</span>
                  <span>Implement advanced data security with quantum encryption</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron text-lg font-semibold text-neon-blue mb-3">
                Expected Impact
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▹</span>
                  <span>1000x faster AI model training compared to classical systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▹</span>
                  <span>Breakthrough in complex pattern recognition and prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▹</span>
                  <span>Revolutionary applications in healthcare, finance, and research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};
