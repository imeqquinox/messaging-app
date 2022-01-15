const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express(); 
app.use(cors());
app.use(express.json());
app.listen(3001); 

var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "messaging_user",
});

dbConnection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as id " + dbConnection.threadId);
});

// app.post("/signin", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password; 
// });

app.post("/register", (req, res) => {
    console.log(req.body);
    const regUsername = req.body.regUsername; 
    const regPassword = req.body.regPassword;

    dbConnection.query(
        "INSERT INTO users (userName, userPass) VALUES (?,?)",
        [regUsername, regPassword],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else 
            {
                res.send("Values Inserted");
            }
        })
});