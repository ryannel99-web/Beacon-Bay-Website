import { clinicConfig } from "@/config/clinic";

export function HoursCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-tertiary-fixed p-7 shadow-glow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-4 -right-4 h-28 w-28 text-on-tertiary-fixed/10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
      <h3 className="text-lg font-bold text-on-tertiary-fixed mb-5">Opening Hours</h3>
      <div className="space-y-3 text-sm font-medium text-on-tertiary-fixed">
        <div className="flex justify-between border-b border-on-tertiary-fixed/10 pb-3">
          <span>Weekdays</span>
          <span>{clinicConfig.hours.weekdays}</span>
        </div>
        <div className="flex justify-between border-b border-on-tertiary-fixed/10 pb-3">
          <span>Saturdays</span>
          <span>{clinicConfig.hours.saturday}</span>
        </div>
        <div className="flex justify-between">
          <span>Sundays</span>
          <span>{clinicConfig.hours.sunday}</span>
        </div>
      </div>
      <p className="mt-5 text-xs text-on-tertiary-fixed/70">{clinicConfig.surchargeNote}</p>
    </div>
  );
}
