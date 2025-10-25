import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ContextProvider } from "../Context/ProductContext";
import Navbar from "./Navbar";

const CardDetails = () => {
  const { colors, index } = useContext(ContextProvider);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(900);
 const basePrice = 900; 
    const handleIncrease = () => {
    setQty((prev) => {
      const newQty = prev + 1;
      setPrice(basePrice * newQty); // total price update
      return newQty;
    });
  };

   const handleDecrease = () => {
    setQty((prev) => {
      const newQty = prev > 1 ? prev - 1 : 1;
      setPrice(basePrice * newQty);
      return newQty;
    });
  };


  return (
    
    <motion.div
      className="min-h-screen w-full flex justify-center items-center px-8 md:px-20 py-10"
      style={{
        background: `linear-gradient(135deg, ${colors[index][0]}, ${colors[index][1]})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
          <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 w-full max-w-6xl">
        
        {/* Left: Product Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/1.jpeg"
            alt="Product"
            className="w-[350px] md:w-[450px] rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Luxury Leather Jacket
          </h1>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            Step up your style with our premium leather jacket. Designed for comfort, crafted with precision, and made to last. Perfect for casual outings or special occasions.
          </p>
            <h2 className="text-5xl font-semibold text-yellow-400">${price}</h2>


          {/* Price and Options */}
          <div className="flex  mt-3 items-center justify-between mb-8">
            <div className="flex items-center gap-5 ">
  <h1 className="text-xl font-semibold text-gray-200">Quantity</h1>
  <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
    {/* Minus Button */}
    <motion.button
      whileHover={{ scale: 1.1 }}
       onClick={handleDecrease}
      whileTap={{ scale: 0.9 }}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/70 hover:bg-red-600 transition"
    >
      <i className="ri-subtract-line text-white"></i>
    </motion.button>

    {/* Counter */}
    <span className="text-2xl font-bold text-white select-none">{qty}</span>

    {/* Plus Button */}
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        onClick={handleIncrease}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/70 hover:bg-green-600 transition"
    >
      <i className="ri-add-line text-white"></i>
    </motion.button>
  </div>
</div>

            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-white/20 hover:bg-white/40 border border-white rounded-lg text-white font-semibold transition-all"
                >
                  {size}
                </button>
              ))}
            </div>


          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden bg-gradient-to-b from-blue-400 mr-4 to-blue-500 text-black font-bold text-lg px-10 py-4 rounded-full shadow-lg"
          >
            <span className="relative z-10 flex items-center justify-center  gap-2">
              <i className="ri-shopping-cart-2-fill text-xl"></i>Buy Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-yellow-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg px-10 py-4 rounded-full shadow-lg"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <i className="ri-shopping-cart-2-fill text-xl"></i> Add to Cart
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardDetails;
