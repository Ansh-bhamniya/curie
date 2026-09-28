"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  ClipboardList,
  Grid2x2,
  HelpCircle,
  Inbox,
  Search,
  Settings,
  User,
} from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const navItems = [
  { label: "Dashboard", icon: Grid2x2, active: true },
  { label: "Browse jobs", icon: Search },
  { label: "Applications", icon: ClipboardList, count: 47 },
  { label: "Inbox", icon: Inbox, count: 3 },
  { label: "Tracker", icon: ClipboardList },
];

const matches = [
  {
    company: "Northwind Labs",
    role: "Software Developer II",
    match: 71,
    bg: "bg-[#fdf1cf]",
    ring: "text-[#e8b93a]",
    avatar: "bg-[#1e4841]",
  },
  {
    company: "Fablecraft",
    role: "Product Designer",
    match: 60,
    bg: "bg-brand-accent-soft",
    ring: "text-brand-dark",
    avatar: "bg-brand-dark",
  },
  {
    company: "Ridgeline",
    role: "Backend Developer I",
    match: 64,
    bg: "bg-[#e9e5fb]",
    ring: "text-[#7c6fd6]",
    avatar: "bg-[#3d3470]",
  },
  {
    company: "Aurora Health",
    role: "Data Analyst",
    match: 58,
    bg: "bg-[#fbe4e6]",
    ring: "text-[#d9707c]",
    avatar: "bg-[#8a3540]",
  },
];

const filters = ["All", "In flight", "Needs you", "Failed", "Skipped"];

const statusStyles: Record<string, string> = {
  Submitted: "text-emerald-600",
  "In flight": "text-blue-600",
  "Needs you": "text-rose-600",
  Queued: "text-amber-600",
};

const flightLogs = [
  "Parsing job description",
  "Tailoring resume",
  "Filling application form",
  "Submitting application",
];

function LiveStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % flightLogs.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center justify-end gap-1.5 text-xs text-blue-600">
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
      </span>
      <span className="w-36 truncate text-right">{flightLogs[index]}</span>
    </span>
  );
}

const applications = [
  {
    company: "Northwind Labs",
    role: "Software Development Engineer II",
    resume: "Ready",
    cover: "Ready",
    status: "Submitted",
    applied: "2 days ago",
  },
  {
    company: "Bluewater Analytics",
    role: "Senior Backend Engineer",
    resume: "Ready",
    cover: "Ready",
    status: "In flight",
    applied: "4 days ago",
  },
  {
    company: "Fablecraft",
    role: "Product Designer",
    resume: "Default",
    cover: "Off",
    status: "Submitted",
    applied: "2 days ago",
  },
  {
    company: "Aurora Health",
    role: "Platform Engineer",
    resume: "Default",
    cover: "Off",
    status: "Needs you",
    applied: "1 day ago",
  },
  {
    company: "Solstice Robotics",
    role: "Member of Technical Staff",
    resume: "Default",
    cover: "Off",
    status: "Queued",
    applied: "3 hours ago",
  },
];

function MatchRing({ value, className }: { value: number; className?: string }) {
  const r = 15.5;
  const c = 2 * Math.PI * r;
  return (
    <div className={`relative h-11 w-11 shrink-0 ${className}`}>
      <svg viewBox="0 0 36 36" className="h-11 w-11 -rotate-90">
        <circle cx="18" cy="18" r={r} fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (value / 100) * c}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#0d1008]">
        {value}%
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="product" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <SectionBadge>Product Preview</SectionBadge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
          Introducing Curie.
        </h2>
        <p className="mt-3 text-base text-brand-muted">
          One dashboard that finds your matches, applies on your behalf,
          and tells you exactly when it needs you.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl shadow-brand-dark/5">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 flex-col border-r border-black/5 bg-[#fafcfa] p-4 md:flex">
            <div className="flex items-center gap-2 px-1">
              <img
                src="/curie-icon.png"
                alt="Curie"
                className="h-6 w-6 object-contain"
              />
              <span className="font-display text-base font-semibold italic text-brand-dark">
                Curie
              </span>
            </div>

            <p className="mt-6 px-2 text-[10px] font-semibold tracking-wider text-brand-muted/70">
              DASHBOARD
            </p>
            <nav className="mt-2 flex flex-col gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-sm ${
                    item.active
                      ? "bg-white font-medium text-brand-dark shadow-sm"
                      : "text-brand-muted"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="size-4" />
                    {item.label}
                  </span>
                  {item.count && (
                    <span className="text-xs text-brand-muted">
                      {item.count}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-1 border-t border-black/5 pt-4">
              <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-brand-muted">
                <User className="size-4" />
                Profile
              </div>
              <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-brand-muted">
                <Settings className="size-4" />
                Settings
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-6">
              <div className="flex items-center gap-2 rounded-lg border border-black/5 bg-white p-2.5">
                <HelpCircle className="size-4 text-brand-muted" />
                <div>
                  <p className="text-xs font-medium text-brand-dark">
                    Help &amp; support
                  </p>
                  <p className="text-[10px] text-brand-muted">Send feedback</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-brand-dark p-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-white">
                  AM
                </span>
                <div>
                  <p className="text-xs font-medium text-white">
                    Alex Morgan
                  </p>
                  <p className="text-[10px] text-white/50">Free plan</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-brand-dark">
                Dashboard
              </h3>
              <div className="relative ml-auto hidden max-w-xs flex-1 sm:block">
                <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-brand-muted" />
                <Input
                  placeholder="Search by title, company..."
                  className="rounded-full bg-[#fafcfa] pl-8 text-xs"
                />
              </div>
              <Bell className="size-4 text-brand-muted" />
              <HelpCircle className="size-4 text-brand-muted" />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-brand-dark">
                Top job matches
              </p>
              <a href="#" className="text-xs font-medium text-brand-muted">
                Browse Jobs &rsaquo;
              </a>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {matches.map((m) => (
                <div
                  key={m.company}
                  className={`flex flex-col justify-between rounded-xl p-3.5 ${m.bg}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-medium text-[#0d1008]/60">
                        {m.company}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-snug text-[#0d1008]">
                        {m.role}
                      </p>
                    </div>
                    <MatchRing value={m.match} className={m.ring} />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white ${m.avatar}`}
                      >
                        {m.company.charAt(0)}
                      </span>
                      <span className="text-[10px] font-medium text-[#0d1008]/70">
                        {m.company}
                      </span>
                    </span>
                    <Button size="sm" className="h-6 rounded-full px-2.5 text-[10px]">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-brand-dark">
                All applications
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="rounded-full">
                  Open Tracker
                </Button>
                <Button size="sm" className="rounded-full">
                  Submit all
                </Button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {filters.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    i === 0
                      ? "bg-brand-dark text-white"
                      : "border border-black/10 text-brand-muted"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-4 overflow-x-auto rounded-xl border border-black/5">
              <Table>
                <TableHeader>
                  <TableRow className="border-black/5 hover:bg-transparent">
                    <TableHead className="text-[10px] uppercase text-brand-muted">
                      Position
                    </TableHead>
                    <TableHead className="text-[10px] uppercase text-brand-muted">
                      Resume
                    </TableHead>
                    <TableHead className="text-[10px] uppercase text-brand-muted">
                      Cover Letter
                    </TableHead>
                    <TableHead className="text-[10px] uppercase text-brand-muted">
                      Status
                    </TableHead>
                    <TableHead className="w-44 text-right text-[10px] uppercase text-brand-muted">
                      Applied
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.role} className="border-black/5">
                      <TableCell>
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-surface text-[10px] font-bold text-brand-dark">
                            {app.company.charAt(0)}
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-brand-dark">
                              {app.company}
                            </p>
                            <p className="text-[11px] text-brand-muted">
                              {app.role}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs text-brand-muted">
                        {app.resume}
                      </TableCell>
                      <TableCell className="text-xs text-brand-muted">
                        {app.cover}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-medium ${statusStyles[app.status]}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {app.status}
                        </span>
                      </TableCell>
                      <TableCell className="w-44 whitespace-nowrap text-right text-xs text-brand-muted">
                        {app.status === "In flight" ? (
                          <LiveStatus />
                        ) : (
                          app.applied
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
