import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { roles } from '../data';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow one" />
      <div className="hero-glow two" />
      <div className="hero-content">
        <p className="eyebrow">Hello, I am</p>
        <h1>Nayan <span>Dholakia</span></h1>
        <div className="profile-role-tagline">
          <TypeAnimation sequence={roles} speed={50} repeat={Infinity} />
        </div>
        <p className="hero-copy">
          I build decision-ready analytics and business applications using Power BI, Power Platform, Azure and Microsoft Fabric.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View my work</a>
          <a className="button secondary" href="#contact">Contact me</a>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/nayan-dholakia/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
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
      <a className="scroll-down" href="#about" aria-label="Scroll to about"><FaArrowDown /></a>
    </section>
  );
}
