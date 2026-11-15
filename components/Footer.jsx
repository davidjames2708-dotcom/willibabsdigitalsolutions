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
            <div className="footer-social" role="group" aria-label="Social media platforms">
              <span className="footer-social-icon facebook" role="img" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 21v-8.2H16l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.2H6.7v3.2h2.8V21h3.7Z" /></svg>
              </span>
              <span className="footer-social-icon whatsapp" role="img" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.8 9.8 0 0 0-8.42 14.82L2.3 22l5.3-1.39A9.8 9.8 0 1 0 12.04 2Zm0 17.8a8 8 0 0 1-4.08-1.12l-.3-.18-3.15.83.84-3.07-.2-.31a8 8 0 1 1 6.9 3.85Zm4.39-5.98c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>
              </span>
              <span className="footer-social-icon linkedin" role="img" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.9H2.1V22h3.1V7.9ZM3.65 2A1.82 1.82 0 1 0 3.7 5.64 1.82 1.82 0 0 0 3.65 2ZM22 13.92c0-4.25-2.27-6.23-5.3-6.23a4.57 4.57 0 0 0-4.1 2.26V7.9H9.5V22h3.1v-7c0-1.85.35-3.64 2.65-3.64 2.27 0 2.3 2.11 2.3 3.76V22H22v-8.08Z" /></svg>
              </span>
              <span className="footer-social-icon tiktok" role="img" aria-label="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 6.2a5.2 5.2 0 0 1-3.2-4.7h-3.5v14.1a2.95 2.95 0 1 1-2.95-2.95c.38 0 .75.07 1.08.2V9.27a6.5 6.5 0 1 0 5.37 6.4V8.5a8.65 8.65 0 0 0 5.05 1.62V6.65c-.63 0-1.25-.15-1.85-.45Z" /></svg>
              </span>
              <span className="footer-social-icon instagram" role="img" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" /></svg>
              </span>
            </div>
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
            <p>Based in Nigeria, we work remotely with clients worldwide.</p>
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
        <nav className="footer-legal-links" aria-label="Legal information">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
