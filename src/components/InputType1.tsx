import React from "react";

export default function InputType1() {
  return (
    <div className="inputBox">
      <input name="inputType1" type="text" required={true} />
      <label htmlFor="inputType1">First Name</label>
    </div>
  );
}
