import LegalPageLayout from "../../components/LegalPageLayout";

export const metadata = {
  title: "Terms of Service | Willibabs Digital Solutions",
  description:
    "Read the terms that apply when using the Willibabs Digital Solutions website and requesting services.",
};

const sections = [
  {
    title: "Using this website",
    content: (
      <p>
        These terms cover your use of the Willibabs Digital Solutions website.
        You must use the site lawfully and must not attempt to damage, disrupt,
        or gain unauthorized access to it.
      </p>
    ),
  },
  {
    title: "Project requests and agreements",
    content: (
      <p>
        Submitting a project request does not mean we have accepted the project
        or that a service contract has been formed. We will set out accepted
        work in a separate written proposal or agreement. It will specify the
        project scope, price, payment schedule, timeline, revisions, delivery,
        cancellation terms, and ownership or licensing of the completed work.
      </p>
    ),
  },
  {
    title: "Your submissions",
    content: (
      <p>
        You are responsible for the information and materials you send us. You
        must have the right to share them and must not use the site to send
        unlawful, infringing, or harmful material. Sending us an inquiry does
        not transfer ownership of your materials to us.
      </p>
    ),
  },
  {
    title: "Website content and client work",
    content: (
      <p>
        Website text, design, graphics, and other content belong to Willibabs
        Digital Solutions or its licensors unless stated otherwise. You may
        view the site for personal or business evaluation; you may not copy,
        republish, or commercially use its content without permission.
        Ownership and permitted use of work created for a client will be set out
        in that client&apos;s written agreement.
      </p>
    ),
  },
  {
    title: "Service information and results",
    content: (
      <p>
        We aim to keep the website useful and current, but do not guarantee that
        it will always be complete, error-free, or continuously available.
        Website descriptions and past projects do not guarantee a particular
        business, academic, or technical result. For research and writing
        support, clients are responsible for ensuring their use complies with
        their institution&apos;s rules.
      </p>
    ),
  },
  {
    title: "Third-party services",
    content: (
      <p>
        This website relies on or may link to third-party services. Those
        services are governed by their own terms and privacy policies. Our use
        of Vercel is subject to its{" "}
        <a href="https://vercel.com/legal/terms" target="_blank" rel="noreferrer">
          Vercel Terms of Service
        </a>, and our use of Resend is subject to its{" "}
        <a
          href="https://resend.com/legal/terms-of-service"
          target="_blank"
          rel="noreferrer"
        >
          Resend Terms of Service
        </a>. Those provider terms govern our accounts with them; they do not
        replace these terms or create a service agreement between you and those
        providers through this website.
      </p>
    ),
  },
  {
    title: "Liability",
    content: (
      <p>
        To the extent permitted by applicable law, we are not responsible for
        indirect losses arising from use of this website. Nothing in these
        terms limits a right or liability that applicable law does not allow us
        to limit.
      </p>
    ),
  },
  {
    title: "Governing law and contact",
    content: (
      <p>
        These terms are governed by the laws of Nigeria, subject to any
        mandatory legal protections that apply to you. Disputes will be handled
        by a court with proper jurisdiction. For questions about these terms,
        email{" "}
        <a href="mailto:info@willibabsdigitalsolutions.com">
          info@willibabsdigitalsolutions.com
        </a>.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      intro="Willibabs Digital Solutions is a Nigeria-based provider of digital and research support services. These terms explain how visitors may use this website and submit project requests."
      sections={sections}
    />
  );
}
