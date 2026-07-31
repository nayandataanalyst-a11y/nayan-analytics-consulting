import {
  FaChartLine,
  FaTachometerAlt,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaUserTie,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaChartLine />,
    title: 'Executive Reporting Strategy',
    description:
      'Define the right KPIs, reporting structure, and executive dashboards required to support faster and more confident business decisions.',
    deliverables: [
      'Executive KPI framework',
      'Dashboard blueprint',
      'Reporting roadmap',
    ],
  },
  {
    id: 2,
    icon: <FaTachometerAlt />,
    title: 'Power BI Health Check',
    description:
      'Review your existing reports, semantic model, DAX, refresh process, and user experience to identify improvement opportunities.',
    deliverables: [
      'Performance assessment',
      'DAX and model review',
      'Prioritized action plan',
    ],
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: 'Power BI Optimization',
    description:
      'Improve slow reports, large datasets, refresh duration, visual performance, and overall report usability.',
    deliverables: [
      'Model optimization',
      'Refresh improvement',
      'Report performance tuning',
    ],
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: 'ERP Analytics Consulting',
    description:
      'Transform Business Central, Dynamics 365 Finance & Operations, and other ERP data into decision-ready analytics.',
    deliverables: [
      'ERP reporting assessment',
      'Finance and operations dashboards',
      'Data integration guidance',
    ],
  },
  {
    id: 5,
    icon: <FaCloud />,
    title: 'Microsoft Fabric Advisory',
    description:
      'Assess your Microsoft Fabric readiness and define a practical roadmap for data engineering, governance, and enterprise analytics.',
    deliverables: [
      'Fabric readiness assessment',
      'Architecture guidance',
      'Migration roadmap',
    ],
  },
  {
    id: 6,
    icon: <FaUserTie />,
    title: 'Fractional BI Consulting',
    description:
      'Ongoing strategic and technical BI support for organizations that need experienced analytics leadership without a full-time hire.',
    deliverables: [
      'BI strategy support',
      'Architecture reviews',
      'Team mentoring and guidance',
    ],
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span>Consulting Services</span>

        <h2>Analytics solutions aligned with business decisions</h2>

        <p className="section-description">
          From strategy and performance reviews to ERP analytics and Microsoft
          Fabric advisory, I help organizations build reporting solutions that
          are reliable, scalable, and valuable to leadership.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-deliverables">
              {service.deliverables.map((deliverable) => (
                <span key={deliverable}>{deliverable}</span>
              ))}
            </div>

            <a href="#book-meeting" className="service-link">
              Discuss this service →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}