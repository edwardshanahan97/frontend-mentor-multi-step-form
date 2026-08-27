import { useState } from "react";
import "./PersonalInfo.css";

const PersonalInfo = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
}) => {
  const [error, setError] = useState({
    nameError: false,
    emailError: false,
    phoneError: false,
  });

  const handleForm = (event) => {
    event.preventDefault();

    const userName = event.target.name.value.trim();
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const isNameValid = userName !== "";
    const isEmailValid = event.target.email.validity.valid;
    const isPhoneValid = event.target.phone.validity.valid;

    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      setError({
        nameError: !isNameValid,
        emailError: !isEmailValid,
        phoneError: !isPhoneValid,
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      name: userName,
      email: email,
      phone: phone,
    }));

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="personal-info">
      <h1 className="heading-1">Personal Info</h1>

      <p className="lead">
        Please provide your name, email address, and phone number.
      </p>

      <form id="sign-up" onSubmit={handleForm} noValidate>
        <div className="personal-info__group">
          <label className="personal-info__label" htmlFor="name">
            <span className="personal-info__text">Name</span>

            {error.nameError && (
              <span className="personal-info__error">
                This field is required
              </span>
            )}
          </label>

          <input
            onBlur={(event) =>
              setError((prev) => ({
                ...prev,
                nameError: event.target.value.trim() === "",
              }))
            }
            placeholder="e.g. John Doe"
            className={`personal-info__input ${error.nameError ? "error" : ""}`}
            id="name"
            type="text"
            name="name"
            required
            defaultValue={formData.name}
          />
        </div>

        <div className="personal-info__group">
          <label className="personal-info__label" htmlFor="email">
            <span className="personal-info__text">Email</span>

            {error.emailError && (
              <span className="personal-info__error">
                This field is required
              </span>
            )}
          </label>

          <input
            onBlur={(event) =>
              setError((prev) => ({
                ...prev,
                emailError: !event.target.validity.valid,
              }))
            }
            placeholder="e.g. johndoe@email.com"
            className={`personal-info__input ${error.emailError ? "error" : ""}`}
            id="email"
            type="email"
            name="email"
            required
            defaultValue={formData.email}
          />
        </div>

        <div className="personal-info__group">
          <label className="personal-info__label" htmlFor="phone">
            <span className="personal-info__text">Phone Number</span>

            {error.phoneError && (
              <span className="personal-info__error">
                This field is required
              </span>
            )}
          </label>

          <input
            onBlur={(event) =>
              setError((prev) => ({
                ...prev,
                phoneError: !event.target.validity.valid,
              }))
            }
            placeholder="e.g. +1 234 567 890"
            className={`personal-info__input ${error.phoneError ? "error" : ""}`}
            id="phone"
            type="tel"
            name="phone"
            required
            pattern="\+?[0-9 ]{7,15}"
            defaultValue={formData.phone}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
