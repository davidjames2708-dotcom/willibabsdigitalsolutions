import Link from "next/link";

export const metadata = {
  title: "About | Willibabs Digital Solutions",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <main className="about-page-main">
          <section className="about-page-hero">
            <div className="about-page-copy">
              <p className="eyebrow">About Willibabs Digital Solutions</p>
              <h1>We build clear, professional digital solutions for clients who want to grow.</h1>
              <p className="lead about-page-lead">
                Willibabs Digital Solutions supports businesses, startups, researchers, and organizations with websites, software systems, fintech interfaces, AI automation, and academic writing support.
              </p>
              <div className="hero-actions">
                <Link className="button primary light" href="/contact">Start a Project</Link>
                <Link className="button accent" href="/services">View Services</Link>
              </div>
            </div>
      
            <figure className="about-page-image">
              <img src="/assets/who-we-are.jpg" alt="Digital project work at Willibabs Digital Solutions" />
            </figure>
          </section>
      
          <section className="section about-story-section">
            <div>
              <p className="eyebrow">Who We Are</p>
              <h2>A digital solutions team helping clients build, present, and manage their work with confidence.</h2>
            </div>
            <p>
              Willibabs Digital Solutions works with businesses, professionals, researchers, and organizations that need practical websites, software systems, automation workflows, fintech interfaces, and professional writing support. We focus on clear structure, clean presentation, and useful solutions that are ready for real clients and real goals.
            </p>
          </section>
      
          <section className="section client-fit-section">
            <div className="section-heading">
              <p className="eyebrow">Who We Serve</p>
              <h2>Digital support for people and organizations ready to look more professional online.</h2>
              <p>
                We work with clients who need clear presentation, dependable systems, and practical support that helps them attract customers, manage information, or prepare professional documents.
              </p>
            </div>
      
            <div className="client-fit-grid">
              <article>
                <span>01</span>
                <strong>Businesses and startups</strong>
                <p>Websites, service pages, customer forms, business dashboards, and digital tools that make your brand easier to trust and contact.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Professionals and creators</strong>
                <p>Portfolio pages, personal brand websites, resumes, profiles, and content support for people who want to present their work clearly.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Schools, churches, and organizations</strong>
                <p>Organized websites, event information, registration forms, donation or inquiry flows, and simple systems for communication.</p>
              </article>
              <article>
                <span>04</span>
                <strong>Researchers and academic clients</strong>
                <p>Research editing, formatting, publication support, technical writing, and structured documents prepared with careful attention to detail.</p>
              </article>
            </div>
          </section>
      
          <section className="section why-choose-section">
            <div className="why-choose-copy">
              <p className="eyebrow">Why Choose Us</p>
              <h2>We focus on work that looks good, works well, and helps clients move faster.</h2>
              <p>
                A digital project should not leave you confused. We help you define what you need, organize the content, build the right solution, and prepare it for real use across phones, tablets, and desktops.
              </p>
            </div>
      
            <div className="why-choose-list">
              <article>
                <strong>Clear project direction</strong>
                <p>We help turn rough ideas into a structured plan with pages, features, content, and priorities that make sense.</p>
              </article>
              <article>
                <strong>Professional presentation</strong>
                <p>Your website, app interface, document, or automation flow is shaped to look credible and easy to understand.</p>
              </article>
              <article>
                <strong>Practical technology</strong>
                <p>We recommend solutions that fit the real business need instead of adding unnecessary complexity.</p>
              </article>
              <article>
                <strong>Support beyond delivery</strong>
                <p>We can help with updates, improvements, content changes, and next-stage features after the first version is ready.</p>
              </article>
            </div>
          </section>
      
          <section className="section process-section about-process-section">
            <div className="section-heading process-heading">
              <p className="eyebrow">How We Work</p>
              <h2>A simple process that keeps your project organized from the first message to final delivery.</h2>
              <p>Every project is handled with clear communication, realistic planning, focused execution, and review before handover.</p>
            </div>
      
            <div className="process-timeline" aria-label="About page project process">
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">01</span>
                <div>
                  <span className="process-step">Discovery</span>
                  <h3>We understand your goal</h3>
                  <p>We discuss your business, audience, service, content, timeline, and the result you want the project to achieve.</p>
                </div>
              </article>
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">02</span>
                <div>
                  <span className="process-step">Planning</span>
                  <h3>We shape the structure</h3>
                  <p>We organize the pages, features, writing needs, design direction, and delivery steps before production begins.</p>
                </div>
              </article>
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">03</span>
                <div>
                  <span className="process-step">Production</span>
                  <h3>We build and refine</h3>
                  <p>We create the website, system, automation, interface, or document with attention to clarity, usability, and quality.</p>
                </div>
              </article>
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">04</span>
                <div>
                  <span className="process-step">Delivery</span>
                  <h3>We review and hand over</h3>
                  <p>We check the final work, make agreed improvements, and prepare the solution for launch, submission, or client use.</p>
                </div>
              </article>
            </div>
          </section>
      
          <section className="section cta-band">
            <div>
              <p className="eyebrow">Work with us</p>
              <h2>Start with your idea, then we help shape it into a clear digital solution.</h2>
              <p>Send your project details, preferred timeline, and the service you need.</p>
            </div>
            <Link className="button primary" href="/contact">Contact Us</Link>
          </section>
        </main>
    </div>
  );
}
