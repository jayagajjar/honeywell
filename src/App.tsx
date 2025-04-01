import React from "react";
import useIncidents from "./hooks/useIncidents";
import ResponsiveIncidentView from "./components/ResponsiveIncidentView";
import "./App.css";

function App() {
  const incidents = useIncidents();

  return (
    <div className="app-container">
      <ResponsiveIncidentView data={incidents} />
    </div>
  );
}

export default App;
