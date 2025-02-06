import React, { useState } from "react";
import Stepper from "./Stepper.js";
import "./style.css";
import "./header.css";

const model = [
  {
    pageName: "BorrowerInfo",
    fields: [
      { fieldId: "1", fieldName: "Property Name", type: "string" },
      {
        fieldId: "2",
        fieldName: "Property Type",
        type: "dropdown",
        selectableValues: ["Own House", "Rented"],
      },
      {
        fieldId: "3",
        fieldName: "Number of Units",
        type: "dropdown",
        selectableValues: ["1", "2"],
      },
      { fieldId: "4", fieldName: "Property Address", type: "textarea" },
      { fieldId: "5", fieldName: "File Attachment", type: "file" },
    ],
  },
];

const BorrowerCompanyInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Browser Company Info"];

  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    numUnits: "",
    propertyAddress: "",
    file: null,
  });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({ ...prevData, [name]: value }));
  //   };

  const handleChange = (fieldId, value) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  return (
    // <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px", backgroundColor: "#f4f4f4" }}>
    //   <div style={{ width: "100%", maxWidth: "600px", padding: "20px", backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
    //   <Stepper currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} />
    //     <h2>Borrower Company Info</h2>
    //     <div style={{ height: "6px", backgroundColor: "#ddd", borderRadius: "3px", margin: "10px 0" }}>
    //       <div style={{ width: "20%", height: "100%", backgroundColor: "#007bff", borderRadius: "3px" }}></div>
    //     </div>
    //      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
    //       {model[0].fields.map((field) => (
    //         <div key={field.fieldId} style={{ width: "100%" }}>
    //           {field.type === "string" && (
    //             <input
    //               type="text"
    //               placeholder={field.fieldName}
    //               value={formData[field.fieldId] || ""}
    //               onChange={(e) => handleChange(field.fieldId, e.target.value)}
    //               style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
    //             />
    //           )}
    //           {field.type === "dropdown" && (
    //             <select
    //               value={formData[field.fieldId] || ""}
    //               onChange={(e) => handleChange(field.fieldId, e.target.value)}
    //               style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
    //             >
    //               <option value="">Select {field.fieldName}</option>
    //               {field.selectableValues.map((option, index) => (
    //                 <option key={index} value={option}>{option}</option>
    //               ))}
    //             </select>
    //           )}
    //           {field.type === "textarea" && (
    //             <textarea
    //               placeholder={field.fieldName}
    //               value={formData[field.fieldId] || ""}
    //               onChange={(e) => handleChange(field.fieldId, e.target.value)}
    //               style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
    //             />
    //           )}
    //           {field.type === "file" && (
    //             <input
    //               type="file"
    //               onChange={(e) => handleChange(field.fieldId, e.target.files[0])}
    //               style={{ display: "block", marginTop: "5px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "100%" }}
    //             />
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //     <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    //       <button style={{ padding: "10px 15px", border: "1px solid #007bff", backgroundColor: "white", color: "#007bff", borderRadius: "5px", cursor: "pointer" }} disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
    //       <button style={{ padding: "10px 15px", border: "none", backgroundColor: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" }} onClick={() => setCurrentStep(currentStep + 1)}>Continue</button>
    //     </div>
    //   </div>
    // </div>
    <div className="form-container">
      <div className="heading">
        <h2 style={{fontWeight:'bold',fontSize:'20px'}}>Borrower Company Info</h2>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="grid-container">
        {model[0].fields.map((field) => (
          <div key={field.fieldId} className="input-group">
            {field.type === "string" && (
              <input
                type="text"
                placeholder={field.fieldName}
                value={formData[field.fieldId] || ""}
                onChange={(e) => handleChange(field.fieldId, e.target.value)}
              />
            )}
            {field.type === "dropdown" && (
              <select
                value={formData[field.fieldId] || ""}
                onChange={(e) => handleChange(field.fieldId, e.target.value)}
              >
                <option value="">Select {field.fieldName}</option>
                {field.selectableValues.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.type === "textarea" && (
              <textarea
                placeholder={field.fieldName}
                value={formData[field.fieldId] || ""}
                onChange={(e) => handleChange(field.fieldId, e.target.value)}
              />
            )}
            {field.type === "file" && (
              <input
                type="file"
                onChange={(e) => handleChange(field.fieldId, e.target.files[0])}
              />
            )}
          </div>
        ))}
      </div>
      <div className="button-group">
        <button
          className="back-button"
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </button>
        <button
          className="continue-button"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BorrowerCompanyInfo;
