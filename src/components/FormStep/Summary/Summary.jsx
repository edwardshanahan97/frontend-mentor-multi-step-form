import "./Summary.css";
import { plans, addOns } from "../../../data/formOptions";

const Summary = ({ formData, setCurrentStep }) => {
  const findPlan = plans.find((plan) => formData.plan === plan.value);

  const findBilling = formData.billing;

  const planPrice = findPlan[`${findBilling}Price`];

  const selectedAddOns = addOns.filter((addOn) =>
    formData.addOns.includes(addOn.value),
  );

  const addOnsPrice = selectedAddOns.reduce(
    (acc, value) => value[`${findBilling}Price`] + acc,
    0,
  );

  const totalPrice = addOnsPrice + planPrice;

  return (
    <div className="summary">
      <h1 className="heading-1">Finishing up</h1>

      <p className="lead">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary__content">
        <div className="summary__plan">
          <div>
            <h2>
              {formData.plan} ({formData.billing})
            </h2>

            <button
              aria-label="Change Plan"
              onClick={() => setCurrentStep(2)}
              className="summary__change"
            >
              Change
            </button>
          </div>

          <p className="summary__plan-price">
            {findBilling === "monthly"
              ? `$${planPrice}/mo`
              : `$${planPrice}/yr`}
          </p>
        </div>

        <div className="summary__add-ons">
          {formData.addOns.length === 0 ? (
            <p className="summary__empty">No add-ons selected!</p>
          ) : (
            selectedAddOns.map((addOn, index) => (
              <div key={index} className="summary__add-on">
                <p className="summary__add-on-name">{addOn.name}</p>

                <p className="summary__add-on-price">
                  +${addOn[`${findBilling}Price`]}
                  {findBilling === "monthly" ? "/mo" : "/yr"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="summary__total">
        <p className="summary__total-name">Total (per {findBilling})</p>

        <p className="summary__total-price">
          +${totalPrice}
          {findBilling === "monthly" ? "/mo" : "/yr"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
