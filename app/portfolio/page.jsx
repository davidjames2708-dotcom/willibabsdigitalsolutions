import PortfolioPageContent from "../../components/PortfolioPageContent";
import "./portfolio.css";

export const metadata = {
  title: "Portfolio | Willibabs Digital Solutions",
};

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <main>
        <section className="page-hero portfolio-page-hero">
          <p className="eyebrow">Portfolio</p>
          <h1>See the digital work we’ve built for real projects.</h1>
          <p className="lead">
            Explore websites, business tools, automation concepts, and writing samples created to solve practical needs and help ideas move forward.
          </p>
        </section>

        <PortfolioPageContent />
      </main>
    </div>
  );
}
