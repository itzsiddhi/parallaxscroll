import { useEffect, useState, RefObject } from 'react';

export function useParallaxOffset(ref: RefObject<HTMLElement | null>, scrollY: number) {
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setSectionTop(window.scrollY + rect.top);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [ref]);

  const localScroll = scrollY - sectionTop;

  return { localScroll, sectionTop };
}
