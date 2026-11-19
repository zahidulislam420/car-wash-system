"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { CarFront, LockKeyhole, Mail } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";

const SigninPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const created = searchParams.get("created") === "1";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email")).trim().toLowerCase();
    const password = String(formData.get("password"));
    setLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signIn.email({ email, password, callbackURL: "/" });

      if (error) {
        const message = error.message || "Email or password is incorrect.";
        setErrorMessage(message);
        toast.add({ title: "Sign in failed", description: message, type: "error" });
        return;
      }

      toast.add({ title: "Signed in successfully", description: "Welcome back!", type: "success" });
      router.push("/");
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not sign in. Please try again.";
      setErrorMessage(message);
      toast.add({ title: "Sign in failed", description: message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-md rounded-3xl border border-white/80 bg-white/90 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-9">
      <Link href="/" className="mb-8 flex w-fit items-center gap-2 text-[#1d376f]">
        <span className="grid size-10 place-items-center rounded-xl bg-[#1d376f]">
          <CarFront className="size-5 fill-[#ffb800] text-[#ffb800]" />
        </span>
        <span className="text-lg font-bold tracking-tight">CarCare</span>
      </Link>

      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-[#e8a800]">WELCOME BACK</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Sign in to your account</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Manage your bookings and keep your vehicle looking its best.</p>
        {created && <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">Account created. Sign in to continue.</p>}
        {errorMessage && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">{errorMessage}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Email address</span>
          <span className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-[#1d376f] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#1d376f]/10">
            <Mail className="size-4 text-slate-400" />
            <input className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
          <span className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-[#1d376f] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#1d376f]/10">
            <LockKeyhole className="size-4 text-slate-400" />
            <input className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" type="password" name="password" placeholder="Enter your password" autoComplete="current-password" required />
          </span>
        </label>

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-600">
            <input type="checkbox" name="remember" className="size-4 rounded border-slate-300 accent-[#1d376f]" />
            Remember me
          </label>
          <button type="button" className="font-semibold text-[#1d376f] hover:underline">Forgot password?</button>
        </div>

        <button type="submit" disabled={loading} className="h-12 w-full rounded-xl bg-[#1d376f] text-sm font-semibold text-white shadow-lg shadow-[#1d376f]/20 transition hover:bg-[#162d5d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d376f] disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-slate-600">
        New to CarCare?{" "}
        <Link href="/signup" className="font-semibold text-[#1d376f] hover:underline">Create an account</Link>
      </p>
    </section>
  );
};

export default SigninPage;
