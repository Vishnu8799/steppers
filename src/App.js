import React, { useState } from "react";
import BorrowerCompanyInfo from "./Components/BorrowerCompanyInfo";
import Header from "./Components/Header";
import Stepper from "./Components/Stepper";



function App() {

   const [currentStep, setCurrentStep] = useState(0);
    const steps = ["Browser Company Info"];

  return (
    <div className="App">
      <Header/>
      <div>
      <Stepper currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} />
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <BorrowerCompanyInfo/>
      </div>
    </div>
  );
}

export default App;
