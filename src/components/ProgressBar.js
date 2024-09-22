import React from 'react';
import './ProgressBar.css';

function ProgressBar({ progress }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-bar-container">
      <svg className="progress-ring" width="120" height="120">
        <circle
          className="progress-ring__circle"
          stroke="white"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          style={{ strokeDashoffset, strokeDasharray: circumference }}
        />
      </svg>
    </div>
  );
}

export default ProgressBar;
