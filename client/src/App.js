import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { io } from "socket.io-client"

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import useToken from "./hooks/useToken";
import "./App.css";

function App() {

  const socket = io("http://localhost:3001");
  socket.on("connect", () => {
    console.log(socket.id);
  })

  const { token, setToken } = useToken();
  // May need to make this persitant data
  const [username, setUsername] = useState();

  if (!token) {
    return <Login setToken={setToken} username={username} setUsername={setUsername} />
  }

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard username={username} socket={socket} />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
  );
}

export default App;
