import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import NewProducts from './pages/NewProducts';


function App() {
  return (
    <Routes>
       
          <Route index element={<HomePage />} />
          <Route path="/new-product" element={<NewProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/add-product" element={<AddProduct />} />
          <Route path="/admin/dashboard/edit-product/:id" element={<EditProduct />} />
       
    </Routes>
  );
}

export default App;
