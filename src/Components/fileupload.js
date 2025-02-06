import React, { useState } from "react";
import './fileupload.css'

const FileUpload = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div
      className={`file-upload ${dragActive ? "active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById("fileInput").click()}
    >
      <p>Drag & Drop your file here or <strong>Click to Upload</strong></p>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
      />
      {fileName && <div className="uploaded-files">Uploaded: <span>{fileName}</span></div>}
    </div>
  );
};

export default FileUpload;
