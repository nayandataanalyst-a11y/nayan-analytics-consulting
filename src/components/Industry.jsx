import { industries } from "../data";

export default function Industry() {
  return (
    <section className="section">
      <div className="section-heading">
        <span>Industry Expertise</span>
        <h2>Industries I have worked with</h2>
      </div>

      <div className="tags">
        {industries.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}