import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NewProduct from './pages/NewProduct';
import ProductDetails from './pages/ProductDetails';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <Routes>
       
          <Route index element={<HomePage />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/add-product" element={<AddProduct />} />
       
    </Routes>
  );
}

export default App;
