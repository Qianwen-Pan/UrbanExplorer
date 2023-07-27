import React from "react";
import Input from "../../shared/components/Form/Input";
import "./NewPlace.css";
function NewPlaces() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        errorText="please enter a valid title"
      />
    </form>
  );
}

export default NewPlaces;
