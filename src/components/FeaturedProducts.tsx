import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
};

const productData: Product[] = [
  {
    id: 1,
    image: "/images/img-11.png", // Gambar Redish
    category: "Vegetables",
    title: "Redish 500g",
    brand: "Mr.food",
    price: 2,
    originalPrice: 3.99,
  },
  {
    id: 2,
    image: "/images/img-12.png", // Gambar Potatoes
    category: "Vegetables",
    title: "Potatos 1kg",
    brand: "Mr.food",
    price: 1,
    originalPrice: 1.99,
  },
  {
    id: 3,
    image: "/images/img-13.png", // Gambar Tomatos
    category: "Fruits",
    title: "Tomatos 200g",
    brand: "Mr.food",
    price: 0.30,
    originalPrice: 0.99,
  },
  {
    id: 4,
    image: "/images/img-14.png", // Gambar Broccoli
    category: "Vegetables",
    title: "Broccoli 1kg",
    brand: "Mr.food",
    price: 1.50,
    originalPrice: 2.99,
  },
  {
    id: 5,
    image: "/images/img-15.png", // Gambar Green Beans
    category: "Vegetables",
    title: "Green Beans 250g",
    brand: "Mr.food",
    price: 1,
    originalPrice: 1.99,
  },
];



const FeaturedProducts = () => {
  const tabs: string[] = [
    "All",
    "Vegetables",
    "Fruits",
    "Coffee & teas",
    "Meat",
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 px-24 mt-20">
        <h2 className="text-2xl  text-gray-800">Featured Products</h2>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-3 text-sm md:text-base">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="py-1 px-2 rounded-md  text-gray-500 hover:text-green-600 hover:bg-green-50"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex space-x-8 justify-between items-center px-6">
        <button className="prev-categories w-10 h-10 bg-white rounded-full hover:bg-gray-100  text-gray-600 ">
          <ChevronLeft />
        </button>
        {productData.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              brand={product.brand}
              price={product.price}
              originalPrice={product.originalPrice}
            />
        ))}
        <button className="prev-categories z-10  w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100  text-gray-600 ">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
