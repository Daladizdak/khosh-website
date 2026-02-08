"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import DoorIntro from "@/components/DoorIntro";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("khosh_intro_seen");

    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  function handleIntroFinish() {
    sessionStorage.setItem("khosh_intro_seen", "true");
    setShowIntro(false);
  }

  if (showIntro) {
    return <DoorIntro onFinish={handleIntroFinish} />;
  }

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[75vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/images/kitchen-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kitchen & Bathroom Renovations
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Trusted local specialists delivering high quality renovations and
            general construction across Wolverhampton and surrounding areas.
          </p>

          <Link
            href="/enquiry"
            className="inline-block bg-[#6f7f5a] px-8 py-4 rounded text-white text-lg font-medium hover:bg-[#5e6e4a] transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#f5f4ef] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold">15+</p>
            <p className="text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Family</p>
            <p className="text-sm">Run Business</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Local</p>
            <p className="text-sm">Trusted Team</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Full</p>
            <p className="text-sm">Project Management</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            img="/images/kitchen-2.jpg"
            title="Kitchens"
            text="Complete kitchen installations and refurbishments, managed from design to final finish."
            link="/kitchens"
          />

          <ServiceCard
            img="/images/bathroom-1.jpg"
            title="Bathrooms"
            text="Stylish, durable bathrooms built with attention to detail and long-term performance."
            link="/bathrooms"
          />

          <ServiceCard
            img="/images/kitchen-3.jpg"
            title="General Construction"
            text="From structural work to finishing touches, we handle all aspects of general building work."
            link="/enquiry"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#6f7f5a] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose KHOSH Construction
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li>✔ Over 15 years of industry experience</li>
              <li>✔ Family-run, reliable and professional team</li>
              <li>✔ Full project coordination from start to finish</li>
            </ul>
            <ul className="space-y-4">
              <li>✔ High quality workmanship and finishes</li>
              <li>✔ Clear communication and honest advice</li>
              <li>✔ Local service you can trust</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8">
          Contact us today for a free, no-obligation quote.
        </p>
        <Link
          href="/enquiry"
          className="inline-block bg-[#6f7f5a] px-8 py-4 rounded text-white text-lg font-medium hover:bg-[#5e6e4a] transition"
        >
          Get a Free Quote
        </Link>
      </section>

      <Footer />
    </>
  );
}

function ServiceCard({
  img,
  title,
  text,
  link,
}: {
  img: string;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src={img} alt={title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{text}</p>
        <Link href={link} className="text-[#6f7f5a] font-medium">
          Learn more →
        </Link>
      </div>
    </div>
  );
}
