const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Api is runnning on 5000");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const data = notes.find((n) => n._id === req.params.id);
  res.send(data);
});

app.listen(PORT, console.log(`your server is up and running on ${PORT}`));
