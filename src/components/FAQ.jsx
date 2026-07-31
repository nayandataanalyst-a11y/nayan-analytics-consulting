import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What happens during the free discovery call?",
    answer:
      "The discovery call is a short introductory conversation to understand your reporting challenge, current systems, priorities and expected outcomes. It helps determine whether the requirement is a good fit for my consulting services.",
  },
  {
    id: 2,
    question: "Can you review and optimize an existing Power BI report?",
    answer:
      "Yes. I can review the semantic model, DAX measures, Power Query transformations, refresh process, report navigation and visual performance. The engagement can include an assessment report, recommendations or hands-on optimization.",
  },
  {
    id: 3,
    question: "Do you work with Microsoft Dynamics 365 and Business Central?",
    answer:
      "Yes. My ERP analytics experience includes Microsoft Dynamics 365 Business Central and Dynamics 365 Finance & Operations, along with OData, APIs, finance reporting, sales analytics and multi-company reporting.",
  },
  {
    id: 4,
    question: "Can you help before dashboard development begins?",
    answer:
      "Yes. Consulting can begin with KPI identification, reporting strategy, dashboard planning, architecture review, data-source assessment and a prioritized analytics roadmap before any development starts.",
  },
  {
    id: 5,
    question: "Do you offer Microsoft Fabric consulting?",
    answer:
      "Yes. Fabric consulting can include readiness assessment, architecture guidance, Lakehouse and Warehouse planning, data-pipeline strategy, governance considerations and a phased adoption roadmap.",
  },
  {
    id: 6,
    question: "Can you work with organizations outside India?",
    answer:
      "Yes. Consulting sessions, assessments, reviews and implementation support can be delivered remotely for organizations in different regions and time zones.",
  },
  {
    id: 7,
    question: "Do you provide training or mentoring for internal teams?",
    answer:
      "Yes. Training and mentoring can be included for Power BI developers, analysts, reporting teams and business users. Topics can cover data modelling, DAX, report design, optimization and Microsoft Fabric.",
  },
  {
    id: 8,
    question: "How is the final consulting fee determined?",
    answer:
      "The fee depends on the scope, complexity, available documentation, number of reports or data sources, expected deliverables and timeline. After the initial discussion, I provide a clearly defined engagement proposal.",
  },
  {
    id: 9,
    question: "Can you sign an NDA?",
    answer:
      "Yes. I can review and sign an appropriate non-disclosure agreement before accessing confidential business data, reports or technical documentation.",
  },
  {
    id: 10,
    question: "How does a consulting engagement usually begin?",
    answer:
      "It normally starts with a discovery call, followed by requirement clarification and scope definition. Once the scope is agreed, the engagement proceeds through assessment, recommendations, delivery and a final review.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="section alt faq-section" id="faq">
      <div className="faq-wrapper">
        <div className="section-heading">
          <span>Frequently Asked Questions</span>

          <h2>What to know before starting a consulting engagement</h2>

          <p className="section-description">
            Answers to common questions about consulting services, project
            scope, ERP analytics, Power BI optimization and Microsoft Fabric.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <article
                className={isOpen ? "faq-item open" : "faq-item"}
                key={faq.id}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>

                  <FaChevronDown />
                </button>

                <div
                  className="faq-answer"
                  id={`faq-answer-${faq.id}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq-cta">
          <div>
            <span>Still have a question?</span>

            <h3>Let’s discuss your reporting or analytics requirement.</h3>
          </div>

          <a className="button primary" href="#book-meeting">
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}