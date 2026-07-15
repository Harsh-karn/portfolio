import "./styles/Work.css";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { projects } from "../data/projects";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="work-section" id="work">
      <div className="section-container">
        <h2>
          Featured <span>Work</span>
        </h2>
        
        <div className="work-grid">
          {displayProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="project-tech-item">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  data-cursor="disable"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    data-cursor="disable"
                  >
                    <MdArrowOutward />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && projects.length > 6 && (
          <button 
            className="view-more-btn"
            onClick={() => setShowAll(true)}
            data-cursor="disable"
          >
            View More Projects
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
