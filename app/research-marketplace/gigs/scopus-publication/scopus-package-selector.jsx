"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  { name: "Basic", price: "$200", title: "Write 1 article for Scopus", description: "I will write 1 article for Scopus or Web of Science, excluding publication.", words: "5,000", delivery: "10 days" },
  { name: "Standard", price: "$250", title: "Publish 1 article for Q4", description: "I will format an already written article, support submission, and support publication for Q4.", words: "5,000", delivery: "14 days" },
  { name: "Premium", price: "$300", title: "Publish 1 article for Q3", description: "I will format an already written article, support submission, and support publication for Q3.", words: "5,000", delivery: "21 days" },
];

export default function ScopusPackageSelector() {
  const [active, setActive] = useState(0);
  const plan = plans[active];

  return <aside className="research-package-selector">
    <div className="research-package-tabs" role="tablist" aria-label="Choose a Scopus package">
      {plans.map((item, index) => <button key={item.name} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{item.name}</button>)}
    </div>
    <div className="research-package-selected">
      <div className="research-package-price"><strong>{plan.price}</strong><span>{plan.delivery} delivery</span></div>
      <h3>{plan.title}</h3>
      <p>{plan.description}</p>
      <ul>
        <li>Words included: <b>{plan.words}</b></li>
        <li>Delivery time: <b>{plan.delivery}</b></li>
      </ul>
      <Link className="research-package-order" href={`/contact?project=${encodeURIComponent(`${plan.name} Scopus publication package`)}`}>Continue to order ({plan.price})</Link>
      <Link className="research-package-contact" href="/contact?project=Scopus%20publication%20support">Contact to order</Link>
    </div>
  </aside>;
}
