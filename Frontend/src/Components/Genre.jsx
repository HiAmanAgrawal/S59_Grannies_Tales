import React from 'react'
import { Link } from "react-router-dom";

function Genre() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          
          <p className="mt-12">
          Explore our diverse genres: moral lessons, whimsical  fairytales, epic
           fantasies, and captivating mythologies. Find timeless wisdom, enchanting 
           adventures, and ancient legends. Choose your genre and embark on a journey 
           through the realms of imagination!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          </div>
          
          <div>
            
          </div>
     </div>
    </>
  )
}

export default Genre