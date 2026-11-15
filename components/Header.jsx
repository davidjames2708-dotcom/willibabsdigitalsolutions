"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Blog / Insights" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Willibabs Digital Solutions home">
          <img className="brand-logo" src="/willibabs-logo.png" alt="Willibabs Digital Solutions" />
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
          <details className="nav-dropdown">
            <summary>Marketplaces</summary>
            <div className="nav-dropdown-menu">
              <span className="nav-links-static" aria-disabled="true">
                <span>Web Development Marketplace</span>
                <small className="nav-coming-soon">Coming Soon</small>
              </span>
              <span className="nav-links-static" aria-disabled="true">
                <span>Software Development Marketplace</span>
                <small className="nav-coming-soon">Coming Soon</small>
              </span>
              <Link href="/research-marketplace" data-nav-link>Research Marketplace</Link>
            </div>
          </details>
          <Link
            className={pathname === "/contact" ? "is-active" : undefined}
            href="/contact"
            data-nav-link
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
