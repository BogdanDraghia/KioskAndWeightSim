const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
const socket = require("./socket");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/tara", async (req, res) => {
  res.send("TARA");
});
const startLectorServer = socket.serverLector;

server.listen(4001, "0.0.0.0", () => {
  console.log(`Started server on 4001`);
});
