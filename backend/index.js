const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const path = require("path");
const dotenv = require("dotenv").config();
const dotenvExample = require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.example"),
});

app.use(cors());
if (
  JSON.stringify(Object.keys(dotenv.parsed).sort()) !==
  JSON.stringify(Object.keys(dotenvExample.parsed).sort())
) {
  throw Error("Missing values in .env. Please refer to .env.example");
}

const dB = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

dB.connect((error) => {
  if (error) {
    console.log("Failed to connect to DB.");
    return;
  } else {
    console.log("db connected");
  }
});

app.get("/", async (req, res) => {
  res.status(200).json({
    name: process.env.NAME,
  });
});

app.listen(process.env.URL_PORT);
