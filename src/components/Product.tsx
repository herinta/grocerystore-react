import { Link } from "react-router-dom";

type ProductProps = {
  id?: number | string;
  brand: string;
  image: string;
  category: string;
  title: string;
  price: number;
}


const Product = ({id, brand, image, category, title, price}: ProductProps) => {
  return (
    <Link to={`/detail-product/${id}`}>
        <div className="w-[228px] h-[302px] shadow-md rounded-lg">
        <img className="w-full object-cover max-h-1/2" src={image} alt="" />
        <div className="p-4">
            <p className="text-sm font-light text-gray-300">{category}</p>
            <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
            <p className="text-xs text-green-500">
                <span className="text-gray-500">By</span> {brand}
            </p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-semibold text-green-500">
                    $ {price}
                    <span className="text-gray-500 line-through text-sm py-2 font-normal ml-2 ">$15.99</span>
                </span>
                 <button className="bg-green-100 text-sm text-green-500 px-6 py-2 rounded-md cursor-pointer">
                    Add
                </button>
            </div>

        </div>
    </div>
    </Link>
  )
}

export default Product