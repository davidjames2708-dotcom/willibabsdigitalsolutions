"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { label: "Research Marketplace", disabled: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Blog / Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Willibabs Digital Solutions home">
          <span className="brand-mark">WD</span>
          <span className="brand-text">Willibabs Digital Solutions</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="primary-menu"
          data-nav-toggle
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links" id="primary-menu" data-nav-menu>
          {navItems.map((item) => (
            item.disabled ? (
              <span className="nav-links-static" aria-disabled="true" key={item.label}>
                <span>{item.label}</span>
                <small className="nav-coming-soon">Coming Soon</small>
              </span>
            ) : (
              <Link
                key={item.href}
                className={pathname === item.href ? "is-active" : undefined}
                href={item.href}
                data-nav-link
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
}
