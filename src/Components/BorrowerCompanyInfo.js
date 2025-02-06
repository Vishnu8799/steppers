import React, { useState } from "react";
import Stepper from "./Stepper.js";
import "./style.css";
import "./header.css";
import FileUpload from "./fileupload.js";

const BorrowerCompanyInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    numUnits: "",
    propertyAddress: "",
    file: null,
  });

  const handleChange = (fieldId, value) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  return (
    <div className="form-container">
      <div className="heading">
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
          Borrower Company Info
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="grid-container">
        {/* First Row: Property Name, Property Type, Number of Units */}
        <div className="input-row">
          <div className="input-group">
            <label>Property Name</label>
            <input
              type="text"
              placeholder="Enter property name"
              value={formData.propertyName || ""}
              onChange={(e) => handleChange("propertyName", e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Property Type</label>
            <select
              value={formData.propertyType || ""}
              onChange={(e) => handleChange("propertyType", e.target.value)}
            >
              <option value="">Select Property Type</option>
              <option value="Own House">Own House</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
          <div className="input-group">
            <label>Number of Units</label>
            <select
              value={formData.numUnits || ""}
              onChange={(e) => handleChange("numUnits", e.target.value)}
            >
              <option value="">Select Number of Units</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>

        {/* Second Row: Property Address */}
        <div className="input-group">
          <label>Property Address</label>
          <textarea
            placeholder="Enter property address"
            value={formData.propertyAddress || ""}
            onChange={(e) => handleChange("propertyAddress", e.target.value)}
          />
        </div>
      </div>

      {/* Sticky File Upload Section */}
      <label>Property Address</label>
        <FileUpload onFileSelect={(file) => handleChange("file", file)} />
        {formData.file && <p className="file-path">{formData.file.name}</p>}
      

      {/* Sticky Button Section */}
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

      {/* Sticky Footer */}
      <div className="footer">
        <p>© 2025 Borrower Company Info - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default BorrowerCompanyInfo;
