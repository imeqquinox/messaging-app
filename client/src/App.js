import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import useToken from "./hooks/useToken";
import useUsername from "./hooks/useUsername";
import "./App.css";

function App() {
  const { token, setToken } = useToken();
  const { usernameID, setUsernameID } = useUsername(); 

  // TODO: 
  // Fix chat css formatting (float right)
  // Fix chat username error where it only displays the user's name and not another ID

  if (!token) {
    return <Login setToken={setToken} setUsernameID={setUsernameID} />
  }

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard username={usernameID} />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
  );
}

export default App;
