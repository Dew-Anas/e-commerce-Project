import {useState, useEffect} from "react";
import ProductCard from "../components/ProductCard";
import { FaRegHandPointDown,  } from "react-icons/fa";



function Products (){

    const[products, setProducts]= useState([])
    const[loading,setLoading] = useState(true)
    const [visibleProducts, setVisibleProducts] =useState(12)
    const [search ,setSearch]= useState('')
    const [category, setCategory] = useState('all')
    const [categories, setCategories] = useState([])
    const [sortBy, setSortBy] = useState('default')


    

    

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products)
            setLoading(false)

            const uniqueCategories =[...new Set(data.products.map((p) =>p.category))]
            setCategories(uniqueCategories)
    }) 
    },[])

    let filteredProducts= products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

    .filter((product)=>
        category==='all'? true : product.category === category)

    if
     (sortBy ==="price-low"){
        filteredProducts=[...filteredProducts].sort((a,b)=> a.price-b.price)
    } else if (sortBy === 'price-high') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
     }
    return(
        <div className=" max-w-7xl mx-auto px-6 md:px-10 py-10">
            <h1 className="text-2xl font-display font-bold text-white mb-8"> All Products</h1>

            {/*Search Bar & catagouries*/}
            
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search products"
                    
                    className="bg-surface border border-white/10 rounded-xl px-4 py-2.5 h-11 w-full md:w-1/3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50 mb-8 "
                     value={search}
                     onChange={(e)=> setSearch(e.target.value)}
                     />

                    
                     <select 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className=" gap-4 bg-surface border border-white/10 rounded-xl  h-11 px-2 w-1/3 py-2.5 text-sm text-white outline-none focus:border-accent/50"
                            >
                            <option value="all">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                {category}
                                </option>
                            ))}
                    </select>


                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-surface border border-white/10 rounded-xl px-4 py-2.5 h-11 text-sm text-white outline-none focus:border-accent/50"
                        >
                        <option value="default">Sort: Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating: High to Low</option>
                </select>

                   </div>

               
                     
            { loading ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5"> 
                
                {Array.from({length:12}).map((_,index) =>(
                    <div
                    key={index}
                     className="h-80 rounded-xl bg-white/10 animate-pulse" />
                ))}
                </div>
                
            ) :  filteredProducts.length===0?(
                <p className="text-muted">No products found.</p>
            ):(
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {filteredProducts.slice(0,visibleProducts).map((product) => (
                    <ProductCard key={product.id} products={product} />
            ))}
                </div> 
            )}
            {visibleProducts< filteredProducts.length &&(
            <button 
            onClick={()=>setVisibleProducts((prev)=>prev+12)}
            className="mt-8 px-6 py-3 rounded-lg bg-accent hover:bg-accentHover text-base font-semibold flex items-center justify-center mx-auto hover:cursor-pointer hover:scale-3d gap-1.5">
                More Products <FaRegHandPointDown  className="text-2xl "/>
            </button>
            )}
        </div>
    );
}

export default Products;