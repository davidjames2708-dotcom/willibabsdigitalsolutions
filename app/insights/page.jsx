import Link from "next/link";
import "./insights.css";

export const metadata = {
  title: "Insights | Willibabs Digital Solutions",
  description:
    "Practical ideas on websites, digital products, automation, and professional writing from Willibabs Digital Solutions.",
};

const topics = [
  {
    category: "Websites",
    title: "What makes a business website feel trustworthy?",
    description:
      "Clear services, useful proof, consistent details, and an easy way to get in touch help visitors feel confident taking the next step.",
  },
  {
    category: "Digital products",
    title: "Start with the customer task, then shape the feature",
    description:
      "A focused product experience begins by understanding what customers need to accomplish and removing friction from that journey.",
  },
  {
    category: "Automation",
    title: "Choose business tasks that are ready to automate",
    description:
      "Repetitive, rule-based tasks with clear inputs are often good candidates for automation, especially when teams can review the results.",
  },
];

export default function InsightsPage() {
  return (
    <main className="section insights-page">
      <header className="insights-intro">
        <p className="eyebrow">Blog / Insights</p>
        <h1>Practical ideas for better digital work.</h1>
        <p>
          Notes on building clear websites, useful digital products, and more
          effective workflows for growing organizations.
        </p>
      </header>
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
        <h2>Have a question about your next project?</h2>
        <p>Tell us what you are working on and we can help you find a practical next step.</p>
        <Link className="button primary" href="/contact">Talk with us</Link>
      </section>
    </main>
  );
}
