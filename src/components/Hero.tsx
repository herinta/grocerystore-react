import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className=" bg-[url('images/hero-bg.png')] bg-cover bg-center">
      <div className="flex flex-col-reverse md:flex-row  w-full items-center justify-between">
        <div className="px-8 py-10 md:py-0 md:pl-20 space-y-10">
          <h1 className="text-3xl md:text-6xl font-bold">Don’t miss our daily <br/> amazing deals.</h1>
          <p>Save up to 60% off on your first order</p>
          <form
          aria-label="Search for items"
          className="flex flex-1 max-w-xl md:w-[350px] "
          role="search"
        >
          <input
            className="flex-grow bg-white  px-3 py-3 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 "
            placeholder="Enter your email address"
            type="search"
          />
          <button
            aria-label="Search"
            className="bg-[#4CAF50] px-2 md:px-4 md:py-2 flex items-center justify-center text-white"
            type="submit"
          >
          Subscribe
          </button>
        </form>
        </div>
     
        <div className="">
          <img src="images/hero-img.png" alt=""/>
        </div> 
        
      </div>
    </div>
    </div>
  )
}

export default Hero