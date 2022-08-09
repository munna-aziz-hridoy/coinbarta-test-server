const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "server is working",
  });
});

app.listen(port, console.log(`server is running on port ${port}`));
