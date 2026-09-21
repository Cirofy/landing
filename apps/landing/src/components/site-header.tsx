"use client";

import { useState } from "react";

const webUrl = process.env.NEXT_PUBLIC_WEB_URL ?? "http://localhost:3001";

const links = [
  { href: "#problem", label: "Sorun" },
  { href: "#how", label: "Nasıl çalışır" },
  { href: "#features", label: "Özellikler" },
  { href: "#pricing", label: "Fiyatlar" },
  { href: "#faq", label: "SSS" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a className="logo" href="/" aria-label="Cirofy ana sayfa">
        <img src="/logo.png" alt="" width={32} height={32} />
        <span>Cirofy</span>
      </a>

      <nav className="nav-links" aria-label="Ana">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a href={`${webUrl}/login`}>Giriş</a>
        <a className="btn btn-ink" href={`${webUrl}/register`}>
          Hemen başla
        </a>
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open ? (
        <div className="nav-drawer">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={`${webUrl}/login`} onClick={() => setOpen(false)}>
            Giriş
          </a>
          <a className="btn btn-profit" href={`${webUrl}/register`}>
            Hemen başla
          </a>
        </div>
      ) : null}
    </header>
  );
}
