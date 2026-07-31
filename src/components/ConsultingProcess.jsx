import {
  FaComments,
  FaSearch,
  FaRoute,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaComments />,
    number: "01",
    title: "Discovery",
    description:
      "We begin with a focused discussion about your business goals, reporting challenges, users, systems, and expected outcomes.",
    deliverables: [
      "Requirement discussion",
      "Current-state overview",
      "Initial fit assessment",
    ],
  },
  {
    id: 2,
    icon: <FaSearch />,
    number: "02",
    title: "Assessment",
    description:
      "I review the current reporting environment, available data, ERP structure, Power BI setup, and key business gaps.",
    deliverables: [
      "Reporting-gap analysis",
      "Data and platform review",
      "Risk and priority identification",
    ],
  },
  {
    id: 3,
    icon: <FaRoute />,
    number: "03",
    title: "Roadmap",
    description:
      "The findings are translated into a practical roadmap covering priorities, KPIs, architecture, scope, and next actions.",
    deliverables: [
      "Recommended approach",
      "Prioritized action plan",
      "Engagement scope",
    ],
  },
  {
    id: 4,
    icon: <FaCogs />,
    number: "04",
    title: "Delivery",
    description:
      "Depending on the engagement, I provide advisory support, hands-on optimization, dashboard delivery, workshops, or team guidance.",
    deliverables: [
      "Consulting deliverables",
      "Implementation support",
      "Progress reviews",
    ],
  },
  {
    id: 5,
    icon: <FaCheckCircle />,
    number: "05",
    title: "Review & Next Steps",
    description:
      "We review the outcomes, confirm improvements, document recommendations, and define any future support requirements.",
    deliverables: [
      "Final review",
      "Recommendations",
      "Support roadmap",
    ],
  },
];

export default function ConsultingProcess() {
  return (
    <section className="section alt consulting-process-section" id="process">
      <div className="consulting-process-wrapper">
        <div className="section-heading">
          <span>How Consulting Works</span>

          <h2>A clear process from first conversation to business outcome</h2>

          <p className="section-description">
            Every engagement follows a structured process designed to reduce
            uncertainty, clarify priorities, and ensure that recommendations
            remain aligned with business needs.
          </p>
        </div>

        <div className="consulting-process-grid">
          {steps.map((step, index) => (
            <article className="consulting-process-card" key={step.id}>
              <div className="consulting-process-top">
                <span className="consulting-process-number">
                  {step.number}
                </span>

                <div className="consulting-process-icon">
                  {step.icon}
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <div className="consulting-process-deliverables">
                <span>What you can expect</span>

                <ul>
                  {step.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="consulting-process-line" />
              )}
            </article>
          ))}
        </div>

        <div className="consulting-process-cta">
          <div>
            <span>Ready to begin?</span>
            <h3>Start with a free discovery call.</h3>
            <p>
              We can discuss your current situation and determine the most
              suitable next step.
            </p>
          </div>

          <a className="button primary" href="#book-meeting">
            Book Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}