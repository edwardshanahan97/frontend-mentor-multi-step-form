import "./StepActions.css";

const StepActions = ({ currentStep, setCurrentStep }) => {
  const handleDecrement = () => {
    if (currentStep === 1) {
      return;
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleIncrement = () => {
    if (currentStep === 4) {
      return;
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="step-actions">
      {currentStep !== 1 && (
        <button onClick={handleDecrement} className="button__back">
          Go Back
        </button>
      )}

      {currentStep === 4 ? (
        <button className="button button__confirm">Confirm</button>
      ) : (
        <button
          form="sign-up"
          type="submit"
          onClick={handleIncrement}
          className="button button__next"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default StepActions;
