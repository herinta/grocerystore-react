import { useState } from "react";
import { useParams } from "react-router-dom";

type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
  brand: string;
  price: number;
  description: string;
};

const productData: Product[] = [
  {
    id: 1,
    image: "/images/img-11.png", 
    title: "Redish 500g",
    category: "Vegetables",
    brand: "Mr.food",
    price: 2,
    description: "Enjoy the freshness and crispness of Redish 500g, the perfect addition to elevate the flavor of your dishes. Redish is a root vegetable with a mildly spicy and refreshing taste, ideal for adding to salads, sandwiches, or as a garnish for other meals. With a 500g pack, this product is just the right portion for your daily cooking needs..",
  },
  {
    id: 2,
    image: "/images/img-12.png", 
    title: "Potatos 1kg",
    category: "Vegetables",
    brand: "Mr.food",
    price: 1,
    description: "High-quality potatoes, ideal for baking or mashing.",
  },
  {
    id: 3,
    image: "/images/img-13.png", 
    title: "Tomatos 200g",
    category: "Fruits",
    brand: "Mr.food",
    price: 0.3,
    description: "Juicy and ripe tomatoes, great for salads and sauces.",
  },
  {
    id: 4,
    image: "/images/img-14.png", 
    title: "Broccoli 1kg",
    category: "Vegetables",
    brand: "Mr.food",
    price: 1.5,
    description: "Fresh broccoli, packed with vitamins and minerals.",
  },
  {
    id: 5,
    image: "/images/img-15.png", 
    title: "Green Beans 250g",
    category: "Vegetables",
    brand: "Mr.food",
    price: 1,
    description: "Crisp green beans, perfect for steaming or stir-frying.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1); 

  return (
    <div className="max-w-6xl px-20 mt-10">
      {product ? (
        <div className="flex justify-around gap-10 items-start">
        
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-[300px] h-auto rounded-md shadow"
            />
          </div>

          <div className="w-full md:w-[60%] max-w-[600px]">
            <h1 className="text-2xl font-semibold text-gray-800">
              {product.title}
            </h1>
            <p className="text-xl text-green-600 font-bold mt-2">
              ${product.price.toFixed(2)}
            </p>

            <h3 className="mt-4 font-semibold text-gray-700">
              Product Information
            </h3>
            <p className="text-sm text-gray-600 mt-1 ">
              {product.description}
            </p>

          
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md px-2">
                <button onClick={() => setQuantity(quantity - 1)} className="text-gray-600 text-lg px-2">-</button>
                 <span className="mx-2">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-600 text-lg px-2">+</button>
              </div>
            </div>
            <div className="mt-6 space-x-5">
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 rounded-md">
                Add to cart
              </button>
              <button className="border border-green-500 text-green-500 text-sm px-6 py-2 rounded-md hover:bg-green-50">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
