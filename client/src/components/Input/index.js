import React, { Fragment } from "react";

export default function Input({ handleChange, input, inputRef }) {
  return (
    <Fragment>
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        type="text"
        className="form-control mb-2"
        id="text-input-1"
        aria-describedby="textInput"
        placeholder="Enter Text"
        onChange={handleChange}
        value={input}
        ref={inputRef}
      />
    </Fragment>
  );
}
