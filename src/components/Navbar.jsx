import { useCallback } from 'react';

export default function Navbar() {
  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur rounded-b-2xl shadow-sm">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="font-semibold tracking-tight text-xl">
          BellaCucina
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-red-600 transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-red-600 transition-colors">About Us</a>
          <a href="#menu" onClick={(e) => handleNavClick(e, 'menu')} className="hover:text-red-600 transition-colors">Menu</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, 'menu')}
            className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Order Now
          </a>
        </div>
      </nav>
    </header>
  );
}
