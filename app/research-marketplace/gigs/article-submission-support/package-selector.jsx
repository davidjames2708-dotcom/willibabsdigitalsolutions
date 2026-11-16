"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  { name: "Basic", price: "$50", count: "1", journals: "1", days: "5 days" },
  { name: "Standard", price: "$150", count: "3", journals: "2", days: "7 days" },
  { name: "Premium", price: "$250", count: "5", journals: "3", days: "10 days" },
];

export default function PackageSelector() {
  const [active, setActive] = useState(0);
  const plan = plans[active];
  return <aside className="research-package-selector">
    <div className="research-package-tabs" role="tablist" aria-label="Choose a package">
      {plans.map((item,index)=><button key={item.name} role="tab" aria-selected={active===index} onClick={()=>setActive(index)}>{item.name}</button>)}
    </div>
    <div className="research-package-selected">
      <div className="research-package-price"><strong>{plan.price}</strong><span>{plan.days} delivery</span></div>
      <h3>Write and publish 1 article</h3>
      <p>I will write and publish 1 article in Google Scholar Indexed Journal</p>
      <ul>
        <li>Number of manuscripts: <b>{plan.count}</b></li>
        <li>Word count (per manuscript): <b>5,000</b></li>
        <li>Journal selection assistance: <b>{plan.journals}</b></li>
        <li>Formatting (journal style): <b>APA, MLA, IEEE, Harvard, Chicago, Vancouver, Springer, Elsevier, and journal-specific guidelines</b></li>
        <li>Submission support: <b>Yes</b></li>
      </ul>
      <Link className="research-package-order" href={`/contact?project=${encodeURIComponent(`Research article support - ${plan.name} package`)}`}>Continue to Order ({plan.price})</Link>
      <Link className="research-package-contact" href="/contact?project=Research%20article%20and%20journal%20submission%20support">Contact Seller</Link>
    </div>
  </aside>;
}
