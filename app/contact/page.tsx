import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="px-10 py-16">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <p className="text-lg mb-2">Phone: 07XXXXXXXXX</p>
        <p className="text-lg mb-2">Email: info@khoshconstruction.co.uk</p>
        <p className="text-lg">Wolverhampton & Surrounding Areas</p>
      </main>

      <Footer />
    </>
  );
}
