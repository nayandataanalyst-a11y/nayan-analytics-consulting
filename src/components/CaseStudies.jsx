import {
  FaChartLine,
  FaHotel,
  FaIndustry,
  FaMoneyBillWave,
  FaUsers,
  FaDatabase,
} from 'react-icons/fa';

const caseStudies = [
  {
    id: 1,
    icon: <FaHotel />,
    industry: 'Hospitality',
    title: 'Executive Analytics for Restaurant & Hospitality Chains',
    challenge:
      'Leadership needed a consolidated view of revenue, profitability, occupancy, working capital, and location-level performance.',
    solution:
      'A CFO-focused analytics solution that combines financial and operational KPIs into one executive reporting experience.',
    value: [
      'Consolidated multi-location reporting',
      'Budget vs Actual visibility',
      'Revenue and profitability monitoring',
      'Occupancy, ADR, and RevPAR analysis',
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'ERP Analytics'],
  },
  {
    id: 2,
    icon: <FaChartLine />,
    industry: 'Sales & Distribution',
    title: 'Sales Insights for Microsoft Dynamics 365 Business Central',
    challenge:
      'Sales information was distributed across ERP transactions, making it difficult to evaluate customers, products, regions, and sales teams consistently.',
    solution:
      'An executive sales analytics solution designed around customer performance, product contribution, regional trends, and gross-profit visibility.',
    value: [
      'Customer and salesperson performance',
      'Regional and product-level analysis',
      'Gross-profit and margin visibility',
      'Executive sales trends',
    ],
    technologies: [
      'Power BI',
      'Business Central',
      'DAX',
      'Microsoft AppSource',
    ],
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    industry: 'Finance',
    title: 'Finance Insights for ERP-Driven Organizations',
    challenge:
      'Finance teams required a clear and standardized view of financial statements, cash flow, receivables, payables, and budget performance.',
    solution:
      'A finance reporting framework that presents executive KPIs and detailed financial analysis through one consistent semantic model.',
    value: [
      'Profit & Loss visibility',
      'Balance Sheet and cash-flow reporting',
      'Receivables and payables monitoring',
      'Standardized finance KPIs',
    ],
    technologies: ['Power BI', 'DAX', 'Business Central', 'Financial Reporting'],
  },
  {
    id: 4,
    icon: <FaIndustry />,
    industry: 'Manufacturing',
    title: 'Manufacturing and Operational Performance Analytics',
    challenge:
      'Disconnected production, inventory, finance, and order data limited operational visibility and slowed management reporting.',
    solution:
      'A centralized analytics solution designed to connect production performance, inventory movement, operational cost, and order fulfilment.',
    value: [
      'Production and order visibility',
      'Inventory movement analysis',
      'Cost and profitability monitoring',
      'Improved operational reporting',
    ],
    technologies: ['Power BI', 'SQL', 'ERP Data', 'Data Modeling'],
  },
  {
    id: 5,
    icon: <FaUsers />,
    industry: 'Human Resources',
    title: 'HRMS and Employee Self-Service Applications',
    challenge:
      'Employee requests, approvals, recruitment, leave, expenses, and HR operations relied on disconnected and manual processes.',
    solution:
      'A suite of business applications supporting employee self-service, approvals, recruitment processes, and workforce analytics.',
    value: [
      'Centralized employee processes',
      'Improved approval visibility',
      'Recruitment pipeline management',
      'Reduced manual administration',
    ],
    technologies: [
      'Power Apps',
      'Power Automate',
      'Power BI',
      'Microsoft 365',
    ],
  },
  {
    id: 6,
    icon: <FaDatabase />,
    industry: 'Dynamics 365 Finance & Operations',
    title: 'IT Budget Control and Actual Spend Reporting',
    challenge:
      'Finance and IT teams needed to combine budget, general ledger, dimensions, and account mappings from Dynamics 365 Finance & Operations.',
    solution:
      'A reporting model designed to connect budget and actual financial data while identifying data availability and integration gaps across ERP entities.',
    value: [
      'Budget and actual spend visibility',
      'IT account classification',
      'ERP data-gap identification',
      'Foundation for financial control reporting',
    ],
    technologies: [
      'Power BI',
      'Dynamics 365 F&O',
      'OData',
      'Power Query',
    ],
  },
];

export default function Projects() {
  return (
    <section className="section case-studies-section" id="projects">
      <div className="section-heading">
        <span>Case Studies</span>

        <h2>Business challenges transformed into decision-ready solutions</h2>

        <p className="section-description">
          Selected examples of how analytics, ERP reporting, and business
          applications can help organizations improve visibility, efficiency,
          financial control, and executive decision-making.
        </p>
      </div>

      <div className="case-studies-grid">
        {caseStudies.map((item) => (
          <article className="case-study-card" key={item.id}>
            <div className="case-study-top">
              <div className="case-study-icon">{item.icon}</div>
              <span className="case-study-industry">{item.industry}</span>
            </div>

            <h3>{item.title}</h3>

            <div className="case-study-section">
              <span>Business challenge</span>
              <p>{item.challenge}</p>
            </div>

            <div className="case-study-section">
              <span>Solution</span>
              <p>{item.solution}</p>
            </div>

            <div className="case-study-value">
              <span>Business value</span>

              <ul>
                {item.value.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>

            <div className="case-study-tags">
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a href="#book-meeting" className="case-study-link">
              Discuss a similar requirement →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}