import React from "react";

export default function InputType2() {
  return (
    <div className="inputBox">
      <input name="inputType2" type="text" required={true} />
      <label htmlFor="inputType2">Last Name</label>
    </div>
  );
}
