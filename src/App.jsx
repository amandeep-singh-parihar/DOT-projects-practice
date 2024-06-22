import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Tours from "./Components/Tours";
import data from "./data";
import "./App.css";
import { toast } from "react-toastify";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  function refreshHandler()
  {
    setTours(data);
    toast.success("Tours Refreshed")
  }

  if (tours.length === 0) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h2 className="capitalize font-semibold text-lg">no tours left</h2>
        <div>
          <button 
            onClick={refreshHandler}
            className="capitalize px-6 py-1 bg-zinc-400 rounded-lg mt-2 text-sm font-semibold">refresh</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Tours removeTour={removeTour} tours={tours} />
      </div>
    </div>
  );
}

export default App;
