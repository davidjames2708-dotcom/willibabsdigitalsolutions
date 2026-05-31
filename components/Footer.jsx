import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="Willibabs Digital Solutions home">
            <span>WD</span>
            <strong>
              Willibabs Digital
              <br />
              Solutions
            </strong>
          </Link>
          <p>Professional digital services for businesses, startups, researchers, and organizations that need reliable online systems.</p>
          <div className="footer-socials" aria-label="Social links">
            <Link href="/contact" aria-label="Contact Willibabs Digital on Facebook">f</Link>
            <Link href="/contact" aria-label="Contact Willibabs Digital on X">x</Link>
            <Link href="/contact" aria-label="Contact Willibabs Digital on LinkedIn">in</Link>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer quick links">
          <h2>Quick Links</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        <nav className="footer-links" aria-label="Footer services">
          <h2>Services</h2>
          <Link href="/services">Website Development</Link>
          <Link href="/services">Software Development</Link>
          <Link href="/services">Fintech App Development</Link>
          <Link href="/services">AI Automation</Link>
          <Link href="/writing-samples">Research & Academic Writing</Link>
          <Link href="/writing-samples">Resume Writing Services</Link>
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          <div>
            <span className="footer-icon" aria-hidden="true">G</span>
            <div>
              <strong>Global Remote Delivery</strong>
              <p>Available for clients in the UK, US, Canada, Europe, Africa, and other international markets.</p>
            </div>
          </div>
          <div>
            <span className="footer-icon" aria-hidden="true">S</span>
            <div>
              <strong>Service Coverage</strong>
              <p>Websites, apps, automation, fintech tools, research support, and professional writing delivered online.</p>
            </div>
          </div>
          <div>
            <span className="footer-icon" aria-hidden="true">@</span>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:info@willibabsdigitalsolutions.com">info@willibabsdigitalsolutions.com</a></p>
            </div>
          </div>
          <div>
            <span className="footer-icon" aria-hidden="true">T</span>
            <div>
              <strong>Time Zone Friendly</strong>
              <p>Project updates can be handled by email, form messages, and scheduled online communication.</p>
            </div>
          </div>
          <div>
            <span className="footer-icon" aria-hidden="true">R</span>
            <div>
              <strong>Project Requests</strong>
              <p><Link href="/contact">Use the contact form to start your project.</Link></p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Willibabs Digital Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
