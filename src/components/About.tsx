import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m a multidisciplinary dev who lives at the intersection of Full Stack Engineering, AI, and Data Analytics. 
          I’m all about cooking up scalable web apps using Next.js, TypeScript, and Node.js, and seamlessly plugging in 
          advanced LLMs, RAG pipelines, and autonomous agents to build experiences that just hit different. <br /> <br /> 
          Whether I'm architecting rock-solid backend infrastructures, engineering real-time data solutions, or pulling 
          actionable business insights using Python and modern data tools, my vibe is always focused on solving complex 
          problems with clean, high-impact code. No fluff, just shipping products that work.
        </p>
        <div className="education" style={{ marginTop: '3rem' }}>
          <h3 className="title">Education</h3>
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
