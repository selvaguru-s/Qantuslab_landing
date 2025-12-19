import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Apple Icon component
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ff6b35 0%, #3b82f6 100%)',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))',
          }}
        >
          {/* Central Nucleus */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="white"
            opacity="0.9"
          />
          <circle
            cx="50"
            cy="50"
            r="5"
            fill="white"
          />

          {/* Orbital Path 1 - horizontal */}
          <ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="15"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
          />

          {/* Orbital Path 2 - tilted 60 degrees */}
          <ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="15"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
            transform="rotate(60 50 50)"
          />

          {/* Orbital Path 3 - tilted 120 degrees */}
          <ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="15"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
            transform="rotate(120 50 50)"
          />

          {/* Electrons on orbits */}
          <circle cx="85" cy="50" r="4" fill="white" />
          <circle cx="15" cy="50" r="3" fill="white" opacity="0.9" />

          {/* Electrons on rotated orbits */}
          <g transform="rotate(60 50 50)">
            <circle cx="85" cy="50" r="4" fill="white" />
          </g>
          <g transform="rotate(120 50 50)">
            <circle cx="85" cy="50" r="4" fill="white" />
          </g>

          {/* Glow effect */}
          <circle
            cx="50"
            cy="50"
            r="12"
            fill="white"
            opacity="0.2"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
