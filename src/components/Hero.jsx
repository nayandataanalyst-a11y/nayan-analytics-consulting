import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { roles } from '../data';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow one" />
      <div className="hero-glow two" />

      <div className="hero-content">

        <p className="eyebrow">Business Intelligence & ERP Analytics Consultant</p>

        <h1>
          Helping Organizations
          <br />
          <span>Turn ERP Data into</span>
          <br />
          Executive Decisions
        </h1>

        <div className="profile-role-tagline">
          <TypeAnimation
            sequence={roles}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="hero-copy">
          I help organizations design executive reporting solutions, optimize
          Power BI performance, modernize analytics with Microsoft Fabric, and
          transform ERP data into actionable business insights for faster
          decision-making.
        </p>

        <p className="hero-tech">
          Power BI • Microsoft Fabric • Dynamics 365 • Azure • Power Platform
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#book-meeting">
            Book a Strategy Call
          </a>

          <a className="button secondary" href="#projects">
            Explore Case Studies
          </a>
        </div>

        <div className="socials">
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
        </div>

      </div>

      <a
        className="scroll-down"
        href="#about"
        aria-label="Scroll to about"
      >
        <FaArrowDown />
      </a>
    </section>
  );
}