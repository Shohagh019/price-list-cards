import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar/Navbar";
import Price from "./Navbar/Price/Price";
import Dashboard from "./Navbar/Dashboard/Dashboard";
import PhoneBar from "./Navbar/PhoneBar/PhoneBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-400">Hello from tailwind</h1>
      <Price></Price>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
