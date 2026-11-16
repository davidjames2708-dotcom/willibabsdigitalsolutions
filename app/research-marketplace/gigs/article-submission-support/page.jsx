import Link from "next/link";
import "../../research-marketplace.css";

export const metadata = {
  title: "I Will Write and Publish Article in Google Scholar Indexed Journal | Willibabs Digital Solutions",
  description: "Collaborative research article development, editing, journal research, formatting, and submission preparation from the Willibabs Team.",
};

const packages = [
  { name: "Basic", manuscripts: "1", words: "5,000", journals: "1", delivery: "5 days" },
  { name: "Standard", manuscripts: "3", words: "5,000", journals: "2", delivery: "7 days" },
  { name: "Premium", manuscripts: "5", words: "5,000", journals: "3", delivery: "10 days" },
];
const faqs = [
  ["Can you write and publish my research article in a Google Scholar-indexed journal?", "I can support article development, editing, journal selection, and submission preparation. Journals make their own acceptance and publication decisions, so publication cannot be guaranteed."],
  ["Do you support Scopus, Web of Science, and Google Scholar journals?", "Yes. I can help research journal options and review their stated scope and author guidelines. Please confirm current indexing directly with the journal and database."],
  ["Can you help with journal submission and publication?", "Yes. Support can include formatting the manuscript to author guidelines and preparing submission materials."],
  ["Do you provide original, plagiarism-free research article writing?", "I help develop original work from your research, data, and input, and can review wording for originality. You remain responsible for the accuracy, authorship, and final submission."],
  ["What do you need to get started?", "Send your topic, research materials or draft, preferred journal if known, formatting requirements, and target timeline."],
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
            <div className="research-compare-scroll"><table className="research-compare-table"><thead><tr><th>Feature</th>{packages.map(pkg=><th key={pkg.name}>{pkg.name}</th>)}</tr></thead><tbody>
              <tr><th>Number of manuscripts</th>{packages.map(pkg=><td key={pkg.name}>{pkg.manuscripts}</td>)}</tr>
              <tr><th>Word count (per manuscript)</th>{packages.map(pkg=><td key={pkg.name}>{pkg.words}</td>)}</tr>
              <tr><th>Journal selection assistance</th>{packages.map(pkg=><td key={pkg.name}>{pkg.journals}</td>)}</tr>
              <tr><th>Formatting (journal style)</th>{packages.map(pkg=><td key={pkg.name}><strong>APA, MLA, IEEE, Harvard, Chicago, Vancouver, Springer, Elsevier, and specific journal author guidelines.</strong></td>)}</tr>
              <tr><th>Submission support</th>{packages.map(pkg=><td key={pkg.name}>Yes</td>)}</tr>
              <tr><th>Delivery time</th>{packages.map(pkg=><td key={pkg.name}>{pkg.delivery}</td>)}</tr>
            </tbody></table></div>
          </section>
          <section className="research-gig-content-section research-faq" aria-labelledby="research-faq-title">
            <h2 id="research-faq-title">Frequently Asked Questions</h2>
            {faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
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
