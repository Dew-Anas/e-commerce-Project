
import { useState,useEffect } from "react";
import ProductCard from "./ProductCard"

const BestSellers = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=8&sortBy=rating&order=desc')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products)
            setLoading(false)
})
},[])

return(
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-white">Best Sellers</h2>
        </div>
        {loading ? (
            <p className="text-muted">Loading...</p>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {products.map((product)=>(
                    <ProductCard key={product.id} products={product} />
                ))}
            </div>
        )}
    </section>

)
}

export default BestSellers;
