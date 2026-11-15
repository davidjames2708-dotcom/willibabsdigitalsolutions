import Link from "next/link";

export const metadata = {
  title: "About Us | Willibabs Digital Solutions",
  description:
    "Meet Willibabs Digital Solutions, a Nigeria-based digital studio building websites, software, fintech products, and practical business tools for clients worldwide.",
};

const principles = [
  ["Clarity first", "We make the goals, scope, and next steps understandable before work begins."],
  ["Built for real use", "We consider the people using the website, system, or document—not just how it looks in a presentation."],
  ["A direct working relationship", "You can speak with the person shaping your project and get clear updates as it moves forward."],
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
          <p className="eyebrow">About Willibabs Digital Solutions</p>
          <h1>Thoughtful digital work, built around what your business needs.</h1>
          <p className="lead about-page-lead">
            We are a Nigeria-based digital studio helping businesses and professionals build a stronger online presence, improve everyday workflows, and bring useful digital ideas to life.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">Tell us about your project</Link>
            <Link className="button secondary" href="/portfolio">Explore our work</Link>
          </div>
          <p className="about-availability">Based in Nigeria <span aria-hidden="true">·</span> Working remotely with clients worldwide</p>
        </div>
        <figure className="about-page-image">
          <img src="/assets/who-we-are.jpg" alt="A workspace for planning and building digital projects" />
        </figure>
      </section>

      <section className="section about-story-section" aria-labelledby="about-story-title">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-story-title">A small studio for practical digital progress.</h2>
        </div>
        <div className="about-story-copy">
          <p>Willibabs Digital Solutions brings web development, software, fintech interfaces, automation, and professional writing support together under one roof. Our work starts by understanding the people you serve and the task you need to make easier.</p>
          <p>From a first business website to a customer portal or a carefully prepared research document, we aim to make complex work clearer and give every project a useful next step.</p>
        </div>
      </section>

      <section className="section about-founder-section" aria-labelledby="founder-title">
        <figure className="about-founder-image">
          <img src="/assets/founder-willibabs.jpg" alt="Willibabs, founder of Willibabs Digital Solutions" loading="lazy" />
        </figure>
        <div className="about-founder-copy">
          <p className="eyebrow">Meet the founder</p>
          <h2 id="founder-title">A personal approach from first conversation to handover.</h2>
          <p>Willibabs Digital Solutions is led by its founder, Willibabs. The studio was built to help organizations make better use of digital tools through clear communication, considered design, and technology chosen for the job at hand.</p>
          <p>When you get in touch, we start with your goals and constraints, then map a practical scope together. You know what is being made, why it matters, and what happens next.</p>
          <Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section about-services-section" aria-labelledby="about-services-title">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2 id="about-services-title">The right digital support for the work in front of you.</h2>
          <p>Choose a focused service or combine areas when your project needs more than one kind of support.</p>
        </div>
        <div className="about-services-grid">
          <article><span>01</span><h3>Websites and online presence</h3><p>Business websites, landing pages, portfolios, and redesigns that explain your offer and make it easy to take the next step.</p></article>
          <article><span>02</span><h3>Software and fintech</h3><p>Portals, dashboards, business tools, and payment experiences designed around real customer and team workflows.</p></article>
          <article><span>03</span><h3>AI and workflow automation</h3><p>Practical automations for repetitive tasks, enquiries, lead follow-up, and information handling.</p></article>
          <article><span>04</span><h3>Research and professional writing</h3><p>Editing, formatting, and writing support to make technical and research documents clearer and more consistent.</p></article>
        </div>
        <Link className="text-link about-services-link" href="/services">See service details <span aria-hidden="true">→</span></Link>
      </section>

      <section className="section about-work-section" aria-labelledby="about-work-title">
        <div className="portfolio-heading-row">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="about-work-title">A look at the kinds of problems we help solve.</h2>
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
          <h2 id="about-principles-title">Good work starts with a clear conversation.</h2>
          <p>We keep projects focused, collaborative, and grounded in the outcome you need.</p>
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
          <h2>Let’s work out the right next step.</h2>
          <p>Tell us what you are trying to achieve. We’ll review your request and get back to you with a clear response.</p>
        </div>
        <Link className="button primary" href="/contact">Contact Willibabs</Link>
      </section>
    </main>
  );
}
