import React, { Fragment } from "react";

export default function Response({ data }) {
  return (
    <Fragment>
      {data && data.data ? (
        <p
          className="shadow p-3 bg-white rounded position-absolute"
          style={{ bottom: "30%" }}
        >
          Response: {data.data}
        </p>
      ) : null}
    </Fragment>
  );
}
