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
              <p className="hero-kicker">Websites, software, fintech, AI automation and research & academic writing</p>
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
              <button className="solution-card" type="button" data-solution="automation">
                <span>03</span>
                <strong>AI Automation</strong>
              </button>
              <button className="solution-card" type="button" data-solution="research">
                <span>04</span>
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
                <span>Typical launch</span>
                <strong data-solution-time>7-14d</strong>
              </div>
              <div>
                <span>Best for</span>
                <strong data-solution-fit>Leads</strong>
              </div>
            </div>
            <div className="progress-card">
              <span>Project readiness</span>
              <div className="progress-track"><span data-solution-progress style={{ width: "86%" }}></span></div>
            </div>
          </section>
      
          <section className="who-section" id="about">
            <div className="who-image">
              <img src="/assets/who-we-are.jpg" alt="Developer working on a software project" />
            </div>
            <div className="who-copy">
              <p className="who-label">Who We Are</p>
              <h2>At Willibabs Digital Solutions, we build digital products that help clients grow with confidence.</h2>
              <p>
                We transform ideas into professional websites, business software, AI automation, fintech tools, and research solutions with a clear process and reliable delivery.
              </p>
              <Link className="button primary" href="/about">Learn More</Link>
            </div>
          </section>
      
          <section className="stats-strip who-stats" aria-label="Company highlights">
            <div>
              <strong data-count-to="30" data-count-suffix="+">0+</strong>
              <span>Projects Completed</span>
            </div>
            <div>
              <strong data-count-to="99" data-count-suffix="%">0%</strong>
              <span>Client Satisfaction</span>
            </div>
            <div>
              <strong data-count-to="5" data-count-suffix="+">0+</strong>
              <span>Service Areas</span>
            </div>
            <div>
              <strong data-count-to="24" data-count-suffix="h">0h</strong>
              <span>Response Time</span>
            </div>
          </section>
      
          <section className="section intro-section">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>We turn business needs into clear, usable digital products.</h2>
            </div>
            <p>
              Whether you need a company website, a customer portal, a fintech dashboard, an AI workflow, or academic publication support, we approach the work with planning, clean presentation, and dependable delivery.
            </p>
          </section>
      
          <section className="section offer-section">
            <div className="section-heading">
              <p className="eyebrow">Interactive service preview</p>
              <h2>Choose what you need and see how we approach it.</h2>
            </div>
      
            <div className="offer-layout">
              <div className="offer-tabs" role="tablist" aria-label="Service approach tabs">
                <button className="is-active" type="button" role="tab" aria-selected="true" data-offer-tab="growth">Grow online</button>
                <button type="button" role="tab" aria-selected="false" data-offer-tab="systems">Build systems</button>
                <button type="button" role="tab" aria-selected="false" data-offer-tab="automation">Automate work</button>
                <button type="button" role="tab" aria-selected="false" data-offer-tab="research">Polish research</button>
              </div>
      
              <article className="offer-card">
                <span data-offer-kicker>Website strategy</span>
                <h3 data-offer-title>Attract clients with a website that explains your value quickly.</h3>
                <p data-offer-copy>We structure your homepage, service sections, calls to action, contact flow, and mobile experience so visitors understand what you do and why they should reach out.</p>
                <ul>
                  <li data-offer-point-one>Clear homepage and service messaging</li>
                  <li data-offer-point-two>Professional responsive layouts</li>
                  <li data-offer-point-three>Contact paths built for conversion</li>
                </ul>
              </article>
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
                  <p>Frontend development, backend development, business websites, e-commerce solutions, portfolios, landing pages, and responsive redesigns.</p>
                </article>
      
                <article className="service-card light">
                  <span>02</span>
                  <h3>Software Development</h3>
                  <p>Custom dashboards, admin panels, business systems, customer portals, automation tools, and internal workflow applications.</p>
                </article>
      
                <article className="service-card dark">
                  <span>03</span>
                  <h3>Fintech App Development</h3>
                  <p>Wallet interfaces, bill payment apps, VTU systems, transaction dashboards, payment flows, and secure financial product screens.</p>
                </article>
      
                <article className="service-card light">
                  <span>04</span>
                  <h3>AI Automation Services</h3>
                  <p>AI chatbots, lead capture workflows, customer support automation, document processing, smart replies, and productivity systems.</p>
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
                  These selected projects show real websites, fintech platforms, e-commerce work, and sample digital products we can create for businesses, professionals, and researchers.
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
                  <span>Workflow</span>
                </div>
                <span>AI System</span>
                <h3>AI Customer Support Workflow</h3>
                <p>Lead intake form, smart reply flow, customer categorization, follow-up reminders, and support dashboard.</p>
                <Link href="#contact">Learn more</Link>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="article">
                <div className="portfolio-card-visual research-portal">
                  <span>Articles</span>
                </div>
                <span>Research & Article Writing</span>
                <h3>Research Article Page</h3>
                <p>Technical debt, test automation, AI compliance, ethical insurance CRM, and biologics method development articles.</p>
                <Link href="/writing-samples">Open page</Link>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="website">
                <div className="portfolio-card-visual ecommerce-shop">
                  <span>Commerce</span>
                </div>
                <span>Online Store</span>
                <h3>Will Thrive Store small business e-commerce shop.</h3>
                <p>A live online store with product presentation, brand-focused shopping pages, mobile-friendly browsing, and a direct path for purchase interest.</p>
                <a href="https://www.willthrivestore.com/" target="_blank" rel="noreferrer">Visit live site</a>
              </article>
              <article className="showcase-card portfolio-card" data-portfolio-item data-category="system">
                <div className="portfolio-card-visual booking-system">
                  <span>Booking</span>
                </div>
                <span>Web App</span>
                <h3>Appointment Booking System</h3>
                <p>Calendar-style booking flow, service selection, client details, confirmation screen, and admin schedule view.</p>
                <Link href="#contact">Learn more</Link>
              </article>
            </div>
          </section>
      
          <section className="section about-section">
            <figure className="about-image">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=90" alt="Team planning a professional digital project around a table" />
              <div className="workspace-card">
                <span>Client brief</span>
                <strong>Design a reliable digital system with clear handover.</strong>
                <p>Scope approved &middot; Build active &middot; Support ready</p>
              </div>
            </figure>
      
            <div className="about-copy">
              <p className="eyebrow">About Willibabs Digital</p>
              <h2>Built around professionalism, clarity, and long-term support.</h2>
              <p>
                Clients do not only need a beautiful website. They need work that is planned properly, communicates trust, functions well on mobile, and can be improved after launch.
              </p>
              <p>
                Our process keeps each project organized: clear requirements, realistic timelines, structured feedback, final handover, and support for future updates.
              </p>
              <div className="about-points">
                <div><strong>Clear scope</strong><span>Everyone understands deliverables before work begins.</span></div>
                <div><strong>Professional design</strong><span>Layouts are built for trust, readability, and conversion.</span></div>
                <div><strong>Reliable support</strong><span>Clients get guidance during and after delivery.</span></div>
              </div>
            </div>
          </section>
      
          <section className="section process-section">
            <div className="section-heading process-heading">
              <p className="eyebrow">Navigating Success Together</p>
              <h2>We lead every project through a clear, client-friendly process.</h2>
              <p>
                From the first idea to launch and support, every stage is structured to make your website feel professional, trustworthy, and ready to convert visitors into real clients.
              </p>
            </div>
      
            <div className="process-timeline" aria-label="Project process">
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">01</span>
                  <h3>Idea</h3>
                  <p>We listen to your goals, target clients, preferred style, and business needs so the website starts with a clear direction.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">02</span>
                  <h3>Research</h3>
                  <p>We study your services, competitors, audience, and content so every section speaks clearly to the clients you want to attract.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">03</span>
                  <h3>Web Design</h3>
                  <p>We shape the homepage, service areas, visuals, contact paths, and mobile layout into a polished client-ready experience.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">04</span>
                  <h3>Development</h3>
                  <p>We build responsive pages with clean structure, strong presentation, and practical features that make the site easy to use.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">05</span>
                  <h3>Launch</h3>
                  <p>We prepare the final review, connect key contact routes, check the mobile experience, and help you go live with confidence.</p>
                </div>
              </article>
      
              <article className="process-card">
                <span className="process-icon" aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <span className="process-step">06</span>
                  <h3>Support</h3>
                  <p>We stay available for updates, improvements, content changes, and future design or development needs after delivery.</p>
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
      
          <section className="section testimonial-section">
            <div className="section-heading testimonial-heading">
              <p className="eyebrow">Testimonials</p>
              <h2>What Some of Our Clients Say About Us</h2>
              <p>Client feedback helps new visitors see that Willibabs Digital Solutions has delivered real work with clear communication, professional design, and reliable support.</p>
            </div>
      
            <div className="testimonial-grid">
              <article>
                <p>"Willibabs Digital Solutions built our business website with a clean layout and clear service presentation. The final result made our company look more professional online."</p>
                <div className="testimonial-client">
                  <span aria-hidden="true"></span>
                  <div>
                    <strong>Business Website Client</strong>
                    <small>Company website project</small>
                  </div>
                </div>
              </article>
              <article>
                <p>"The dashboard workflow helped us organize daily operations and reduce manual follow-up. The system is easy to understand and works well for our team."</p>
                <div className="testimonial-client">
                  <span aria-hidden="true"></span>
                  <div>
                    <strong>Software System Client</strong>
                    <small>Operations dashboard project</small>
                  </div>
                </div>
              </article>
              <article>
                <p>"The research editing and formatting support made my document cleaner, more consistent, and ready for submission review. The process was smooth and professional."</p>
                <div className="testimonial-client">
                  <span aria-hidden="true"></span>
                  <div>
                    <strong>Research Writing Client</strong>
                    <small>Editing and formatting support</small>
                  </div>
                </div>
              </article>
              <article>
                <p>"Their automation setup helped us respond to client requests faster and keep better records. We now have a more organized way to manage inquiries."</p>
                <div className="testimonial-client">
                  <span aria-hidden="true"></span>
                  <div>
                    <strong>AI Automation Client</strong>
                    <small>Client inquiry workflow</small>
                  </div>
                </div>
              </article>
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
              </div>
              <div className="contact-proof" aria-label="Project confidence highlights">
                <div>
                  <strong>30+</strong>
                  <span>Projects handled</span>
                </div>
                <div>
                  <strong>5+</strong>
                  <span>Service areas</span>
                </div>
                <div>
                  <strong>24h</strong>
                  <span>Fast response</span>
                </div>
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
      
          <section className="home-service-banner" aria-label="Project service call to action">
            <div className="home-service-banner-content">
              <h2>Build Powerful Digital Solutions with Expert Developers - Start Your Project</h2>
              <div className="service-bubble-row" aria-label="Willibabs Digital service areas">
                <span>Websites</span>
                <span>Fintech Apps</span>
                <span>Software</span>
                <span>AI Automation</span>
                <span>Research Writing</span>
              </div>
              <Link className="button accent" href="#contact">Start Your Project</Link>
            </div>
          </section>
        </main>
    </div>
  );
}
