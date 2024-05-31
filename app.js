const express = require("express");
const app = express();
const port = 3000;


app.get("/index1.html", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index1.html");
  });
  
  app.get("/index2.html", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index2.html");
  });

app.listen(port, () => {
  console.log(`Servidor conectado en http://localhost:${port}`);
});