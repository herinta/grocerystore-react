import { Star } from "lucide-react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id?: number;
  image: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  originalPrice: number;
};

const Rating = () => {
  return (
    <div className="flex items-center space-x-1">
      <Star className="w-3 h-3 text-yellow-500" />
      <Star className="w-3 h-3 text-yellow-500" />
      <Star className="w-3 h-3 text-yellow-500" />
      <Star className="w-3 h-3 text-yellow-500" />
      <Star className="w-3 h-3 text-gray-500" />
      <span className="text-xs text-gray-500 ml-1">(4.0)</span>
    </div>
  );
};

const ProductCard = ({image, title, category, brand, price, originalPrice, id}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-[228px] h-[302px] bg-white rounded-lg shadow-md hover:shadow-lg">
      <img className="w-full object-cover" src={image} alt={title} />
      <div className="p-4">
        
        <p className="text-sm font-light text-gray-300">{category}</p>
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        
        <div className="flex items-center mt-1">
          <Rating />
        </div>
        <p className="text-xs text-green-500">
          <span className="text-gray-500">By</span>
          {brand}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-semibold text-green-500">
            ${price}{" "}
            <span className="text-sm line-through text-gray-500">
              ${originalPrice}
            </span>
          </span>
          <button className="bg-green-100 text-sm text-green-500 px-6 py-2 rounded-md cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};


export default ProductCard;
