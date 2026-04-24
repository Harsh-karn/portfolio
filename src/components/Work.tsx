import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Scroll-linked image entrance animations
  gsap.utils.toArray<Element>(".work-image").forEach((imgWrapper) => {
    gsap.fromTo(
      imgWrapper,
      { scale: 1.07, opacity: 0.4, y: 12 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgWrapper,
          containerAnimation: timeline,
          start: "left 95%",
          end: "left 45%",
          scrub: true,
        },
      }
    );
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      title: "Finance Buddy",
      category: "Full Stack / AI Finance",
      tools: "Next.js, React, TypeScript, Tailwind CSS",
      image: "/images/finance_buddy.png",
      github: "https://github.com/Harsh-karn/FInance-Buddy",
      liveLink: "https://finance-buddy-main.vercel.app/",
    },
    {
      title: "AI Interview Agent",
      category: "Full Stack / AI Education",
      tools: "Next.js, TypeScript, Firebase, Tailwind CSS",
      image: "/images/ai_interview.png",
      github: "https://github.com/Harsh-karn/AI-Interview-Agent",
      liveLink: "https://ai-interview-vert-five.vercel.app/sign-in",
    },
    {
      title: "Used Car Analysis",
      category: "Data Science / Analysis",
      tools: "Python, Streamlit, Pandas, Scikit-learn",
      image: "/images/car_analysis.png",
      github: "https://github.com/Harsh-karn/Used_Car_Analysis",
      liveLink: "https://analysis-used-car.streamlit.app/",
    },
    {
      title: "WhatsApp Chat Analyzer",
      category: "Data Analysis",
      tools: "Python, Streamlit, Pandas, Plotly",
      image: "/images/whatsapp_analyzer.png",
      github: "https://github.com/Harsh-karn/Whatsapp-Chat-Analyzer",
      liveLink: "https://whatsapp-analyzer-chat.streamlit.app/",
    },
    {
      title: "Airlines Data Analysis",
      category: "Data Analysis",
      tools: "Python, SQL (SQLite), Pandas, Streamlit, Dimensional Modelling",
      image: "/images/airlines_analysis.png",
      github: "https://github.com/Harsh-karn/Airlines-Data-Analysis",
      liveLink: "https://airlines-analysis.streamlit.app/",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-btn work-project-btn--github"
                    data-cursor="disable"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-btn work-project-btn--live"
                    data-cursor="disable"
                  >
                    <MdArrowOutward />
                    <span>Live Site</span>
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.liveLink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
