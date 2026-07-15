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
              Deep dived into massive industrial datasets to spot hidden trends and 
              drop actionable insights that leveled up production efficiency. 
              Mainly cooked with SQL and Python to clean up the data and build slick visuals.
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
              Built out end-to-end web apps from scratch using the MERN stack 
              and spun up interactive data dashboards with Streamlit and Python. 
              All about shipping clean code and turning raw data into absolute Win.
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
              On the hunt for roles where I can jump in as a Full Stack Dev, 
              AI Engineer, or Data Analyst. Fully locked in and ready to leverage 
              my tech stack to tackle real-world problems and ship absolute Win.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
