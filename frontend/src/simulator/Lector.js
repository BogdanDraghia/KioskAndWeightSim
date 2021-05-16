import React from "react";

const Lector = () => {
  const LectorSend = () => {
    console.log("send");
  };
  return (
    <div className="Lector">
      <h1>Lector</h1>
      <div className="form">
        <div className="LectorItem">
          <label htmlFor="1response">
            1 Response
            <input type="text" id="1response" defaultValue={"GoodRead"} />
          </label>
          <label htmlFor="1code">
            Code:
            <input type="text" id="1responseCode" defaultValue={"*123456"} />
            <button onClick={LectorSend}>Submit</button>
          </label>
        </div>

        <div className="LectorItem">
          <label htmlFor="2response">
            2 Response
            <input type="text" id="2response" defaultValue={"NoValid"} />
          </label>
          <label htmlFor="2code">
            Code:
            <input type="text" id="2responseCode" defaultValue={"123456"} />
            <button onClick={LectorSend}>Submit</button>
          </label>
        </div>

        <div className="LectorItem">
          <label htmlFor="3response">
            3 Response
            <input type="text" id="3response" defaultValue={"TriggerOFf"} />
          </label>
          <label htmlFor="3code">
            Code:
            <input type="text" id="3responseCode" defaultValue={"None"} />
            <button onClick={LectorSend}>Submit</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Lector;
