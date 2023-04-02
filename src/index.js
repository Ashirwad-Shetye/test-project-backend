require("dotenv").config();
const express = require("express");
const port = 5000;
const cors = require("cors");

const corsOpts = {
  methods: ["GET", "POST", "PUT", "DELETE"],

  origin: ["http://localhost:3000"],
};

app.use(cors(corsOpts));
app.use(express.json({ limit: "5mb", extended: true }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));
