const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001 || 8080;

app.get("/", (req, res) => {
  res.send({
    message: "Express API backend!",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
