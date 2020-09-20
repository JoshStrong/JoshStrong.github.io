import React from "react";
import "./input.css";
export default function Input(props) {
  return (
    <div className="input">
      <input
        placeholder=" "
        onClick={props.removeError}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        autoComplete="off"
        ref={props.register}
      />
      <label className="input__label">
        <span className="input__labelContent">{props.placeholder}</span>
        <label
          className="input__label--errorIndicator"
          style={{ transform: props.error ? "translateX(0%)" : "" }}
        ></label>
        {props.error && (
          <span className="input__label--error">{props.error.message}</span>
        )}
      </label>
    </div>
  );
}
