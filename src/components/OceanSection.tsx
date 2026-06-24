import { useRef } from 'react';
import { useParallaxOffset } from '../hooks/useParallaxOffset';

interface Props {
  scrollY: number;
}

export default function OceanSection({ scrollY }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { localScroll } = useParallaxOffset(ref, scrollY);

  return (
    <section
      ref={ref}
      id="ocean"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #001a2e 0%, #002a4a 40%, #004466 100%)' }}
    >
      {/* Deep glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * 0.05}px)` }}
      >
        <div className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: '800px', height: '400px',
            background: 'radial-gradient(ellipse, #0ea5e9, transparent)',
            bottom: '10%', left: '50%', transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* Bubble particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/30 bubble"
            style={{
              width: 4 + (i % 5) * 4 + 'px',
              height: 4 + (i % 5) * 4 + 'px',
              left: (i * 137.5) % 100 + '%',
              bottom: '-10%',
              animationDelay: `${(i * 0.8) % 6}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Far coral/rock layer */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.05}px)` }}
      >
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="w-full" style={{ height: '260px' }}>
          <path d="M0,300 Q100,200 200,250 Q300,180 400,230 Q500,160 600,210 Q700,180 800,220 Q900,150 1000,200 Q1100,170 1200,210 Q1300,180 1440,220 L1440,300 Z"
            fill="#001f3d" />
        </svg>
      </div>

      {/* Wave layers */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.2}px)` }}
      >
        {[0.15, 0.25, 0.4].map((opacity, wi) => (
          <div key={wi} className="absolute bottom-0 left-0 right-0 wave-container" style={{ bottom: wi * 30 + 'px' }}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full" style={{ height: '120px' }}>
              <path
                d={`M-100,60 C100,${20 + wi * 10} 300,${100 - wi * 10} 500,60 C700,${20 + wi * 5} 900,${100 - wi * 5} 1100,60 C1300,${20} 1500,100 1700,60 L1700,120 L-100,120 Z`}
                fill={`rgba(0, 100, 160, ${opacity})`}
                style={{ animation: `wave ${4 + wi}s ease-in-out infinite alternate`, animationDelay: `${wi * 0.5}s` }}
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Seaweed */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.35}px)` }}
      >
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full" style={{ height: '350px' }}>
          {Array.from({ length: 18 }).map((_, i) => {
            const x = (i / 17) * 1440;
            const h = 100 + (i * 37 % 150);
            return (
              <path
                key={i}
                d={`M${x},400 Q${x - 20},${400 - h * 0.3} ${x + 15},${400 - h * 0.6} Q${x - 15},${400 - h * 0.8} ${x + 5},${400 - h}`}
                stroke={i % 3 === 0 ? '#065f46' : '#047857'}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                style={{ animation: `sway ${2 + (i % 3) * 0.5}s ease-in-out infinite alternate`, animationDelay: `${(i * 0.3) % 2}s` }}
              />
            );
          })}
        </svg>
      </div>

      {/* Fish */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${localScroll * -0.15}px)` }}
      >
        {[
          { top: '30%', delay: '0s', dur: '8s', size: 24, color: '#38bdf8' },
          { top: '50%', delay: '2s', dur: '11s', size: 18, color: '#67e8f9' },
          { top: '65%', delay: '4s', dur: '9s', size: 30, color: '#0ea5e9' },
        ].map((fish, i) => (
          <div
            key={i}
            className="absolute fish"
            style={{ top: fish.top, animationDuration: fish.dur, animationDelay: fish.delay }}
          >
            <svg width={fish.size} height={fish.size * 0.6} viewBox="0 0 40 24" fill={fish.color}>
              <ellipse cx="22" cy="12" rx="16" ry="8" />
              <polygon points="6,12 0,4 0,20" />
            </svg>
          </div>
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
          style={{ background: 'rgba(0,60,100,0.6)', color: '#7dd3fc', border: '1px solid rgba(125,211,252,0.2)' }}>
          Chapter II
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
          The Ocean
        </h2>
        <p className="text-xl text-cyan-200 max-w-lg mx-auto font-light leading-relaxed">
          Beneath the surface, a world of silent wonder drifts in perpetual blue twilight.
        </p>
      </div>
    </section>
  );
}
