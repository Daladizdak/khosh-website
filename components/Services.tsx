const services = [
  {
    title: "Kitchens",
    desc: "Modern, functional, and built to last.",
    img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf",
  },
  {
    title: "Bathrooms",
    desc: "Luxury bathrooms with flawless finishes.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
  },
  {
    title: "General Construction",
    desc: "From first fix to final detail.",
    img: "https://images.unsplash.com/photo-1597008641621-4d4c9f2d8f90",
  },
];

export default function Services() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="overflow-hidden rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
          >
            <img src={s.img} alt={s.title} className="h-[180px] w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-[#444]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
