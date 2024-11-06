import React from 'react';
import './About.css';
import unoLogo from '../assets/uno_logo.png';
import sustLogo from '../assets/sust_logo.png';

function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        I’m Md Ruman Islam, a dedicated researcher and software engineer with a keen focus on computing and information science. Currently, I’m pursuing my Ph.D. at the University of Nebraska Omaha, where I work on innovative topics like digital twins, deep learning for networking congestion control, and cybersecurity. My academic journey began with a B.Sc. in Computer Science and Engineering from Shahjalal University of Science and Technology in Bangladesh, followed by a rewarding role as a Software Engineer at Samsung R&D Institute.
      </p>
      <p>
        My research interests lie in the realms of cybersecurity, cyber-physical systems, IoT, and machine learning. Driven by the challenge of bridging academia and industry, I continuously strive to advance solutions in these fields. I’ve been honored with the GRACA Grant at UNO and the SRBD Icon of the Month award from Samsung, recognizing my dedication and contributions.
      </p>

      <h2>Research Interests</h2>
      <ul className="research-interests">
        <li>Cybersecurity</li>
        <li>Cyber-Physical Systems</li>
        <li>Internet of Things (IoT)</li>
        <li>Machine Learning</li>
      </ul>

      <h2>Education</h2>
      <div className="education-container">
        {/* Ph.D. Entry */}
        <div className="education-item">
          <img src={unoLogo} alt="UNO Logo" className="education-logo" />
          <div className="education-details">
            <h3>University of Nebraska Omaha (UNO)</h3>
            <p className="degree">Doctor of Philosophy (Ph.D.), Computing & Information Science</p>
            <p className="dates">Aug. 2022 - Present</p>
          </div>
        </div>

        {/* M.Sc. Entry */}
        <div className="education-item">
          <img src={unoLogo} alt="UNO Logo" className="education-logo" />
          <div className="education-details">
            <h3>University of Nebraska Omaha (UNO)</h3>
            <p className="degree">Master of Science (M.Sc.), Computing & Information Science</p>
            <p className="dates">Aug. 2022 - Present</p>
          </div>
        </div>

        {/* B.Sc. Entry */}
        <div className="education-item">
          <img src={sustLogo} alt="SUST Logo" className="education-logo" />
          <div className="education-details">
            <h3>Shahjalal University of Science and Technology (SUST)</h3>
            <p className="degree">Bachelor of Science (B.Sc.), Computer Science and Engineering</p>
            <p className="dates">Apr. 2014 - Dec. 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
