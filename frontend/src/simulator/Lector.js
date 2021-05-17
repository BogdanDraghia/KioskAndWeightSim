import React, { useEffect, useState } from "react";
import axios from "axios";
const Lector = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4001/defaultLector")
      .then((res) => {
        if (res) {
          return res;
        } else {
          throw Error;
        }
      })
      .then((data) => {
        setdefaultvalues(data.data);
        console.log(defaultvalues);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const triggerOff = () => {
    axios
      .get("http://localhost:4001/triggeroff")
      .then((res) => {
        console.log("trigger off");
        setStatus(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeLectorState = (boolean) => {
    axios
      .post("http://localhost:4001/manualchangelector", { boolean })
      .then((res) => {
        console.log("res");
        setStatus(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const LectorSend = (val1, val2) => {
    axios
      .get("http://localhost:4001/statelector")
      .then((res) => {
        //res.data === true
        if (res.data === true) {
          setError("None");
          return res;
        } else {
          setError("Please start the lector first ");
          throw res;
        }
      })
      .then(() => {
        axios
          .post("http://localhost:4001/lectorwrite", {
            message: val1,
            code: val2,
          })
          .then((res) => {
            changeLectorState(false);
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeValue = (elem, change) => {
    console.log("change");
    defaultvalues.lector[change] = elem;
  };

  const [defaultvalues, setdefaultvalues] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("none");
  return defaultvalues ? (
    <div className="Lector">
      <h1>Lector </h1>
      <button onClick={() => changeLectorState(true)}>START Lector</button>
      <button
        onClick={() => {
          status ? triggerOff() : console.log("already off");
        }}
      >
        STOP Lector
      </button>
      <div style={{ color: "red" }} className="error">
        error: {error}
      </div>

      <div className="status">
        status: {status ? "started 🟩" : "waiting 🟥"}
      </div>

      <div className="form">
        <div className="LectorItem">
          <label htmlFor="response1">
            1 Response
            <input
              type="text"
              id="response1message"
              defaultValue={defaultvalues.lector.response1message}
              onChange={(elem) =>
                changeValue(elem.target.value, ["response1message"])
              }
              //              defaultValue={"GoodRead"}
            />
          </label>
          <label htmlFor="1code">
            Code:
            <input
              type="text"
              id="response1code"
              defaultValue={defaultvalues.lector.response1code}
              onChange={(elem) =>
                changeValue(elem.target.value, ["response1code"])
              }
            />
          </label>
          <button
            onClick={() => {
              LectorSend(
                defaultvalues.lector.response1message,
                defaultvalues.lector.response1code
              );
            }}
          >
            send
          </button>
        </div>

        <div className="LectorItem">
          <label htmlFor="response2">
            2 Response
            <input
              type="text"
              onChange={(elem) =>
                changeValue(elem.target.value, ["response2message"])
              }
              id="response2"
              defaultValue={defaultvalues.lector.response2message}
            />
          </label>
          <label htmlFor="2code">
            Code:
            <input
              type="text"
              id="response2Code"
              onChange={(elem) =>
                changeValue(elem.target.value, ["response2code"])
              }
              defaultValue={defaultvalues.lector.response2code}
            />
          </label>
          <button
            onClick={() => {
              LectorSend(
                defaultvalues.lector.response2message,
                defaultvalues.lector.response2code
              );
            }}
          >
            send
          </button>
        </div>

        <div className="LectorItem">
          <label htmlFor="response3">
            3 Response
            <input
              type="text"
              id="response3"
              onChange={(elem) =>
                changeValue(elem.target.value, ["response3code"])
              }
              defaultValue={defaultvalues.lector.response3message}
            />
          </label>
          <label htmlFor="3code">
            Code:
            <input
              type="text"
              onChange={(elem) =>
                changeValue(elem.target.value, ["response3code"])
              }
              id="response3Code"
              defaultValue={defaultvalues.lector.response3code}
            />
          </label>
          <button
            onClick={(elem) => {
              LectorSend(
                defaultvalues.lector.response3message,
                defaultvalues.lector.response3code
              );
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Fetching...</h1>
  );
};

export default Lector;
