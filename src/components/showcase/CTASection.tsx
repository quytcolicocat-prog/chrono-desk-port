import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-surface via-primary/10 to-dark-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-neon-cyan rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-orbitron">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Download the app and start your journey today. Available on iOS and Android.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="h-14 px-6 rounded-xl glass-panel text-foreground font-semibold flex items-center gap-3 hover:bg-foreground/5 transition-all font-orbitron">
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </button>
            <button className="h-14 px-6 rounded-xl glass-panel text-foreground font-semibold flex items-center gap-3 hover:bg-foreground/5 transition-all font-orbitron">
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className="text-accent" />
              ))}
            </div>
            <span className="text-sm">4.9 rating from 10,000+ users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
