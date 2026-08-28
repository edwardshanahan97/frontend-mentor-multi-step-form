import "./FormStep.css";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Plan from "./Plan/Plan";
import AddOns from "./AddOns/AddOns";
import Summary from "./Summary/Summary";
import Confirmation from "./Confirmation/Confirmation";

const FormStep = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  const steps = [PersonalInfo, Plan, AddOns, Summary, Confirmation];

  const CurrentStep = steps[currentStep - 1];

  return (
    <div className="form-step">
      <CurrentStep
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default FormStep;
