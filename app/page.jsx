import Link from "next/link";

export const metadata = {
  title: "Willibabs Digital Solutions | Professional Digital Services",
};

export default function HomePage() {
  return (
    <div className="home-page">
      <main>
          <section className="hero image-hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <p className="hero-kicker">DIGITAL INNOVATION &middot; SOFTWARE &middot; RESEARCH</p>
              <h1>Let us build your digital solution professionally.</h1>
              <p className="lead">
                We help businesses, startups, researchers, and organizations launch client-ready websites, scalable apps, automation systems, and trusted digital workflows.
              </p>
      
              <div className="hero-actions">
                <Link className="button primary light" href="#contact" data-quote-link>Start a Project</Link>
                <Link className="button accent" href="/services">Explore Services</Link>
              </div>
            </div>
      
            <div className="hero-service-dock" aria-label="Interactive service preview">
              <button className="solution-card is-selected" type="button" data-solution="website">
                <span>01</span>
                <strong>Web Design & Development</strong>
              </button>
              <button className="solution-card" type="button" data-solution="software">
                <span>02</span>
                <strong>Software & App Development</strong>
              </button>
              <button className="solution-card" type="button" data-solution="fintech">
                <span>03</span>
                <strong>Fintech Solutions</strong>
              </button>
              <button className="solution-card" type="button" data-solution="automation">
                <span>04</span>
                <strong>AI Automation</strong>
              </button>
              <button className="solution-card" type="button" data-solution="research">
                <span>05</span>
                <strong>Research & Academic Writing</strong>
              </button>
            </div>
          </section>
      
          <section className="hero-live-panel" aria-live="polite">
            <div>
              <span data-solution-label>Website project</span>
              <h2 data-solution-title>Conversion-focused business website</h2>
              <p data-solution-copy>Professional pages, strong service presentation, responsive design, and contact flow built to win client confidence.</p>
            </div>
            <div className="panel-stat-grid">
              <div>
                <span>Estimated timeline</span>
                <strong data-solution-time>7&ndash;14 days</strong>
              </div>
              <div>
                <span>Best suited for</span>
                <strong data-solution-fit>Growing businesses</strong>
              </div>
            </div>
            <div className="progress-card">
              <span>What you get</span>
              <p data-solution-deliverables>Responsive pages &middot; Clear calls to action &middot; Contact flow</p>
            </div>
          </section>
      
          <section className="who-section" id="about">
            <div className="who-image">
              <img src="/assets/who-we-are.jpg" alt="Developer working on a software project" />
            </div>
            <div className="who-copy">
              <p className="who-label">Who We Help</p>
              <h2>Digital solutions for businesses, startups, and researchers.</h2>
              <p>
                From websites and custom software to AI automation and research support, we help teams present their work clearly and improve how they operate.
              </p>
              <p>Remote delivery for clients in the US, UK, Canada, Europe, and Africa.</p>
              <Link className="button primary" href="/about">Learn More</Link>
            </div>
          </section>
      
          <section className="section service-section" id="services">
            <div className="offer-heading-row">
              <div>
                <p className="pill-label">What We Offer</p>
                <h2>Delivering smart digital solutions for modern clients.</h2>
                <p>
                  We provide professional services that help businesses launch online, manage operations, build payment solutions, and prepare strong academic work.
                </p>
              </div>
              <Link className="button primary" href="#contact">Get Started</Link>
            </div>
      
            <div className="services-showcase no-image">
              <div className="service-grid offer-card-grid">
                <article className="service-card dark">
                  <span>01</span>
                  <h3>Web Design & Development</h3>
                  <p>Frontend and backend development for business websites, online stores, portfolios, landing pages, and responsive redesigns.</p>
                </article>
      
                <article className="service-card light">
                  <span>02</span>
                  <h3>Software Development</h3>
                  <p>Dashboards, admin panels, business systems, customer portals, automation tools, and internal workflow apps.</p>
                </article>
      
                <article className="service-card dark">
                  <span>03</span>
                  <h3>Fintech App Development</h3>
                  <p>Wallet interfaces, bill payment apps, VTU systems, transaction dashboards, payment flows, and secure financial product screens.</p>
                </article>
      
                <article className="service-card light">
                  <span>04</span>
                  <h3>AI Automation Services</h3>
                  <p>AI chatbots, lead capture, customer support automation, document processing, smart replies, and productivity systems.</p>
                </article>
      
                <article className="service-card dark">
                  <span>05</span>
                  <h3>Research and Academic Writing</h3>
                  <p>Academic writing support, proofreading, editing, citation formatting, literature review support, journal formatting, and publication preparation.</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="section showcase-section" id="portfolio">
            <div className="portfolio-heading-row">
              <div className="section-heading">
                <p className="eyebrow">Featured Portfolio</p>
                <h2>A quick look at live projects and practical builds from Willibabs Digital.</h2>
                <p>
                  Browse live client projects, clearly marked demos and concepts, and research writing samples.
                </p>
              </div>
              <Link className="button primary" href="/portfolio">See Full Portfolio</Link>
            </div>
      
            <div className="portfolio-tabs" aria-label="Portfolio categories">
              <button className="is-active" type="button" aria-pressed="true" data-portfolio-tab="all">All</button>
              <button type="button" aria-pressed="false" data-portfolio-tab="fintech">Fintech</button>
              <button type="button" aria-pressed="false" data-portfolio-tab="website">Websites</button>
              <button type="button" aria-pressed="false" data-portfolio-tab="system">Systems</button>
              <button type="button" aria-pressed="false" data-portfolio-tab="automation">Automation</button>
              <button type="button" aria-pressed="false" data-portfolio-tab="article">Writing</button>
            </div>
      
            <div className="portfolio-feature-grid">
              <article className="portfolio-feature-card" data-portfolio-item data-category="fintech">
                <div className="portfolio-image-frame bundlegram-project" aria-hidden="true">
                  <span>Live Project</span>
                </div>
                <div>
                  <p className="portfolio-kicker">Fintech Platform</p>
                  <h3>Bundlegram bill payment and digital service platform.</h3>
                  <p>A live VTU and payments website for airtime, data, electricity, TV subscriptions, exam pins, wallet activity, and customer account flows.</p>
                  <a className="portfolio-project-link" href="https://bundlegram.com/" target="_blank" rel="noreferrer">Visit live site</a>
                </div>
              </article>

              <article className="portfolio-feature-card" data-portfolio-item data-category="fintech">
                <div className="portfolio-image-frame willibabs-topup-project" aria-hidden="true">
                  <span>Live Project</span>
                </div>
                <div>
                  <p className="portfolio-kicker">Virtual Top-Up Platform</p>
                  <h3>Willibabs Topup VTU website for airtime, data, and bill payments.</h3>
                  <p>A live virtual top-up platform built for mobile data, airtime recharge, utility payments, TV subscriptions, and smooth customer self-service transactions.</p>
                  <a className="portfolio-project-link" href="https://www.willibabstopup.com.ng/" target="_blank" rel="noreferrer">Visit live site</a>
                </div>
              </article>

              <article className="portfolio-feature-card" data-portfolio-item data-category="website">
                <div className="portfolio-image-frame asiusdeloy-project" aria-hidden="true">
                  <span>Live Project</span>
                </div>
                <div>
                  <p className="portfolio-kicker">Company Website</p>
                  <h3>Asiusdeloy Ltd corporate website for multi-service business visibility.</h3>
                  <p>A professional company website that presents services clearly, builds trust with visitors, and gives clients a direct path to understand and contact the business.</p>
                  <a className="portfolio-project-link" href="https://www.asiusdeloyltd.co.uk/" target="_blank" rel="noreferrer">Visit live site</a>
                </div>
              </article>

              <article className="portfolio-feature-card" data-portfolio-item data-category="website">
                <div className="portfolio-image-frame willthrive-project" aria-hidden="true">
                  <span>Live Project</span>
                </div>
                <div>
                  <p className="portfolio-kicker">E-commerce Website</p>
                  <h3>Will Thrive Store online shopping experience for a growing fashion brand.</h3>
                  <p>A live commerce website shaped around product discovery, brand presentation, mobile shopping, and a clean path from browsing to purchase interest.</p>
                  <a className="portfolio-project-link" href="https://www.willthrivestore.com/" target="_blank" rel="noreferrer">Visit live site</a>
                </div>
              </article>

              <article className="portfolio-feature-card" data-portfolio-item data-category="website">
                <div className="portfolio-image-frame logistics-photo" aria-hidden="true">
                  <span>Website Project</span>
                </div>
                <div>
                  <p className="portfolio-kicker">Demo Build: Service Website</p>
                  <h3>Logistics booking website with clear service pages and request flow.</h3>
                  <p>A professional homepage, service cards, quote request section, contact prompts, and mobile layout for a delivery or transport business.</p>
                </div>
              </article>
      
              <article className="portfolio-feature-card" data-portfolio-item data-category="system">
                <div className="portfolio-image-frame school-photo" aria-hidden="true">
                  <span>Demo Build</span>
                </div>
                <div>
                  <p className="portfolio-kicker">Demo Build: Business System</p>
                  <h3>School management dashboard for records, fees, and activity tracking.</h3>
                  <p>Admin overview, student records, fee summaries, status cards, and simple reporting screens designed for daily school operations.</p>
                </div>
              </article>
      
            </div>
      
            <div className="showcase-grid portfolio-card-grid">
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="website">
                <div className="portfolio-card-visual restaurant-site">
                  <span>Demo Build</span>
                </div>
                <span>Web Design</span>
                <h3>Restaurant Ordering Website</h3>
                <p>Menu sections, featured meals, order prompt, reservation area, WhatsApp contact, and mobile-first layout.</p>
                <Link href="#contact">Learn more</Link>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="website">
                <div className="portfolio-card-visual real-estate-site">
                  <span>Concept</span>
                </div>
                <span>Listing Platform</span>
                <h3>Real Estate Property Website</h3>
                <p>Property cards, search filters, agent contact paths, listing details, and lead capture for buyer inquiries.</p>
                <Link href="#contact">Learn more</Link>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="automation">
                <div className="portfolio-card-visual ai-workflow">
                  <span>Workflow Preview</span>
                </div>
                <span>AI System</span>
                <h3>AI Customer Support Workflow</h3>
                <p>Lead intake form, smart reply flow, customer categorization, follow-up reminders, and support dashboard.</p>
                <Link href="#contact">Learn more</Link>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="article">
                <div className="portfolio-card-visual research-portal">
                  <span>Writing Sample</span>
                </div>
                <span>Research & Article Writing</span>
                <h3>Research Article Page</h3>
                <p>Technical debt, test automation, AI compliance, ethical insurance CRM, and biologics method development articles.</p>
                <Link href="/writing-samples">Open page</Link>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="system">
                <div className="portfolio-card-visual booking-system">
                  <span>Booking Preview</span>
                </div>
                <span>Web App</span>
                <h3>Appointment Booking System</h3>
                <p>Calendar-style booking flow, service selection, client details, confirmation screen, and admin schedule view.</p>
                <Link href="#contact">Learn more</Link>
              </article>
            </div>
          </section>
      
          <section className="section process-section">
            <div className="section-heading process-heading">
              <p className="eyebrow">How We Work</p>
              <h2>A clear process from first conversation to launch.</h2>
              <p>
                You will know the scope, next step, and what we need from you at each stage.
              </p>
            </div>
      
            <div className="process-timeline" aria-label="Project process">
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">01</span>
                  <h3>Discovery</h3>
                  <p>We clarify your goals, audience, requirements, and priorities before work begins.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">02</span>
                  <h3>Web Design</h3>
                  <p>We shape the structure, content, and visual direction for your project.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">03</span>
                  <h3>Build &amp; Review</h3>
                  <p>We build the agreed solution, share progress, and refine it with your feedback.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">04</span>
                  <h3>Launch &amp; Support</h3>
                  <p>We prepare the final handover and can help with updates and improvements after launch.</p>
                </div>
              </article>
            </div>
      
            <div className="process-cta">
              <div>
                <span>Ready for a professional website?</span>
                <strong>Start with a clear plan, then launch with confidence.</strong>
              </div>
              <Link className="button light" href="#contact">Start Your Project</Link>
            </div>
          </section>
      
          <section className="section faq-section">
            <div className="section-heading">
              <p className="eyebrow">Questions clients ask</p>
              <h2>Give visitors answers before they hesitate.</h2>
            </div>
      
            <div className="faq-list">
              <details open>
                <summary>Can you design or redesign a professional website?</summary>
                <p>Yes. We build new websites and redesign existing ones with better layout, clearer messaging, mobile responsiveness, service presentation, speed, and contact flow.</p>
              </details>
              <details>
                <summary>Can you build custom software for my business?</summary>
                <p>Yes. We build dashboards, portals, admin panels, booking systems, record systems, and other tools that help businesses manage daily operations more easily.</p>
              </details>
              <details>
                <summary>Do you develop fintech apps and payment platforms?</summary>
                <p>Yes. We can design and build fintech interfaces such as wallet screens, bill payment dashboards, VTU systems, transaction pages, user accounts, and payment workflows.</p>
              </details>
              <details>
                <summary>Can you help with research and academic writing?</summary>
                <p>Yes. We support academic writing, proofreading, editing, literature review structure, citation formatting, journal formatting, and publication-ready document cleanup.</p>
              </details>
              <details>
                <summary>Do you offer resume writing services?</summary>
                <p>Yes. We help prepare clean, professional resumes and CVs that present your skills, experience, education, and achievements clearly for job or academic applications.</p>
              </details>
              <details>
                <summary>Can you automate business tasks with AI?</summary>
                <p>Yes. We create AI automation for customer replies, lead capture, document processing, follow-up reminders, data organization, and simple support workflows.</p>
              </details>
              <details>
                <summary>Do you support clients after launch or delivery?</summary>
                <p>Yes. Support can include updates, maintenance, training, content changes, automation improvements, writing revisions, and technical fixes depending on the project.</p>
              </details>
            </div>
          </section>
      
          <section className="section contact-section" id="contact">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Tell us what you want to build.</h2>
              <p>
                Share your idea, deadline, and the service you need. We will review the details and reply with clear next steps, practical advice, and a realistic project estimate.
              </p>
              <div className="contact-details">
                <span>Response within 24 hours</span>
                <span>Clear scope before work begins</span>
                <span>Website, software, automation, fintech, and research support</span>
                <span>Email us directly: <a href="mailto:info@willibabsdigitalsolutions.com">info@willibabsdigitalsolutions.com</a></span>
              </div>
            </div>
      
            <form className="contact-form" data-contact-form>
              <div className="form-heading">
                <span>Project Request Form</span>
                <strong>Get a clear reply from Willibabs Digital Solutions.</strong>
              </div>
              <label>
                Full name
                <input type="text" name="name" placeholder="Enter your full name" required data-first-field />
              </label>
              <label>
                Email address
                <input type="email" name="email" placeholder="name@example.com" required />
              </label>
              <label>
                Service needed
                <select name="service" required>
                  <option>Website development</option>
                  <option>Software or app development</option>
                  <option>Fintech app development</option>
                  <option>AI automation</option>
                  <option>Research and academic writing</option>
                  <option>Resume writing services</option>
                </select>
              </label>
              <label>
                Budget range
                <select name="budget" required>
                  <option value="">Select a budget range</option>
                  <option>Under $500</option>
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $5,000</option>
                  <option>$5,000+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Preferred timeline
                <select name="timeline" required>
                  <option value="">Select a timeline</option>
                  <option>As soon as possible</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                  <option>1-3 months</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label>
                Preferred contact method
                <select name="contact_method" required>
                  <option>Email</option>
                  <option>WhatsApp</option>
                  <option>Video call</option>
                </select>
              </label>
              <label>
                Project details
                <textarea name="message" rows="5" placeholder="Tell us what you want to build, your deadline, and any important features" required></textarea>
              </label>
              <button className="button primary" type="submit">Send Project Request</button>
              <p className="form-status" data-form-status role="status" aria-live="polite"></p>
            </form>
          </section>
      
        </main>
    </div>
  );
}
