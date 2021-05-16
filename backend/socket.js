var net = require("net");

const serverLector = net.createServer();

const serverScale = net.createServer();

const handdleConnection = (con) => {
  console.log("new client connected from" + con.remoteAddress);
};
const handdleDisconect = () => {
  console.log(" client ");
};

serverLector.on("connection", handdleConnection);
serverScale.on("connection", handdleConnection);

serverLector.on("close", handdleDisconect);
serverScale.on("close", handdleDisconect);

serverLector.listen("1234", () => {
  console.log("server socket lector listenting on 1234");
});

serverScale.listen("1235", () => {
  console.log("server socket scale listenting on 1235");
});

module.exports = {
  serverLector,
  serverScale,
};
