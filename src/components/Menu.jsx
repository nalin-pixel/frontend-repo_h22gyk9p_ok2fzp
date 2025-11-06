const items = [
  {
    category: 'Pizza',
    dishes: [
      { name: 'Margherita', desc: 'San Marzano, fior di latte, basil', price: 12 },
      { name: 'Diavola', desc: 'Spicy salami, mozzarella, chili oil', price: 15 },
      { name: 'Funghi', desc: 'Porcini, cremini, garlic, thyme', price: 14 },
    ],
  },
  {
    category: 'Pasta',
    dishes: [
      { name: 'Cacio e Pepe', desc: 'Pecorino Romano, black pepper', price: 14 },
      { name: 'Tagliatelle Bolognese', desc: 'Slow-cooked ragu, parmigiano', price: 17 },
      { name: 'Pesto Genovese', desc: 'Basil, pine nuts, parmigiano', price: 15 },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Menu</h2>
          <a href="#" className="rounded-full bg-red-600 text-white px-5 py-2 text-sm font-semibold shadow hover:bg-red-700">Order Now</a>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((group) => (
            <div key={group.category} className="bg-white rounded-2xl shadow-sm p-6 border border-neutral-100">
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
              <ul className="space-y-4">
                {group.dishes.map((d) => (
                  <li key={d.name} className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-medium">{d.name}</p>
                      <p className="text-sm text-neutral-600">{d.desc}</p>
                    </div>
                    <span className="font-semibold text-neutral-900">${d.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
