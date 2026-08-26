import "./Steps.css";

const stepData = [
  { id: 1, number: 1, text: "Your Info" },
  { id: 2, number: 2, text: "Select Plan" },
  { id: 3, number: 3, text: "Add-Ons" },
  { id: 4, number: 4, text: "Summary" },
];

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      {stepData.map((step) => (
        <div key={step.id} className={`steps__step `}>
          <div
            className={`steps__number ${step.number === currentStep ? "active" : ""}`}
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
