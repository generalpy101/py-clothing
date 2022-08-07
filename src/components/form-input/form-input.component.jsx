import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && <input {...otherProps} className={"form-input"} />}
      <label
        className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
