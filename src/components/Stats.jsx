import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 1,
    value: 80,
    suffix: "+",
    label: "Dashboards Delivered",
  },
  {
    id: 2,
    value: 20,
    suffix: "+",
    label: "Clients Supported",
  },
  {
    id: 3,
    value: 20,
    suffix:"+",
    label: "AppSource Solutions",
  },
  {
    id: 4,
    value: 5,
    suffix: "+",
    label: "Industries Served",
  },
  {
    id: 5,
    value: 200,
    suffix: "+",
    label: "Business KPIs Designed",
  },
];

function AnimatedNumber({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1300;
    const intervalTime = 25;
    const totalSteps = duration / intervalTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <strong>
      {count}
      {suffix}
    </strong>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-intro">
          <span>Experience in Numbers</span>

          <h2>
            Practical analytics experience across industries and Microsoft
            platforms
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-item" key={stat.id}>
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                start={startAnimation}
              />

              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}