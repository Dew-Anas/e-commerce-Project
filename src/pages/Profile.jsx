import{useState, useEffect,useContext} from 'react'
import { CartContext } from '../context/CartContext';
import profilePic from '../assets/Profile.jpeg'


function Profile(){
    const [user, setUser] =useState(null)
    const [loading, setLoading]= useState(true)
    const { cartItems,cartTotal}= useContext(CartContext)

    useEffect(()=>{
            fetch('https://dummyjson.com/users/1')
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                setLoading(false)
            })
        },[])

        if (loading){
            return<p className="text-muted text-center py-20"> Loading profile...</p>
        }


    return(
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
            <h1 className="text-2xl font-display font-bold text-white mb-8">My Profile</h1>

            {/*User Info Card */}
            <div className="bg-surface border border-white/10 rounded-xl p-6 flex items-center gap-5 mb-8">
                <img
                    src={profilePic}
                    alt={user.firstName}
                    className="w-20 h-20 rounded-full object-cover border-2 border-accent"/>
                    <div>
                        <h2 className="text-white text-lg font-semibold">
                            Mohemad Anas
                        </h2>
                        <p className="text-muted text-sm">anas@gmail.com</p>
                    </div>
            </div>
            {/*Order History */}
            <div>
                <h2 className="text-white font-semibold text-lg mb-4">Order History</h2>

                {cartItems.length === 0?(
                    <p className="text-muted text-sm"> No orders yet</p>
                ):(
                    <div className="bg-surface border border-white/10 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-muted text-sm">Order #1
                            </span>
                            
                            <span className="text-emerald-500 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-md">
                            Processing
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            {cartItems.map((item)=>(
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-muted">{item.title} × {item.quantity}</span>
                                    <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>

                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 mt-4 pt-4 flex justify-between font-semibold">
                            <span className="text-white">Total</span>

                            <span className="text-accent">${cartTotal.toFixed(2)}</span>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;