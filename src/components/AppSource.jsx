import { appsource } from "../data";

export default function AppSource() {
  return (
    <section className="section alt">
      <div className="section-heading">
        <span>Microsoft AppSource</span>
        <h2>Published Solutions</h2>
      </div>

      <div className="tags">
        {appsource.map((item) => (
          <span key={item}>✔ {item}</span>
        ))}
      </div>
    </section>
  );
}