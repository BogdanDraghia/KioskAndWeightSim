const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/tara", async (req, res) => {
  res.send("TARA");
});


server.listen(3001, "0.0.0.0", () => {
  console.log(`Started server on ${port}`);
})