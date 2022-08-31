import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/commons/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductDetail from './components/product/ProductDetail';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import Checkout from './components/commons/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
