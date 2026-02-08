import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4f5d3b] text-white px-10 py-6">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">KHOSH Construction LTD</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-95">
          <Link href="/about" className="hover:underline">About us</Link>
          <Link href="/contact" className="hover:underline">Contact us</Link>
          <Link href="/enquiry" className="hover:underline">Get Quote</Link>
        </div>
      </div>
    </footer>
  );
}
