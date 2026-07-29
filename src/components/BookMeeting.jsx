import { InlineWidget } from 'react-calendly';
import { FaCalendarAlt } from 'react-icons/fa';

export default function BookMeeting() {
  return (
    <section className="section booking-section" id="book-meeting">
      <div className="section-heading">
        <span>Let’s connect</span>
        <h2>Book a Meeting</h2>
        <p>
          Schedule a one-to-one discussion about Power BI, Power Platform,
          Microsoft Fabric, Azure Data Engineering or analytics consulting.
        </p>
      </div>

      <div className="booking-container">
        <div className="booking-intro">
          <div className="booking-icon">
            <FaCalendarAlt />
          </div>

          <h3>Choose a convenient time</h3>

          <p>
            Select an available meeting slot directly from my calendar. After
            booking, you will receive the meeting details and confirmation.
          </p>
        </div>

        <div className="calendly-container">
          <InlineWidget
            url="https://calendly.com/nayan-dataanalyst/30min"
            styles={{
              height: '800px',
              minWidth: '320px',
            }}
          />
        </div>
      </div>
    </section>
  );
}