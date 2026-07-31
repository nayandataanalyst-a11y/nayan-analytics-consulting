import {
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
  FaArrowUp,
} from "react-icons/fa";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="consulting-footer">
      <div className="footer-cta">
        <div>
          <span>Ready to improve your reporting?</span>

          <h2>
            Let’s turn your ERP and business data into executive decisions.
          </h2>

          <p>
            Book a strategy call to discuss Power BI, Microsoft Fabric,
            Dynamics 365 analytics, reporting performance, or executive
            dashboards.
          </p>
        </div>

        <a className="button primary" href="#book-meeting">
          <FaCalendarAlt />
          Book a Strategy Call
        </a>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            ND<span>.</span>
          </a>

          <p>
            Business Intelligence and Microsoft Data consulting focused on
            executive reporting, ERP analytics, Power BI optimization, and
            Microsoft Fabric.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/nayan-dholakia/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/916352740074"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:nayan.dataanalyst@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <nav>
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h3>Consulting</h3>

          <nav>
            <a href="#services">Executive Reporting</a>
            <a href="#services">Power BI Health Check</a>
            <a href="#services">ERP Analytics</a>
            <a href="#services">Microsoft Fabric Advisory</a>
            <a href="#packages">Fractional BI Consulting</a>
          </nav>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <p>Vadodara, Gujarat, India</p>
          <p>Remote consulting available worldwide</p>

          <a href="mailto:nayan.dataanalyst@gmail.com">
            nayan.dataanalyst@gmail.com
          </a>

          <a href="#book-meeting">
            Schedule a consultation
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Nayan Dholakia. All rights reserved.
        </p>

        <p>
          Power BI • Microsoft Fabric • Dynamics 365 • Azure
        </p>

        <a href="#home" className="back-to-top" aria-label="Back to top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}