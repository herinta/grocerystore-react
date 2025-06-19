import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/products/${id}`);
                const product = response.data;
                
                setName(product.name);
                setCategory(product.category);
                setStock(product.stock);
                setPrice(product.price);
                setDescription(product.description);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        getProductById();
    }, [id]); 

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedProduct = {
            name: name,
            category: category,
            stock: stock,
            price: price,
            description: description
        };

        axios.put(`http://localhost:8000/products/${id}`, updatedProduct)
            .then((response) => {
                console.log("Product updated successfully:", response.data);
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                console.error("Error updating product:", error);
            });
    };

    return (
        <div className="p-20">
            <h1 className="text-xl mb-5">Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Product Name</label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="border p-2 rounded w-full"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Category</label>
                    <input
                        type="text"
                        placeholder="Category"
                        className="border p-2 rounded w-full"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Stock</label>
                    <input
                        type="number"
                        placeholder="Stock"
                        className="border p-2 rounded w-full"
                        value={stock}
                        onChange={(event) => setStock(Number(event.target.value))}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Price</label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="border p-2 rounded w-full"
                        value={price}
                        onChange={(event) => setPrice(Number(event.target.value))}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        placeholder="Description"
                        className="border p-2 rounded w-full"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        rows={3}
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default EditProduct;