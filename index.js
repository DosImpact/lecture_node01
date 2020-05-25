const express = require("express");
const app = express();
const port = 5000;

const CONNECT_URL =
  "mongodb+srv://dosimpact:589742@shoppingmall-5jqmh.mongodb.net/test?retryWrites=true&w=majority";

const mongoose = require("mongoose");
mongoose
  .connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("mongoDB is connected! ✅"))
  .catch((e) => console.error(e));

app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port} ✅`)
);
