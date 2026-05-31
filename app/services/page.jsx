import Link from "next/link";

export const metadata = {
  title: "Services | Willibabs Digital Solutions",
};

export default function ServicesPage() {
  return (
    <main>
    <section className="page-hero services-page-hero">
      <p className="eyebrow">Services</p>
      <h1>Specialized digital services delivered with a clear plan.</h1>
      <p className="lead">
        Choose the service area that matches your project. Each engagement begins with a clear scope, practical timeline, and communication plan.
      </p>
    </section>

    <section className="section services-detail-section">
      <div className="section-heading services-detail-heading">
        <p className="eyebrow">Our Services</p>
        <h2>Practical digital services for businesses, professionals, and researchers.</h2>
        <p>
          Whether you need a website, business system, automation workflow, or writing support, we help you plan clearly and deliver work that is practical, professional, and ready to use.
        </p>
      </div>

      <div className="detail-grid">
        <article className="detail-card">
          <span className="service-tag">Online Presence</span>
          <h2>Website Development</h2>
          <p>We build clean websites that show what your business does, explain your services well, and make it easy for visitors to contact you.</p>
          <ul>
            <li>Business websites, portfolios, and service pages</li>
            <li>Landing pages for products, offers, and campaigns</li>
            <li>Online booking, inquiry forms, and simple shop pages</li>
            <li>Mobile-friendly redesigns and website improvements</li>
          </ul>
        </article>

        <article className="detail-card">
          <span className="service-tag">Business Systems</span>
          <h2>Software and App Development</h2>
          <p>We create simple, organized systems for businesses that need dashboards, portals, transaction pages, or tools to manage daily work better.</p>
          <ul>
            <li>Admin dashboards, customer portals, and staff tools</li>
            <li>VTU, fintech, payment, and transaction pages</li>
            <li>Business management systems and workflow tools</li>
            <li>Mobile app screens, MVPs, and product prototypes</li>
          </ul>
        </article>

        <article className="detail-card">
          <span className="service-tag">Smarter Workflows</span>
          <h2>AI Automation</h2>
          <p>We set up automation that helps you save time on repeated tasks, respond faster, collect leads, and handle information more smoothly.</p>
          <ul>
            <li>AI chatbots and customer support flows</li>
            <li>Lead capture and follow-up automation</li>
            <li>Document, data, and form processing workflows</li>
            <li>Smart replies and internal productivity tools</li>
          </ul>
        </article>

        <article className="detail-card">
          <span className="service-tag">Writing Support</span>
          <h2>Research and Academic Writing</h2>
          <p>We support researchers, students, and professionals with editing, formatting, and well-structured documents that are easier to read and review.</p>
          <ul>
            <li>Proofreading and academic editing</li>
            <li>Citation and reference formatting</li>
            <li>Journal formatting and submission checks</li>
            <li>Literature review, article, and manuscript support</li>
          </ul>
        </article>
      </div>
    </section>

    <section className="section cta-band">
      <div>
        <p className="eyebrow">Ready to begin?</p>
        <h2>Send your project details and receive a practical next step.</h2>
        <p>Include the service you need, your expected deadline, and any reference examples you already have.</p>
      </div>
      <Link className="button primary" href="/contact">Contact Us</Link>
    </section>
  </main>
  );
}
