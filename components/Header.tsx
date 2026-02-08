import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#f5f4ef] px-10 py-5 flex items-center justify-between">
      <h1 className="text-[22px] font-semibold text-[#4f5d3b]">
        KHOSH Construction LTD
      </h1>

      <nav className="flex gap-5 text-[#333]">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/kitchens" className="hover:underline">Kitchens</Link>
        <Link href="/bathrooms" className="hover:underline">Bathrooms</Link>
        <Link href="/enquiry" className="hover:underline">Enquiry</Link>
      </nav>
    </header>
  );
}
