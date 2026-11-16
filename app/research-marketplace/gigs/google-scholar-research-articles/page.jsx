import Link from "next/link";
import PackageSelector from "../article-submission-support/package-selector";
import "../../research-marketplace.css";

export const metadata = {
  title: "Google Scholar Research Article Publication | Willibabs Digital Solutions",
  description: "Research article writing, editing, journal selection, and publication support.",
};

export default function GoogleScholarResearchArticlesGig() {
  return <main className="research-marketplace research-gig-detail">
    <nav className="research-gig-breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/research-marketplace">Research Marketplace</Link><span>›</span><span>Research &amp; Academic Services</span></nav>
    <div className="research-gig-detail-layout">
      <div className="research-gig-detail-main">
        <div className="research-gig-detail-cover"><img src="/research-gig-image-3.png" alt="Google Scholar research article publication service artwork" /></div>
        <div className="research-gig-detail-title"><h1>I will write and publish research articles in Google Scholar Indexed Journals</h1></div>
        <section className="research-gig-content-section">
          <h2>About This Gig</h2>
          <p><strong>Get Professional Research Article Writing &amp; Journal Publication Support!</strong></p>
          <p>Are you looking for an experienced academic research writer to help you write, edit, and submit a high-quality research article to a Google Scholar-indexed journal?</p>
          <p>I provide professional <strong>article writing, research paper editing, journal selection, and publication support</strong> to help researchers, scholars, and professionals prepare manuscripts for reputable academic journals.</p>
          <h3>MY SERVICES INCLUDE:</h3>
          <ul className="research-gig-bullet-list"><li>Original research article writing and editing</li><li>Google Scholar journal research and selection</li><li>Scopus and Web of Science journal guidance</li><li>Research paper formatting and proofreading</li><li>Journal submission and publication support</li><li>Literature reviews and systematic reviews</li><li>APA, IEEE, Harvard, and other referencing styles</li><li>Manuscript revision and reviewer response support</li></ul>
          <h3>WHY CHOOSE MY SERVICE?</h3>
          <ul className="research-gig-bullet-list"><li>Original, well-researched academic content</li><li>Professional formatting and referencing</li><li>Clear communication and timely delivery</li><li>Support throughout the submission process</li><li>Ethical publishing guidance</li></ul>
          <p><strong>Ready to publish your research?</strong></p>
          <p><Link href="/contact?project=Google%20Scholar%20research%20article%20support"><strong>CONTACT ME NOW</strong></Link> to discuss your research topic, target journal, and publication goals!</p>
        </section>
      </div>
      <PackageSelector />
    </div>
  </main>;
}
