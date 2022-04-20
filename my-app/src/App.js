import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {

  const[showForm,setShowForm]=useState(true)
  return (
    <div className="App">
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        {!showForm ? "Add House":"Show Rentals"}
        
      </button>
      {showForm && <AddHouse/>}
      Show component based on state
      <br />
      <Rentals/>
    </div>
  );
}

export default App;
