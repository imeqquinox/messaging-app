import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import useToken from "./hooks/useToken";

function App() {

  const { token, setToken } = useToken();

 
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
      <div className="App">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
  );
}

export default App;
