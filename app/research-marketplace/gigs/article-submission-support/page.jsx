import Link from "next/link";
import "../../research-marketplace.css";

export const metadata = {
  title: "I Will Write and Publish Article in Google Scholar Indexed Journal | Willibabs Digital Solutions",
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
          <div className="research-gig-detail-cover"><img src="/research-gig-image.png" alt="Research article and Google Scholar publication support gig artwork" /></div>
          <div className="research-gig-detail-title">
            <p className="research-gig-meta"><span>Research &amp; Academic Services</span><span className="research-gig-team">✦ Willibabs Team</span></p>
            <h1>I will write and publish article in Google Scholar indexed journal</h1>
          </div>

          <section className="research-gig-content-section">
            <h2>About This Gig</h2>
            <p><strong>Get Professional Research Article Writing &amp; Journal Publication Support!</strong></p>
            <p>Are you looking for an experienced academic researcher to help you write, edit, and submit a high-quality research article to a Google Scholar-indexed journal?</p>
            <p>I provide professional <strong>article writing, research paper editing, journal selection, and publication support</strong> to help researchers, scholars, and professionals prepare manuscripts for reputable academic journals.</p>
            <h3>MY SERVICES INCLUDE:</h3>
            <ul className="research-gig-bullet-list">
              <li>Original research article writing and editing</li>
              <li>Google Scholar journal research and selection</li>
              <li>Scopus and Web of Science journal guidance</li>
              <li>Research paper formatting and proofreading</li>
              <li>Journal submission and publication support</li>
              <li>Literature reviews and systematic reviews</li>
              <li>APA, IEEE, Harvard, and other referencing styles</li>
              <li>Manuscript revision and reviewer response support</li>
            </ul>
            <h3>WHY CHOOSE MY SERVICE?</h3>
            <ul className="research-gig-bullet-list">
              <li>Original, well-researched academic content</li>
              <li>Professional formatting and referencing</li>
              <li>Clear communication and timely delivery</li>
              <li>Support throughout the submission process</li>
              <li>Ethical publishing guidance</li>
            </ul>
            <p><strong>Ready to publish your research?</strong></p>
            <p><Link href="/contact?project=Research%20article%20and%20journal%20submission%20support"><strong>CONTACT ME NOW</strong></Link> to discuss your research topic, target journal, and publication goals!</p>
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
