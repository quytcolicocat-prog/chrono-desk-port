import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { ActionButton } from "./ui/ActionButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced particle system */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-app-light-blue"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Floating blurred phones in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-96 bg-gradient-to-br from-mesh-purple to-mesh-pink rounded-3xl blur-3xl"
          animate={{
            y: [0, 50, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-64 h-96 bg-gradient-to-br from-app-blue to-mesh-cyan rounded-3xl blur-3xl"
          animate={{
            y: [0, -50, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-glow-cyan"
        >
          <Sparkles size={18} className="text-mesh-cyan" />
          <span className="text-sm font-semibold">New App Launch 🚀</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.95] tracking-tight"
        >
          <motion.span
            className="block bg-gradient-to-r from-white via-app-light-blue to-mesh-cyan bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Mobile-first
          </motion.span>
          <span className="block text-white/90">approach to ensure</span>
          <span className="block bg-gradient-to-r from-mesh-purple via-mesh-pink to-app-light-blue bg-clip-text text-transparent">
            flawless usability
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Experience the future of mobile apps. Optimized for all devices with stunning design and seamless performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative h-16 px-10 rounded-full bg-gradient-to-r from-app-blue via-app-light-blue to-mesh-cyan text-white font-bold text-lg shadow-glow overflow-hidden"
          >
            <span className="relative z-10">Download App</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="h-16 px-10 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-bold text-lg transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-8 justify-center items-center text-white/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-mesh-purple to-mesh-pink border-2 border-app-dark" />
              ))}
            </div>
            <span>10K+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.9 Rating</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={36} className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
