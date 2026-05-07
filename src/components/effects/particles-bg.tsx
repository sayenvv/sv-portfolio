"use client";

import { motion } from "framer-motion";

const PARTICLE_COUNT = 30;

function seededValue(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: PARTICLE_COUNT }, (_, idx) => {
  const base = idx + 1;
  return {
    id: idx,
    size: Math.floor(seededValue(base * 11) * 5) + 2,
    x: seededValue(base * 17) * 100,
    y: seededValue(base * 23) * 100,
    duration: seededValue(base * 29) * 7 + 4,
    delay: seededValue(base * 31) * 3,
  };
});

export function ParticlesBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-300/35"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: p.duration, delay: p.delay }}
        />
      ))}
    </div>
  );
}
