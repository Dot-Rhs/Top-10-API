const express = require("express"); // this imports something, in this case express.
const fs = require("fs");
const PORT = 3500;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  fs.readFile("./artist.json", "utf8", (err, artistData) => {
    if (err) {
      res.json({ message: "WRONG! Go back" });
    }
    let library = JSON.parse(artistData);
    res.json(library);
  });
});

app.get("/artist/:number", function(req, res) {
  let number = req.params.number;
  fs.readFile("./artist.json", "utf8", (err, artistData) => {
    if (err) {
      res.json({ message: "WRONG! Go back" });
    }
    let library = JSON.parse(artistData);
    res.json(library[number]);
  });
  console.log(number);
});

app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
});
