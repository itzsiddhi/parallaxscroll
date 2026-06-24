import { useRef } from 'react';
import { useParallaxOffset } from '../hooks/useParallaxOffset';

interface Props {
  scrollY: number;
}

export default function ForestSection({ scrollY }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { localScroll } = useParallaxOffset(ref, scrollY);

  return (
    <section
      ref={ref}
      id="forest"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #0d2818 0%, #1a4a2e 50%, #0d3820 100%)' }}
    >
      {/* Sky gradient top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.15}px)` }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #001a0d 0%, transparent 60%)'
        }} />
      </div>

      {/* Fireflies */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.1}px)` }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-300 blur-sm firefly"
            style={{
              width: '4px',
              height: '4px',
              left: (i * 137.5) % 100 + '%',
              top: (i * 73.1) % 80 + '%',
              animationDelay: `${(i * 0.7) % 5}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Far trees - slowest */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.05}px)` }}
      >
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="w-full" style={{ height: '400px' }}>
          {Array.from({ length: 25 }).map((_, i) => {
            const x = (i / 24) * 1500 - 30;
            const h = 180 + (i * 37 % 120);
            const w = 40 + (i * 23 % 30);
            return (
              <g key={i}>
                <rect x={x + w / 2 - 4} y={500 - h - 20} width="8" height="30" fill="#0a2010" />
                <polygon
                  points={`${x + w / 2},${500 - h - 20} ${x},${500 - h + 60} ${x + w},${500 - h + 60}`}
                  fill="#0d2e18"
                />
                <polygon
                  points={`${x + w / 2},${500 - h} ${x + 5},${500 - h + 80} ${x + w - 5},${500 - h + 80}`}
                  fill="#102816"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mid trees */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.25}px)` }}
      >
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="w-full" style={{ height: '400px' }}>
          {Array.from({ length: 16 }).map((_, i) => {
            const x = (i / 15) * 1500 - 40;
            const h = 220 + (i * 53 % 150);
            const w = 60 + (i * 29 % 40);
            return (
              <g key={i}>
                <rect x={x + w / 2 - 6} y={500 - h - 10} width="12" height="40" fill="#071a0e" />
                <polygon
                  points={`${x + w / 2},${500 - h - 20} ${x},${500 - h + 70} ${x + w},${500 - h + 70}`}
                  fill="#0a2214"
                />
                <polygon
                  points={`${x + w / 2},${500 - h + 10} ${x + 5},${500 - h + 100} ${x + w - 5},${500 - h + 100}`}
                  fill="#0d2a18"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Near trees - fastest */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.5}px)` }}
      >
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="w-full" style={{ height: '500px' }}>
          {Array.from({ length: 10 }).map((_, i) => {
            const x = (i / 9) * 1500 - 60;
            const h = 320 + (i * 41 % 100);
            const w = 100 + (i * 31 % 50);
            return (
              <g key={i}>
                <rect x={x + w / 2 - 10} y={500 - h} width="20" height="50" fill="#040f07" />
                <polygon
                  points={`${x + w / 2},${500 - h - 20} ${x},${500 - h + 100} ${x + w},${500 - h + 100}`}
                  fill="#061510"
                />
                <polygon
                  points={`${x + w / 2},${500 - h + 30} ${x + 10},${500 - h + 140} ${x + w - 10},${500 - h + 140}`}
                  fill="#081c14"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Ground fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(50,120,70,0.3) 0%, transparent 100%)',
          transform: `translateY(${localScroll * -0.6}px)`,
        }}
      />

      {/* Text content */}
      <div
        className="relative z-10 text-center px-6"
        style={{
          transform: `translateY(${localScroll * -0.2}px)`,
          opacity: Math.min(1, Math.max(0, 1 - Math.abs(localScroll - 300) / 400)),
        }}
      >
        <div className="inline-block px-4 py-1 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(20,80,40,0.6)', color: '#6ee7b7', border: '1px solid rgba(110,231,183,0.2)' }}>
          Chapter I
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
          The Forest
        </h2>
        <p className="text-xl text-emerald-200 max-w-lg mx-auto font-light leading-relaxed">
          Ancient trees reach toward the moonlight, their roots tangled deep in forgotten soil.
        </p>
      </div>
    </section>
  );
}
