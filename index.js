const express = require("express"); // this imports something, in this case express.
const fs = require("fs");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./artist.json", "utf8", (err, artistData) => {
    if (err) {
      res.json({ message: "WRONG! Go back" });
    }
    let library = JSON.parse(artistData);
    res.json(library);
  });
});

app.listen(PORT, () => {
  console.log("I am listening on port 3000");
});
