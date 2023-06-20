
// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
const path = require("path");

// internal imports
const productsRouter = require("./app/routers/productsRouter");
const peoplesRouter = require("./app/routers/peoplesRouter");
const posRouter = require("./app/routers/saleAndPurchaseRouter");
const reportsRouter = require("./app/routers/reportsRouter");
const searchRouter = require("./app/routers/searchRouter");

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// request parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());

// set static folder
// Serve static files from the React build folder
app.use(express.static("./build"));

app.get("/", (req, res) => {
  res.send("PosTech software server");
});

// routing setup
app.use("/product", productsRouter);
app.use("/people", peoplesRouter);
app.use("/pos", posRouter);
app.use("/report", reportsRouter);
app.use("/search", searchRouter);

// parse cookies

// app listener
app.listen(process.env.PORT, () => {
  console.log("App listening to port " + process.env.PORT);
});
