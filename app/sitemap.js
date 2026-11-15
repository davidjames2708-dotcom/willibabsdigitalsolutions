const siteUrl = "https://willibabsdigitalsolutions.com";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/insights",
    "/writing-samples",
    "/research-marketplace",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
