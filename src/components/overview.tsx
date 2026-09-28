import { SectionBadge } from "./section-badge";
import { cn } from "@/lib/utils";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2 13.8 9.2 21 11 13.8 12.8 12 20 10.2 12.8 3 11 10.2 9.2 12 2Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12.5 9.5 17 19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" fill="none" className={className}>
      <path
        d="M3 2 20 12 12 14 9 22 3 2Z"
        fill="white"
        stroke="#2b2b2b"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="m21 21-4.3-4.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 6h16M7 12h10M10 18h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const chipIcons: Record<string, React.ReactNode> = {
  "Career Sites": (
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Job Boards": (
    <path
      d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "ATS Systems": (
    <path
      d="M7 3h7l5 5v13H7V3Zm7 0v5h5M9 12h6M9 16h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Resume Parsing": (
    <path
      d="M9 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9l-6-6Zm0 0v6h6M9 13h6m-6 4h4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function Chip({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/95 px-3.5 py-2.5 text-xs font-medium text-[#131313] shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {label}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
        {chipIcons[label]}
      </svg>
    </span>
  );
}

function NotifCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#fbdbe9] via-[#fce3ee] to-[#fdedf4] p-5",
        className
      )}
    >
      <div className="relative flex items-start gap-2.5 rounded-2xl bg-gradient-to-r from-white via-[#fdeee5] to-[#fce8dd] p-3.5 pr-14 shadow-sm">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-dark text-brand-accent">
          <SparkleIcon className="h-3.5 w-3.5" />
        </span>
        <span className="absolute right-3.5 top-3.5 text-[10px] font-medium text-[#8b8489]">
          2:34 PM
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold leading-snug text-[#0d0d0d]">
            Application submitted!
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-[#3a3a3a]">
            Senior Product Designer, confirmed
          </p>
        </div>
      </div>
    </div>
  );
}

function ConnectCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-b from-[#fbfcfd] via-[#eef3f5] to-[#dbe6ea] p-5",
        className
      )}
    >
      <h3 className="text-xl font-bold leading-tight tracking-tight text-[#0c0c0c]">
        Sourced from
        <br />
        everywhere.
      </h3>
      <p className="mt-2 text-sm text-[#3a3a3a]">6 sources synced</p>

      <div className="mt-auto flex flex-col gap-2.5 pt-8">
        <div className="flex flex-wrap gap-2.5">
          <Chip label="Career Sites" />
          <Chip label="Job Boards" className="-rotate-2 shadow-md" />
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Chip label="ATS Systems" />
          <Chip label="Resume Parsing" />
        </div>
      </div>
    </div>
  );
}

function AutomateCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-brand-accent-soft via-[#eaf2c8] to-[#eef3b8] p-6",
        className
      )}
    >
      <h3 className="max-w-[230px] text-2xl font-bold leading-snug tracking-tight text-[#15201a]">
        <span className="text-[#4c7a2c]">Apply</span> to jobs automatically.
      </h3>
      <p className="mt-2 max-w-[220px] text-sm leading-snug text-[#2a3423]">
        The agent fills out and submits every application for you.
      </p>

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute bottom-8 left-[10%] w-[72%] -rotate-6 overflow-hidden rounded-lg border-2 border-white shadow-xl">
          <div className="flex h-4 items-center gap-1 bg-[#242424] pl-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>
          <div className="flex h-32 bg-[#eaefcd]">
            <div className="w-1/4 bg-[#bfd0ac]" />
          </div>
        </div>

        <div className="absolute -bottom-10 left-[26%] w-[72%] rotate-3 overflow-hidden rounded-lg rounded-b-none border-2 border-b-0 border-white shadow-2xl">
          <div className="flex h-4 items-center gap-1 bg-[#242424] pl-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>
          <div className="flex h-32 bg-[#f9edfb]">
            <div className="w-1/6 bg-[#e8d6fb]" />
          </div>
        </div>

        <div className="absolute bottom-32 left-[44%] flex -rotate-2 items-center gap-1.5 rounded-full bg-white py-1.5 pl-1.5 pr-3.5 shadow-md">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#e6f3df] to-[#b9cfa5]">
            <CheckIcon className="h-3.5 w-3.5 text-[#161616]" />
          </span>
          <span className="text-xs font-semibold text-[#151515]">
            Application Sent
          </span>
        </div>

        <div className="absolute bottom-14 left-[2%] -rotate-1 rounded-xl bg-white px-4 py-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <SparkleIcon className="h-4 w-4 text-brand-dark" />
            <div className="flex flex-col gap-1.5">
              <span className="h-1.5 w-16 rounded-full bg-[#d8d8d7]" />
              <span className="h-1.5 w-11 rounded-full bg-[#d8d8d7]" />
            </div>
          </div>
        </div>

        <CursorIcon className="absolute bottom-4 right-[8%] h-7 w-7 drop-shadow" />
      </div>
    </div>
  );
}

const days = [
  { label: "M", value: 20, display: "20" },
  { label: "T", value: 60, display: "60" },
  { label: "W", value: 180, display: "180" },
  { label: "T", value: 400, display: "400" },
  { label: "F", value: 620, display: "620" },
  { label: "S", value: 820, display: "820" },
  { label: "S", value: 1000, display: "1000+" },
];
const maxDayValue = days[days.length - 1].value;

function InsightsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-b from-[#fdf5ec] to-[#f8efe4] p-5",
        className
      )}
    >
      <span className="w-fit rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#111] shadow-sm">
        Jobs Applied
      </span>
      <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b0b0b]">
        1,000+
      </p>
      <p className="text-sm text-[#3a3a3a]">jobs applied this week</p>

      <div className="mt-auto flex h-52 gap-2 pt-6 sm:h-64">
        {days.map((day, i) => {
          const isLast = i === days.length - 1;
          const heightPct = Math.max(
            (day.value / maxDayValue) * 100,
            12
          );
          return (
            <div
              key={i}
              className="flex flex-1 flex-col items-center justify-end gap-1.5"
            >
              {!isLast && (
                <span className="text-[10px] font-medium text-[#a79c8e]">
                  {day.display}
                </span>
              )}
              <div
                className={cn(
                  "flex w-full shrink-0 justify-center rounded-md pt-1.5",
                  isLast
                    ? "bg-gradient-to-b from-[#f2b705] via-[#7fa53a] to-brand-dark"
                    : "bg-[#e9e3da]"
                )}
                style={{ height: `${heightPct}%` }}
              >
                {isLast && (
                  <span className="text-[9px] font-semibold text-white">
                    {day.display}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-medium tracking-wide text-[#a79c8e]">
                {day.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SearchCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-4 overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-r from-[#f2f1f8] to-[#e6e4f2] p-5 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <h3 className="text-lg font-bold leading-snug tracking-tight text-[#0d0d10]">
        Find your next role,
        <br className="hidden sm:block" /> instantly.
      </h3>
      <div className="flex h-12 w-full items-center gap-3 rounded-full bg-white px-2 shadow-sm sm:w-96">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f1f5]">
          <SearchIcon className="h-4 w-4 text-[#121212]" />
        </span>
        <span className="flex-1 truncate text-sm text-[#8c8c99]">
          Search job titles, companies...
        </span>
        <FilterIcon className="mr-2 h-4 w-4 shrink-0 text-[#8c8c99]" />
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <SectionBadge>Overview</SectionBadge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
          See Every Application at a Glance
        </h2>
        <p className="mt-3 text-base text-brand-muted">
          From sourcing and matching to submitting and tracking —
          everything lives in one dashboard.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.85fr_1.15fr] lg:grid-rows-[11rem_17rem_11rem]">
        <NotifCard className="min-h-44 lg:col-start-1 lg:row-start-1 lg:min-h-0" />
        <ConnectCard className="min-h-72 lg:col-start-1 lg:row-start-2 lg:row-span-2 lg:min-h-0" />
        <AutomateCard className="min-h-72 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-0" />
        <InsightsCard className="min-h-72 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:min-h-0" />
        <SearchCard className="min-h-32 lg:col-start-2 lg:row-start-3 lg:col-span-2 lg:min-h-0" />
      </div>
    </section>
  );
}
