import { useState } from "react";
import Steps from "../Steps/Steps";
import "./Form.css";
import StepActions from "../StepActions/StepActions";
import FormStep from "../FormStep/FormStep";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="form">
      <Steps currentStep={currentStep} />

      <FormStep />

      <StepActions currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </section>
  );
};

export default Form;
