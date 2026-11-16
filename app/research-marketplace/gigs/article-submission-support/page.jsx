import Link from "next/link";
import "../../research-marketplace.css";

export const metadata = {
  title: "Research Article & Journal Submission Support | Willibabs Digital Solutions",
  description: "Collaborative research article development, editing, journal research, formatting, and submission preparation from the Willibabs Team.",
};

const packages = [
  { name: "Basic", price: "$50", manuscripts: "1 manuscript", words: "Up to 5,000 words per manuscript", journals: "1 journal option", delivery: "5 days", description: "A focused starting package for one manuscript." },
  { name: "Standard", price: "$100", manuscripts: "Up to 3 manuscripts", words: "Up to 5,000 words per manuscript", journals: "2 journal options", delivery: "7 days", description: "Support for multiple related manuscripts." },
  { name: "Premium", price: "$150", manuscripts: "Up to 5 manuscripts", words: "Up to 5,000 words per manuscript", journals: "3 journal options", delivery: "10 days", description: "Broader support for a multi-paper project." },
];

export default function ArticleSubmissionSupportPage() {
  return (
    <main className="research-marketplace research-gig-detail">
      <nav className="research-gig-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>›</span><Link href="/research-marketplace">Research Marketplace</Link><span>›</span><span>Research &amp; Academic Services</span>
      </nav>
      <div className="research-gig-detail-layout">
        <div className="research-gig-detail-main">
          <div className="research-gig-detail-cover research-gig-cover">
            <span className="research-gig-cover-label">WILLIBABS TEAM • RESEARCH SERVICES</span>
            <span className="research-gig-cover-title">Research article<br /><b>development &amp; submission support</b></span>
            <span className="research-gig-cover-bottom"><span>Research-led</span><span>Carefully edited</span><span>Prepared to guidelines</span></span>
            <span className="research-gig-book" aria-hidden="true"><i></i><i></i></span>
          </div>
          <div className="research-gig-detail-title">
            <p className="research-gig-meta"><span>Research &amp; Academic Services</span><span className="research-gig-team">✦ Willibabs Team</span></p>
            <h1>Research article writing, editing &amp; journal submission support</h1>
            <p>Collaborative support to develop your research into a clear, carefully prepared manuscript.</p>
          </div>

          <section className="research-gig-content-section">
            <h2>About this service</h2>
            <p>Work with the Willibabs Team to develop and prepare your research article for journal submission. We can help refine your manuscript, improve clarity and structure, apply a journal’s author guidelines, and prepare submission materials. The work is grounded in your research, data, and contribution, with clear communication at each stage.</p>
            <h3>Support can include</h3>
            <ul className="research-gig-bullet-list">
              <li>Research article development and editing based on your study, data, and direction</li>
              <li>Literature review and evidence synthesis support</li>
              <li>Reference formatting in APA, MLA, Harvard, Chicago, IEEE, and other requested styles</li>
              <li>Manuscript revisions and responses to reviewer comments</li>
              <li>Journal research and fit assessment, including guidance on relevant indexing information</li>
              <li>Formatting and proofreading against a journal’s author guidelines</li>
              <li>Submission checklist and preparation support</li>
            </ul>
            <h3>How we work</h3>
            <ul className="research-gig-bullet-list">
              <li>We agree on the scope, source materials, and target guidelines before work begins.</li>
              <li>You review and approve the manuscript and remain responsible for its accuracy and authorship.</li>
              <li>We communicate progress and deliver the agreed files by the selected timeline.</li>
            </ul>
            <div className="research-gig-integrity-note"><strong>Publication expectations</strong><p>We provide preparation and submission support. Journal acceptance, publication timing, citations, and indexing status are decided by independent journals and databases and cannot be guaranteed. We do not offer backdated publication or citation services.</p></div>
          </section>

          <section className="research-gig-content-section" aria-labelledby="package-compare-title">
            <h2 id="package-compare-title">Compare packages</h2>
            <div className="research-package-grid">
              {packages.map((pkg) => <article className="research-package-card" key={pkg.name}>
                <div className="research-package-card-heading"><div><span>{pkg.name}</span><p>{pkg.description}</p></div><strong>{pkg.price}</strong></div>
                <ul>
                  <li><span>Manuscripts</span><strong>{pkg.manuscripts}</strong></li>
                  <li><span>Word count</span><strong>{pkg.words}</strong></li>
                  <li><span>Journal selection assistance</span><strong>{pkg.journals}</strong></li>
                  <li><span>Formatting</span><strong>Target journal author guidelines</strong></li>
                  <li><span>Submission preparation</span><strong>Included</strong></li>
                  <li><span>Estimated delivery</span><strong>{pkg.delivery}</strong></li>
                </ul>
                <Link href={`/contact?project=${encodeURIComponent(`Research article support - ${pkg.name} package`)}`} className="research-package-cta">Discuss this package <span aria-hidden="true">→</span></Link>
              </article>)}
            </div>
            <p className="research-package-footnote">Final scope and delivery date are confirmed after reviewing your materials and requirements. Additional revisions or work beyond the agreed scope may require a separate quote.</p>
          </section>
        </div>

        <aside className="research-gig-order-card">
          <p className="research-gig-order-label">Delivered by</p><strong className="research-gig-order-team">✦ Willibabs Team</strong>
          <p>Research and writing professionals working together to support your project.</p>
          <div><span>Packages from</span><strong>$50</strong></div>
          <Link href="/contact?project=Research%20article%20and%20journal%20submission%20support" className="research-package-cta">Contact the team <span aria-hidden="true">→</span></Link>
          <small>Tell us your topic, current draft or source materials, preferred journal, and deadline.</small>
        </aside>
      </div>
    </main>
  );
}
