import {
  FaChartLine,
  FaDatabase,
  FaLightbulb,
  FaCheckCircle,
} from 'react-icons/fa';

const highlights = [
  'Executive reporting and KPI strategy',
  'Power BI performance and semantic-model optimization',
  'Dynamics 365 and Business Central analytics',
  'Microsoft Fabric and Azure data advisory',
  'Finance, manufacturing, hospitality and sales analytics',
  'Power Platform business applications and automation',
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <span>About the Consultant</span>

        <h2>
          Business understanding supported by strong Microsoft data expertise
        </h2>

        <p className="section-description">
          I help organizations transform ERP, financial and operational data
          into reporting solutions that support confident business decisions.
        </p>
      </div>

      <div className="consulting-about-grid">
        <div className="consulting-profile-card">
          <div className="consulting-avatar">
            <img
              src="/images/ND.jfif"
              alt="Nayan Dholakia"
            />
          </div>

          <h3>Nayan Dholakia</h3>

          <p className="consulting-role">
            Business Intelligence & Microsoft Data Consultant
          </p>

          <div className="consulting-stat-grid">
            <div>
              <strong>40+</strong>
              <span>Dashboards</span>
            </div>

            <div>
              <strong>8+</strong>
              <span>Clients</span>
            </div>

            <div>
              <strong>16</strong>
              <span>AppSource Apps</span>
            </div>

            <div>
              <strong>Multi</strong>
              <span>Industry Experience</span>
            </div>
          </div>

          <a className="button primary about-call-button" href="#book-meeting">
            Book a Strategy Call
          </a>
        </div>

        <div className="consulting-about-content">
          <p className="consulting-intro">
            I am a Business Intelligence and Microsoft Data Platform consultant
            focused on helping organizations turn complex ERP and operational
            data into clear, executive-ready insights.
          </p>

          <p>
            My experience spans Power BI, Microsoft Fabric, Dynamics 365
            Business Central, Dynamics 365 Finance & Operations, Azure and the
            Power Platform. I have worked on reporting solutions across
            finance, sales, manufacturing, hospitality, supply chain and human
            resources.
          </p>

          <p>
            My consulting approach starts with the decisions an organization
            needs to make. From there, I help define the right KPIs, reporting
            structure, data model and analytics roadmap required to support
            those decisions.
          </p>

          <div className="consulting-principles">
            <article>
              <FaLightbulb />

              <div>
                <h3>Business First</h3>
                <p>
                  Reporting should begin with business questions rather than
                  charts, tools or technology.
                </p>
              </div>
            </article>

            <article>
              <FaChartLine />

              <div>
                <h3>Decision Ready</h3>
                <p>
                  Dashboards should help leaders identify performance,
                  exceptions, risks and opportunities quickly.
                </p>
              </div>
            </article>

            <article>
              <FaDatabase />

              <div>
                <h3>Scalable by Design</h3>
                <p>
                  Reporting models should remain reliable, governed and
                  maintainable as data volumes and business requirements grow.
                </p>
              </div>
            </article>
          </div>

          <div className="consulting-expertise">
            <span>Core consulting expertise</span>

            <div className="consulting-expertise-grid">
              {highlights.map((highlight) => (
                <div key={highlight}>
                  <FaCheckCircle />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}