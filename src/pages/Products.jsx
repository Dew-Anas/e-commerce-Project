import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { FaRegHandPointDown, FaSearch } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);

        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  let filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )

    .filter((product) =>
      category === "all" ? true : product.category === category,
    );

  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating,
    );
  }
  return (
    <div className="max-w-full mx-auto px-4 md:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-white mb-6 flex items-center justify-center py-4 sticky top-0" >
        All Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 lg:shrink-0">
          <div className="bg-surface border border-white/10 rounded-xl p-4 lg:p-5 lg:sticky lg:top-24 flex flex-col gap-4 lg:gap-6">
            <div>
              <h3 className="text-white font-semibold text-sm mb-2 lg:mb-3">
                Search
              </h3>
              <div className="flex items-center bg-base border border-white/10 rounded-xl px-3 py-2 lg:py-2.5 focus-within:border-accent/50 transition-colors">
                <FaSearch className="text-muted mr-2 text-xs" />
                <input
                  type="text"
                  placeholder="Search products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none w-full text-sm text-white placeholder:text-muted"
                />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm mb-2 lg:mb-3">
                Category
              </h3>
              <div className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
                <button
                  onClick={() => setCategory("all")}
                  className={`shrink-0 lg:w-full text-left text-xs lg:text-sm px-3 py-1.5 lg:py-2 rounded-lg whitespace-nowrap transition-colors ${
                    category === "all"
                      ? "bg-accent text-base font-medium"
                      : "text-muted hover:bg-surfaceLight hover:text-white"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`shrink-0 lg:w-full text-left text-xs lg:text-sm px-3 py-1.5 lg:py-2 rounded-lg whitespace-nowrap capitalize transition-colors ${
                      category === cat
                        ? "bg-accent text-base font-medium"
                        : "text-muted hover:bg-surfaceLight hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm mb-2 lg:mb-3">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-base border border-white/10 rounded-xl px-3 py-2 lg:py-2.5 text-sm text-white outline-none focus:border-accent/50"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Grid - இதுதான் MISSING ஆ இருந்தது */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="h-80 rounded-xl bg-white/10 animate-pulse"
                />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className="text-muted">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <ProductCard key={product.id} products={product} />
              ))}
            </div>
          )}

          {visibleProducts < filteredProducts.length && (
            <button
              onClick={() => setVisibleProducts((prev) => prev + 12)}
              className="mt-8 px-6 py-3 rounded-lg bg-accent hover:bg-accentHover text-base font-semibold flex items-center justify-center mx-auto hover:cursor-pointer gap-1.5"
            >
              More Products <FaRegHandPointDown className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
