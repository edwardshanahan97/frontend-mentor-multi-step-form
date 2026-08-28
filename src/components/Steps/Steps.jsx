import "./Steps.css";
import { stepData } from "../../data/formOptions";

const Steps = ({ currentStep }) => {
  const activeStep = currentStep === 5 ? 4 : currentStep;
  return (
    <div className="steps">
      {stepData.map((step) => (
        <div key={step.id} className={`steps__step `}>
          <div
            className={`steps__number ${step.number === activeStep ? "active" : ""}`}
          >
            <span>{step.number}</span>
          </div>

          <div className="steps__content">
            <p>Step {step.number}</p>
            <h2>{step.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
