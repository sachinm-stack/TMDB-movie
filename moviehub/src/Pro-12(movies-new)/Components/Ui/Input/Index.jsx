import React from "react";
import "./index.css";

const InputField = ({ onChange, value, type = "text", name, placeholder }) => {
  return (
    <div className="input-container">
      <input
        id={name}
        className="input-field"
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;