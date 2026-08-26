import { useState } from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const [error, setError] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <div className="personal-info">
      <h1 className="heading-1">Personal Info</h1>

      <p className="lead">
        Please provide your name, email address, and phone number.
      </p>

      <form id="sign-up" onSubmit={handleForm}>
        <div className="personal-info__group">
          <label className="personal-info__label" htmlFor="name">
            <span className="personal-info__text">Name</span>

            {error && (
              <span className="personal-info__error">
                This field is required
              </span>
            )}
          </label>

          <input
            placeholder="e.g. John Doe"
            className="personal-info__input"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>

        <div className="personal-info__group">
          <label className="personal-info__label" htmlFor="email">
            <span className="personal-info__text">Email</span>

            {error && (
              <span className="personal-info__error">
                This field is required
              </span>
            )}
          </label>

          <input
            placeholder="e.g. johndoe@email.com"
            className="personal-info__input"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>

        <div className="personal-info__group">
          <label className="personal-info__label" htmlFor="phone">
            <span className="personal-info__text">Phone Number</span>

            {error && (
              <span className="personal-info__error">
                This field is required
              </span>
            )}
          </label>

          <input
            placeholder="e.g. 123-123-123"
            className="personal-info__input"
            id="phone"
            type="tel"
            name="email"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
