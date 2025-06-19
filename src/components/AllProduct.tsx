import axios from "axios";

import { useEffect, useState } from "react";
import Product from "./Product";

type Product = {
  id: string | number;
  image: string;
  category: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
};


const AllProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex">
      {products.map((product) => (
        <div key={product.id} className="p-4">
          <Product
            id={product.id}
            image={product.image }
            category={product.category}
            title={product.name}
            brand={product.brand}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
