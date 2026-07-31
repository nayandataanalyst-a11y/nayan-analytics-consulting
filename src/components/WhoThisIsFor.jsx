import {
  FaMoneyCheckAlt,
  FaBuilding,
  FaLaptopCode,
  FaChartLine,
} from 'react-icons/fa';

const audiences = [
  {
    id: 1,
    icon: <FaMoneyCheckAlt />,
    title: 'CFOs & Finance Leaders',
    description:
      'For finance leaders who need stronger visibility into revenue, profitability, cash flow, working capital, budgets, receivables, and payables.',
    challenges: [
      'Manual month-end reporting',
      'Limited budget visibility',
      'Disconnected financial data',
      'Inconsistent executive KPIs',
    ],
  },
  {
    id: 2,
    icon: <FaBuilding />,
    title: 'ERP Decision Makers',
    description:
      'For organizations using Dynamics 365 Business Central, Finance & Operations, or other ERP systems that need better reporting and analytics.',
    challenges: [
      'ERP data is difficult to analyze',
      'Multiple companies or business units',
      'Finance and operations data is disconnected',
      'Standard ERP reports are not sufficient',
    ],
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'BI & IT Leaders',
    description:
      'For BI and technology teams facing performance, architecture, governance, scalability, or reporting adoption challenges.',
    challenges: [
      'Slow Power BI reports',
      'Long refresh duration',
      'Large or complex semantic models',
      'Unclear Microsoft Fabric roadmap',
    ],
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: 'Growing Organizations',
    description:
      'For businesses moving beyond spreadsheets and disconnected reports toward centralized, scalable, and executive-ready analytics.',
    challenges: [
      'Dependence on Excel reporting',
      'No single source of truth',
      'Limited leadership visibility',
      'Reporting does not scale with growth',
    ],
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="section audience-section" id="who-this-is-for">
      <div className="section-heading">
        <span>Who I Work With</span>

        <h2>Consulting support for leaders facing complex reporting challenges</h2>

        <p className="section-description">
          I work with finance, ERP, analytics, and technology leaders who need
          clearer insights, stronger reporting performance, and a practical
          roadmap for modern business intelligence.
        </p>
      </div>

      <div className="audience-grid">
        {audiences.map((audience) => (
          <article className="audience-card" key={audience.id}>
            <div className="audience-icon">{audience.icon}</div>

            <h3>{audience.title}</h3>

            <p>{audience.description}</p>

            <div className="audience-challenges">
              <span>Common challenges</span>

              <ul>
                {audience.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>

            <a href="#book-meeting" className="audience-link">
              Discuss your requirements →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}