"use client";

import { useState } from "react";
import { clinicConfig } from "@/config/clinic";

/*
 * CONDITIONAL DISPLAY LOGIC (currently always shown — owner can toggle):
 *
 * To show only after hours (18:00–07:30 weekdays, all day Sunday):
 *
 *   function isAfterHours(): boolean {
 *     const now = new Date();
 *     const day = now.getDay(); // 0 = Sunday, 6 = Saturday
 *     const hour = now.getHours();
 *     if (day === 0) return true; // Always show on Sunday
 *     if (day >= 1 && day <= 5) {
 *       return hour >= 18 || hour < 7 || (hour === 7 && now.getMinutes() < 30);
 *     }
 *     if (day === 6) {
 *       return hour >= 12 && hour < 17 ? false : hour >= 17;
 *     }
 *     return false;
 *   }
 *
 * Then conditionally render: if (!isAfterHours()) return null;
 */

export function AfterHoursBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      className="relative flex items-center justify-center gap-3 bg-primaryBlue px-6 py-2.5 text-sm text-white"
    >
      {/* Pulsing red dot */}
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>

      <p className="text-center">
        After-hours emergency? Call{" "}
        <a
          href={`tel:${clinicConfig.phoneIntl}`}
          className="font-bold underline decoration-white/60 underline-offset-2 hover:decoration-white"
        >
          {clinicConfig.phone}
        </a>{" "}
        — you&apos;ll be connected to the on-call vet.
      </p>

      <button
        type="button"
        aria-label="Dismiss after-hours notice"
        onClick={() => setDismissed(true)}
        className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
