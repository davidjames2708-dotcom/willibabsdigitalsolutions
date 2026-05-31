import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero">
      <p className="eyebrow">Page Not Found</p>
      <h1>The page you are looking for is not available.</h1>
      <p className="lead">
        Use the navigation above or return to the homepage to continue browsing Willibabs Digital Solutions.
      </p>
      <Link className="button primary" href="/">
        Back to Home
      </Link>
    </main>
  );
}
