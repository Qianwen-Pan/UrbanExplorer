import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: false,
      };
    default:
      return state;
  }
};
function Input(props) {
  const initialState = { value: "", isValid: false };
  const [state, dispatch] = useReducer(inputReducer, initialState);
    const changeHandler = (event) => {

    }
  const element =
    props.element === "input" ? (
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        onChange={(event) => dispatch({type: "CHANGE", val: event.target.value})}
      />
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
