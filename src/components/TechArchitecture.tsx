import { motion } from "framer-motion";
import { Cpu, Cloud, Database, Zap, Network, Shield } from "lucide-react";

const nodes = [
  { id: 1, icon: Cpu, label: "Quantum Processor", x: 50, y: 20, color: "neon-cyan" },
  { id: 2, icon: Cloud, label: "Cloud Layer", x: 20, y: 50, color: "neon-blue" },
  { id: 3, icon: Database, label: "Data Center", x: 80, y: 50, color: "neon-green" },
  { id: 4, icon: Zap, label: "Neural Network", x: 35, y: 80, color: "neon-cyan" },
  { id: 5, icon: Network, label: "API Gateway", x: 65, y: 80, color: "neon-blue" },
  { id: 6, icon: Shield, label: "Security", x: 50, y: 95, color: "neon-green" },
];

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 4, to: 6 },
  { from: 5, to: 6 },
];

export const TechArchitecture = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <h2 className="font-orbitron text-3xl font-bold mb-6 glow-text">
        TECHNOLOGY ARCHITECTURE
      </h2>

      <div className="glass-panel glow-border rounded-lg p-8 relative" style={{ minHeight: "500px" }}>
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--neon-cyan))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--neon-blue))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {connections.map((conn, idx) => {
            const fromNode = nodes.find((n) => n.id === conn.from);
            const toNode = nodes.find((n) => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            return (
              <motion.line
                key={idx}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: idx * 0.2 }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, idx) => {
          const colorClasses = {
            "neon-cyan": "bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_20px_hsl(var(--neon-cyan)/0.4)]",
            "neon-blue": "bg-neon-blue/20 border-neon-blue text-neon-blue shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]",
            "neon-green": "bg-neon-green/20 border-neon-green text-neon-green shadow-[0_0_20px_hsl(var(--neon-green)/0.4)]",
          };

          return (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="absolute cursor-pointer"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="group relative">
                <div
                  className={`
                    w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center
                    backdrop-blur-sm transition-all duration-300 animate-pulse-glow
                    ${colorClasses[node.color]}
                  `}
                >
                  <node.icon className="h-8 w-8" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass-panel px-3 py-1 rounded whitespace-nowrap">
                    <p className="text-xs font-orbitron text-foreground">{node.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
