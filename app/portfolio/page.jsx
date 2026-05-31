import PortfolioPageContent from "../../components/PortfolioPageContent";

export const metadata = {
  title: "Portfolio | Willibabs Digital Solutions",
};

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <main>
        <section className="page-hero portfolio-page-hero">
          <p className="eyebrow">Portfolio</p>
          <h1>Live projects and sample builds that show the range of work we deliver.</h1>
          <p className="lead">
            Explore launched websites, fintech systems, e-commerce work, automation concepts, and writing samples shaped with clear structure and practical outcomes.
          </p>
        </section>

        <PortfolioPageContent />
      </main>
    </div>
  );
}
