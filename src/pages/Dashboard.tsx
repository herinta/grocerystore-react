import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [product, setProduct] = useState([]);

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      setProduct((previousProducts) =>
        previousProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="mb-10">Welcome admin</p>

      <Link
        to="/admin/dashboard/add-product"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Product
      </Link>

      <div className="px-10 mt-10">
        <table className="text-center w-full ">
          <thead className="bg-gray-100 ">
            <tr className="">
              <th className="py-3">ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr
                className="hover:bg-gray-100 border-b border-gray-200"
                key={product.id}
              >
                <td className="py-2">{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>
                  <Link
                    to={`/admin/dashboard/edit-product/${product.id}`}
                    className="bg-blue-400 text-white px-4 py-1 rounded cursor-pointer"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-400 text-white px-4 py-1 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
