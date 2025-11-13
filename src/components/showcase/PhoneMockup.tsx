import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  delay?: number;
}

const sizeClasses = {
  small: "h-[300px] w-[150px]",
  medium: "h-[350px] w-[175px]",
  large: "h-[400px] w-[200px]",
};

export const PhoneMockup = ({ children, size = "medium", className, delay = 0 }: PhoneMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        "relative rounded-[32px] bg-gradient-to-b from-gray-900 to-gray-800 p-2 shadow-phone transition-all duration-300 hover:shadow-glow",
        sizeClasses[size],
        className
      )}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-3xl z-10" />
      
      {/* Screen */}
      <div className="relative h-full w-full rounded-[24px] bg-gradient-to-br from-app-navy to-app-blue overflow-hidden">
        {children}
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
      </div>
    </motion.div>
  );
};
