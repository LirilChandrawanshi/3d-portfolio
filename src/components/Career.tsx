import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Univest, Investment & Finance Platform</h5>
              </div>
              <h3>Jul 2025 - Present</h3>
            </div>
            <p>
              Built end-to-end subscription-based brokerage plans system using Next.js (SSR) for a fintech
              platform with 100k+ daily active users. Implemented institutional trade pricing, coupons, auto-pay
              discounts, and GST calculations. Orchestrated the build-out of a News CMS utilizing Spring Boot,
              establishing comprehensive CRUD functionality; integrated German AI API for news tagging and cutting-edge information time by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer Intern</h4>
                <h5>Monkhub Innovations, Changemakers' Ecosystem Project</h5>
              </div>
              <h3>Apr 2025 - Jul 2025</h3>
            </div>
            <p>
              Engineered scalable REST APIs with Java and Spring Boot, modernizing legacy systems and optimizing
              data retrieval. Resolved API performance bottlenecks by refactoring GET to POST endpoints, improving
              efficiency by 40%. Collaborated with a team of 5 developers on backend architecture design, ensuring
              seamless integration with frontend components and smooth data flow across microservices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
