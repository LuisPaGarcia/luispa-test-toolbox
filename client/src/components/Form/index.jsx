import React, { useState } from "react";
import postData from "../../services/post";

export default function Form() {
  const [input, inputSet] = useState("");
  const [data, dataSet] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { response /*, error, loading*/ } = await postData({
      method: "post",
      url: "/inbound",
      body: JSON.stringify({
        data: input,
      }),
    });
    dataSet(response.data);
    console.log(response.data);
  };

  const handleChange = (e) => inputSet(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={input} />
      <button type="submit">Submit</button>
      <div>{data && data.data && <p>{data.data}</p>}</div>
    </form>
  );
}
