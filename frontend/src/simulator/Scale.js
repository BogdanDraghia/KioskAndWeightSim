import axios from "axios";
import React, { useState } from "react";

const Scale = () => {
  let server = process.env.REACT_BACKEND_SERVADRESS;
  const [weight, setWeight] = useState("2000");
  const [stable, seStable] = useState("true");
  const send = () => {
    axios
      .get(`http://localhost:8080/bascula?peso=${weight}&estable=${stable}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Scale">
      <h1>Scale Forced</h1>
      <div className="form">
        <label>
          weight
          <input
            type="text"
            id="weight"
            defaultValue={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="form">
        <label>
          Stable
          <input
            type="text"
            id="stable"
            defaultValue={stable}
            onChange={(e) => seStable(e.target.value)}
          ></input>
        </label>
      </div>
      <button
        onClick={() => {
          send();
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Scale;
