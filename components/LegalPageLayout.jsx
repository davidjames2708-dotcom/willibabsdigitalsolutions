export default function LegalPageLayout({ title, intro, sections }) {
  const sectionId = (heading) =>
    heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <main className="legal-page">
      <section className="page-hero legal-page-hero">
        <p className="eyebrow">Legal Center</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
        <div className="legal-meta" aria-label="Policy information">
          <span>Updated November 14, 2026</span>
          <span>Willibabs Digital Solutions · Nigeria</span>
        </div>
      </section>

      <div className="legal-layout">
        <aside className="legal-sidebar">
          <nav className="legal-toc" aria-label="On this page">
            <h2>On this page</h2>
            {sections.map((section) => (
              <a href={`#${sectionId(section.title)}`} key={section.title}>
                {section.title}
              </a>
            ))}
          </nav>
          <div className="legal-help-card">
            <span>Need help?</span>
            <p>Contact us if you have a question about this document.</p>
            <a href="mailto:info@willibabsdigitalsolutions.com">
              info@willibabsdigitalsolutions.com
            </a>
          </div>
        </aside>

        <article className="legal-content">
          {sections.map((section, index) => (
            <section
              className="legal-section"
              id={sectionId(section.title)}
              key={section.title}
            >
              <div className="legal-section-heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
              </div>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
