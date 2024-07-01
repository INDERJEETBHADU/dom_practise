import React, { useState } from "react";
import styled from "styled-components";
const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  @media (max-width: 992px) {
    color: red;
  }
`;

function Demo() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    if (name === "" || password === "") {
    }
  };
  const isFormValid = name !== "" && password !== "";

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <label className="  fw-bold">Name</label>
        <input
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
        />
        <br />
        <br />
        <label className="  fw-bold">password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          type="onsubmit"
          disabled={!isFormValid}
          style={{ cursor: isFormValid ? "pointer" : "none" }}
        >
          submit
        </button>
      </form>
      <Heading>Hello</Heading>
      {/* <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1> */}
      <input type="range" />
    </div>
  );
}

export default Demo;
