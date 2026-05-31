import Link from "next/link";

export const metadata = {
  title: "Writing Samples | Willibabs Digital Solutions",
};

export default function WritingSamplesPage() {
  return (
    <main>
    <section className="page-hero writing-hero">
      <p className="eyebrow">Article Portfolio</p>
      <h1>Research and technical articles available for review.</h1>
      <p className="lead">
        Explore selected articles written across software quality, AI governance, business applications, insurance CRM, and biologics research.
      </p>
    </section>

    <section className="section writing-sample-section">
      <div className="article-intro-card">
        <div>
          <span className="article-count">5 Articles</span>
          <h2>Downloadable article documents for portfolio visitors.</h2>
        </div>
        <p>
          Each item links directly to the original Word document so readers can open, download, and review the full article.
        </p>
      </div>

      <div className="article-grid">
        <article className="article-card featured-writing-sample">
          <span>2025 Article</span>
          <h2>Ethical AI in Insurance CRM</h2>
          <p>
            A focused article on responsible AI adoption in insurance customer relationship management, including fairness, transparency, trust, and compliance concerns.
          </p>
          <a className="article-link" href="/assets/articles/ethical-ai-insurance-crm-2025.docx" download>Download article</a>
        </article>

        <article className="article-card">
          <span>2023 Article</span>
          <h2>Ensuring Data Security and Compliance in AI Powered Business Applications</h2>
          <p>
            Covers security, privacy, regulatory, and governance considerations for organizations using AI-powered business software.
          </p>
          <a className="article-link" href="/assets/articles/data-security-compliance-ai-business-applications-2023.docx" download>Download article</a>
        </article>

        <article className="article-card">
          <span>2023 Article</span>
          <h2>Analytical Method Development for Biologics: Overcoming Stability, Purity, and Quantification</h2>
          <p>
            Reviews analytical method development challenges in biologics, with attention to stability, purity assessment, and quantification methods.
          </p>
          <a className="article-link" href="/assets/articles/analytical-method-development-biologics-2023.docx" download>Download article</a>
        </article>

        <article className="article-card">
          <span>2022 Article</span>
          <h2>Technical Debt in Software Quality Engineering</h2>
          <p>
            Discusses how technical debt affects software quality engineering, maintainability, testing effort, and long-term delivery reliability.
          </p>
          <a className="article-link" href="/assets/articles/technical-debt-software-quality-engineering-2022.docx" download>Download article</a>
        </article>

        <article className="article-card">
          <span>February 2021 Article</span>
          <h2>Benchmarking Software Test Automation Frameworks</h2>
          <p>
            Compares software test automation frameworks and highlights evaluation factors for selecting effective testing tools.
          </p>
          <a className="article-link" href="/assets/articles/benchmarking-software-test-automation-frameworks-2021.docx" download>Download article</a>
        </article>
      </div>
    </section>

    <section className="section cta-band">
      <div>
        <p className="eyebrow">Have a document to prepare?</p>
        <h2>Send your article, research work, or resume brief.</h2>
        <p>Share the document type, deadline, academic style if needed, and the kind of support you want.</p>
      </div>
      <Link className="button primary" href="/contact">Contact Us</Link>
    </section>
  </main>
  );
}
