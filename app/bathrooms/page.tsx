import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BathroomsPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/images/bathroom-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bathroom Renovations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Complete bathroom installations and refurbishments, delivered with
            precision and care.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* TEXT */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              We offer complete bathroom services, covering everything from new
              bathroom installations to full refurbishments and general building
              work. Whether it’s a small update or a full redesign,
              <strong> KHOSH Construction </strong>
              manages the project from start to completion.
            </p>

            <p>
              Our bathroom work includes plumbing, waterproofing, structural
              alterations, plastering, tiling, flooring, walk-in showers,
              baths, vanity units, lighting, and all finishing touches. Every
              stage is carefully planned and delivered to meet both practical
              requirements and visual appeal.
            </p>

            <p>
              With clear communication, honest advice, and experienced
              workmanship, we deliver bathrooms that are built to last and
              tailored to your space, style, and requirements.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/bathroom-1.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Bathroom renovation"
            />
            <img
              src="/images/bathroom-2.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Modern bathroom"
            />
            <img
              src="/images/bathroom-3.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Bathroom installation"
            />
            <img
              src="/images/bathroom-4.jpg"
              className="rounded-lg object-cover w-full h-48"
              alt="Finished bathroom"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6f7f5a] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Thinking About a New Bathroom?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg px-6">
          Get in touch today and let us manage your bathroom renovation from
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
