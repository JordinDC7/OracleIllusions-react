import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/RockShowHome.css";

function NavBar({ currentUser }) {
  const { email, role, id, firstName, lastName, mi, avatarUrl, isLoggedIn } =
    currentUser;
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const gotoLoginPage = () => {
    navigate("/login");
  };
  console.log({
    email,
    role,
    id,
    firstName,
    lastName,
    mi,
    avatarUrl,
    isLoggedIn,
  });
  return (
    <div className="background-image">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a className="text-white text-2xl font-bold" href="/">
          Oracle Illusions
        </a>
        <div className="flex items-center">
          <ul
            className={`lg:flex lg:items-center lg:w-auto w-full ${
              isNavExpanded ? "block" : "hidden"
            } space-y-2 lg:space-y-0 lg:space-x-4`}
          >
            <li>
              <a className="inline-block py-2 px-4 text-white" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="inline-block py-2 px-4 text-white" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="inline-block py-2 px-4 text-white" href="#contact">
                Contact Us
              </a>
            </li>
            <li>
              {!currentUser.isLoggedIn && (
                <button
                  onClick={gotoLoginPage}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Login
                </button>
              )}
            </li>
            <li>
              {!currentUser.isLoggedIn && (
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Register
                </button>
              )}
            </li>
          </ul>
          <button
            className="block lg:hidden focus:outline-none text-white ml-4 bg-gray-700 rounded-full p-2"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 7h16a1 1 0 010 2H4a1 1 0 110-2zm0 7h16a1 1 0 010 2H4a1 1 0 110-2z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
