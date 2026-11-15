import Link from "next/link";
import "./insights.css";

export const metadata = {
  title: "Insights | Willibabs Digital Solutions",
  description:
    "Practical ideas on websites, digital products, automation, and professional writing from Willibabs Digital Solutions.",
};

const topics = [
  {
    category: "Websites & e-commerce",
    title: "Build a website that turns visits into enquiries",
    description:
      "Get practical tips on clear service pages, mobile-friendly design, online stores, and the details that help customers trust your business.",
  },
  {
    category: "Software & fintech",
    title: "Make digital products easier for customers to use",
    description:
      "Explore ideas for useful apps, payment platforms, customer portals, and smoother digital journeys, explained in straightforward language.",
  },
  {
    category: "AI & automation",
    title: "Find the repetitive work your business can simplify",
    description:
      "Follow practical examples of automating enquiries, follow-ups, document handling, and everyday admin while keeping people in control.",
  },
  {
    category: "Research & writing",
    title: "Make professional documents clearer and stronger",
    description:
      "Get helpful guidance on editing, formatting, research presentation, and writing that makes complex ideas easier to understand.",
  },
];

export default function InsightsPage() {
  return (
    <main className="section insights-page">
      <header className="insights-intro">
        <p className="eyebrow">The Willibabs Digital journal</p>
        <h1>Ideas and guidance to help your business move forward.</h1>
        <p>
          We share practical tips, service explainers, project lessons, and
          digital updates across websites, software, fintech, automation, and
          professional writing.
        </p>
      </header>
      <div className="insights-section-heading">
        <p className="eyebrow">Explore by service</p>
        <h2>Useful knowledge, without the jargon.</h2>
        <p>New ideas are shared regularly on our social channels. Follow along for fresh tips and updates.</p>
      </div>
      <div className="insights-grid">
        {topics.map((topic) => (
          <article className="insight-card" key={topic.title}>
            <span>{topic.category}</span>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </article>
        ))}
      </div>
      <section className="insights-cta">
        <p className="eyebrow">Put an idea into action</p>
        <h2>Have a project in mind? Let’s talk about what you need.</h2>
        <p>Tell us your goal and we’ll help you find a practical next step for your business or organization.</p>
        <Link className="button primary" href="/contact">Discuss your project</Link>
      </section>
    </main>
  );
}
