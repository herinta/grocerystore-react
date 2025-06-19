import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
      const [image, setImage] = useState(null);


    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    if (file) {
      const imageName = `images/${file.name}`;
      setImage(imageName);
    } else {
      setImage(null);
    }
  };


   

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name: name,
            category: category,
            stock: stock,
            price: price,
            description: description,
            image: image
        } 

        axios.post('http://localhost:8000/products', newProduct)
        .then((response) => {
            console.log(response.data);
            navigate('/admin/dashboard');    

        })
        .catch((error) => {
            console.error(error);
        });
    }


  return (
    <div className="p-20">
        <h1 className="text-xl mb-5">Add Products</h1>
           <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium">Product Name</label>
                <input
                    type="text"
                    placeholder="Product Name"
                    className="border"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Category</label>
                <input
                    type="text"
                    placeholder="category"
                    className="border"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Stock</label>
                <input
                    type="text"
                    placeholder="stock"
                    className="border"
                    value={stock}
                    onChange={(event) => setStock(Number(event.target.value))}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Price</label>
                <input
                    type="number"
                    placeholder="stock"
                    className="border"
                    value={price}
                    onChange={(event) => setPrice(Number(event.target.value))}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                    placeholder="Description"
                    className="border"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows={3}
                />
            </div>
             <div className="mb-4">
                <label className="block text-sm font-medium">Image</label>
               <input
                type="file"
                onChange={handleFileChange}
                className=" file:border-1  file:px-3 file:py-1 file:text-sm  hover:file:bg-gray-100 file:cursor-pointer"
                />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Add Product</button>

        </form>
    </div>
  )
}

export default AddProduct