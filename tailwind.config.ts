import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-orange-blue":
          "linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%)",
        "gradient-orange-red":
          "linear-gradient(135deg, #FF6B35 0%, #EF4444 100%)",
        "gradient-blue-purple":
          "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        "gradient-radial-orange":
          "radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%)",
        "gradient-radial-blue":
          "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "12px",
        "glass-strong": "16px",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      boxShadow: {
        "glow-subtle": "0 0 12px rgba(255, 255, 255, 0.1)",
        "glow-soft": "0 0 16px rgba(255, 255, 255, 0.15)",
        "glow-focus":
          "0 0 0 3px rgba(255, 255, 255, 0.1), 0 0 16px rgba(255, 255, 255, 0.2)",
        "elevation-sm": "0 2px 8px rgba(0, 0, 0, 0.4)",
        "elevation-md": "0 4px 16px rgba(0, 0, 0, 0.5)",
        "elevation-lg": "0 8px 24px rgba(0, 0, 0, 0.6)",
        "glow-hover":
          "0 4px 16px rgba(0, 0, 0, 0.5), 0 0 16px rgba(255, 255, 255, 0.15)",
        "glow-strong":
          "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
