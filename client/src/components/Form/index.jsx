import React, { Fragment, useState, useRef, useEffect } from "react";
import Response from "../Response";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import postData from "../../services/post";

export default function Form() {
  const [input, inputSet] = useState("");
  const [loading, loadingSet] = useState(false);
  const [data, dataSet] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    loadingSet(true);
    const { response } = await postData({
      method: "post",
      url: "/inbound",
      body: JSON.stringify({
        data: input,
      }),
    });
    dataSet(response.data);
    loadingSet(false);
    inputRef.current.focus();
  };

  const handleChange = (e) => inputSet(e.target.value);

  return (
    <Fragment>
      <div className="border border-1 p-2 w-50">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              handleChange={handleChange}
              input={input}
              inputRef={inputRef}
            />
          </div>
          <SubmitButton loading={loading} input={input} />
        </form>
      </div>
      <Response data={data} />
    </Fragment>
  );
}
