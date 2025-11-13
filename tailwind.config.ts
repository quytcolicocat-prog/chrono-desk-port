import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      colors: {
        'neon-cyan': 'hsl(var(--neon-cyan))',
        'neon-blue': 'hsl(var(--neon-blue))',
        'neon-green': 'hsl(var(--neon-green))',
        'dark-bg': 'hsl(var(--dark-bg))',
        'dark-surface': 'hsl(var(--dark-surface))',
        'glass-bg': 'hsl(var(--glass-bg))',
        'app-dark': 'hsl(var(--app-dark))',
        'app-navy': 'hsl(var(--app-navy))',
        'app-blue': 'hsl(var(--app-blue))',
        'app-light-blue': 'hsl(var(--app-light-blue))',
        'mesh-purple': 'hsl(var(--mesh-purple))',
        'mesh-pink': 'hsl(var(--mesh-pink))',
        'mesh-cyan': 'hsl(var(--mesh-cyan))',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'phone': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'phone-lg': '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.2)',
        'phone-3d': '0 40px 80px -20px rgba(0, 0, 0, 0.7), 0 0 60px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 35px rgba(6, 182, 212, 0.35)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.5)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 40px hsl(var(--neon-cyan) / 0.8)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "scan": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        "mesh-move": {
          "0%, 100%": {
            transform: "translate(0%, 0%) scale(1)",
          },
          "33%": {
            transform: "translate(30%, -50%) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20%, 20%) scale(0.9)",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(10deg)",
          },
        },
        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "scan": "scan 2s linear infinite",
        "mesh-move": "mesh-move 20s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
