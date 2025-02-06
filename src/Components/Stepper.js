import React from "react";

const Stepper = ({ currentStep, steps, setCurrentStep }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          onClick={() => setCurrentStep(index)}
          style={{
            padding: "10px 20px",
            margin: "0 5px",
            cursor: "pointer",
            borderBottom:
              currentStep === index ? "2px solid blue" : "2px solid gray",
            color: currentStep === index ? "blue" : "gray",
            fontWeight: "bold",
          }}
        >
          {/* {step} */}
          <nav className="progress-nav">
            <div className="step active">1</div>
            <div style={{display:'flex'}}>Borrower Company Info</div>
            <div className="step">2</div>
            <span>Director Info</span>
            <div className="step">3</div>
            <span>Financial Info</span>
            <div className="step">4</div>
            <span>Past Performance Details</span>
            <div className="step">5</div>
            <span>Document Upload</span>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
