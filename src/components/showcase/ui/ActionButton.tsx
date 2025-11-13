import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  label?: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  onClick?: () => void;
}

export const ActionButton = ({
  label,
  icon: Icon,
  variant = "primary",
  size = "large",
  onClick,
}: ActionButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center gap-2 font-medium transition-all",
        variant === "primary"
          ? "bg-gradient-to-r from-app-blue to-app-light-blue text-white shadow-glow"
          : "bg-white text-app-blue shadow-lg",
        size === "small" ? "h-12 w-12" : label ? "h-14 px-6" : "h-14 w-14"
      )}
    >
      <Icon size={size === "small" ? 20 : 24} />
      {label && <span>{label}</span>}
    </motion.button>
  );
};
