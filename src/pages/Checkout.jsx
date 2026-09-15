import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Checkout(){
    const{cartItems,cartTotal} = useContext(CartContext)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name:"",
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
    })

         const handleChange =(e) =>{
            setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,

            }))
         }

            const handleSubmit = (e) => {
                e.preventDefault()
                console.log('Order placed:', { formData, cartItems, cartTotal })
                navigate('/profile')
                }
    return(
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
            <h1 className="text-2xl font-display font-bold text-white mb-8">Checkout</h1>
                
                {/* lest side form */}

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-white font-semibold text-lg">Customer Details</h2>

                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50"
                    />

                    <input
                       type="tel"
                       name="phone"
                       placeholder="Phone Number"
                       value={formData.phone}
                       onChange={handleChange}
                       required
                       className="bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50"
                    />

                    <h2 className="text-white font-semibold text-lg mt-2">Delivery Address</h2>

                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50"
                    />


                <div className="flex gap-4">
                     <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50 flex-1"
                     />

                     <input
                        type="text"
                        name="zip"
                        placeholder="ZIP Code"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-accent/50 w-32"
                     />
                </div >
            </div>

            
            
            {/*order summery */}
            <div className="bg-surface border border-white/10 rounded-xl p-6 h-fit flex flex-col gap-4">
             <h2 className="text-white font-semibold text-lg">Order Summary</h2>

                <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                        <div  key={item.id} className="flex justify-between text-sm">
                            <span className="text-muted">{item.title} × {item.quantity}</span>

                            <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        ))}
                </div >

                <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted">Subtotal</span>
                            <span className="text-white">${cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-muted">Delivery</span>
                            <span className="text-emerald-500">Free</span>
                        </div>

                        <div className="flex justify-between text-base font-semibold mt-1">
                            <span className="text-white">Total</span>

                            <span className="text-accent text-xl">${cartTotal.toFixed(2)}</span>

                        </div>
                    </div>

                    <button
                     type="submit"
                     className="mt-2 bg-accent hover:bg-accentHover text-base font-semibold px-6 py-3.5 rounded-xl transition-colors">
                    Place Order
                    </button>
                </div>
             </form>
        </div>

    );
}

export default Checkout;