export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            At BellaCucina, we believe food is a celebration. Our kitchen is led by chefs who
            honor Italian traditions — long-fermented dough, San Marzano tomatoes, and locally
            sourced ingredients. Every dish is crafted with patience and love.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            From family dinners to date nights, our dining room is a warm, modern space designed
            for good times and great flavors.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop"
            alt="Wood-fired pizza"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-red-600 text-white px-4 py-3 rounded-xl shadow-lg">
            12h fermented dough · 100% Italian flour
          </div>
        </div>
      </div>
    </section>
  );
}
