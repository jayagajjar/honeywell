import useIncidents from "./hooks/useIncidents";
import ResponsiveIncidentView from "./components/ResponsiveIncidentView";
import "./App.css";

function App() {
  const { incidents, loading } = useIncidents();

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader">Loading incidents...</div>
      ) : (
        <ResponsiveIncidentView data={incidents} />
      )}
    </div>
  );
}

export default App;
