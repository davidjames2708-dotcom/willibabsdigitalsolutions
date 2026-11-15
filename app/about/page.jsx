import Link from "next/link";

export const metadata = {
  title: "About Us | Willibabs Digital Solutions",
  description:
    "Meet Willibabs Digital Solutions, a Nigeria-based digital studio building websites, software, fintech products, and practical business tools for clients worldwide.",
};

const principles = [
  ["Understand the need", "We learn about your business, audience, and the work you want the solution to improve."],
  ["Agree on the scope", "We outline the pages, features, content, timeline, and deliverables before production."],
  ["Build and hand over", "We develop the agreed solution, review it with you, and prepare it for use."],
];

const projects = [
  ["Fintech", "Bundlegram", "A live platform for airtime, data, utility payments, and customer account activity.", "https://bundlegram.com/"],
  ["Business website", "Asiusdeloy Ltd", "A company website organized to explain services and make it easier for prospective clients to get in touch.", "https://www.asiusdeloyltd.co.uk/"],
  ["E-commerce", "Will Thrive Store", "An online shopping experience designed around product discovery and mobile browsing.", "https://www.willthrivestore.com/"],
];

export default function AboutPage() {
  return (
    <main className="about-page-main">
      <section className="about-page-hero">
        <div className="about-page-copy">
          <p className="eyebrow">Who we are and what we do</p>
          <h1>Willibabs Digital Solutions</h1>
          <p className="lead about-page-lead">
            We help businesses, professionals, and organizations get the digital work they need done. From websites and custom software to fintech platforms, workflow automation, and research writing, we plan and deliver practical solutions for real goals.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">Tell us about your project</Link>
            <Link className="button secondary" href="/portfolio">Explore our work</Link>
          </div>
          <p className="about-availability">Based in Nigeria <span aria-hidden="true">·</span> Working with clients worldwide</p>
        </div>
        <figure className="about-page-image">
          <img src="/assets/who-we-are.jpg" alt="A workspace for planning and building digital projects" />
        </figure>
      </section>

      <section className="section about-story-section" aria-labelledby="about-story-title">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-story-title">We connect technology, communication, and everyday business needs.</h2>
        </div>
        <div className="about-story-copy">
          <p>Willibabs Digital Solutions is a Nigeria-based digital services company working with clients locally and internationally. We bring design, development, and writing together to help clients present their work professionally, serve customers online, and manage information more effectively.</p>
          <p>Our projects range from business websites and online stores to payment platforms, internal systems, and polished research documents. We listen to what needs to change, recommend a suitable approach, then work with you through delivery.</p>
        </div>
      </section>

      <section className="section about-founder-section" aria-labelledby="founder-title">
        <figure className="about-founder-image">
          <img src="/assets/founder-willibabs.jpg" alt="Willibabs, founder of Willibabs Digital Solutions" loading="lazy" />
        </figure>
        <div className="about-founder-copy">
          <p className="eyebrow">Meet the founder</p>
          <h2 id="founder-title">Work directly with the person leading your project.</h2>
          <p>Willibabs leads the company and works with clients to shape each project. That means your goals, questions, and feedback stay close to the work from the first discussion through delivery.</p>
          <p>Every engagement begins with understanding what you need, who the work is for, and what a useful result looks like. From there, we agree on a clear scope and keep communication open as the project takes shape.</p>
          <Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section about-services-section" aria-labelledby="about-services-title">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2 id="about-services-title">Digital services for how you present, operate, and grow.</h2>
          <p>We offer end-to-end support across digital products and professional writing, with services that can be tailored to your project.</p>
        </div>
        <div className="about-services-grid">
          <article><span>01</span><h3>Web design and development</h3><p>Company websites, e-commerce stores, landing pages, and portfolios that explain your services, build credibility, and help visitors contact or buy from you.</p></article>
          <article><span>02</span><h3>Software, apps, and fintech</h3><p>Custom portals, dashboards, business systems, mobile app interfaces, VTU services, bill payment platforms, and transaction workflows.</p></article>
          <article><span>03</span><h3>AI and business automation</h3><p>Chatbots and automated workflows for customer enquiries, lead follow-up, document handling, and repetitive administrative tasks.</p></article>
          <article><span>04</span><h3>Research and professional writing</h3><p>Proofreading, editing, citation and journal formatting, manuscript support, and clear technical and business documents.</p></article>
        </div>
        <Link className="text-link about-services-link" href="/services">See service details <span aria-hidden="true">→</span></Link>
      </section>

      <section className="section about-work-section" aria-labelledby="about-work-title">
        <div className="portfolio-heading-row">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="about-work-title">Examples of our work in practice.</h2>
            <p>Examples from live projects across payments, company websites, and online retail.</p>
          </div>
          <Link className="button secondary" href="/portfolio">View all work</Link>
        </div>
        <div className="about-project-grid">
          {projects.map(([type, name, description, href]) => (
            <article className="about-project-card" key={name}>
              <span>{type}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href={href} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-principles-section" aria-labelledby="about-principles-title">
        <div className="about-principles-intro">
          <p className="eyebrow">How we work</p>
          <h2 id="about-principles-title">A clear process keeps the work on track.</h2>
          <p>We keep you involved at the important points so the delivered work matches the agreed scope and your goals.</p>
        </div>
        <div className="about-principles-list">
          {principles.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="section about-process-section" aria-labelledby="about-process-title">
        <div className="section-heading">
          <p className="eyebrow">Our process</p>
          <h2 id="about-process-title">Four clear steps, from idea to delivery.</h2>
        </div>
        <ol className="about-process-grid">
          <li><span>01</span><h3>Understand</h3><p>We learn about your audience, goals, needs, and constraints.</p></li>
          <li><span>02</span><h3>Plan</h3><p>We agree on scope, priorities, timing, and what delivery includes.</p></li>
          <li><span>03</span><h3>Create</h3><p>We build the agreed solution and share progress for your feedback.</p></li>
          <li><span>04</span><h3>Deliver</h3><p>We review the work together and prepare it for launch or handover.</p></li>
        </ol>
      </section>

      <section className="section cta-band about-cta-band">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Tell us what you need to get done.</h2>
          <p>Share your idea, the service you need, and your preferred timeline. We’ll get back to you to discuss the next step.</p>
        </div>
        <Link className="button primary" href="/contact">Contact Willibabs</Link>
      </section>
    </main>
  );
}
