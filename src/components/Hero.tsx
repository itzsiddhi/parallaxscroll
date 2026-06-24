import { useRef } from 'react';

interface Props {
  scrollY: number;
}

export default function Hero({ scrollY }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const offset = scrollY * 0.5;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #2d1b69 100%)' }}
    >
      {/* Stars layer - slow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: (i * 137.508) % 100 + '%',
              top: (i * 97.3) % 100 + '%',
              opacity: 0.4 + Math.random() * 0.6,
              animationDelay: `${(i * 0.3) % 4}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, #7c3aed, transparent)',
            top: '10%',
            left: '-10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(ellipse, #0ea5e9, transparent)',
            top: '20%',
            right: '-5%',
          }}
        />
      </div>

      {/* Mountains silhouette - medium speed */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full" style={{ height: '280px' }}>
          <path
            d="M0,320 L0,200 L120,100 L240,160 L360,60 L480,140 L600,40 L720,120 L840,50 L960,130 L1080,70 L1200,150 L1320,90 L1440,170 L1440,320 Z"
            fill="#1a0a2e"
          />
          <path
            d="M0,320 L0,240 L180,150 L360,200 L540,120 L720,180 L900,110 L1080,170 L1260,130 L1440,200 L1440,320 Z"
            fill="#2d1b69"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: 1 - scrollY / 600 }}
      >
        <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#a78bfa' }}>
          Scroll to explore
        </p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tight text-white mb-6 leading-none">
          PARALLAX
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-xl mx-auto" style={{ color: '#c4b5fd' }}>
          A journey through worlds built from depth and motion
        </p>
        <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-sm tracking-widest uppercase">scroll down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
