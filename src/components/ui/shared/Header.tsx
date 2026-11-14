import Link from "next/link";
import { CarFront, MessageCircle, UserRound } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#1d376f] text-white">
      <div className="mx-auto flex h-16 max-w-[1150px] items-center justify-between px-5 sm:px-8 lg:px-0">
        <Link
          href="/"
          aria-label="Car wash home"
          className="flex size-[52px] items-center justify-center rounded-full bg-[#293f7c] transition-colors hover:bg-[#334b8d]"
        >
          <span className="relative flex size-8 items-center justify-center rounded-full bg-[#172b60]">
            <CarFront className="size-5 fill-[#ffbd00] text-[#ffbd00]" strokeWidth={1.8} />
            <span className="absolute -top-1 right-0 size-1 rounded-full bg-cyan-300" />
            <span className="absolute left-0 top-0 size-1 rounded-full bg-cyan-300" />
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium sm:gap-8">
          <a href="tel:+8801706785160" className="hidden transition-opacity hover:opacity-80 sm:block">
            Call us now: +880170678-5160
          </a>
          <a
            href="https://wa.me/8801706785160"
            aria-label="Contact us on WhatsApp"
            className="transition-opacity hover:opacity-80"
          >
            <MessageCircle className="size-4" strokeWidth={1.8} />
          </a>
          <Link
            href="/account"
            aria-label="Your account"
            className="transition-opacity hover:opacity-80"
          >
            <UserRound className="size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
