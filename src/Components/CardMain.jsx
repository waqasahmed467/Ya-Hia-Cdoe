import React, { useContext } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../Context/DashboardContext'
import { ContextProvider } from '../Context/ProductContext'
import { toast } from 'react-toastify'
import AddTocartSlideBar from './AddTocartSlideBar'
import axios from 'axios'

const CardMain = ({bgColor}) => {
   const  {setAddTOCardSildeShow,addTocart,setProductDeteils,setReverceCart,fetchCartItems,allProductDataDB,DomainName}= useContext(ContextProvider)


  const navigate =  useNavigate()
  const MoveToCardDetails = async(id)=>{

try{
  const res =await axios.get(`${DomainName}api/ProductDeteils${id}`)
  console.log(res.data);
  setProductDeteils(res.data)
  navigate('/shoppingApp/CardDetails')
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  
}
catch(error){

}

  
    
    





  }
    
    




  return (
    <motion.div
    
    id='MainCard'
    animate={{
        backgroundColor: `${bgColor}`
    }}

    transition={{
        duration:1,
        ease:'easeInOut'
    }}
    className='absolute top-[900px]    left-0 z-20  -mt-[150px]  pt-20 w-full'
    style={{
      boxShadow:`0px -20px 30px 30px ${bgColor}, inset 0px 0px 30px ${bgColor}`
    }}
    > {/* Animated Cards Section */}
    <motion.h1
    initial={{
      y:20,
        opacity:0
        
    }}
    transition={{
        ease:'anticipate',
        duration : 0.6
    }}
    whileInView={{
        y:0,
        opacity:1

    }}
    className='text-white font-sans relative -mt-20 z-[1000] text-shadow-2xs text-center text-7xl font-bold'>
      Man's Collections</motion.h1>
      <div className={`mt-20 flex flex-wrap ${allProductDataDB.length > 0 ? null :'h-[80vh]' } justify-center gap-8 pb-16 relative z-10`}>
        {allProductDataDB.length > 0 ? allProductDataDB.map((item, i) => (
          <motion.div 
          
          onClick={()=>MoveToCardDetails(item.id)}
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: 'backIn' }}
            whileHover={{ scale: 1.02,boxShadow:'0px 5px 10px black' , y:-10 }}
            className="w-[280px] h-[440px] bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg  overflow-hidden cursor-pointer border border-white/20"
          >
            <img
               src={`${DomainName}upload/${item.img}`}
              alt={item.title}
              className="w-full h-[60%] object-cover"
            />
            <div className="p-4 flex flex-col items-start justify-center">
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p>{item.description}</p>
              <p className="text-gray-300 text-xl mt-3">{item.price}</p>
            </div>

            <motion.button
           onClick={(e) => {
    e.stopPropagation(); // 👈 navigation stop karega
    addTocart(item.id);        // 👈 ab function properly chalega
  }}
  whileHover={{ scale: 1.03 ,cursor:'pointer' }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="relative w-[95%] ml-2  mt-1 py-3 rounded-xl text-black font-semibold text-2xl overflow-hidden shadow-[0_0_25px_rgba(255,215,0,0.3)]"
>
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400  to-yellow-500 rounded-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]"></div>

  {/* Glow overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/30 via-transparent to-transparent blur-2xl rounded-xl"></div>

  {/* Text */}
  <span className="relative  z-10 flex items-center justify-center gap-2">
    Add To Cart
    
  </span>
</motion.button>

          </motion.div>
        )):<h1 className='text-3xl'>No Product found</h1>}
      </div></motion.div>
  )
}

export default CardMain