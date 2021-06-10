const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
const socket = require("./socket");
const jsonfile = require("jsonfile");
const configFile = "./config.json";
const net = require("net");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/defaultLector", async (req, res) => {
  jsonfile
    .readFile(configFile)
    .then((data) => {
      return res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/statelector", async (req, res) => {
  res.send(await socket.LectorState());
});

app.post("/manualchangelector", async (req, res) => {
  //socket.changeLectorState();
  let booleanVal = await socket.manualChangeLectorState(req.body.boolean);
  res.send(booleanVal);
});

app.get("/triggeroff", async (req, res) => {
  await socket.writeDataLector("{message:'TriggerOff',code:'None'}");
  res.send("ok");
});

app.post("/lectorwrite", async (req, res) => {
  console.log(req.body);
  await socket.writeDataLector(req.body);
  res.send("Write data succes");
});

socket.serverLector.listen(1112, () => {
  console.log("lector server started on 1112");
});
socket.serverBascula.listen(1235, () => {
  console.log("bascula server started on 1235");
});

server.listen(4001, "0.0.0.0", () => {
  console.log(`Started server on 4001`);
});
