import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="footer-logo" href="/" aria-label="Willibabs Digital Solutions home">
              <span>WD</span>
              <strong>Willibabs Digital<br />Solutions</strong>
            </Link>
            <p>Digital solutions for businesses, startups, and researchers.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <nav className="footer-links" aria-label="Footer services">
            <h2>Services</h2>
            <Link href="/services">Web &amp; Software</Link>
            <Link href="/services">Fintech Solutions</Link>
            <Link href="/services">AI Automation</Link>
            <Link href="/writing-samples">Research Support</Link>
          </nav>

          <div className="footer-contact">
            <h2>Contact</h2>
            <a className="footer-email" href="mailto:info@willibabsdigitalsolutions.com">
              info@willibabsdigitalsolutions.com
            </a>
            <p>Remote delivery across the US, UK, Canada, Europe, and Africa.</p>
            <p>Replies within 24 hours.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Willibabs Digital Solutions. All rights reserved.</p>
          <div className="footer-bottom-actions">
            <span>Websites · Software · Automation · Research</span>
            <Link className="button primary" href="/contact">Start a Project</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
