import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../Context/ProductContext";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTocartSlideBar = () => {
  const navigate =  useNavigate()
  const {
    AddTOCardSildeShow,
    setProductDeteils,
    fetchCartItems,
    setAddTOCardSildeShow,
    ReverceCart,DomainName,
    CartDbItems,
  } = useContext(ContextProvider);
  const [scrollY, setScrollY] = useState(0);

 const newCart =  CartDbItems.reverse();

 
 const MoveToCardDetails = async(id)=>{
console.log('dasda');

try{
  const res =await axios.get(`${DomainName}api/ProductDeteils${id}`)
  console.log(res.data);
  setProductDeteils(res.data)
  navigate('/shoppingApp/CardDetails')
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
    setAddTOCardSildeShow(false)
  
}
catch(error){

}

  
    
    





  }
 
 

  // Scroll par sidebar move aur hide
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setAddTOCardSildeShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Delete handler with animation
  const handleCartDelete = (id) => {
    const localStorageCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const updatedLocalStorage = localStorageCartItems.filter(
      (itemsId) => itemsId !== id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedLocalStorage));
    fetchCartItems(); // update backend data
  };

  return (
    <motion.div
    
      animate={{
        x: AddTOCardSildeShow ? 0 : 310, // slide open/close
        y: scrollY * 1, // scroll ke sath move
      }}
      transition={{ ease: "anticipate" }}
      className="w-[300px] fixed top-0 right-0 h-full border-l bg-gray-900/75 backdrop-blur-xs text-white shadow-2xl z-40"
    >
      <div className="flex w-full justify-between pr-4">
        <div className="p-4 font-semibold text-lg">🛒 Add To Cart</div>
        <button onClick={() => setAddTOCardSildeShow(false)}>X</button>
      </div>
      <hr />

      <div className="h-full overflow-auto space-y-4 p-2">
        <AnimatePresence>
          {ReverceCart.map((items,i) => (
            <motion.div
            whileHover={{
      backgroundColor :'gray',
      cursor:'pointer'
    }}
            onClick={(e)=>{e.stopPropagation(), MoveToCardDetails(items.id)}}
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: 50,
                scale: 0.9,
                transition: { duration: 0.3 },
              }}
              layout
              className="p-3 flex items-center relative gap-3 bg-gray-800/60 rounded-lg"
            >
              <img
                className="h-[80px] w-[80px] object-cover rounded-lg"
                src={`http://127.0.0.1:8000/upload/${items.img}`}
                alt={items.title}
              />
              <div className="flex-1">
                <h1 className="text-sm font-semibold">{items.title}</h1>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {items.description}
                </p>
              </div>
              <button
                onClick={() => handleCartDelete(items.id)}
                className="text-red-400 absolute top-2 right-2 text-xl hover:scale-125 transition"
              >
                <i className="ri-delete-bin-line"></i>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AddTocartSlideBar;
