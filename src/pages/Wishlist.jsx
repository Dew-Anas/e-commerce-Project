 import { useContext } from "react";
 import { Link } from "react-router-dom";
 import{WishlistContext} from '../context/WishlistContext'
 import { FaTrash } from "react-icons/fa";

function Wishlist(){
    const { wishlistItems, removeFromWishlist } = useContext(WishlistContext)

    if (wishlistItems.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="text-muted text-lg mb-4">Your wishlist is empty.</p>

                <Link to="/products" className="text-accent font-medium hover:underline">
                    Browse Products →
                </Link>

            </div>
        )
    }
    return(
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
            <h1 className="text-2xl font-display font-bold text-white mb-8">My Wishlist</h1>
            <div className="flex flex-col gap-4">
                {wishlistItems.map((item) => (

                    <div key={item.id} className="bg-surface border border-white/10 rounded-xl p-4 flex items-center gap-4">
                        <Link to={`/products/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain bg-surfaceLight rounded-lg p-2" />
                        </Link>

                        <div className="flex-1">
                            <Link to={`/products/${item.id}`}>
                            <h3 className="text-white text-sm font-medium hover:text-accent transition-colors">{item.title}</h3>
                            </Link>
                            <p className="text-muted text-xs">{item.brand}</p>
                            <p className="text-white font-semibold mt-1">${item.price}</p>
                        </div>

                        <button
              onClick={() => removeFromWishlist(item.id)}
              className="text-muted hover:text-rose-500 transition-colors p-2"
            >
              <FaTrash className="text-sm" />
            </button>

            </div>
        ))}

            </div>
        </div>
    );
}

export default Wishlist;