import {
  FaChartBar,
  FaDatabase,
  FaFileExcel,
  FaTachometerAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const assessmentAreas = [
  {
    icon: <FaChartBar />,
    title: "Executive Reporting",
    text: "Assess whether leadership has clear visibility into the KPIs that matter most.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Power BI Performance",
    text: "Identify slow reports, refresh bottlenecks, model issues, and usability concerns.",
  },
  {
    icon: <FaDatabase />,
    title: "ERP Analytics",
    text: "Review how effectively your ERP data supports financial and operational reporting.",
  },
  {
    icon: <FaFileExcel />,
    title: "Manual Reporting",
    text: "Identify Excel-heavy processes that may benefit from automation and centralized analytics.",
  },
];

const signs = [
  "Reports take too long to prepare or refresh",
  "Leadership depends on multiple Excel files",
  "ERP reports do not provide enough business insight",
  "Departments use different KPI definitions",
  "Power BI reports are slow or difficult to maintain",
  "There is no clear Microsoft Fabric or analytics roadmap",
];

export default function FreeAssessment() {
  return (
    <section className="section assessment-section" id="assessment">
      <div className="assessment-layout">
        <div className="assessment-content">
          <span className="assessment-eyebrow">
            Complimentary Reporting Assessment
          </span>

          <h2>
            Is your reporting environment helping or slowing down business
            decisions?
          </h2>

          <p className="assessment-intro">
            Book a focused introductory assessment to discuss your current
            reporting environment, business challenges, ERP platform, and
            analytics priorities.
          </p>

          <div className="assessment-signs">
            <h3>This assessment may help when:</h3>

            <div className="assessment-signs-grid">
              {signs.map((sign) => (
                <div key={sign}>
                  <FaCheckCircle />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="assessment-actions">
            <a className="button primary" href="#book-meeting">
              Book Free Assessment
              <FaArrowRight />
            </a>

            <a className="assessment-secondary-link" href="#services">
              Review consulting services
            </a>
          </div>

          <p className="assessment-note">
            No obligation. The session is intended to clarify your requirement
            and determine the most practical next step.
          </p>
        </div>

        <div className="assessment-panel">
          <div className="assessment-panel-header">
            <span>Assessment Coverage</span>
            <h3>What we can review together</h3>
          </div>

          <div className="assessment-area-grid">
            {assessmentAreas.map((area) => (
              <article className="assessment-area-card" key={area.title}>
                <div className="assessment-area-icon">{area.icon}</div>

                <div>
                  <h4>{area.title}</h4>
                  <p>{area.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="assessment-outcome">
            <span>Expected outcome</span>

            <p>
              A clearer understanding of your reporting gaps, immediate
              priorities, and whether you need optimization, advisory support,
              a workshop, or a broader implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}