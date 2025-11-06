export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} BellaCucina. All rights reserved.</p>
        <p className="text-sm text-neutral-600">Open daily · 11:00 AM – 10:30 PM</p>
      </div>
    </footer>
  );
}
