"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clinicConfig } from "@/config/clinic";
import { navLinks } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const whatsappLink = clinicConfig.whatsappNumber
    ? `https://wa.me/${clinicConfig.whatsappNumber}`
    : "";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-outline-variant/40 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-glow" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Beacon Bay Veterinary Clinic"
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="text-base font-bold text-on-surface">
            Beacon Bay Veterinary Clinic
          </p>
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primaryBlue ${
                  isActive
                    ? "border-b-2 border-primaryBlue pb-0.5 text-primaryBlue"
                    : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {clinicConfig.socials.facebook ? (
            <a
              href={clinicConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beacon Bay Vet on Facebook"
              className="text-on-surface-variant/60 transition hover:text-primaryBlue"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          ) : null}

          <a
            href={`tel:${clinicConfig.phoneIntl}`}
            className="group flex items-center gap-0 overflow-hidden rounded-xl border border-outline-variant/60 bg-surface-container-high px-5 py-2 text-sm font-semibold text-on-surface transition-all duration-300 hover:bg-surface-dim"
          >
            Emergency
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100 group-hover:pl-1">
              : {clinicConfig.phone}
            </span>
          </a>
          <a
            href={`tel:${clinicConfig.phoneIntl}`}
            className="rounded-xl bg-gradient-to-br from-primaryBlue to-primary-container px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-outline-variant/60 text-on-surface transition hover:border-primaryBlue lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xs font-semibold uppercase">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-outline-variant/30 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-6">
          <nav className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primaryBlue ${
                    isActive ? "text-primaryBlue" : "text-on-surface-variant"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`tel:${clinicConfig.phoneIntl}`}
              className="rounded-xl bg-gradient-to-br from-primaryBlue to-primary-container py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-outline-variant/60 py-2.5 text-center text-sm font-semibold text-on-surface"
            >
              Call Now
            </Link>
            {clinicConfig.whatsappNumber ? (
              <a
                href={whatsappLink}
                className="rounded-xl border border-outline-variant/60 py-2.5 text-center text-sm font-semibold text-on-surface"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
