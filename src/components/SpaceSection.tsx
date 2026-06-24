import { useRef } from 'react';
import { useParallaxOffset } from '../hooks/useParallaxOffset';

interface Props {
  scrollY: number;
}

export default function SpaceSection({ scrollY }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { localScroll } = useParallaxOffset(ref, scrollY);

  return (
    <section
      ref={ref}
      id="space"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: '#000008' }}
    >
      {/* Deep star field - slowest */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.03}px)` }}
      >
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: (i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1) + 'px',
              height: (i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1) + 'px',
              left: (i * 137.508) % 100 + '%',
              top: (i * 97.3) % 100 + '%',
              opacity: 0.2 + (i % 10) * 0.08,
            }}
          />
        ))}
      </div>

      {/* Nebula */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.08}px)` }}
      >
        {[
          { top: '10%', left: '5%', w: 600, h: 400, color: '#7c3aed', opacity: 0.12 },
          { top: '40%', right: '0%', left: undefined, w: 500, h: 500, color: '#0891b2', opacity: 0.1 },
          { top: '60%', left: '30%', w: 700, h: 300, color: '#be185d', opacity: 0.08 },
        ].map((n, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: n.w + 'px',
              height: n.h + 'px',
              background: `radial-gradient(ellipse, ${n.color}, transparent)`,
              top: n.top,
              left: n.left,
              right: n.right,
              opacity: n.opacity,
            }}
          />
        ))}
      </div>

      {/* Planets */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.15}px)` }}
      >
        {/* Large planet top-right */}
        <div className="absolute" style={{ top: '8%', right: '8%' }}>
          <div className="relative rounded-full"
            style={{
              width: '160px', height: '160px',
              background: 'radial-gradient(circle at 35% 35%, #c084fc, #7e22ce 60%, #3b0764)',
              boxShadow: '-20px 0 40px rgba(0,0,0,0.8) inset, 0 0 60px rgba(168,85,247,0.3)',
            }}
          />
        </div>
        {/* Small planet left */}
        <div className="absolute" style={{ top: '55%', left: '6%' }}>
          <div className="relative rounded-full"
            style={{
              width: '80px', height: '80px',
              background: 'radial-gradient(circle at 35% 35%, #6ee7b7, #059669 60%, #064e3b)',
              boxShadow: '-10px 0 20px rgba(0,0,0,0.8) inset, 0 0 30px rgba(16,185,129,0.3)',
            }}
          />
        </div>
        {/* Ring planet middle */}
        <div className="absolute" style={{ top: '25%', left: '70%' }}>
          <div className="relative flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
            <div className="rounded-full absolute"
              style={{
                width: '70px', height: '70px',
                background: 'radial-gradient(circle at 35% 35%, #fde68a, #d97706 60%, #78350f)',
                boxShadow: '-8px 0 16px rgba(0,0,0,0.8) inset',
              }}
            />
            <div className="absolute rounded-full border-4 border-yellow-500/40"
              style={{ width: '100px', height: '30px', transform: 'rotateX(70deg)' }}
            />
          </div>
        </div>
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute shooting-star"
            style={{
              top: (i * 23) % 60 + '%',
              left: '-10%',
              animationDelay: `${i * 2.5}s`,
              animationDuration: '3s',
            }}
          >
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent to-white opacity-80" />
          </div>
        ))}
      </div>

      {/* Moon/asteroid belt - medium */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.25}px)` }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + (i % 4) * 3 + 'px',
              height: 3 + (i % 4) * 3 + 'px',
              background: '#6b7280',
              left: 20 + (i * 137.5) % 60 + '%',
              top: 70 + (i * 7.3) % 15 + '%',
              opacity: 0.4 + (i % 4) * 0.15,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div
        className="relative z-10 text-center px-6"
        style={{
          transform: `translateY(${localScroll * -0.2}px)`,
          opacity: Math.min(1, Math.max(0, 1 - Math.abs(localScroll - 300) / 400)),
        }}
      >
        <div className="inline-block px-4 py-1 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(88,28,135,0.4)', color: '#e879f9', border: '1px solid rgba(232,121,249,0.2)' }}>
          Chapter IV
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
          The Cosmos
        </h2>
        <p className="text-xl text-purple-200 max-w-lg mx-auto font-light leading-relaxed">
          Beyond all horizons lies the infinite dark, scattered with the light of ten thousand suns.
        </p>
      </div>
    </section>
  );
}
