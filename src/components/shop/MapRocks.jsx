import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/rockshopcard.css";
import StarRating from "./StarRating";
import { toast } from "react-toastify";

function MapRocks({ rockState }) {
  const displayCount = 8;
  const [startIndex, setStartIndex] = useState(0);

  const rocksArray = Array.isArray(rockState)
    ? rockState
    : Object.values(rockState);

  const handleLoadNext = () => {
    setStartIndex((prevCount) => prevCount + 8);
    toast.info("The next 8 rocks are being shown!");
  };
  const handleLoadPrev = () => {
    setStartIndex((prevCount) => prevCount - 8);
    toast.info("The last 8 rocks are being shown!");
  };

  const endIndex = startIndex + displayCount;

  const itemsToDisplay = rocksArray.slice(startIndex, endIndex);

  return (
    <div>
      <div className="cards-box">
        <div className="cards-wrapper">
          {itemsToDisplay.map((rock) => (
            <div className="flex p-2 font-mono w-90" key={rock.id}>
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
                  <div
                    className={
                      rock.isInStock
                        ? "relative text-xl text-white"
                        : "line-through text-red-500 relative text-xl"
                    }
                  >
                    ${rock.price}
                  </div>
                  <div
                    className={`relative uppercase ${
                      rock.isInStock ? "text-teal-400" : "text-red-500"
                    } ml-3`}
                  >
                    {rock.isInStock ? "IN STOCK" : "OUT OF STOCK"}
                  </div>
                </div>
                <div className="flex items-baseline my-6">
                  <div className="space-x-3 flex text-sm font-medium">
                    <StarRating
                      initialRating={rock.averageRating}
                      rockId={rock.id}
                    ></StarRating>
                  </div>
                </div>
                <div className="flex space-x-2 mb-4 text-sm font-medium">
                  <div className="flex space-x-4">
                    <button
                      className={`${
                        rock.isInStock
                          ? "px-6 h-13 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
                          : "px-5 h-12 ml-8 p-2 mt-2 uppercase font-semibold tracking-wider border-2 border-black bg-red-400 text-black"
                      }`}
                      type="submit"
                    >
                      {rock.isInStock ? "Buy item now" : "Unavailable!"}
                    </button>
                    {/* px-6 h-13 */}
                    {/* px-2 h-10 */}
                    {rock.isInStock ? (
                      <button
                        className={`${
                          rock.isInStock
                            ? "px-6 h-13 uppercase font-semibold tracking-wider border-2 border-black bg-green-600 border-slate-200 text-slate-900"
                            : "px-2 h-10 uppercase font-semibold tracking-wider border-2 border-black bg-red-400 border-slate-200 text-slate-900"
                        }`}
                        type="button"
                      >
                        {rock.isInStock ? "Add to Cart" : "Unavailable!"}
                      </button>
                    ) : (
                      <></>
                    )}
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
