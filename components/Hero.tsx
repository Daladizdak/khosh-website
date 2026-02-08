import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="px-10 py-[120px] text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-[36px] font-bold mb-2">
        Kitchen & Bathroom Renovations
      </h2>
      <p className="text-lg">Wolverhampton & Surrounding Areas</p>

        <Link
        href="/enquiry"
        className="mt-5 inline-block rounded-md bg-[#6f7f5a] px-6 py-3 text-white hover:opacity-90"
        >
        Get a Free Quote
        </Link>

    </section>
  );
}
