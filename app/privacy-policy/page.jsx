import LegalPageLayout from "../../components/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy | Willibabs Digital Solutions",
  description:
    "Learn how Willibabs Digital Solutions handles information submitted through its website and project request form.",
};

const sections = [
  {
    title: "Who handles your information",
    content: (
      <>
        <p>
          Willibabs Digital Solutions ("we", "us", or "our") is based in
          Nigeria and provides digital and research support services remotely.
          We handle personal information as described in this policy.
        </p>
        <p>
          For privacy questions or requests, email{" "}
          <a href="mailto:info@willibabsdigitalsolutions.com">
            info@willibabsdigitalsolutions.com
          </a>.
        </p>
      </>
    ),
  },
  {
    title: "Information we collect",
    content: (
      <>
        <p>
          If you submit a project request, we receive your name, email address,
          requested service, budget range, preferred timeline, preferred contact
          method, and project details. We also receive information you include
          in other messages you send us.
        </p>
        <p>
          When you visit the site, our hosting provider may process technical
          information such as your IP address, approximate location derived
          from it, and request or system logs needed to deliver, maintain, and
          secure the site.
        </p>
        <p>
          Please do not send passwords, payment card information, or sensitive
          personal information through the project request form.
        </p>
      </>
    ),
  },
  {
    title: "How we use information",
    content: (
      <>
        <p>
          We use information to review and respond to inquiries, prepare
          proposals, provide requested services, communicate about projects,
          maintain necessary business records, protect the site, and meet legal
          obligations.
        </p>
        <p>
          We process information when needed to take steps you request before
          entering an agreement, perform an agreement, meet legal obligations,
          or pursue legitimate business interests where permitted. Where we
          rely on your consent, you can withdraw it.
        </p>
        <p>
          We do not use project request information for marketing unless you
          separately agree to receive marketing messages.
        </p>
      </>
    ),
  },
  {
    title: "Hosting, email, and international processing",
    content: (
      <>
        <p>
          The website is hosted by Vercel. Project request emails are sent
          through Resend to our business inbox. These providers process
          information as needed to provide their services and under their
          applicable terms and privacy documents. Vercel may process technical
          information such as IP addresses, request data, and system logs.
        </p>
        <p>
          Resend states that customer data is stored in the United States. Its
          published email and log retention period is 30 days on Free, Pro, and
          Scale plans; Enterprise retention is flexible. The period that applies
          to our Resend account depends on our plan. Our business inbox may keep
          a separate copy of an inquiry.
        </p>
        <p>
          These providers may process or store information outside Nigeria.
          Where applicable, we will use a valid transfer basis and safeguards
          required by data protection law. You can review their policies at{" "}
          <a
            href="https://vercel.com/legal/privacy-notice"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Privacy Notice
          </a>{" "}
          and{" "}
          <a
            href="https://resend.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Resend Privacy Policy
          </a>.
        </p>
        <p>
          Our use of these platforms is also subject to their current service
          terms: <a href="https://vercel.com/legal/terms" target="_blank" rel="noreferrer">Vercel Terms of Service</a>{" "}
          and{" "}
          <a
            href="https://resend.com/legal/terms-of-service"
            target="_blank"
            rel="noreferrer"
          >
            Resend Terms of Service
          </a>.
        </p>
      </>
    ),
  },
  {
    title: "How long we keep information",
    content: (
      <p>
        We keep inquiry and project information while it is needed to respond,
        manage a project or business relationship, maintain necessary business
        records, resolve disputes, or meet legal obligations. We delete or
        securely dispose of information when it is no longer needed for those
        purposes. Provider logs and email records may have separate retention
        periods set by the provider and account plan.
      </p>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may ask us to confirm whether we hold
          information about you, provide a copy, correct it, delete it, restrict
          or object to certain processing, request a copy in a portable format
          where applicable, or withdraw consent where consent is the basis for
          processing.
        </p>
        <p>
          To make a request, email{" "}
          <a href="mailto:info@willibabsdigitalsolutions.com">
            info@willibabsdigitalsolutions.com
          </a>. If you believe your data protection rights have been violated,
          you may also complain to the Nigeria Data Protection Commission or
          another authority with jurisdiction over you.
        </p>
      </>
    ),
  },
  {
    title: "Cookies, security, and updates",
    content: (
      <>
        <p>
          Our website code does not currently include advertising trackers or
          optional analytics tools. Our hosting provider may still process
          technical data to operate and secure the site. If we add analytics or
          marketing technologies, we will update this policy and request any
          consent required by law.
        </p>
        <p>
          We use reasonable safeguards to protect personal information, but no
          online service can guarantee absolute security. We may update this
          policy; the latest version and its effective date will appear on this
          page.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro="How we handle information submitted through this website and our project request form."
      sections={sections}
    />
  );
}
