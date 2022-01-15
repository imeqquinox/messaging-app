import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  const [newUser, setNewUser] = useState(true);

  return (
    <div className="App">
      {newUser ? <Login setNewUser={setNewUser}/> : <Register />}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
