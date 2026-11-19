"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CarFront, ChevronDown, LayoutDashboard, LogOut, MessageCircle, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "@/lib/auth-client";

const Header = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.push("/signin");
    router.refresh();
  };

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
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center gap-2 rounded-full px-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <span className="grid size-7 place-items-center rounded-full bg-white/15">
                  <UserRound className="size-4" strokeWidth={1.8} />
                </span>
                <span className="hidden max-w-32 truncate sm:block">{session.user.name}</span>
                <ChevronDown className="hidden size-3.5 sm:block" />
                <span className="sr-only">Open account menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="truncate">{session.user.email}</DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                  <LayoutDashboard />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  <UserRound />
                  My Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
                  <LogOut />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : !isPending ? (
            <Link
              href="/signin"
              aria-label="Sign in"
              className="transition-opacity hover:opacity-80"
            >
              <UserRound className="size-4" strokeWidth={1.8} />
            </Link>
          ) : (
            <span aria-hidden="true" className="size-4" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
