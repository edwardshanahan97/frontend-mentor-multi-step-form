import "./Plan.css";
import { plans } from "../../../data/formOptions";

const Plan = ({ formData, setFormData }) => {
  return (
    <div className="plan">
      <h1 className="heading-1">Select your plan</h1>

      <p className="lead">You have the option of monthly or yearly billing.</p>

      <div className="plan__options">
        {plans.map((plan) => (
          <label key={plan.id} className="plan__option">
            <input
              type="radio"
              name="plan"
              value={plan.value}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, plan: event.target.value }))
              }
              checked={formData.plan === plan.value}
            />

            <img src={plan.icon} alt={plan.name} />

            <div className="plan__content">
              <div className="plan__info">
                <h2 className="heading-2">{plan.name}</h2>

                <span>
                  {formData.billing === "monthly"
                    ? `$${plan.monthlyPrice}/mo`
                    : `$${plan.yearlyPrice}/yr`}
                </span>
              </div>

              <div className="plan__free">
                {formData.billing === "yearly" && <p>2 months free</p>}
              </div>
            </div>
          </label>
        ))}
      </div>

      <div className="plan__action">
        <span className={formData.billing === "monthly" ? "active" : ""}>
          Monthly
        </span>

        <label className="plan__switch">
          <input
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                billing: prev.billing === "monthly" ? "yearly" : "monthly",
              }))
            }
            type="checkbox"
            checked={formData.billing === "yearly"}
          />

          <span></span>
        </label>

        <span className={formData.billing === "yearly" ? "active" : ""}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Plan;
