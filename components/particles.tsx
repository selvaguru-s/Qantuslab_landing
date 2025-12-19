'use client';

import { useState, useEffect } from 'react';

interface ParticlesProps {
  count?: number;
}

export function Particles({ count = 30 }: ParticlesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (Math.random() * 360);
    const distance = 50 + Math.random() * 150;
    const tx = Math.cos(angle * Math.PI / 180) * distance;
    const ty = Math.sin(angle * Math.PI / 180) * distance;

    return {
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 2 + Math.random() * 3,
      initialX: 20 + Math.random() * 60,
      initialY: 20 + Math.random() * 60,
      tx,
      ty,
    };
  });

  // Only render particles after component is mounted on client
  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `translate(${particle.tx}px, ${particle.ty}px)`,
          }}
        />
      ))}
    </div>
  );
}
