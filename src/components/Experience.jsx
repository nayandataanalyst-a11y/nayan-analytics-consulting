import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaTrophy,
  FaTools,
  FaBuilding
} from "react-icons/fa";

import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <span>Experience</span>
        <h2>Professional journey</h2>
      </div>

      <div className="professional-timeline">
        {experience.map((item, index) => (
          <article
            className="experience-card"
            key={`${item.company}-${item.period}`}
          >
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>

            <div className="experience-header">
              <div className="company-logo">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget
                      .closest(".company-logo")
                      .classList.add("logo-fallback");
                  }}
                />

                <FaBuilding className="fallback-icon" />
              </div>

              <div className="experience-title">
                <span className="experience-period">
                  {item.period}
                </span>

                <h3>{item.role}</h3>
                <h4>{item.company}</h4>

                <div className="experience-location">
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <div className="experience-details-grid">
              <div className="experience-block">
                <h5>
                  <FaBriefcase />
                  Role details
                </h5>

                <ul>
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-side">
                <div className="experience-block">
                  <h5>
                    <FaTools />
                    Technologies
                  </h5>

                  <div className="experience-tags">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="experience-block achievement-block">
                  <h5>
                    <FaTrophy />
                    Key accomplishments
                  </h5>

                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {item.engagements?.length > 0 && (
              <div className="client-engagements">
                <h5>Selected client engagements</h5>

                <div className="engagement-grid">
                  {item.engagements.map((engagement) => (
                    <div
  className="engagement-card"
  key={`${engagement.client}-${engagement.period}`}
>
  <div className="engagement-header">
    <div className="engagement-logo">
      <img
        src={engagement.logo}
        alt={`${engagement.client} logo`}
      />
    </div>

    <div>
      <span>{engagement.period}</span>
      <h6>{engagement.client}</h6>
      <strong>{engagement.type}</strong>
    </div>
  </div>

  <p>{engagement.details}</p>
</div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}