import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RefExample from "./RefExample";
import KeysExample from "./KeysExample"; 
import HooksExample from "./HooksExample";

const Home = () => <h2>🏠 Home Page</h2>;

const About = () => <h2>ℹ️ About Us</h2>;

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/ref">Ref</Link> |
        <Link to="/keys">Keys</Link> |
        <Link to="/hooks">Hooks</Link> |
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ref" element={<RefExample />} /> 
        <Route path="/keys" element={<KeysExample />} /> 
        <Route path="/hooks" element={<HooksExample />} /> 
      </Routes>
    </Router>
  );
}
