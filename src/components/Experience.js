import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
    {
      company: "University of Nebraska Omaha (UNO)",
      duration: "July 2023 - Present",
      description: `I joined the University of Nebraska Omaha as a Graduate Research Assistant in July 2023, 
      working in the field of Digital Twin, DL-based Networking Congestion Control, and Cyber Physical Systems.`,
      tasks: [
        "Worked on Digital Twin-based systems.",
        "Developed DL-based networking congestion control solutions.",
        "Involved in Cyber Physical System research."
      ]
    },
    {
      company: "University of Nebraska Omaha (UNO)",
      duration: "Aug 2022 - June 2023",
      description: `Worked as a Graduate Research Assistant focusing on Networking Security and Privacy, 
      Virtual Reality Privacy, and Machine Learning (ML) for IoT’s Congestion Control.`,
      tasks: [
        "Researched networking security and privacy.",
        "Worked on Virtual Reality Privacy projects.",
        "Developed ML models for IoT’s congestion control."
      ]
    },
    {
      company: "Samsung R&D Institute Bangladesh",
      duration: "Dec 2018 – Jul. 2022",
      description: `Worked as a Software Engineer, specializing in cloud data processing, IoT device communication, 
      and optimizing onboarding systems for IoT devices.`,
      tasks: [
        "Fetched, parsed, and displayed cloud data to users.",
        "Communicated with IoT devices for seamless integration.",
        "Optimized IoT device onboarding systems for the cloud."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="title-container">
        <h1>Work Experience</h1> {/* Title at the top */}
      </div>
      
      <div className="experience-content">
        <div className="experience-companies">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-company ${selectedCompany === index ? 'active' : ''}`}
              onClick={() => setSelectedCompany(index)}
            >
              <h2>{exp.company}</h2>
            </div>
          ))}
        </div>
        <div className="experience-details">
          <h2>{experiences[selectedCompany].company}</h2>
          <p className="duration">{experiences[selectedCompany].duration}</p>
          <p>{experiences[selectedCompany].description}</p>
          <ul>
            {experiences[selectedCompany].tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
