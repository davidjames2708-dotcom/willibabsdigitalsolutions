export default function LegalPageLayout({ title, intro, sections }) {
  return (
    <main className="legal-page">
      <section className="page-hero legal-page-hero">
        <p className="eyebrow">Willibabs Digital Solutions</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </section>

      <article className="legal-content">
        <p className="legal-updated">Last updated: November 14, 2026</p>
        {sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.content}
          </section>
        ))}
      </article>
    </main>
  );
}
