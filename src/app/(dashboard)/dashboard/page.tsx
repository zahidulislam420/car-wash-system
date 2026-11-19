import { CalendarDays, CarFront, CircleCheck, Clock3 } from "lucide-react";

const overviewCards = [
  {
    title: "Upcoming bookings",
    value: "0",
    description: "Your next car wash appointments",
    icon: CalendarDays,
    iconClassName: "bg-blue-50 text-blue-700",
  },
  {
    title: "Completed washes",
    value: "0",
    description: "Your completed services will appear here",
    icon: CircleCheck,
    iconClassName: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Saved vehicles",
    value: "0",
    description: "Vehicles added to your profile",
    icon: CarFront,
    iconClassName: "bg-amber-50 text-amber-700",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8">
      <section className="rounded-2xl bg-gradient-to-r from-[#1d376f] to-[#3155a0] p-6 text-white shadow-sm sm:p-8">
        <p className="text-sm font-medium text-blue-100">CARCARE OVERVIEW</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome to your dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
          Keep track of your car wash bookings, services, and vehicles all in one place.
        </p>
      </section>

      <section aria-label="Account overview" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {overviewCards.map((card) => {
          const Icon = card.icon;

          return (
            <article key={card.title} className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
                  <p className="mt-3 text-3xl font-bold tracking-tight">{card.value}</p>
                </div>
                <span className={`grid size-11 place-items-center rounded-xl ${card.iconClassName}`}>
                  <Icon className="size-5" />
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{card.description}</p>
            </article>
          );
        })}
      </section>

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700">
            <Clock3 className="size-5" />
          </span>
          <div>
            <h2 className="font-semibold">Recent activity</h2>
            <p className="text-sm text-muted-foreground">Your latest bookings and updates will show here.</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
          No activity yet. Your car wash history will appear here after your first booking.
        </div>
      </section>
    </div>
  );
}
