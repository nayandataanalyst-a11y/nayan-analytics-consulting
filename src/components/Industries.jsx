import {
  FaIndustry,
  FaHotel,
  FaShoppingCart,
  FaTruck,
  FaMoneyBillWave,
  FaUsers,
  FaBriefcase,
  FaBoxes,
} from 'react-icons/fa';

const industries = [
  {
    id: 1,
    icon: <FaMoneyBillWave />,
    title: 'Finance & Accounting',
    description:
      'Executive reporting for revenue, profitability, cash flow, working capital, budget control, receivables, and payables.',
    useCases: [
      'Profit & Loss reporting',
      'Budget vs Actual',
      'Cash flow visibility',
      'AR and AP analytics',
    ],
  },
  {
    id: 2,
    icon: <FaIndustry />,
    title: 'Manufacturing',
    description:
      'Operational and financial insights that support production planning, cost control, inventory management, and profitability.',
    useCases: [
      'Production performance',
      'Manufacturing cost analysis',
      'Inventory planning',
      'Order fulfilment',
    ],
  },
  {
    id: 3,
    icon: <FaHotel />,
    title: 'Hospitality',
    description:
      'Executive analytics for hotel, restaurant, resort, and hospitality-chain performance across multiple locations.',
    useCases: [
      'Revenue and occupancy',
      'ADR and RevPAR',
      'Property profitability',
      'Budget monitoring',
    ],
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    title: 'Retail & Sales',
    description:
      'Customer, product, regional, and salesperson analytics designed to improve sales performance and margins.',
    useCases: [
      'Sales trends',
      'Customer segmentation',
      'Product profitability',
      'Regional performance',
    ],
  },
  {
    id: 5,
    icon: <FaTruck />,
    title: 'Supply Chain & Distribution',
    description:
      'Visibility into inventory, purchasing, vendors, warehouse movement, demand, and order fulfilment.',
    useCases: [
      'Inventory ageing',
      'Vendor performance',
      'Procurement analysis',
      'Demand and supply visibility',
    ],
  },
  {
    id: 6,
    icon: <FaUsers />,
    title: 'Human Resources',
    description:
      'Workforce analytics and business applications that improve employee, recruitment, attendance, and leave management.',
    useCases: [
      'Employee analytics',
      'Recruitment pipeline',
      'Leave and attendance',
      'Workforce planning',
    ],
  },
  {
    id: 7,
    icon: <FaBoxes />,
    title: 'ERP-Driven Organizations',
    description:
      'Reporting solutions for organizations using Dynamics 365, Business Central, Finance & Operations, and other ERP platforms.',
    useCases: [
      'ERP data consolidation',
      'Multi-company reporting',
      'Finance dashboards',
      'Operational analytics',
    ],
  },
  {
    id: 8,
    icon: <FaBriefcase />,
    title: 'Professional Services',
    description:
      'Performance reporting for consulting, service, and project-based organizations focused on utilization and profitability.',
    useCases: [
      'Project profitability',
      'Resource utilization',
      'Billing performance',
      'Service delivery KPIs',
    ],
  },
];

export default function Industries() {
  return (
    <section className="section alt industries-section" id="industries">
      <div className="industries-wrapper">
        <div className="section-heading">
          <span>Industry Experience</span>

          <h2>Analytics designed around real business operations</h2>

          <p className="section-description">
            Every industry has different performance drivers. I help
            organizations define relevant KPIs and turn financial and
            operational data into clear, decision-ready insights.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.id}>
              <div className="industry-icon">{industry.icon}</div>

              <div className="industry-card-content">
                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <div className="industry-use-cases">
                  {industry.useCases.map((useCase) => (
                    <span key={useCase}>{useCase}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="industries-cta">
          <div>
            <span>Not sure where your requirement fits?</span>
            <h3>Let’s discuss your reporting and analytics challenges.</h3>
          </div>

          <a className="button primary" href="#book-meeting">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}