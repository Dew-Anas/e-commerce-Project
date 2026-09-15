
import { Link,  } from 'react-router-dom'
import { useContext, useState,  } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CartContext } from '../context/CartContext'
import { WishlistContext } from '../context/WishlistContext'
import { FaShoppingCart, FaHeart,  FaMoon, FaSun, FaUser, FaBars, FaTimes,FaHome ,FaShopify} from 'react-icons/fa'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const { cartItems } = useContext(CartContext)

  const { wishlistItems } = useContext
  (WishlistContext)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  

 

  return (
    <nav className="bg-base border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        <Link to="/" className="text-2xl font-display font-bold text-accent tracking-wide flex space-x-2">

          <FaShopify className="animate-pulse"   />Shop
          <span className="text-yellow-500 px-1.5">
            Nest 
                </span>

        </Link>

        {/* Desktop Search */}

        <div className=" hidden md:flex items-center gap-8 " >
          <Link 
                to="/"
                className="relative text-m font-medium text-muted transition-colors duration-300 hover:text-yellow-500 group"
                > Home
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <Link 
                to="products"
                className="relative text-m font-medium text-muted transition-colors duration-300 hover:text-yellow-500 group"
                >Products
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full">

                </span>
                </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 md:gap-6">

          {/* Mobile Search Toggle */}

          

          <Link to="/wishlist" className="relative group">
            <FaHeart className="text-lg text-muted group-hover:text-accent transition-colors" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative group">
            <FaShoppingCart className="text-lg text-muted group-hover:text-accent transition-colors" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-base text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Desktop-only: Profile + Theme */}
          <Link to="/profile" className="hidden md:block group">
            <FaUser className="text-lg text-muted group-hover:text-accent transition-colors" />
          </Link>
          
          <button onClick={toggleTheme} className="hidden md:block text-muted hover:text-accent transition-colors">
            {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-muted hover:text-accent">
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      

      {/* Mobile Hamburger Menu - Profile, Theme */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-white/10 pt-4">

            <Link to="/" className=' flex items-center gap-2'> <FaHome className="text-accent" />Home</Link> 

            <Link to="products" className=' flex items-center gap-2'> 
            <FaShoppingCart className="text-accent"/>Products
            </Link> 
            
                        
          <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-white text-sm py-2">

            
            
              

            <FaUser className="text-accent" /> My Profile
          </Link>
         
          
          <button onClick={() => { toggleTheme(); setMobileMenuOpen(false) }} className="flex items-center gap-3 text-white text-sm py-2">
            {theme === 'dark' ? <FaSun className="text-accent" /> : <FaMoon className="text-accent" />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar