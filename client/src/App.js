import React, { Component } from "react";
import Form from "./components/Form";
class App extends Component {
  render() {
    return (
      <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
        <Form />
      </div>
    );
  }
}

export default App;
