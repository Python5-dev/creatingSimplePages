import Navbar from "./assets/components/Navbar";
import Dashboard from "./assets/pages/Dashboard";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Bit Box</h1>
      <Login />
      <Register />
      <Dashboard />
    </div>
  );
}

export default App;
