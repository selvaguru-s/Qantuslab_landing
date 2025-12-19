import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Icon component
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Atom Logo SVG - simplified for 32x32 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central nucleus */}
          <circle cx="50" cy="50" r="8" fill="white" opacity="0.9" />
          <circle cx="50" cy="50" r="5" fill="white" />

          {/* Orbital paths */}
          <ellipse
            cx="50" cy="50" rx="35" ry="15"
            stroke="white" strokeWidth="3"
            fill="none" opacity="0.8"
          />
          <ellipse
            cx="50" cy="50" rx="35" ry="15"
            stroke="white" strokeWidth="3"
            fill="none" opacity="0.8"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50" cy="50" rx="35" ry="15"
            stroke="white" strokeWidth="3"
            fill="none" opacity="0.8"
            transform="rotate(120 50 50)"
          />

          {/* Electrons - static positions */}
          <circle cx="85" cy="50" r="4" fill="white" opacity="0.9" />
          <circle cx="15" cy="50" r="4" fill="white" opacity="0.9" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
