import Link from "next/link";
import { CircleHelp, Columns2, LayoutGrid } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white" aria-label="Main navigation">
      <div className="mx-auto flex min-h-[62px] max-w-[1150px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-0">
        <div className="flex items-center gap-5 text-[15px] font-medium text-[#2d2d33] sm:gap-8">
          <Link href="/services" className="flex items-center gap-2 transition-colors hover:text-[#ffb800]">
            <LayoutGrid className="size-4" strokeWidth={1.8} />
            <span>Services</span>
          </Link>
          <Link href="/compare" className="flex items-center gap-2 transition-colors hover:text-[#ffb800]">
            <Columns2 className="size-4" strokeWidth={1.8} />
            <span>Compare</span>
          </Link>
          <Link href="/about" className="hidden items-center gap-2 transition-colors hover:text-[#ffb800] sm:flex">
            <CircleHelp className="size-4" strokeWidth={1.8} />
            <span>About Us</span>
          </Link>
        </div>

        <Link
          href="/book"
          className="inline-flex h-10 min-w-36 items-center justify-center rounded-lg bg-[#ffb800] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#e8a800]"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
