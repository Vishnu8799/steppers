import React from "react";
import "./stepper.css"; // Ensure to include this CSS

const Stepper = ({ currentStep }) => {
  const steps = [
    "Borrower Company Info",
    "Director Info",
    "Financial Info",
    "Past Performance Details",
    "Document Upload",
  ];

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div key={index} className="step-item">
          {/* Step Number */}
          <div className={`step-circle ${index === currentStep ? "active" : ""} ${index < currentStep ? "completed" : ""}`}>
            {index + 1}
          </div>

          {/* Dotted Line (Not for last step) */}
          {index !== steps.length - 1 && <div className="dotted-line"></div>}

          {/* Step Label */}
          <span className={`step-label ${index === currentStep ? "active-label" : ""}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
