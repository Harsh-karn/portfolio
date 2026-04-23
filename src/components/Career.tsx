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
                <h4>Data Analyst Intern</h4>
                <h5>Bhilai Steel Plant</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Analyzed large-scale industrial datasets to identify operational
              trends and provide data-driven insights for improving production
              efficiency. Worked with SQL and Python for data preprocessing and
              visualization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & Data Projects</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Focused on building end-to-end web applications using the MERN
              stack and developing interactive data dashboards using Streamlit
              and Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open for New Opportunities</h4>
                <h5>Full-time Roles</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively seeking opportunities to contribute as a Full Stack
              Developer or Data Analyst. Ready to apply my technical skills to
              solve real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
