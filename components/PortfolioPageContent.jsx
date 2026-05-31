"use client";

import { useState } from "react";
import Link from "next/link";
import PortfolioImage from "./PortfolioImage";

const tabs = [
  ["all", "All"],
  ["fintech", "Fintech"],
  ["website", "Websites"],
  ["system", "Systems"],
  ["automation", "Automation"],
  ["article", "Writing"],
];

function isHidden(activeCategory, itemCategory) {
  return activeCategory !== "all" && activeCategory !== itemCategory;
}

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <section className="section showcase-section portfolio-page-section">
        <div className="portfolio-heading-row">
          <div className="section-heading">
            <p className="eyebrow">Our Work</p>
            <h2>Live websites, business platforms, and digital solutions built for real brands.</h2>
            <p>
              Explore launched client work first, followed by sample builds that show the kind of website, system, automation, and writing support we can deliver.
            </p>
          </div>
          <Link className="button primary" href="/contact">Start a Similar Project</Link>
        </div>

        <div className="portfolio-tabs" aria-label="Portfolio categories">
          {tabs.map(([category, label]) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                className={isActive ? "is-active" : undefined}
                type="button"
                aria-pressed={isActive}
                data-portfolio-tab={category}
                onClick={() => {
                  setActiveCategory(category);
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="portfolio-feature-grid">
          <article className={`portfolio-feature-card${isHidden(activeCategory, "fintech") ? " is-hidden" : ""}`} data-portfolio-item data-category="fintech">
            <div className="portfolio-image-frame bundlegram-project" aria-hidden="true">
              <PortfolioImage src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=90" />
              <span>Live Project</span>
            </div>
            <div>
              <p className="portfolio-kicker">Fintech Platform</p>
              <h3>Bundlegram bill payment and digital service platform.</h3>
              <p>A live VTU and payments website for airtime, data, electricity, TV subscriptions, exam pins, wallet activity, and customer account flows.</p>
              <a className="portfolio-project-link" href="https://bundlegram.com/" target="_blank" rel="noreferrer">Visit live site</a>
            </div>
          </article>

          <article className={`portfolio-feature-card${isHidden(activeCategory, "fintech") ? " is-hidden" : ""}`} data-portfolio-item data-category="fintech">
            <div className="portfolio-image-frame willibabs-topup-project" aria-hidden="true">
              <PortfolioImage src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90" />
              <span>Live Project</span>
            </div>
            <div>
              <p className="portfolio-kicker">Virtual Top-Up Platform</p>
              <h3>Willibabs Topup VTU website for airtime, data, and bill payments.</h3>
              <p>A live virtual top-up platform built for mobile data, airtime recharge, utility payments, TV subscriptions, and smooth customer self-service transactions.</p>
              <a className="portfolio-project-link" href="https://www.willibabstopup.com.ng/" target="_blank" rel="noreferrer">Visit live site</a>
            </div>
          </article>

          <article className={`portfolio-feature-card${isHidden(activeCategory, "website") ? " is-hidden" : ""}`} data-portfolio-item data-category="website">
            <div className="portfolio-image-frame asiusdeloy-project" aria-hidden="true">
              <PortfolioImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90" />
              <span>Live Project</span>
            </div>
            <div>
              <p className="portfolio-kicker">Company Website</p>
              <h3>Asiusdeloy Ltd corporate website for multi-service business visibility.</h3>
              <p>A professional company website that presents services clearly, builds trust with visitors, and gives clients a direct path to understand and contact the business.</p>
              <a className="portfolio-project-link" href="https://www.asiusdeloyltd.co.uk/" target="_blank" rel="noreferrer">Visit live site</a>
            </div>
          </article>

          <article className={`portfolio-feature-card${isHidden(activeCategory, "website") ? " is-hidden" : ""}`} data-portfolio-item data-category="website">
            <div className="portfolio-image-frame willthrive-project" aria-hidden="true">
              <PortfolioImage src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=90" />
              <span>Live Project</span>
            </div>
            <div>
              <p className="portfolio-kicker">E-commerce Website</p>
              <h3>Will Thrive Store online shopping experience for a growing fashion brand.</h3>
              <p>A live commerce website shaped around product discovery, brand presentation, mobile shopping, and a clean path from browsing to purchase interest.</p>
              <a className="portfolio-project-link" href="https://www.willthrivestore.com/" target="_blank" rel="noreferrer">Visit live site</a>
            </div>
          </article>

          <article className={`portfolio-feature-card${isHidden(activeCategory, "website") ? " is-hidden" : ""}`} data-portfolio-item data-category="website">
            <div className="portfolio-image-frame logistics-photo" aria-hidden="true">
              <PortfolioImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90" />
              <span>Website Project</span>
            </div>
            <div>
              <p className="portfolio-kicker">Demo Build: Service Website</p>
              <h3>Logistics booking website with clear service pages and request flow.</h3>
              <p>A professional homepage, service cards, quote request section, contact prompts, and mobile layout for a delivery or transport business.</p>
            </div>
          </article>

          <article className={`portfolio-feature-card${isHidden(activeCategory, "system") ? " is-hidden" : ""}`} data-portfolio-item data-category="system">
            <div className="portfolio-image-frame school-photo" aria-hidden="true">
              <PortfolioImage src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90" />
              <span>System Build</span>
            </div>
            <div>
              <p className="portfolio-kicker">Demo Build: Business System</p>
              <h3>School management dashboard for records, fees, and activity tracking.</h3>
              <p>Admin overview, student records, fee summaries, status cards, and simple reporting screens designed for daily school operations.</p>
            </div>
          </article>
        </div>

        <div className="showcase-grid portfolio-card-grid">
          <article className={`showcase-card portfolio-card${isHidden(activeCategory, "website") ? " is-hidden" : ""}`} data-portfolio-item data-category="website">
            <div className="portfolio-card-visual restaurant-site">
              <PortfolioImage src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=90" />
              <span>Demo Build</span>
            </div>
            <span>Web Design</span>
            <h3>Restaurant Ordering Website</h3>
            <p>Menu sections, featured meals, order prompt, reservation area, WhatsApp contact, and mobile-first layout.</p>
            <Link href="/contact">Learn more</Link>
          </article>

          <article className={`showcase-card portfolio-card${isHidden(activeCategory, "website") ? " is-hidden" : ""}`} data-portfolio-item data-category="website">
            <div className="portfolio-card-visual real-estate-site">
              <PortfolioImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90" />
              <span>Concept</span>
            </div>
            <span>Listing Platform</span>
            <h3>Real Estate Property Website</h3>
            <p>Property cards, search filters, agent contact paths, listing details, and lead capture for buyer inquiries.</p>
            <Link href="/contact">Learn more</Link>
          </article>

          <article className={`showcase-card portfolio-card${isHidden(activeCategory, "automation") ? " is-hidden" : ""}`} data-portfolio-item data-category="automation">
            <div className="portfolio-card-visual ai-workflow">
              <PortfolioImage src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90" />
              <span>Workflow</span>
            </div>
            <span>AI System</span>
            <h3>AI Customer Support Workflow</h3>
            <p>Lead intake form, smart reply flow, customer categorization, follow-up reminders, and support dashboard.</p>
            <Link href="/contact">Learn more</Link>
          </article>

          <article className={`showcase-card portfolio-card${isHidden(activeCategory, "article") ? " is-hidden" : ""}`} data-portfolio-item data-category="article">
            <div className="portfolio-card-visual research-portal">
              <PortfolioImage src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=90" />
              <span>Articles</span>
            </div>
            <span>Research & Article Writing</span>
            <h3>Research Article Page</h3>
            <p>Technical debt, test automation, AI compliance, ethical insurance CRM, and biologics method development articles.</p>
            <Link href="/writing-samples">Open page</Link>
          </article>

          <article className={`showcase-card portfolio-card${isHidden(activeCategory, "website") ? " is-hidden" : ""}`} data-portfolio-item data-category="website">
            <div className="portfolio-card-visual ecommerce-shop">
              <PortfolioImage src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=90" />
              <span>Commerce</span>
            </div>
            <span>Online Store</span>
            <h3>Will Thrive Store small business e-commerce shop.</h3>
            <p>A live online store with product presentation, brand-focused shopping pages, mobile-friendly browsing, and a direct path for purchase interest.</p>
            <a href="https://www.willthrivestore.com/" target="_blank" rel="noreferrer">Visit live site</a>
          </article>

          <article className={`showcase-card portfolio-card${isHidden(activeCategory, "system") ? " is-hidden" : ""}`} data-portfolio-item data-category="system">
            <div className="portfolio-card-visual booking-system">
              <PortfolioImage src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=90" />
              <span>Booking</span>
            </div>
            <span>Web App</span>
            <h3>Appointment Booking System</h3>
            <p>Calendar-style booking flow, service selection, client details, confirmation screen, and admin schedule view.</p>
            <Link href="/contact">Learn more</Link>
          </article>
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow">Have a similar idea?</p>
          <h2>Send your project details and we will help shape the right build.</h2>
          <p>Share what you want to create, the pages or features you need, and any examples you want us to follow.</p>
        </div>
        <Link className="button primary" href="/contact">Contact Us</Link>
      </section>
    </>
  );
}
