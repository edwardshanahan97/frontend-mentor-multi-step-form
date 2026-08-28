import "./Confirmation.css";
import IconTick from "../../../assets/images/icon-thank-you.svg";
const Confirmation = () => {
  return (
    <div className="confirmation">
      <img className="confirmation__img" src={IconTick} alt="Thank you icon" />

      <h1 className="heading-1">Confirmation</h1>

      <p className="lead">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirmation;
