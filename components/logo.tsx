import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  animated?: boolean;
}

const sizeMap = {
  sm: { icon: "h-6 w-6", text: "text-sm" },
  md: { icon: "h-8 w-8", text: "text-base" },
  lg: { icon: "h-10 w-10", text: "text-xl" },
  xl: { icon: "h-12 w-12", text: "text-2xl" },
};

export function Logo({ size = "md", showText = true, className, animated = false }: LogoProps) {
  const sizes = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Abstract Atom/Molecule Logo */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={sizes.icon}
        role="img"
        aria-label="Qantuslab Logo"
      >
        <defs>
          {/* Orange to Blue Gradient */}
          <linearGradient
            id="qantuslab-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientTransform="rotate(135)"
          >
            <stop offset="0%" stopColor="#ff6b35" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Radial gradient for nucleus */}
          <radialGradient id="nucleus-glow">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ff6b35" />
          </radialGradient>
        </defs>

        {/* Central Nucleus - glowing core */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill="url(#nucleus-glow)"
          opacity="0.9"
        />
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="#ff6b35"
        />

        {/* Orbital Path 1 - horizontal ellipse */}
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          stroke="#ff6b35"
          strokeWidth="3"
          fill="none"
          opacity="1"
          id="orbit-1"
        />

        {/* Orbital Path 2 - tilted ellipse (60 degrees) */}
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          stroke="#ff6b35"
          strokeWidth="3"
          fill="none"
          opacity="1"
          transform="rotate(60 50 50)"
          id="orbit-2"
        />

        {/* Orbital Path 3 - tilted ellipse (120 degrees) */}
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          stroke="#ff6b35"
          strokeWidth="3"
          fill="none"
          opacity="1"
          transform="rotate(120 50 50)"
          id="orbit-3"
        />

        {/* Path definitions for electron motion */}
        <path
          id="orbit-path-1"
          d="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
          fill="none"
          opacity="0"
        />
        <path
          id="orbit-path-2"
          d="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
          fill="none"
          opacity="0"
          transform="rotate(60 50 50)"
        />
        <path
          id="orbit-path-3"
          d="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
          fill="none"
          opacity="0"
          transform="rotate(120 50 50)"
        />

        {/* Electrons - following orbital paths */}
        {/* Electron 1 on orbit path 1 - right side */}
        <circle cx="85" cy="50" r="3.5" fill="#3b82f6" opacity="0.9">
          {animated && (
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
            />
          )}
        </circle>

        {/* Electron 2 on orbit path 1 - left side */}
        <circle cx="15" cy="50" r="3" fill="#ff6b35" opacity="0.8">
          {animated && (
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
              begin="4s"
            />
          )}
        </circle>

        {/* Electron 3 on orbit path 2 - positioned on rotated path */}
        <g transform="rotate(60 50 50)">
          <circle cx="85" cy="50" r="3.5" fill="#f59e0b" opacity="0.9">
            {animated && (
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
              />
            )}
          </circle>
        </g>

        {/* Electron 4 on orbit path 2 (offset) */}
        <g transform="rotate(60 50 50)">
          <circle cx="15" cy="50" r="3" fill="#f59e0b" opacity="0.7">
            {animated && (
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
                begin="5s"
              />
            )}
          </circle>
        </g>

        {/* Electron 5 on orbit path 3 */}
        <g transform="rotate(120 50 50)">
          <circle cx="85" cy="50" r="3.5" fill="#3b82f6" opacity="0.9">
            {animated && (
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                path="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
              />
            )}
          </circle>
        </g>

        {/* Electron 6 on orbit path 3 (offset) */}
        <g transform="rotate(120 50 50)">
          <circle cx="15" cy="50" r="3" fill="#ff6b35" opacity="0.7">
            {animated && (
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                path="M 15,50 a 35,15 0 1,0 70,0 a 35,15 0 1,0 -70,0"
                begin="6s"
              />
            )}
          </circle>
        </g>

        {/* Energy glow effect */}
        <circle
          cx="50"
          cy="50"
          r="12"
          fill="url(#qantuslab-gradient)"
          opacity="0.15"
        />
      </svg>

      {/* Qantuslab Text */}
      {showText && (
        <span className={cn("font-bold tracking-tight bg-gradient-orange-blue bg-clip-text text-transparent", sizes.text)}>
          Qantuslab
        </span>
      )}
    </div>
  );
}
