import React, { Fragment } from "react";

export default function SubmitButton({ loading, input }) {
  return (
    <button
      disabled={loading || !Boolean(input)}
      className="btn btn-primary"
      type="submit"
    >
      {loading ? <Spinner /> : "Submit"}
    </button>
  );
}

function Spinner() {
  return (
    <Fragment>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </Fragment>
  );
}
