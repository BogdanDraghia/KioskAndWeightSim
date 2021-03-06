const { write } = require("fs");
const net = require("net");

const serverLector = net.createServer();

let connectedClients = [];
let stateLector = false;

serverLector.on("connection", (socket) => {
  console.log("New conexion on serverLector");
  socket.on("data", async (chunk) => {
    connectedClients.push(socket);
    let buffer = Buffer.from(chunk, "hex");
    // let ascii = buffer.toString("utf8");
    // let convert = JSON.stringify(chunk);
    if ((buffer = [2, 116, 3])) {
      //start lector
      await manualChangeLectorState(true);
    } else {
      //stop lector
      //ascii == "y"
      stateLector = false;
    }
  });
  socket.on("end", () => {
    console.log("Closing connection with the client");
  });
  socket.on("error", (err) => {
    console.log(`Error: ${err}`);
  });
});

//serverLector.emit("data");

const serverBascula = net.createServer();

serverBascula.on("connection", (socket) => {
  console.log("New conexion on serverBascula");
  socket.on("data", (chunk) => {
    console.log(chunk);
  });
  socket.on("end", () => {
    console.log("Closing connection with the client");
  });
  socket.on("error", (err) => {
    console.log(`Error: ${err}`);
  });
});

const writeDataLector = async (data) => {
  //console.log(data);
  // datas = data.toString();
  let writeto = `{"message":"${data.message}","code":"${data.code}"}`;
  writeto = writeto.toString();
  await connectedClients[connectedClients.length - 1].write(writeto);
  //serverLector.emit(data.toString());
};
const LectorState = async () => {
  return stateLector;
};
const manualChangeLectorState = async (boolean) => {
  stateLector = boolean;
  return stateLector;
};
const changeLectorState = async () => {
  return (stateLector = !stateLector);
};

module.exports = {
  manualChangeLectorState,
  writeDataLector,
  LectorState,
  changeLectorState,
  serverLector,
  serverBascula,
  stateLector,
};
