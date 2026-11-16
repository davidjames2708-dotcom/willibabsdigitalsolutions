import Link from "next/link";
import "../../research-marketplace.css";
import ScopusPackageSelector from "./scopus-package-selector";

export const metadata = {
  title: "Scopus & Web of Science Article Publication | Willibabs Digital Solutions",
  description: "Academic writing, article submission, and journal publication support.",
};

const plans = [
  { name: "Basic", price: "$200", title: "Write 1 article for Scopus", description: "I will write 1 article for Scopus or Web of Science, excluding publication.", words: "5,000", delivery: "10 days" },
  { name: "Standard", price: "$250", title: "Publish 1 article for Q4", description: "I will format an already written article, support submission, and support publication for Q4.", words: "5,000", delivery: "14 days" },
  { name: "Premium", price: "$300", title: "Publish 1 article for Q3", description: "I will format an already written article, support submission, and support publication for Q3.", words: "5,000", delivery: "21 days" },
];

const faqs = [
  ["Do you support Scopus and Web of Science journal submissions?", "Yes. The service covers manuscript preparation, journal-fit guidance, formatting, and submission support for relevant Scopus or Web of Science journal options."],
  ["What is the difference between the Q4 and Q3 packages?", "The Standard package is structured for Q4 publication support, while the Premium package is structured for Q3 publication support. The final journal choice should match your manuscript scope and the journal’s current requirements."],
  ["Can you write an article from my research topic?", "Yes. The Basic package is for writing one article based on the research materials, brief, data, and source information you provide."],
  ["What do you need before work starts?", "Please share your topic, field of study, manuscript or source materials, target journal if known, references, and preferred timeline."],
  ["Can you format my existing manuscript for submission?", "Yes. The Standard and Premium packages include support for formatting an already written article and preparing it for the relevant submission requirements."],
  ["How is delivery handled?", "Basic delivery is 10 days, Standard delivery is 14 days, and Premium delivery is 21 days. The final schedule is confirmed after reviewing your materials."],
];

export default function ScopusPublicationGig() {
  return <main className="research-marketplace research-gig-detail">
    <nav className="research-gig-breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/research-marketplace">Research Marketplace</Link><span>›</span><span>Scopus &amp; Web of Science</span></nav>
    <div className="research-gig-detail-layout">
      <div className="research-gig-detail-main">
        <div className="research-gig-detail-cover"><img src="/research-gig-image-2.png" alt="Scopus and Web of Science research publication gig artwork" /></div>
        <div className="research-gig-detail-title"><h1>I will write and publish your article in Scopus or Web of Science journals</h1></div>
        <section className="research-gig-content-section"><h2>About This Gig</h2><p>Dear Client,</p><p>Are you looking to publish your research in top-tier, <strong>Google Scholar-indexed journals, Scopus, WoS, PubMed, SCI,</strong> and other prestigious databases? I specialize in <strong>academic writing, article submission, and publication</strong> with extensive experience in research writing.</p><p>I have direct connections with <strong>100+ high-impact factor journals (7.0+ IF)</strong>, including and many more. My expertise spans multiple fields, including:</p><ul><li>AI, Machine Learning, and Generative AI</li><li>Cloud Computing &amp; Data Processing</li><li>Business, Management, and Human Resources</li><li>Medical &amp; Cybersecurity Research</li></ul><h3>What I Offer:</h3><ul><li>High-quality peer-reviewed article writing</li><li>Submission to indexed journals with strong acceptance rates</li><li>Citation &amp; H-index optimization from reputable sources</li><li>Research aligned with EB1 Green Card eligibility</li><li>Journal formatting and submission guidelines</li></ul><p><strong>Increase your citations, boost your research profile, and get recognized in top publications. Let’s elevate your academic career today!</strong></p></section>
        <section className="research-gig-content-section">
          <h2>Compare packages</h2>
          <div className="research-compare-scroll"><table className="research-compare-table"><thead><tr><th>Feature</th>{plans.map((plan) => <th key={plan.name}>{plan.name}<br /><strong>{plan.price}</strong></th>)}</tr></thead><tbody>
            <tr><th>Package</th>{plans.map((plan) => <td key={plan.name}><strong>{plan.title}</strong><br />{plan.description}</td>)}</tr>
            <tr><th>Words included</th>{plans.map((plan) => <td key={plan.name}>{plan.words}</td>)}</tr>
            <tr><th>Delivery time</th>{plans.map((plan) => <td key={plan.name}>{plan.delivery}</td>)}</tr>
          </tbody></table></div>
        </section>
        <section className="research-gig-content-section research-faq" aria-labelledby="scopus-faq-title">
          <div className="research-faq-heading"><h2 id="scopus-faq-title">Frequently Asked Questions</h2><a href="#scopus-faq-title">See All</a></div>
          <div className="research-faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>
      </div>
      <ScopusPackageSelector />
    </div>
  </main>;
}
