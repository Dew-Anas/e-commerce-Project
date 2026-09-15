import { Link,  } from "react-router-dom";

import{FaFacebook, FaInstagram, FaTwitter, FaEnvelope} from 'react-icons/fa'

function Footer(){
    return(
        <footer className="bg-surface border-t border-white/10 mt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/*Brand */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-3">

                        <h3 className="text-xl font-display font-bold text-accent">ShopNest</h3>

                        <p className="text-muted text-sm leading-relaxed">
                            Premium products, 
                            curated for quality
                             and timeless design.
                            
                        </p>
                    </div>

                    {/*shop Links */}

                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm">Shop</h4>

                    <Link to="/products" className="text-muted text-sm hover:text-accent transition-colors">All Products</Link>

                    <Link to="/cart" className="text-muted text-sm hover:text-accent transition-colors">
                    Cart
                    </Link>

                    <Link to="/wishlisht" className="text-muted text-sm hover:text-accent transition-colors">
                    Wishlist
                    </Link>

                </div>

                {/*Company Links */}

                <div className="flex flex-col gap-3">

                    <h4 className="text-white font-semibold text-sm">Company</h4>

                        <a href="#" className="text-muted text-sm hover:text-accent transition-colors">About Us</a>

                        <a href="#" className="text-muted text-sm hover:text-accent transition-colors">Contact</a>

                        <a href="#" className="text-muted text-sm hover:text-accent transition-colors">Privacy Policy</a>
                 </div>

                 {/*Social */}
                 <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm">Follow Us</h4>

                    <div className="flex gap-4">
                        <a href="#" className="text-muted hover:text-accent transition-colors"><FaFacebook className="text-lg" /></a>

                        <a href="#" className="text-muted hover:text-accent transition-colors"><FaInstagram className="text-lg" /></a>

                        <a href="#" className="text-muted hover:text-accent transition-colors"><FaTwitter className="text-lg" /></a>

                        <a href="#" className="text-muted hover:text-accent transition-colors"><FaEnvelope className="text-lg" /></a>

                    </div>
                 </div>
                </div>
                <div className="border-t border-white/10 mt-10 pt-6 text-center">
                <p  className="text-muted text-xs">
                    ©{new Date().getFullYear()} Shop Nest.  All rights reserved.
                </p>

                </div>
            </div>
        </footer>

    )
}

export default Footer;