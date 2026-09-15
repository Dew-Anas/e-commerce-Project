import BestSellers from "../components/BestSellers";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";




function Home(){

    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=8')
        .then((res)=> res.json())
        .then((data)=>{
            setProducts(data.products)
        })
    },[])

    
    
    return(
        <div>
            <HeroBanner/>

            <div  className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto px-6 md:px-10 py-14">
            {products.map((product) =>(
                <ProductCard key={product.id} products={product}/>
            ))}
            </div>

            <BestSellers/>
            
        </div>
    );
}

export default Home;