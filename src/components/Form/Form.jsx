import { useState } from "react";
import Steps from "../Steps/Steps";
import "./Form.css";
import StepActions from "../StepActions/StepActions";
import FormStep from "../FormStep/FormStep";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    billing: "monthly",
    addOns: [],
  });

  return (
    <section className="form">
      <Steps currentStep={currentStep} />

      <FormStep
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        setFormData={setFormData}
        formData={formData}
      />

      <StepActions
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        setFormData={setCurrentStep}
        formData={formData}
      />
    </section>
  );
};

export default Form;
