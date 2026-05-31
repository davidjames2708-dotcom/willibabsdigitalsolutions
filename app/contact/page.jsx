import Link from "next/link";

export const metadata = {
  title: "Contact | Willibabs Digital Solutions",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <main>
          <section className="page-hero contact-page-hero">
            <p className="eyebrow">Contact</p>
            <h1>Start your project with clear details.</h1>
            <p className="lead">
              Share the service you need, your budget range, timeline, and the best way to reach you. We will review your request and reply with practical next steps.
            </p>
          </section>
      
          <section className="contact-page-form-section" id="contact">
            <div className="contact-page-copy">
              <p className="eyebrow">Contact</p>
              <h2>Tell us what you want to build.</h2>
              <p>
                Share your idea, deadline, and the service you need. We will review the details and reply with clear next steps, practical advice, and a realistic project estimate.
              </p>
              <div className="contact-details">
                <span>Response within 24 hours</span>
                <span>Clear scope before work begins</span>
                <span>Email-first follow-up for international clients</span>
                <span>Available for clients in the UK, US, Canada, Europe, Africa, and other international markets</span>
              </div>
              <div className="contact-proof" aria-label="Project confidence highlights">
                <div>
                  <strong>30+</strong>
                  <span>Projects handled</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>Service areas</span>
                </div>
                <div>
                  <strong>24h</strong>
                  <span>Fast response</span>
                </div>
              </div>
            </div>
      
            <form className="contact-page-form contact-form" data-contact-form>
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
