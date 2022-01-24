const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express(); 
app.use(cors());
app.use(express.json()); 

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: ["http://localhost:3000"],
    }
});

// Socket.io
io.on("connection", socket => {
    console.log(socket.id);
    socket.on("send-message", (message) => {
        socket.broadcast.emit("receive-message", message);
        // if (room === "")
        // {
            
        //     console.log(message);
        // } else {
        //     socket.to(room).emit("receive-message", message);
        // }
    })
});
server.listen(3001);

// mySQL details
var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "messaging_user",
});


// mySQL connection
dbConnection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as id " + dbConnection.threadId);
});

// app.use("/signin", (req, res) => {
//     res.send({
//         token: "test123"
//     });
// });

app.post("/signin", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password; 

    if (username && password) 
    {
        dbConnection.query(
            "SELECT * FROM users WHERE userName = ? AND userPass = ?",
            [username, password],
            (err, result) => {
                if (result.length > 0)
                {
                    res.send({ token: "test123" });
                    console.log("Username and password are correct");
                }
                else
                {
                    res.send({ "result": false });
                    console.log("Incorrect username and password");
                }
            }
        )
    }
});

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
                res.send(err.code);
            }
            else 
            {
                res.send("Values Inserted");
            }
        })
});