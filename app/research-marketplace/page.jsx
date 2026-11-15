import Link from "next/link";
import "./research-marketplace.css";

export const metadata = {
  title: "Research Marketplace | Willibabs Digital Solutions",
  description: "Research, academic writing, editing, and document support from Willibabs Digital Solutions.",
};

const services = [
  ["01", "Research and writing", "Structured support for literature reviews, research articles, reports, and professional documents."],
  ["02", "Editing and proofreading", "Improve clarity, grammar, flow, and consistency while preserving your meaning and voice."],
  ["03", "Citations and formatting", "Organize references and format documents to match a required style or submission guide."],
  ["04", "Journal submission support", "Prepare manuscripts with careful formatting and practical checks before submission."],
];

export default function ResearchMarketplacePage() {
  return (
    <main className="research-marketplace">
      <section className="research-marketplace-hero">
        <div>
          <p className="eyebrow">Willibabs Digital Solutions · Research Services</p>
          <h1>Research support that helps your ideas read clearly and professionally.</h1>
          <p className="lead">Get thoughtful writing, editing, and document support for academic and professional work, with clear communication at every step.</p>
          <Link className="button primary" href="/contact">Discuss your project <span aria-hidden="true">→</span></Link>
          <div className="research-marketplace-tags"><span>Academic editing</span><span>Research writing</span><span>Citations</span><span>Journal formatting</span></div>
        </div>
        <aside className="research-marketplace-promise">
          <h2>Support you can work with</h2>
          <ul><li>Clear scope and communication</li><li>Careful, human-led review</li><li>Confidential project handling</li><li>Timelines agreed in advance</li></ul>
        </aside>
      </section>
      <section className="section research-marketplace-services">
        <div className="section-heading"><p className="eyebrow">Explore research services</p><h2>Practical support for every stage of your document.</h2><p>Choose the help you need, from shaping a draft to preparing a polished final document.</p></div>
        <div className="research-marketplace-grid">{services.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><Link href="/contact">Ask about this service <span aria-hidden="true">→</span></Link></article>)}</div>
      </section>
      <section className="section research-marketplace-cta"><p className="eyebrow">Start with a clear brief</p><h2>Tell us about your research or writing project.</h2><p>Share your document type, requirements, and preferred timeline. We’ll discuss a suitable scope and next steps.</p><Link className="button primary" href="/contact">Send a project request</Link></section>
    </main>
  );
}
