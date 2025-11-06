import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  // Simple parallax effect tied to scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const root = document.documentElement;
      root.style.setProperty('--parallax', `${y * -0.05}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
