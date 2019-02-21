const express = require("express"); // this imports something, in this case express.
const library = require("./Library");
const PORT = 3000;

const app = express();

app.get("./Library/artist.json", (req, res, err) => {
  if (err) {
    console.error(err);
  }
  res.json(library);
});

app.listen(PORT, () => {});
