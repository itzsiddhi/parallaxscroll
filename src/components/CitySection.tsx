import { useRef } from 'react';
import { useParallaxOffset } from '../hooks/useParallaxOffset';

interface Props {
  scrollY: number;
}

export default function CitySection({ scrollY }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { localScroll } = useParallaxOffset(ref, scrollY);

  const buildings = [
    { x: 0, w: 120, h: 280, windows: 8 },
    { x: 100, w: 90, h: 340, windows: 10 },
    { x: 180, w: 150, h: 420, windows: 14 },
    { x: 310, w: 80, h: 260, windows: 7 },
    { x: 370, w: 110, h: 380, windows: 11 },
    { x: 460, w: 200, h: 480, windows: 16 },
    { x: 640, w: 130, h: 360, windows: 10 },
    { x: 750, w: 160, h: 440, windows: 13 },
    { x: 880, w: 90, h: 300, windows: 9 },
    { x: 950, w: 140, h: 400, windows: 12 },
    { x: 1070, w: 110, h: 320, windows: 9 },
    { x: 1160, w: 180, h: 460, windows: 15 },
    { x: 1320, w: 120, h: 350, windows: 10 },
  ];

  return (
    <section
      ref={ref}
      id="city"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #0f1729 50%, #1a2035 100%)' }}
    >
      {/* City glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255,180,50,0.15) 0%, transparent 70%)',
          transform: `translateY(${localScroll * 0.1}px)`,
        }}
      />

      {/* Stars */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.05}px)` }}
      >
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: (i * 137.5) % 100 + '%',
              top: (i * 79.3) % 60 + '%',
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Far skyline */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.1}px)` }}
      >
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="w-full" style={{ height: '420px' }}>
          {buildings.map((b, i) => (
            <g key={i}>
              <rect
                x={b.x} y={500 - b.h} width={b.w} height={b.h}
                fill={i % 3 === 0 ? '#111827' : i % 3 === 1 ? '#1f2937' : '#0f172a'}
              />
              {/* Windows */}
              {Array.from({ length: b.windows }).map((_, wi) => {
                const col = wi % 4;
                const row = Math.floor(wi / 4);
                const wx = b.x + 12 + col * ((b.w - 24) / 3);
                const wy = 500 - b.h + 20 + row * 28;
                const lit = Math.random() > 0.3;
                return (
                  <rect
                    key={wi}
                    x={wx} y={wy} width="14" height="16"
                    fill={lit ? (Math.random() > 0.5 ? '#fbbf24' : '#93c5fd') : '#1f2937'}
                    opacity={lit ? 0.9 : 0.3}
                  />
                );
              })}
            </g>
          ))}
        </svg>
      </div>

      {/* Near buildings */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.35}px)` }}
      >
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="w-full" style={{ height: '420px' }}>
          {[
            { x: -20, w: 180, h: 350 },
            { x: 140, w: 100, h: 280 },
            { x: 230, w: 240, h: 430 },
            { x: 850, w: 200, h: 400 },
            { x: 1020, w: 130, h: 320 },
            { x: 1130, w: 190, h: 460 },
            { x: 1300, w: 160, h: 380 },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={500 - b.h} width={b.w} height={b.h} fill="#060b14" />
              {Array.from({ length: 12 }).map((_, wi) => {
                const col = wi % 4;
                const row = Math.floor(wi / 4);
                const wx = b.x + 15 + col * ((b.w - 30) / 3);
                const wy = 500 - b.h + 25 + row * 35;
                const lit = Math.random() > 0.25;
                return (
                  <rect key={wi} x={wx} y={wy} width="16" height="20"
                    fill={lit ? '#fde68a' : '#111827'} opacity={lit ? 0.85 : 0.2} />
                );
              })}
            </g>
          ))}
        </svg>
      </div>

      {/* Street level */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, #020408 0%, transparent 100%)',
          transform: `translateY(${localScroll * -0.5}px)`,
        }}
      />

      {/* Text */}
      <div
        className="relative z-10 text-center px-6"
        style={{
          transform: `translateY(${localScroll * -0.2}px)`,
          opacity: Math.min(1, Math.max(0, 1 - Math.abs(localScroll - 300) / 400)),
        }}
      >
        <div className="inline-block px-4 py-1 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(20,30,60,0.7)', color: '#93c5fd', border: '1px solid rgba(147,197,253,0.2)' }}>
          Chapter III
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
          The City
        </h2>
        <p className="text-xl text-blue-200 max-w-lg mx-auto font-light leading-relaxed">
          A million lights blink against the night sky, each one a story still unwritten.
        </p>
      </div>
    </section>
  );
}
