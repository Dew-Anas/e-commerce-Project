import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import{FaPlus,FaMinus, FaTrash} from 'react-icons/fa'


function Cart(){
    const {cartItems, removeFromCart, increaseQty,decreaseQty, cartTotal} = useContext(CartContext)

    if(cartItems.length ===0){
        return(
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="text-muted text-lg">Your cart is empty.</p>
                <Link to="/products" className="text-accent font-medium hover:underline">
                Continue Shopping
                </Link>

            </div>
        )
    }
    return(
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
            <h1 className="text-2xl font-display font-bold text-white mb-8">Shopping Cart</h1>
            <div className="flex flex-col gap-4">
                {cartItems.map((item) =>(
                    <div key={item.id} className="bg-surface border border-white/10 rounded-xl p-4 flex items-center gap-4">
                        <img
                        src={item.thumbnail}
                        alt={item.title} 
                        className="w-20 h-20 object-contain bg-surfaceLight rounded-lg p-2"
                        />
                        <div className="flex-1">
                            <h3 className="text-white text-sm font-medium">{item.title}</h3>
                            <p className="text-muted text-xs">{item.brand}</p>
                            <p className="text-white font-semibold mt-1">${item.price}</p>
                            
                            <div className="flex items-center gap-3 bg-surfaceLight rounded-lg px-2 py-1.5">
                                <button
                                onClick={()=> decreaseQty(item.id)}
                                className="text-muted hover:text-accent transition-colors p-1">
                                    <FaMinus  className="text-xs"/>      
                                </button>
                                <span className="text-white text-sm w-4 text-center">{item.quantity}</span>

                                <button
                                onClick={()=>increaseQty(item.id)}
                                className="text-muted hover:text-accent transition-colors p-1">
                                    <FaPlus className="text-xs"/>
                                </button>
                             </div>

                             {/*Item SubTotal*/}
                             <p className="text-white font-semibold w-16 text-right">
                                ${(item.price*item.quantity).toFixed(2)}
                             </p>
                             {/* remove Button */}

                             <button
                             onClick={() => removeFromCart(item.id)}
                             className="text-muted hover:text-rose-500 transition-colors p-2"
                             >
                                <FaTrash className="text-sm"/>
                             </button>
                    </div>
                </div>
                ))} 
           </div> 
           {/*Total section */}
           <div className="mt-8 bg-surface border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <span className="text-muted text-sm">Total ({cartItems.length} items)</span>

            <span className="text-2xl font-display font-bold text-white">${cartTotal.toFixed(2)}</span>
           </div>
           <Link
            to="/checkout"
            className="mt-4 block text-center bg-accent hover:bg-accentHover text-base font-semibold px-8 py-3.5 rounded-xl transition-colors">
                Proceed to Checkout
           </Link>
        </div>
    );
}

export default Cart;