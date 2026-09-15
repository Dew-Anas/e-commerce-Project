import { Link } from "react-router-dom";
import HeroImage from "../assets/Hero.image.png"

 function HeroBanner() { 
  return ( 
  <section className="relative bg-surface border-b border-white/10 overflow-hidden"> 
  
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl">
  </div> 
  
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div> 

  <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
     {/* LEFT SIDE — Content */} 
     <div className="flex flex-col items-start gap-6"> 
      
      <span className="text-accent font-body text-sm tracking-widest uppercase"> 
        New Season Arrivals
       </span> 
       <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight max-w-2xl ">
         Elevate Your Everyday 
        <span className="text-accent  ">
           Style
        </span>
        </h1> 
            
        <p className="text-muted font-body text-base md:text-lg max-w-xl">
           Discover premium products curated for quality, comfort, and timeless design.
         </p> 

         <Link
          to="/products" 
          className="mt-2 bg-accent hover:bg-accentHover text-base font-semibold px-8 py-3.5 rounded-xl transition-colors" > 
          Shop Now 
          </Link>
       </div> 


      {/* RIGHT SIDE — Product Image */} 
      
      <div className="relative flex justify-center md:justify-end">
        
         <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl">
         </div>
          <img 
            src={HeroImage}
           alt="Featured product" className="relative w-full max-w-md object-contain drop-shadow-2xl " />
          </div> 
        </div> 
    </section> 
  );
 } 
  
        export default HeroBanner;