import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { FaStar } from 'react-icons/fa'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails(){
    const {id} = useParams()

    const [products,setProducts] = useState(null)

    const [loading, setLoading] = useState(true)

    const {addToCart} = useContext(CartContext)


    useEffect(() =>{
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            setLoading(false)
    })

    }, [id])

    if (loading) {
    return <p className="text-muted text-center py-20">Loading...</p>
  }
    
    return(
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
            <div className="grid md:grid-cols-2 gap-10">

                {/*Larg Image*/}
                <div className="bg-surface border border-white/10 rounded-xl aspect-square">
                    <img
                    src={products.thumbnail}
                    alt={products.title}
                    className="w-full h-full object-contain p-10"
                    />

                </div>

                {/*Details*/}
                    <div className="flex flex-col gap-4">
                        <span className="text-accent text-xs uppercase tracking-widest">{products.brand}</span>

                        <h1 className="text-3xl font-display font-bold text-white">{products.title}</h1>

                    <div className="flex                items-center gap-2">
                        <FaStar className="text-accent text-sm" />

                        <span className="text-muted text-sm">{products.rating} Rating</span>

                    </div>

                    <p className="text-muted leading-relaxed">{products.description}</p>

                <div className="flex items-center gap-3 mt-2">
                    <span className="text-3xl font-display font-bold text-white">${products.price}</span>
                    {products.discountPercentage > 0 && (
                        <span className="bg-emerald-500/10 text-emerald-500 text-sm font-semibold px-2.5 py-1 rounded-md">
                        {Math.round(products.discountPercentage)}% OFF
                        </span>
                        )}
                </div>

                <span className={`text-sm font-medium ${products.stock > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                {products.stock > 0 ? `In Stock (${products.stock} available)` : 'Out of Stock'}
                </span>

                 <button
                    onClick={()=>addToCart(products)}
                    disabled={products.stock === 0}
                    className="mt-4 bg-accent hover:bg-accentHover disabled:bg-surfaceLight disabled:text-muted disabled:cursor-not-allowed text-base font-semibold px-8 py-3.5 rounded-xl transition-colors w-fit"
                    >
                Add to Cart
            </button>
                    
         </div>   
       </div>     
    </div>
    );
}

export default ProductDetails;