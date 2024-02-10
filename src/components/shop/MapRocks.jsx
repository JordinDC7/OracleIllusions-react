import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/rockshopcard.css";
import StarRating from "./StarRating";

function MapRocks({ rockState }) {
  const displayCount = 8;
  const [startIndex, setStartIndex] = useState(0);
  const rocksArray = Array.isArray(rockState)
    ? rockState
    : Object.values(rockState);

  const handleLoadNext = () => {
    setStartIndex((prevCount) => prevCount + 8);
  };
  const handleLoadPrev = () => {
    setStartIndex((prevCount) => prevCount - 8);
  };

  const endIndex = startIndex + displayCount;

  const itemsToDisplay = rocksArray.slice(startIndex, endIndex);
  return (
    <div>
      <div className="cards-box">
        <div className="cards-wrapper">
          {itemsToDisplay.map((rock, index) => (
            <div className="flex p-2 font-mono" key={rock.id || index}>
              <div className="flex-none w-40 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                <img
                  src={rock.image}
                  alt=""
                  className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <form className="flex-auto pl-2">
                <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                  <h1 className="top-section relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                    {rock.name}
                  </h1>
                  <div className="relative text-lg text-white">
                    ${rock.price}
                  </div>
                  <div className="relative uppercase text-teal-400 ml-3">
                    {rock.isInStock ? "IN STOCK" : "OUT OF STOCK"}
                  </div>
                </div>
                <div className="flex items-baseline my-6">
                  <div className="space-x-3 flex text-sm font-medium">
                    {/* <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      defaultValue="xs"
                      defaultChecked=""
                    />
                    <div className="relative w-10 h-10 flex items-center justify-center text-white peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                      XS
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      defaultValue="s"
                    />
                    <div className="relative w-10 h-10 flex items-center justify-center text-white peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                      S
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      defaultValue="m"
                    />
                    <div className="relative w-10 h-10 flex items-center justify-center text-white peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                      M
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      defaultValue="l"
                    />
                    <div className="relative w-10 h-10 flex items-center justify-center text-white peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                      L
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      defaultValue="xl"
                    />
                    <div className="relative w-10 h-10 flex items-center justify-center text-white peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                      XL
                    </div>
        </label>*/}
                    <StarRating initialRating={rock.averageRating}></StarRating>
                  </div>
                </div>
                <div className="flex space-x-2 mb-4 text-sm font-medium">
                  <div className="flex space-x-4">
                    <button
                      className="px-6 h-13 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
                      type="submit"
                    >
                      Buy item now
                    </button>
                    <button
                      className="px-6 h-13 uppercase font-semibold tracking-wider border bg-green-600 border-slate-200 text-slate-900"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <p className="text-xs leading-6 text-slate-500">
                  updated 3 minutes ago.
                </p>
              </form>
            </div>
          ))}
        </div>
        {
          <div>
            {startIndex != 0 && (
              <button onClick={handleLoadPrev}>Load Prev</button>
            )}
            {endIndex < rocksArray.length && (
              <button onClick={handleLoadNext}>Load Next</button>
            )}
          </div>
        }
      </div>
    </div>
  );
}

export default MapRocks;
