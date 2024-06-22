import React, { useState } from "react";
import Card from "./Card";

function Tours({tours,removeTour}) {


  const [add,setAdd]=useState([]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-wrap gap-4 px-36 mb-12">
        {tours.map((tour)=>{
          return (
            <Card
              key={tour.id}
              {...tour}
              tour={tour}
              removeTour={removeTour}
              add={add}
              setAdd={setAdd}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Tours;
