import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};
function Input(props) {
  const initialState = { value: "", isValid: false };
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };
  const element =
    props.element === "input" ? (
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  return (
    <div className={`form-control ${!inputState.isValid && "form-control--invalid"}`}>
      <label>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
}
export default Input;
