import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  const [login, setLogin] = useState(false);

  console.log("LoginState: " + login);
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login login={login} setLogin={setLogin}/> } />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Dashboard />} />
        </Routes>
      </div>
  );
}

export default App;
