import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="px-10 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">About KHOSH Construction</h1>

        <p className="text-lg mb-4">
          KHOSH Construction is a family-run construction company specialising
          in kitchen and bathroom renovations across Wolverhampton and
          surrounding areas.
        </p>

        <p className="text-lg mb-4">
          With over <strong>15 years of experience</strong>, we pride ourselves
          on delivering high-quality workmanship, honest communication, and
          reliable service from start to finish.
        </p>

        <p className="text-lg mb-4">
          Every project we take on is treated as if it were our own home. From
          initial planning to final completion, our focus is on attention to
          detail, durability, and customer satisfaction.
        </p>

        <p className="text-lg">
          Whether you are looking to modernise your kitchen, renovate your
          bathroom, or carry out general construction work, KHOSH Construction
          is committed to delivering results you can trust.
        </p>
      </main>

      <Footer />
    </>
  );
}
