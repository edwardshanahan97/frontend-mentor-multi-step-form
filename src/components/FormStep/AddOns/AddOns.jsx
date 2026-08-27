import "./AddOns.css";
import { addOns } from "../../../data/formOptions";

const AddOns = ({ formData, setFormData }) => {
  return (
    <div className="add-ons">
      <h1>Pick add-ons</h1>

      <p className="lead">Add-ons help enhance your gaming experience.</p>

      <div className="add-ons__options">
        {addOns.map((addOn) => (
          <label key={addOn.id} className="add-ons__option">
            <input
              type="checkbox"
              name="addOns"
              value={addOn.value}
              checked={formData.addOns.includes(addOn.value)}
              onChange={(event) => {
                const value = event.target.value;
                const isChecked = event.target.checked;

                setFormData((prev) => ({
                  ...prev,
                  addOns: isChecked
                    ? [...prev.addOns, value]
                    : prev.addOns.filter((item) => item !== value),
                }));
              }}
            />

            <div className="add-ons__content">
              <h2 className="heading-2">{addOn.name}</h2>

              <p>{addOn.description}</p>
            </div>

            <span className="add-on__price">
              {formData.billing === "monthly"
                ? `$${addOn.monthlyPrice}/mo`
                : `+$${addOn.yearlyPrice}/yr`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddOns;
