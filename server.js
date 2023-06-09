const express = require("express");
const userrouts = require("./routes/web");
const model = require("./models/UserSchema");
const { connectDB } = require("./configDB/connectDB");

const app = express();

const DATABASE_URL = "mongodb://0.0.0.0:27017/";

const port = 5000;

connectDB(DATABASE_URL);

app.use(express.json());

app.use("/user", userrouts);

app.listen(port, () => {
  console.log(`server running at http://locahost:${port}`);
});
