import { Search, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';


const Header = () => {
   const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div>
        <nav className="flex items-center justify-between px-4 py-2 mx-0 md:px-20"
    >
      <div className="">
        <img alt="Logo" className="md:block hidden" src="images/Logo.png" />
        <img className="md:hidden block" src="images/logo-no-text.png" alt=""/>
      </div>
 
      <div className="flex items-center space-x-4 md:space-x-10 ">
        <form
        aria-label="Search for items "
        className="md:w-[450px] md:flex sm:flex hidden "
        role="search"
      >
        <input
          className="flex-grow border border-gray-200 bg-gray-100 rounded-l-md px-3 py-2 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 "
          placeholder="Search for items..."
          type="search"
        />
        <button
          aria-label="Search"
          className="bg-[#4CAF50] px-2 md:px-4 md:py-2 rounded-r-md flex items-center justify-center"
          type="submit"
        >
        <Search className="text-white"/>
        </button>
      </form>

      <i data-lucide="search" className="w-5 md:hidden block text-gray-700"></i>
      <div className="flex items-center text-gray-700 text-sm space-x-4 md:space-x-10">
        <button
          className="flex items-center space-x-1 hover:text-[#3BB77E]"
        >
           <Heart />
          <span className="hidden md:block"> Wishlist</span>
        </button>
        <button
          onClick={toggleCart}
          className="flex items-center space-x-1  hover:text-[#3BB77E]"
            >
            <ShoppingCart />
          <span className="hidden md:block"> My cart </span>
          
        </button>
        <img
          alt="User profile photo of a man with beard and black shirt"
          className="w-8 h-8 rounded-full"
          height="32"
          src="https://storage.googleapis.com/a1aa/image/6fc3fbbb-f7ec-4095-b591-06ebbfae9b3e.jpg"
          width="32"
        />
      </div>
      </div>
    </nav>


    </div>
  )
}

export default Header