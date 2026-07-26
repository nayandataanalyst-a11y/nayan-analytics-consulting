import { FaChartLine, FaCloud, FaLayerGroup } from "react-icons/fa";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <span>About Me</span>
        <h2>Transforming ERP Data into Strategic Business Intelligence</h2>
      </div>

      <div className="about-grid">
        {/* Profile Card */}
        <div className="about-card profile-card">
          <div className="avatar">
            <img
              src="/images/ND.jfif"
              alt="Nayan Dholakia"
            />
          </div>

          <h3>Nayan Dholakia</h3>

          <p className="profile-role">
            Power Platform Team Lead
          </p>

          <div className="profile-highlights">
            <div className="highlight-item">
              🏆 <span>80+ Enterprise Dashboards Delivered</span>
            </div>

            <div className="highlight-item">
              ☁️ <span>Microsoft MVP Aspirant</span>
            </div>

            <div className="highlight-item">
              📊 <span>Business Central & ERP Analytics Specialist</span>
            </div>

            <div className="highlight-item">
              🚀 <span>Power BI • Power Apps • AI Solutions</span>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-card">
              <h4>8+</h4>
              <span>Years</span>
            </div>

            <div className="stat-card">
              <h4>80+</h4>
              <span>Dashboards</span>
            </div>

            <div className="stat-card">
              <h4>4</h4>
              <span>AppSource Apps</span>
            </div>

            <div className="stat-card">
              <h4>8+</h4>
              <span>Countries</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-content">
          <h3>Helping Organisations Make Better Decisions with Data</h3>

          <p>
            I specialise in building modern Business Intelligence and ERP
            analytics solutions using Microsoft technologies including Power BI,
            Microsoft Fabric, Azure, Power Apps and Dynamics 365 Business
            Central.
          </p>

          <p>
            My focus is to transform complex operational and financial data into
            intuitive dashboards that enable executives, finance leaders and
            business teams to make faster and more confident decisions.
          </p>

          <p>
            From executive KPI dashboards and financial reporting to automation
            solutions and AI-powered analytics, I enjoy solving real business
            challenges through scalable Microsoft data platforms.
          </p>

          <div className="feature-grid">
            <article>
              <FaChartLine />

              <h3>Business Intelligence</h3>

              <p>
                Executive dashboards, KPI reporting, financial analytics and
                interactive Power BI solutions.
              </p>
            </article>

            <article>
              <FaLayerGroup />

              <h3>Automation & Apps</h3>

              <p>
                Power Apps, Power Automate and business process automation that
                improves productivity.
              </p>
            </article>

            <article>
              <FaCloud />

              <h3>Cloud & Modern Data</h3>

              <p>
                Microsoft Fabric, Azure Data Engineering and scalable cloud
                analytics architecture.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}