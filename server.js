import express from "express";
import "./config.js";
import logEndpoints from "./utils/logEndPoints.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} \n`);
  logEndpoints(app, port);
});
