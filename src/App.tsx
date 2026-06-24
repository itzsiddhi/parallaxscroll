import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import ForestSection from './components/ForestSection';
import OceanSection from './components/OceanSection';
import CitySection from './components/CitySection';
import SpaceSection from './components/SpaceSection';
import Footer from './components/Footer';
import NavDots from './components/NavDots';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      <NavDots scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <ForestSection scrollY={scrollY} />
      <OceanSection scrollY={scrollY} />
      <CitySection scrollY={scrollY} />
      <SpaceSection scrollY={scrollY} />
      <Footer />
    </div>
  );
}
