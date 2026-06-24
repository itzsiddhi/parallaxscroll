export default function Footer() {
  return (
    <footer
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #000008 0%, #0a0a1a 50%, #0d0d24 100%)' }}
    >
      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: '1px', height: '1px',
              left: (i * 137.5) % 100 + '%',
              top: (i * 73.1) % 100 + '%',
              opacity: 0.15 + (i % 5) * 0.07,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2))' }} />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.2))' }} />
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
          The Journey<br />
          <span style={{ color: '#a78bfa' }}>Never Ends</span>
        </h2>
        <p className="text-lg text-white/50 font-light leading-relaxed max-w-md mx-auto mb-16">
          From the depth of ancient forests to the edge of the observable universe, every scroll reveals a new layer of wonder.
        </p>

        {/* Chapters recap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'The Forest', color: '#6ee7b7', num: 'I' },
            { label: 'The Ocean', color: '#7dd3fc', num: 'II' },
            { label: 'The City', color: '#93c5fd', num: 'III' },
            { label: 'The Cosmos', color: '#e879f9', num: 'IV' },
          ].map((ch) => (
            <div
              key={ch.num}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-2xl font-black" style={{ color: ch.color }}>{ch.num}</span>
              <span className="text-xs text-white/50 tracking-widest uppercase">{ch.label}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/20 tracking-widest uppercase">
          Built with parallax &amp; pure CSS animation
        </p>
      </div>
    </footer>
  );
}
