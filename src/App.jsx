import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from './pages/Wishlist'
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Footer from "./components/Footer";


function App() {
  

  return (
   <div>
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
       <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="profile" element={<Profile/>}/>

  
            </Routes>
            <Footer/>
          </WishlistProvider>
        </CartProvider>
    </ThemeProvider>
   </div>
  );
}

export default App
