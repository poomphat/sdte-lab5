const express = require("express");
const app = express();

app.get("/student_id", (req, res) => {
  res.send("61070170");
});

module.exports = app;
