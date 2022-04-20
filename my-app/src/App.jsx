import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        
      </button>
      {/* Show component based on state */}
      <br />
      <Rentals/>
    </div>
  );
}

export default App;
