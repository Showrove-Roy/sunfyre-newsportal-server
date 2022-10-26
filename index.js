const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const categories = require("./data/Category.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Sunfyre News For HOD");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
