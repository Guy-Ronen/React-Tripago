import "./App.css";
import TripList from "./components/TripList";
import { useState } from "react";

function App() {
  const [isShowingTrips, setIsShowingTrips] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setIsShowingTrips(false)}>Hide Trips</button>
      <button onClick={() => setIsShowingTrips(true)}>Show Trips</button>
      {isShowingTrips && <TripList />}
    </div>
  );
}

export default App;
