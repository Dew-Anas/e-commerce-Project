import { useContext, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ products }) {
  const {
    id,
    title,
    price,
    thumbnail,
    brand,
    category,
    rating,
    stock,
    discountPercentage,
  } = products;

  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddTocart = (e) => {
    e.preventDefault();
    addToCart(products);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  
  const inWishlist = isInWishlist(id);

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(products);
  };

  return (
    <div className="bg-surface border border-white/10 rounded-xl overflow-hidden group hover:border-accent/40 transition-all">
      <Link to={`/products/${id}`}>
        <div className=" relative bg-surfaceLight aspect-square ">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain p-6"
          />

          {discountPercentage > 0 && (
            <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {Math.round(discountPercentage)}% OFF
            </span>
          )}

          <button
            className="absolute top-3 right-3 bg-base/60 backdrop-blur-sm p-2 rounded-full hover:bg-rose-500/20 transition-colors"
            onClick={handleWishlist}
          >
            <FaHeart
              className={`text-sm transition-colors ${inWishlist ? "text-rose-500" : "text-muted hover:text-rose-500"}`}
            />
          </button>

          {stock === 0 && (
            <div className="absolute inset-0 bg-base/70 flex items-center justify-center">
              <span className="text-white text-sm font-semibold border border-white/30 px-3 py-1 rounded-md">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col gap-1">
          <span className="text-xs text-muted uppercase tracking-wide">
            {products.category}
          </span>

          <h3 className="text-white text-sm font-medium">{products.title}</h3>

          <span className="text-xs text-muted">{products.brand}</span>

          <div className="flex items-center gap-1 mt-1">
            <FaStar className="text-accent text-xs" />
            <span className="text-xs text-muted">{products.rating}</span>
          </div>

          <p className="text-white font-semibold mt-1">${products.price}</p>

          <span
            className={`text-xs font-medium mt-1 ${stock > 0 ? "text-emerald-500" : "text-rose-500"}`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={handleAddTocart}
          disabled={stock === 0}
          className={`w-full text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors ${
            added
              ? "bg-emerald-500 text-white"
              : "bg-accent hover:bg-accentHover text-base disabled:bg-surfaceLight disabled:text-muted disabled:cursor-not-allowed"
          }`}
        >
          {added ? "Added " : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
