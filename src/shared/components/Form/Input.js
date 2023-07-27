import React from "react";

function Input(props) {
  const element =
    props.element === "input" ? (
      <input type="text" id={props.id} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );
  return (
    <div>
      <label>{props.label}</label>
      {element}
    </div>
  );
}
export default Input;
