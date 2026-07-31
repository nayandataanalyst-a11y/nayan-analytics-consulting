import {
  FaFilePdf,
  FaClipboardCheck,
  FaChartBar,
  FaDatabase,
  FaArrowRight,
} from 'react-icons/fa';

const resources = [
  {
    id: 1,
    icon: <FaFilePdf />,
    type: 'Executive Guide',
    title: 'Finance Executive Reporting Guide',
    description:
      'A business-focused guide explaining how finance leaders can improve visibility across revenue, profitability, cash flow, budgets, receivables, and working capital.',
    status: 'Coming Soon',
    action: 'Preview Guide',
    href: '#book-meeting',
  },
  {
    id: 2,
    icon: <FaClipboardCheck />,
    type: 'Checklist',
    title: 'Power BI Performance Review Checklist',
    description:
      'A practical checklist covering data models, DAX, refresh performance, report usability, semantic model design, and deployment readiness.',
    status: 'Coming Soon',
    action: 'Request Checklist',
    href: '#book-meeting',
  },
  {
    id: 3,
    icon: <FaChartBar />,
    type: 'Executive Framework',
    title: 'Executive Dashboard KPI Framework',
    description:
      'A structured framework for identifying leadership KPIs across finance, sales, operations, inventory, profitability, and customer performance.',
    status: 'Coming Soon',
    action: 'Request Framework',
    href: '#book-meeting',
  },
  {
    id: 4,
    icon: <FaDatabase />,
    type: 'Readiness Guide',
    title: 'Microsoft Fabric Readiness Guide',
    description:
      'Understand the business, architecture, governance, and migration considerations involved in adopting Microsoft Fabric.',
    status: 'Coming Soon',
    action: 'Discuss Fabric Readiness',
    href: '#book-meeting',
  },
];

export default function Resources() {
  return (
    <section className="section alt resources-section" id="resources">
      <div className="resources-wrapper">
        <div className="section-heading">
          <span>Insights & Resources</span>

          <h2>Practical guides for better analytics decisions</h2>

          <p className="section-description">
            Access executive guides, reporting frameworks, readiness
            assessments, and practical checklists designed to help
            organizations improve their analytics strategy.
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.id}>
              <div className="resource-card-top">
                <div className="resource-icon">{resource.icon}</div>

                <span className="resource-status">
                  {resource.status}
                </span>
              </div>

              <span className="resource-type">{resource.type}</span>

              <h3>{resource.title}</h3>

              <p>{resource.description}</p>

              <a className="resource-link" href={resource.href}>
                {resource.action}
                <FaArrowRight />
              </a>
            </article>
          ))}
        </div>

        <div className="resources-banner">
          <div>
            <span>Need something specific?</span>

            <h3>
              Request a guide or reporting framework tailored to your
              organization.
            </h3>

            <p>
              Share your reporting challenge, ERP platform, or analytics
              requirement and receive guidance on the right next step.
            </p>
          </div>

          <a className="button primary" href="#contact">
            Request a Resource
          </a>
        </div>
      </div>
    </section>
  );
}