import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-50 px-4 py-10 sm:px-6">
      <div className="absolute -left-24 top-0 size-80 rounded-full bg-blue-200/45 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 size-96 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="relative w-full">
        {children}</div>
    </main>
  );
};

export default AuthLayout;
