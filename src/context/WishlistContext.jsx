
import{createContext,useState, useEffect} from 'react'

export const WishlistContext = createContext()

export const WishlistProvider=({children}) =>{
    const [wishlistItems, setWishlistItems] = useState(()=>{
        const saved = localStorage.getItem('wishlist')
        return saved ? JSON.parse(saved) : []
    })

        useEffect(() => {
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
            }, [wishlistItems])

    const toggleWishlist=(product)=>{
        setWishlistItems((prev)=>{
            const exists = prev.find((items) => items.id === product.id)
            if(exists){
                return prev.filter((item) => item.id !== product.id)
            } else{
                return[...prev, product]
            }
        })
    }

    const isInWishlist = (id) => {
        return wishlistItems.some((item) => item.id === id)
    }

    const removeFromWishlist = (id) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id))
}
return (
     <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isInWishlist, removeFromWishlist }}>
     {children}

     </WishlistContext.Provider>

      )
      }