import Link from "next/link";

export const metadata = {
  title: "About Us | Willibabs Digital Solutions",
  description:
    "Learn about Willibabs Digital Solutions and our website, software, fintech, automation, and professional writing services.",
};

const projects = [
  ["Fintech", "Bundlegram", "A live platform for airtime, data, utility payments, and customer account activity.", "https://bundlegram.com/"],
  ["Business website", "Asiusdeloy Ltd", "A company website that explains its services and helps prospective clients get in touch.", "https://www.asiusdeloyltd.co.uk/"],
  ["E-commerce", "Will Thrive Store", "An online shopping experience designed around product discovery and mobile browsing.", "https://www.willthrivestore.com/"],
];

const processSteps = [
  ["Understand", "We learn about your audience, goals, needs, and constraints."],
  ["Plan", "We agree on scope, priorities, timing, and what delivery includes."],
  ["Create", "We build the agreed solution and share progress for your feedback."],
  ["Deliver", "We review the work together and prepare it for launch or handover."],
];

export default function AboutPage() {
  return (
    <main className="about-page-main">

      <section className="section about-story-section" aria-labelledby="about-story-title">
        <div className="about-story-heading">
          <h1 className="about-story-page-title">About Us</h1>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-story-title">Practical digital tools to help organizations work, serve customers, and grow.</h2>
        </div>
        <div className="about-story-copy">
          <p>Willibabs Digital Solutions is a Nigeria-based digital services company working with businesses, professionals, and researchers locally and internationally. We build websites and software, improve digital workflows, and provide professional writing support.</p>
          <p>We start by understanding what you need, then recommend a clear approach and work with you through delivery.</p>
          <p className="about-availability"><strong>Based in Nigeria</strong> <span aria-hidden="true">&middot;</span> <strong>Working with clients worldwide</strong></p>
        </div>
      </section>
      <section className="section about-founder-section" aria-labelledby="founder-title">
        <div className="about-founder-heading">
          <p className="eyebrow">Leadership</p>
          <h2 id="founder-title">A founder-led company, powered by specialist teams.</h2>
          <p className="about-founder-name">Babalola William Jesutobi</p>
          <p className="about-founder-role">Founder, Willibabs Digital Solutions</p>
        </div>
        <div className="about-founder-copy">
          <p>Our teams work across web design and development, software and fintech, AI automation, and professional writing. Each team focuses on its area of expertise, while Babalola provides company direction and helps keep every project aligned with client goals.</p>
          <Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>
      <section className="section about-services-section" aria-labelledby="about-services-title">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2 id="about-services-title">Digital services for how you present, operate, and grow.</h2>
          <p>We offer support across digital products and professional writing, with services tailored to your project.</p>
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
            <p>Live projects across payments, company websites, and online retail.</p>
          </div>
          <Link className="button secondary" href="/portfolio">View all work</Link>
        </div>
        <div className="about-project-grid">
          {projects.map(([type, name, description, href]) => (
            <article className="about-project-card" key={name}>
              <span>{type}</span><h3>{name}</h3><p>{description}</p>
              <a href={href} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-process-section" aria-labelledby="about-process-title">
        <div className="about-principles-intro">
          <p className="eyebrow">How we work</p>
          <h2 id="about-process-title">A clear process keeps the work on track.</h2>
          <p>We keep you involved at the important points so the delivered work matches the agreed scope and your goals.</p>
        </div>
        <ol className="about-process-grid">
          {processSteps.map(([title, description], index) => (
            <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </section>

      <section className="section cta-band about-cta-band">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Tell us what you need to get done.</h2>
          <p>Share your idea, the service you need, and your preferred timeline. We will get back to you to discuss the next step.</p>
        </div>
        <Link className="button primary" href="/contact">Contact Willibabs</Link>
      </section>
    </main>
  );
}
