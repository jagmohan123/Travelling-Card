import { useState } from "react";
import React from "react";
import Trip from "./Component/Trip";
import data from "./data";
const App = () => {
  // get data from data.js file and set all the default data which is coming from data.js
  const [trip, setTrip] = useState(data);

  //   when we click on not intrusted button it remove the card where we click on not intrusted button
  function removeTrip(id) {
    const newTrips = trip.filter((tour) => tour.id !== id);
    // remove ke bad jo tour hai unko ui me show karaya
    setTrip(newTrips);
  }

  // if no trip selected so the below text in UI
  if (trip.length === 0) {
    return (
      <div className="refersh">
        <h2>No Trip selected</h2>
        {/* if no tour selected show the refersh button and when u click entire data show on UI */}
        <button className='btn-refersh' onClick={() => setTrip(data)}>
          Refersh
        </button>
      </div>
    );
  }

  return (
    <div className='app'>
      <Trip trip={trip} removeTour={removeTrip}></Trip>
    </div>
  );
};

export default App;
