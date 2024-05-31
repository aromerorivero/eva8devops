const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/index1.html");
});


  app.get("/index2.html", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index2.html");
  });

app.listen(port, () => {
  console.log(`Servidor conectado en http://localhost:${port}`);
});