import "./StepActions.css";

const StepActions = ({ currentStep, setCurrentStep, formData }) => {
  const handleDecrement = () => {
    if (currentStep === 1) {
      return;
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleIncrement = () => {
    // if (!formData.name || !formData.email || !formData.phone) {
    //   return;
    // }

    if (currentStep === 5 || currentStep === 1) {
      return;
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    currentStep !== 5 && (
      <div className="step-actions">
        {currentStep !== 1 && (
          <button onClick={handleDecrement} className="button__back">
            Go Back
          </button>
        )}

        {currentStep === 4 ? (
          <button onClick={handleIncrement} className="button button__confirm">
            Confirm
          </button>
        ) : (
          <button
            form="sign-up"
            type="submit"
            onClick={handleIncrement}
            className="button button__next"
          >
            Next Step
          </button>
        )}
      </div>
    )
  );
};

export default StepActions;
