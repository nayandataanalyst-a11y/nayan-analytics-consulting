import {
  FaSearch,
  FaChartLine,
  FaBriefcase,
  FaCloud,
  FaHandshake,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const packages = [
  {
    id: 1,
    icon: <FaSearch />,
    audience: "New Clients",
    title: "Free Discovery Call",
    price: "Free",
    priceNote: "30-minute introductory session",
    description:
      "A focused conversation to understand your reporting challenges, current systems, priorities, and expected outcomes.",
    features: [
      "Requirement discussion",
      "Current reporting overview",
      "High-level recommendations",
      "Suggested next steps",
    ],
    action: "Book Free Strategy Call",
    href: "#book-meeting",
    featured: false,
  },
  {
    id: 2,
    icon: <FaChartLine />,
    audience: "Existing Power BI Reports",
    title: "Power BI Health Check",
    price: "₹15,000+",
    priceNote: "Typical duration: 2–3 business days",
    description:
      "A structured review of your semantic model, DAX, refresh process, report performance, and user experience.",
    features: [
      "Performance assessment",
      "DAX and model review",
      "Refresh-process review",
      "Prioritized improvement report",
    ],
    action: "Request Proposal",
    href: "#contact",
    featured: false,
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    audience: "CFOs & Leadership Teams",
    title: "Executive Reporting Workshop",
    price: "₹25,000+",
    priceNote: "Half-day strategic workshop",
    description:
      "Define executive KPIs, reporting priorities, dashboard structure, and a practical analytics roadmap aligned with business goals.",
    features: [
      "Executive KPI framework",
      "Dashboard blueprint",
      "Priority matrix",
      "Reporting roadmap",
    ],
    action: "Request Workshop Proposal",
    href: "#contact",
    featured: true,
  },
  {
    id: 4,
    icon: <FaCloud />,
    audience: "Enterprise & Growing Data Teams",
    title: "Microsoft Fabric Advisory",
    price: "Custom Quote",
    priceNote: "Scope-based advisory engagement",
    description:
      "Assess Fabric readiness and define a practical architecture, governance, migration, and adoption roadmap.",
    features: [
      "Readiness assessment",
      "Architecture review",
      "Migration roadmap",
      "Governance recommendations",
    ],
    action: "Request Consultation",
    href: "#contact",
    featured: false,
  },
  {
    id: 5,
    icon: <FaHandshake />,
    audience: "Growing Organizations",
    title: "Fractional BI Consulting",
    price: "Monthly Retainer",
    priceNote: "Flexible ongoing engagement",
    description:
      "Strategic and technical BI support for organizations that need experienced analytics leadership without a full-time hire.",
    features: [
      "Weekly consulting sessions",
      "Architecture reviews",
      "Team mentoring",
      "Executive reporting guidance",
    ],
    action: "Discuss Retainer",
    href: "#contact",
    featured: false,
  },
];

export default function ConsultingPackages() {
  return (
    <section className="section packages-section" id="packages">
      <div className="packages-wrapper">
        <div className="section-heading packages-heading">
          <span>Consulting Packages</span>

          <h2>Choose the engagement that fits your business</h2>

          <p className="section-description">
            Start with a free discovery call or request a proposal for Power BI,
            executive reporting, Microsoft Fabric, or ongoing analytics
            consulting.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <article
              className={
                item.featured
                  ? "package-card package-card-featured"
                  : "package-card"
              }
              key={item.id}
            >
              {item.featured && (
                <span className="package-featured-badge">
                  Most Popular
                </span>
              )}

              <div className="package-card-header">
                <div className="package-icon">{item.icon}</div>
                <span className="package-audience">{item.audience}</span>
              </div>

              <h3>{item.title}</h3>

              <div className="package-pricing">
                <strong>{item.price}</strong>
                <span>{item.priceNote}</span>
              </div>

              <p className="package-description">{item.description}</p>

              <div className="package-features">
                <span className="package-features-label">
                  What you receive
                </span>

                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={item.href}
                className={
                  item.featured
                    ? "package-button package-button-primary"
                    : "package-button"
                }
              >
                {item.action}
                <FaArrowRight />
              </a>
            </article>
          ))}
        </div>

        <div className="packages-payment-panel">
          <div>
            <span>Payment & Engagement Terms</span>

            <h3>Scope first, payment after approval</h3>

            <p>
              Paid engagements begin with a requirement discussion. After the
              scope, deliverables, timeline, and final price are agreed, a
              secure payment link or bank details will be shared.
            </p>
          </div>

          <div className="packages-payment-options">
            <span>Razorpay</span>
            <span>UPI</span>
            <span>Bank Transfer</span>
            <span>GST Invoice</span>
            <span>NDA Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}