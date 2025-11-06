import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-hand-placing-a-pizza-in-a-wood-oven-3138/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
            Authentic Pizza & Pasta
          </h1>
          <p className="mt-4 text-neutral-700 max-w-2xl">
            Wood-fired pizzas, hand-crafted pastas, and seasonal Italian classics.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#menu" className="rounded-full bg-red-600 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-red-700">Explore Menu</a>
            <a href="#about" className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold hover:bg-white">Learn More</a>
          </div>
        </div>
      </div>

      {/* Parallax foreground garnish */}
      <div className="pointer-events-none absolute -right-10 bottom-10 md:right-10" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1541014876-7f4b67d3af2d?q=80&w=1200&auto=format&fit=crop"
          alt="Fresh basil and tomatoes"
          className="w-44 md:w-60 opacity-80 will-change-transform"
          style={{ transform: 'translateY(var(--parallax, 0px))', transition: 'transform 0.2s ease-out' }}
        />
      </div>
    </section>
  );
}
