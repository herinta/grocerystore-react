import { LayoutGrid, House, Flame, Package, Percent } from 'lucide-react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
         <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-white md:px-20 md:py-2 w-full">

      <a href="" className="flex space-x-2 items-center text-white bg-[#3BB77E] px-4 py-3 md:w-auto w-full">
          <LayoutGrid />
          <span>Brows All Categories</span>
      </a>

      <ul className="md:flex flex-col md:flex-row md:items-center space-x-1 md:space-x- md:w-auto w-full hidden">
        <li><Link to="/" className="flex space-x-2 items-center hover:text-[#3BB77E] px-4 py-3"><House /><span>Home</span></Link></li>
        <li><a href="" className="flex space-x-2 items-center hover:text-[#3BB77E] px-4 py-3"><Flame /><span>Hot Deals</span></a></li>
        <li><a href="" className="flex space-x-2 items-center hover:text-[#3BB77E] px-4 py-3"><Percent /><span>Promotions</span></a></li>
        <li><Link to="/new-product" className="flex space-x-2 items-center hover:text-[#3BB77E] px-4 py-3"><Package /><span>New Products</span></Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar