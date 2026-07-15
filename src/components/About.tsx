import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m a Full Stack Developer & AI Engineer focused on building scalable web applications 
          and turning data into meaningful insights. I specialize in the MERN stack, Next.js, and TypeScript, 
          while leveraging Python for data analysis, RAG pipelines, and LLM integrations. <br /> <br /> 
          From robust backend architecture to intelligent frontend interfaces, I enjoy writing 
          efficient code and solving complex problems to deliver solutions that are both practical and impactful.
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
