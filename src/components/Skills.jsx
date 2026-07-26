import { skills } from "../data";

const industries = [
  { icon: "🏦", name: "Finance" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🏨", name: "Hospitality" },
  { icon: "📦", name: "Supply Chain" },
  { icon: "🛒", name: "Retail" },
  { icon: "🚚", name: "Logistics" },
  { icon: "👥", name: "HR Analytics" },
];

const appSourceSolutions = [
  "Sales Insights",
  "Finance Insights",
  "Customer Performance",
  "Receivable Analytics",
];

const tools = [
  "Power BI",
  "Power Apps",
  "Power Automate",
  "Azure",
  "Microsoft Fabric",
  "SQL Server",
  "Excel",
  "SharePoint",
  "Business Central",
  "Dynamics 365",
  "GitHub",
  "VS Code",
];

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="section-heading">
        <span>Core Capabilities</span>
        <h2>Skills built around the Microsoft ecosystem</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.label}>
            <div className="skill-top">
              <h3>{skill.label}</h3>
              <strong>{skill.value}%</strong>
            </div>

            <div className="skill-track">
              <span style={{ width: `${skill.value}%` }} />
            </div>
          </article>
        ))}
      </div>

      <div className="capability-grid">
        <article className="capability-card">
          <h3>Industry Expertise</h3>

          <div className="industry-grid">
            {industries.map((industry) => (
              <div className="industry-item" key={industry.name}>
                <span className="industry-icon">{industry.icon}</span>
                <strong>{industry.name}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="capability-card">
          <h3>Microsoft AppSource</h3>

          <div className="appsource-list">
            {appSourceSolutions.map((solution) => (
              <div className="appsource-item" key={solution}>
                <span className="appsource-check">✓</span>
                <strong>{solution}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="capability-card tools-card">
          <h3>Technology & Tools</h3>

          <div className="tools-list">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}