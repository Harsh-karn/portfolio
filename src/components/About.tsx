import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m a Full Stack Developer and Data Analyst focused on building
          scalable web applications and turning data into meaningful insights. I
          work with modern technologies like MERN, Next.js, TypeScript, and use
          Python for data analysis. <br /> <br /> I enjoy solving problems, writing
          efficient code, and building solutions that are both practical and
          impactful.
        </p>
        <div className="education">
          <h4 className="title">Education</h4>
          <p className="para">
            <strong>B.Tech in Information Technology</strong> <br />
            Class of 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
