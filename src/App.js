import React from "react";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <Dashboard />
      </div>
    </Router>
  );
}
