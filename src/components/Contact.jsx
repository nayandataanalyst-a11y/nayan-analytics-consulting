import {
  FaEnvelope,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Nayan,

${message}

Regards,
${name}
${email}`
    );

    window.location.href =
      `mailto:nayan@shreejisoftinfo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <span>Contact</span>
        <h2>Let's Build Something Valuable Together</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Let's discuss Power BI, Microsoft Fabric, Azure Data Engineering,
            Power Platform, ERP Analytics, AI solutions or your next digital
            transformation initiative.
          </p>

          {/* Gmail */}
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:nayan.dataanalyst@gmail.com">
              <strong>Gmail</strong>
              <span>nayan.dataanalyst@gmail.com</span>
            </a>
          </div>

          {/* Outlook */}
          <div className="contact-item">
            <FaBriefcase />
            <a href="mailto:nayan@shreejisoftinfo.com">
              <strong>Outlook</strong>
              <span>nayan@shreejisoftinfo.com</span>
            </a>
          </div>

          {/* Location */}
          <div className="contact-item">
            <FaMapMarkerAlt />
             <strong>Location</strong>
            <span>Vadodara, Gujarat, India</span>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/nayan-dholakia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>LinkedIn</strong>
              <span>Nayan Dholakia</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="contact-item">
            <FaWhatsapp />
            <a
              href="https://wa.me/916352740074?text=Hi%20Nayan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>WhatsApp</strong>
              <span>+91 63527 40074</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project, business requirement or collaboration opportunity..."
            required
          />

          <button className="button primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}