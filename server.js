import express from "express";
import "./config.js";
import endpointsInfosHTMLResponse from "./utils/endPointsInfosHTMLResponse.js";
import { todoRouter, todosMainPath } from "./routes/todoRoutes.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(todosMainPath, todoRouter);
app.get("/", endpointsInfosHTMLResponse);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
