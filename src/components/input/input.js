import React from "react";
import "./input.css";
export default function Input(props) {
  return (
    <div className="input">
      <input
        value={props.value.input}
        placeholder=" "
        onClick={props.removeError}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        autocomplete="off"
      />
      <label className="input__label">
        <span className="input__labelContent">{props.placeholder}</span>
        <label
          className="input__label--errorIndicator"
          style={{ transform: props.value.isError ? "translateX(0%)" : "" }}
        ></label>
        <span className="input__label--error">{props.value.errorMsg}</span>
      </label>
    </div>
  );
}
