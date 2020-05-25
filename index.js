const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

const config = require("./config/key");

const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("mongoDB is connected! ✅"))
  .catch((e) => console.error(e));

// url 자체 해석 및 json 형태 해석
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("hello world"));
app.post("/register", (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then(() => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch(() => {
      return res.json({ success: false, err });
    });
});
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port} ✅`)
);
