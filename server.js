const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// In-memory todos
let todos = [];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a todo
app.post("/todos", (req, res) => {
  const { todo } = req.body;

  if (!todo) {
    return res.status(400).send("Todo is required");
  }

  todos.push(todo);
  res.sendStatus(200);
});

// Delete a todo
app.delete("/todos/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= todos.length) {
    return res.status(400).send("Invalid index");
  }

  todos.splice(index, 1);
  res.sendStatus(200);
});

// Start server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Todo app running on http://localhost:${PORT}`);
});