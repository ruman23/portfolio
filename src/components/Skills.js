import React from 'react';
import './Skills.css';

function Skills() {
  // Toggle this to true only when you want to show the robotics/simulation stack
  const includeRobotics = false;

  const skills = [
    {
      category: "Programming",
      items: ["Python (Proficient)", "Swift (Familiar)", "C++ (Familiar)", "Java (Familiar)", "JavaScript (Familiar)"],
    },
    {
      category: "Machine Learning & AI",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    },
    {
      category: "Development Tools & Platforms",
      items: ["Git", "Jupyter Notebook", "Linux", "Windows", "macOS"],
    },
    {
      category: "Databases",
      items: ["MySQL (Proficient)", "MongoDB (Familiar)"],
    },
    {
      category: "Collaboration & PM",
      items: ["Jira", "Slack"],
    },
  ];

  const robotics = {
    category: "Simulation & Autonomous Systems (Optional)",
    items: ["ns-3", "Autoware.AI", "OpenAI Gym"],
  };

  const finalSkills = includeRobotics ? [...skills, robotics] : skills;

  return (
    <section id="skills">
      <h1>Technical Skills</h1>
      {finalSkills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h2>{skillCategory.category}</h2>
          <div className="skills-container">
            {skillCategory.items.map((skill, idx) => (
              <div key={idx} className="skill-circle">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
