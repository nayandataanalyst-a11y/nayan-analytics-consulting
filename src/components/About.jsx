import { FaChartLine, FaCloud, FaLayerGroup } from 'react-icons/fa';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <span>About me</span>
        <h2>Turning ERP data into business decisions</h2>
      </div>
      <div className="about-grid">
        <div className="about-card profile-card">
   <div className="avatar">
  <img
    src="/images/ND.jfif"
    alt="Nayan Dholakia"
  />
</div>
          <h3>Nayan Dholakia</h3>
          <p>Power Platform Team Lead</p>
          <a className="button primary full" href="/Nayan-Dholakia-Resume.pdf" download>Download résumé</a>
        </div>
        <div className="about-content">
          <p>
            I specialise in Power BI, Power Apps, Business Central analytics and Azure-based data solutions. My work focuses on simplifying complex finance and operational data into clear, useful insights.
          </p>
          <p>
            I have delivered dashboards, apps and analytics solutions across finance, sales, HR, manufacturing and ERP environments, while also mentoring professionals in the Microsoft data ecosystem.
          </p>
          <div className="feature-grid">
            <article><FaChartLine /><h3>Analytics</h3><p>Insightful reports, KPIs and executive dashboards.</p></article>
            <article><FaLayerGroup /><h3>Automation</h3><p>Power Apps and workflow solutions that reduce manual work.</p></article>
            <article><FaCloud /><h3>Cloud data</h3><p>Azure and Fabric foundations for scalable reporting.</p></article>
          </div>
        </div>
      </div>
    </section>
  );
}
