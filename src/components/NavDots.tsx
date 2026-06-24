interface Props {
  scrollY: number;
}

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'forest', label: 'Forest' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'city', label: 'City' },
  { id: 'space', label: 'Cosmos' },
];

export default function NavDots({ scrollY }: Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewportH = typeof window !== 'undefined' ? window.innerHeight : 800;
  const activeIndex = Math.min(Math.floor(scrollY / viewportH), SECTIONS.length - 1);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          title={s.label}
          className="group flex items-center gap-2 justify-end"
        >
          <span
            className="text-xs text-white/60 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            {s.label}
          </span>
          <div
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIndex === i ? '10px' : '6px',
              height: activeIndex === i ? '10px' : '6px',
              background: activeIndex === i ? 'white' : 'rgba(255,255,255,0.35)',
              boxShadow: activeIndex === i ? '0 0 8px rgba(255,255,255,0.6)' : 'none',
            }}
          />
        </button>
      ))}
    </nav>
  );
}
