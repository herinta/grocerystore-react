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
  {
    id: 6,
    image: "/images/img-11.png", // Gambar Redish
    category: "Vegetables",
    title: "Redish 500g",
    brand: "Mr.food",
    price: 2,
    originalPrice: 3.99,
  },
  {
    id: 7,
    image: "/images/img-12.png", // Gambar Potatoes
    category: "Vegetables",
    title: "Potatos 1kg",
    brand: "Mr.food",
    price: 1,
    originalPrice: 1.99,
  },
  {
    id: 8,
    image: "/images/img-13.png", // Gambar Tomatos
    category: "Fruits",
    title: "Tomatos 200g",
    brand: "Mr.food",
    price: 0.30,
    originalPrice: 0.99,
  },
  {
    id: 9,
    image: "/images/img-14.png", // Gambar Broccoli
    category: "Vegetables",
    title: "Broccoli 1kg",
    brand: "Mr.food",
    price: 1.50,
    originalPrice: 2.99,
  },
  {
    id: 10,
    image: "/images/img-15.png", 
    category: "Vegetables",
    title: "Green Beans 250g",
    brand: "Mr.food",
    price: 1,
    originalPrice: 1.99,
  },
];


const Product = () => {
  return (
    <div className="mt-10 px-24">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 mx-auto">New Product</h2>
        <div className="flex flex-wrap gap-10 items-center">
        {productData.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              brand={product.brand}
              price={product.price}
              originalPrice={product.originalPrice}
              id={product.id}
            />
        ))}
        </div>
    </div>
  )
}

export default Product