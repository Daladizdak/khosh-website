import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KitchensPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/images/kitchen-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kitchen Renovations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Complete kitchen solutions designed, built, and finished to a high
            professional standard.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* TEXT */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              At <strong>KHOSH Construction</strong>, we provide complete kitchen
              solutions, from new installations to full refurbishments and
              general construction work. Whether you are fitting a brand new
              kitchen, reconfiguring an existing space, or upgrading finishes,
              we handle every aspect of the project.
            </p>

            <p>
              Our services include planning and layout changes, plumbing,
              electrical work, plastering, flooring, tiling, cabinetry
              installation, worktops, lighting, and all final finishes. We
              coordinate the entire process to ensure the work is carried out
              efficiently, safely, and to a high standard.
            </p>

            <p>
              Every kitchen we work on is treated with care and attention to
              detail, with a focus on functionality, durability, and a clean
              professional finish that adds long-term value to your home.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/kitchen-1.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Kitchen renovation"
            />
            <img
              src="/images/kitchen-2.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Modern kitchen"
            />
            <img
              src="/images/kitchen-3.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Kitchen installation"
            />
            <img
              src="/images/kitchen-4.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Finished kitchen"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6f7f5a] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Planning a New Kitchen?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg px-6">
          Get in touch today and let us take care of your kitchen project from
          start to finish.
        </p>
        <a
          href="/enquiry"
          className="inline-block bg-white text-[#6f7f5a] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Request a Free Quote
        </a>
      </section>

      <Footer />
    </>
  );
}
