import React, { useContext } from 'react'
import AnimatedProduct from './AnimatedProduct'
import CardMain from './CardMain'
import { motion,useScroll } from "motion/react"
import { ContextProvider } from '../Context/ProductContext'
import Navbar from './Navbar'

const Home = ({}) => {
  const {colors,index} = useContext(ContextProvider)

  return (
    <div className='z-10 relative  pt-20 text-white'>
    <Navbar />

      <motion.div
        animate={{
          background: `linear-gradient(135deg, ${colors[index][1]}80, ${colors[index][0]}80)`, // translucent overlay
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="h-[900px] shadow w-[1000px] rotate-45 absolute -top-[45%] -z-4 left-[50%] -translate-x-[50%]"
      />

      <div className=' mx-auto text-[1.3vw] font-semibold w-fit px-5 rounded-4xl py-2 shadow-[-1.5px_-1.5px_3px_white]'>
        New Spring Collection 2025  
      </div>
      <h1 className='text-[3.3vw] font-bold w-[850px] mt-4 text-shadow-lg leading-11  mx-auto text-center' >Where style meets innnovative ways of meeting new Fashion </h1>

<a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    window.scrollTo({
      top: 700, 
      behavior: "smooth",
    });
  }}
>

      <div className='w-fit font-semibold bg-white text-black px-4 mx-auto mt-4 py-1 rounded-4xl' >
        New Collection 
        <span className='py-0.5 px-1 ml-3 bg-black text-white rounded-full'>
          <i className="ri-arrow-down-line"></i>
        </span>
      </div>  
</a>

<AnimatedProduct/>

<CardMain bgColor ={`${colors[index][0]}`}/>


    </div>
  )
}

export default Home