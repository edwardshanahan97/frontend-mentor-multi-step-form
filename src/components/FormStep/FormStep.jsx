import "./FormStep.css";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const FormStep = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  return (
    <div className="form-step">
      {currentStep === 1 && (
        <PersonalInfo
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </div>
  );
};

export default FormStep;
