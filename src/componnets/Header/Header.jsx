import React from 'react'
import { Link } from "react-router-dom";
import  header from '../../assets/header.png';

function Header() {

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full h-screen overflow-hidden rounded-2xl mb-4">
        <img
          src={header}
          alt="Delicious Food"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute flex flex-col items-center max-w-[90%] sm:max-w-[70%] md:max-w-[50%] gap-4 animate-fadeIn left-1/2 top-10 transform -translate-x-1/2">
          <h2 className="text-center text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Order Your Favorite Food Here
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center px-2">
            Your favorite dishes, straight to your door. Experience the joy of effortless dining!
          </p>
          <Link to='/Shop'><button className="w-28 sm:w-32 md:w-40 text-[rgb(234,77,77)]  font-semibold bg-white text-sm sm:text-base md:text-lg px-4 py-2 rounded-full transition duration-300 ease-in-out">
            View Menu
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header