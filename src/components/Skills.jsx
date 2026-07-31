import {
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaProjectDiagram,
  FaBolt,
} from 'react-icons/fa';

const capabilities = [
  {
    id: 1,
    icon: <FaChartLine />,
    title: 'Executive Analytics',
    description:
      'Design leadership dashboards that provide clear visibility into financial, operational, sales, and strategic performance.',
    areas: [
      'Executive KPI frameworks',
      'Finance dashboards',
      'Sales and profitability analytics',
      'Budget vs Actual reporting',
      'Working capital insights',
    ],
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: 'Power BI & Semantic Models',
    description:
      'Build scalable Power BI solutions with reliable data models, reusable measures, and business-friendly reporting structures.',
    areas: [
      'Dimensional data modeling',
      'DAX measure development',
      'Calculation logic',
      'Drill-through and navigation',
      'Report governance',
    ],
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: 'Performance Optimization',
    description:
      'Improve report responsiveness, semantic-model efficiency, refresh duration, and overall Power BI user experience.',
    areas: [
      'DAX optimization',
      'Model-size reduction',
      'Power Query optimization',
      'Refresh-performance reviews',
      'Visual-performance tuning',
    ],
  },
  {
    id: 4,
    icon: <FaCloud />,
    title: 'Microsoft Fabric & Azure',
    description:
      'Support organizations evaluating or adopting modern Microsoft data platforms for scalable analytics and data engineering.',
    areas: [
      'Fabric readiness assessment',
      'Lakehouse and warehouse guidance',
      'Data pipeline planning',
      'Azure data architecture',
      'Migration roadmap',
    ],
  },
  {
    id: 5,
    icon: <FaProjectDiagram />,
    title: 'ERP Analytics',
    description:
      'Transform ERP data into meaningful reporting across finance, sales, inventory, procurement, manufacturing, and operations.',
    areas: [
      'Dynamics 365 Business Central',
      'Dynamics 365 Finance & Operations',
      'OData and API reporting',
      'Multi-company analytics',
      'ERP KPI standardization',
    ],
  },
  {
    id: 6,
    icon: <FaBolt />,
    title: 'Power Platform Automation',
    description:
      'Create business applications and workflows that reduce manual effort and improve operational visibility.',
    areas: [
      'Power Apps',
      'Power Automate',
      'Approval workflows',
      'Employee self-service',
      'Process digitization',
    ],
  },
];

export default function Skills() {
  return (
    <section className="section alt capabilities-section" id="skills">
      <div className="capabilities-wrapper">
        <div className="section-heading">
          <span>Consulting Capabilities</span>

          <h2>Expertise across analytics, ERP reporting, and Microsoft data platforms</h2>

          <p className="section-description">
            I combine business understanding with Microsoft technologies to
            help organizations improve reporting quality, performance,
            scalability, and executive visibility.
          </p>
        </div>

        <div className="consulting-capabilities-grid">
          {capabilities.map((capability) => (
            <article
              className="consulting-capability-card"
              key={capability.id}
            >
              <div className="consulting-capability-icon">
                {capability.icon}
              </div>

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>

              <div className="consulting-capability-areas">
                {capability.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>

              <a
                className="consulting-capability-link"
                href="#book-meeting"
              >
                Discuss this capability →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}