// front end to back end connection
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

// mysql database connection
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mypassword",
  database: "takeout_db",
});

// front end to back end connection
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const sqlInsert =
    "INSERT INTO users (username, password, email, signin_status) VALUES (?,?,?,?)";
  db.query(sqlInsert, [username, password, email, true], (err, result) => {
    console.log(err);
  });
});

//server port
app.listen(3001, () => {
  console.log("running port 3001..");
});
