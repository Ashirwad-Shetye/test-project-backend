require("dotenv").config();
const express = require("express");
const port = 5000;
const { connectDB } = require("./configs/db");
const cors = require("cors");

connectDB();

const app = express();

const corsOpts = {
  methods: ["GET", "POST", "PUT", "DELETE"],

  origin: ["http://localhost:3000"],
};

app.use(cors(corsOpts));
app.use(express.json({ limit: "5mb", extended: true }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));
