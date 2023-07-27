import React from "react";
import "./Input.css";
function Input(props) {
  const element =
    props.element === "input" ? (
      <input type="text" id={props.id} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );
  return (
    <div className={`form-control`}>
      <label>{props.label}</label>
      {element}
    </div>
  );
}
export default Input;
