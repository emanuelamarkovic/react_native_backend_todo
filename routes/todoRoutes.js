import express from "express";

const todoRouter = express.Router();

const todosMainPath = "/todos";

todoRouter
  .get("/", (req, res) => {
    res.send("Hello from todoRoutes");
  })
  .post("/", (req, res) => {
    res.send("Hello from post todoRoutes");
  })
  .get("/:id", (req, res) => {
    res.send("Hello from get one todoRoutes");
  })
  .put("/:id", (req, res) => {
    res.send("Hello from put one todoRoutes");
  })
  .delete("/:id", (req, res) => {
    res.send("Hello from delete one todoRoutes");
  });

const todosRoutesInfos = [
  { path: `${todosMainPath}`, method: "GET", description: "Get all todos" },
  {
    path: `${todosMainPath}`,
    method: "POST",
    description: "Create a new todo",
  },
  { path: `${todosMainPath}:id`, method: "GET", description: "Get one todo" },
  {
    path: `${todosMainPath}:id`,
    method: "PUT",
    description: "Update one todo",
  },
  {
    path: `${todosMainPath}:id`,
    method: "DELETE",
    description: "Delete one todo",
  },
];

export { todosRoutesInfos, todoRouter, todosMainPath };
