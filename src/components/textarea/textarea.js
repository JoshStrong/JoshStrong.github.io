import React from "react";
import "./textarea.css";
export default function Textarea(props) {
  return (
    <div className="textarea">
      <textarea
        value={props.value.input}
        placeholder=" "
        onClick={props.removeError}
        name={props.name}
        onChange={props.onChange}
      />
      <label className="textarea__label">
        <span className="textarea__labelContent">{props.placeholder}</span>
        <label
          className="textarea__label--errorIndicator"
          style={{ transform: props.value.isError ? "translateX(0%)" : "" }}
        ></label>
        <span className="textarea__label--error">{props.value.errorMsg}</span>
      </label>
    </div>
  );
}
