import { PropsWithChildren, useEffect, useState } from "react";
import { profile } from "../data/profile";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = profile.roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayedRole === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayedRole(
        currentRole.substring(0, displayedRole.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              HARSH
              <br />
              <span>KARN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              {displayedRole}
              <span className="cursor">|</span>
            </h2>
            <p className="landing-value-prop">{profile.valueProposition}</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
