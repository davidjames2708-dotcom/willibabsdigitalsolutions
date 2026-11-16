import Link from "next/link";
import "./research-marketplace.css";

export const metadata = {
  title: "Research Marketplace | Willibabs Digital Solutions",
  description: "Research, academic writing, editing, and document support from Willibabs Digital Solutions.",
};

export default function ResearchMarketplacePage() {
  return (
    <main className="research-marketplace">
      <section className="research-marketplace-hero">
        <div>
          <p className="eyebrow">Research Services Marketplace</p>
          <h1>Professional research and writing you can trust.</h1>
          <p className="lead">Get thoughtful writing, editing, and document support for academic and professional work, with clear communication at every step.</p>
          <form className="research-marketplace-search" action="/contact">
            <label className="sr-only" htmlFor="research-service-search">Search research services</label>
            <input id="research-service-search" name="project" placeholder="What research or writing support do you need?" />
            <button type="submit" aria-label="Start a research service request">Search</button>
          </form>
          <nav className="research-marketplace-quick-links" aria-label="Popular research services">
            <a href="#research-writing">Academic writing</a><a href="#editing">Editing</a><a href="#citations">Citations</a><a href="#journal-support">Journal support</a>
          </nav>
        </div>
        <aside className="research-marketplace-promise">
          <h2>Support you can work with</h2>
          <ul><li>Clear scope and communication</li><li>Careful, human-led review</li><li>Confidential project handling</li><li>Timelines agreed in advance</li><li>International client collaboration</li></ul>
        </aside>
      </section>
      <nav className="research-marketplace-category-nav" aria-label="Research service categories">
        <a href="#editing">Writing &amp; Translation</a>
        <a href="#research-writing">Research &amp; Academic Services</a>
        <a href="/services">Business &amp; Consulting Services</a>
        <a href="/services">AI &amp; Data Services</a>
      </nav>
      <section className="research-marketplace-categories" aria-labelledby="research-categories-title">
        <h2 id="research-categories-title">Explore research services</h2>
        <div>{[["✎","Research writing","research-writing"],["✓","Editing & proofreading","editing"],["§","Citations & references","citations"],["▤","Journal formatting","journal-support"],["⌕","Literature reviews","research-writing"],["▣","Reports & documents","research-writing"],["↗","Submission checks","journal-support"],["Aa","Academic language","editing"]].map(([icon,label,id])=><a href={`#${id}`} key={label}><span aria-hidden="true">{icon}</span><strong>{label}</strong><b aria-hidden="true">→</b></a>)}</div>
      </section>
      <section className="section research-marketplace-cta"><p className="eyebrow">Start with a clear brief</p><h2>Tell us about your research or writing project.</h2><p>Share your document type, requirements, and preferred timeline. We’ll discuss a suitable scope and next steps.</p><Link className="button primary" href="/contact">Send a project request</Link></section>
    </main>
  );
}
