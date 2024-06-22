import React, { useState } from "react";
import { toast } from "react-toastify";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

function Card({ tour, removeTour, id, name, info, image, price, add, setAdd }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function notInterestedHandler(id) {
    removeTour(id);
    toast.warning("Not Interesed");
  }

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function clickHandler() {
    if (add.includes(tour.id)) {
      setAdd((curr) => curr.filter((tid) => tid !== tour.id));
      toast.warning("Removed from Wishlist");
    } else {
      if (add.length === 0) {
        setAdd([tour.id]);
      } else {
        setAdd((curr) => [...curr, tour.id]);
      }
      toast.success("Added to Wishlist");
    }
  }

  return (
    <div className="card bg-white h-fit w-[300px] rounded-md p-3 shadow-xl hover:shadow-2xl ease-linear border-2 border-solid overflow-hidden">
      <div className="relative">
        <img
          src={image}
          className="image image bg-zinc-500 rounded-sm h-[40vh] w-full object-cover"
        />
        <div>
          <button
            onClick={clickHandler}
            className="like-button w-[30px] h-[30px] rounded-full absolute bg-white border border-rose-400 right-[12px] bottom-[-16px] grid place-items-center"
          >
            {add.includes(id) ? (
              <FcLike fontSize="1.25rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.25rem" />
            )}
          </button>
        </div>
      </div>

      <p className="text-green-600 font-black mt-2">₹ {price}</p>

      <p className="font-black">{name}</p>

      <p className="text-xs font-semibold">
        {description}

        <span
          onClick={readmoreHandler}
          className="text-blue-500 cursor-pointer"
        >
          {readmore ? "Show less" : "Read more"}
        </span>
      </p>

      <div className="flex justify-center mt-2">
        <button
          onClick={() => notInterestedHandler(id)}
          className="capitalize p-1 px-3 bg-rose-300 rounded-md text-xs font-bold border-2 border-red-600"
        >
          not interested
        </button>
      </div>
    </div>
  );
}

export default Card;
