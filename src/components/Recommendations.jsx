import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';

const recommendations = [
  {
    
  id: 1,
  name: 'Nisha Mishra',
  designation: 'Business System Lead',
  company: 'IDX',
  image: '/images/NishaMishra.jfif',
  recommendation: `I had the pleasure of managing Nayan at IDX, where he played a key role in our Power BI migration project.

He demonstrated a strong ability to work with fragmented and undocumented data sourced from multiple disparate systems, with limited clarity around its origin or structure, and consolidated it into clean, reliable Power BI dashboards.

He also used Power Automate to streamline several manual workflows, improving efficiency across the team.

Nayan is technically capable, resourceful, and takes ownership without needing close direction. I would recommend him for any role requiring strong business intelligence and data automation skills.`,
  linkedinUrl: 'https://www.linkedin.com/in/nishamishra27',
},
  {
    id: 2,
    name: 'Gitanjali Muduli',
    designation: 'Senior Executive – Talent Development & Learning',
    company: 'Dhyey Consulting',
    image: '/images/Gitanjali.jfif',
    recommendation:
      'I had the opportunity to work with Nayan for a short period during Talent Development initiatives, where he was actively involved in delivering Power BI training sessions. Nayan demonstrated strong subject matter expertise and a practical approach to learning. Throughout the training programs, he was highly supportive, approachable, and always willing to help participants understand complex concepts in a simple and effective manner. As a trainer, Nayan consistently gave his best. The feedback received from participants was overwhelmingly positive, reflecting both his technical knowledge and his ability to engage learners effectively. His dedication to ensuring a meaningful learning experience stood out and added significant value to the training sessions. I strongly recommend Nayan to any organization looking for a skilled Power BI professional, trainer, and business intelligence expert. I wish him continued success in all his future endeavors.',
    linkedinUrl: 'https://www.linkedin.com/in/gitanjali-muduli-1561b8191',
  },
  {
    id: 3,
    name: 'Mahima Singh',
    designation: 'EdTech Data Associate',
    company: 'GRADplus',
    image: '/images/Mahima.jfif',
    recommendation:
      'I had a fantastic experience connecting with Nayan for Power BI guidance. He has been incredibly supportive and helpful in guiding my Power BI learning journey. From day one, he provided a clear, well-structured roadmap and insightful resources that made complex concepts easy to grasp. Right from the start, he took the time to understand my learning goals and provided an exceptionally detailed and well-structured roadmap tailored to my needs. His meticulous approach breaking down complex concepts step-by-step and providing hands-on resources has made the entire learning process smooth and clear. His dedication, attention to detail, and willingness to mentor and share actionable knowledge makes him a standout professional.',
      linkedinUrl: 'https://www.linkedin.com/in/mahima-singh-4539292a2',
  },
];

export default function Recommendations() {
  return (
    <section
      className="section recommendations-section"
      id="recommendations"
    >
      <div className="section-heading">
        <span>Professional feedback</span>
        <h2>LinkedIn Recommendations</h2>
        <p>
          Feedback from professionals, colleagues and clients I have worked
          with throughout my analytics journey.
        </p>
      </div>

      <div className="recommendations-grid">
        {recommendations.map((item) => (
          <article className="recommendation-card" key={item.id}>
            <FaQuoteLeft className="quote-icon" />

            <p className="recommendation-text">
              “{item.recommendation}”
            </p>

            <div className="recommendation-author">
              <img
                src={item.image}
                alt={item.name}
                className="recommendation-image"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    '/images/default-profile.png';
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.designation}
                  {item.company ? ` · ${item.company}` : ''}
                </p>
              </div>

              <a
                href={item.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${item.name} on LinkedIn`}
                className="recommendation-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="recommendations-action">
        <a
          href="https://www.linkedin.com/in/nayan-dholakia/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          <FaLinkedin />
          View Recommendations on LinkedIn
        </a>
      </div>
    </section>
  );
}