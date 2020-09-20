import React from "react";
import "./textarea.css";
export default function Textarea(props) {
  return (
    <div className="textarea">
      <textarea
        placeholder=" "
        onClick={props.removeError}
        name={props.name}
        onChange={props.onChange}
        ref={props.register}
      />
      <label className="textarea__label">
        <span className="textarea__labelContent">{props.placeholder}</span>
        <label
          className="textarea__label--errorIndicator"
          style={{ transform: props.error ? "translateX(0%)" : "" }}
        ></label>
        {props.error && (
          <span className="textarea__label--error">{props.error.message}</span>
        )}
      </label>
    </div>
  );
}
