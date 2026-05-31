import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export const metadata = {
  title: "Willibabs Digital Solutions",
  description:
    "Professional websites, business software, automation systems, fintech tools, and research support workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
