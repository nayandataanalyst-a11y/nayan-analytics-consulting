import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setIsSending(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I will get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          error?.text ||
          "Sorry, your message could not be sent. Please contact me through Gmail, LinkedIn or WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
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

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            autoComplete="email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project, business requirement or collaboration opportunity..."
            required
          />

          <button
            className="button primary"
            type="submit"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p
              className={`form-status ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}