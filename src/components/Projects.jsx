import { projects } from '../data';

export default function Projects() {
  return (
    <section className="section alt" id="projects">
      <div className="section-heading">
        <span>Selected work</span>
        <h2>Projects that connect technology with business value</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">0{index + 1}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
