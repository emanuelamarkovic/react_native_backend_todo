import express from "express";
import "./config.js";
import "./db-connect.js";
import cors from "cors";
import endpointsInfosHTMLResponse from "./utils/endPointsInfosHTMLResponse.js";
import { todoRouter, todosMainPath } from "./routes/todoRoutes.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:8888", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(todosMainPath, todoRouter);
app.get("/", endpointsInfosHTMLResponse);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
