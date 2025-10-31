import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../Context/ProductContext'

const Navbar = () => {
 const {setAddTOCardSildeShow,fetchCartItems} = useContext(ContextProvider)

 const localStorageCartItems =  JSON.parse(localStorage.getItem('cartItems')) 

 const CartItems =   localStorageCartItems && localStorageCartItems.length 

  return (
    <div className='Navbar z-20 fixed flex gap-3 justify-between items-center h-16 text-white left-[50%] -translate-x-[50%] w-[90%]  rounded-full top-1 backdrop-blur-lg md:px-8 bg-black/20  '>
      <Link to={'/shoppingApp'} onClick={() => {
      }}
      >


        <h1 className='text-[1.5vw] text-nowrap'>DgShopping </h1>
      </Link>
      <input type="text" className='bg-white/75  w-[70%]  rounded-4xl px-5 py-2 placeholder:text-gray-600' placeholder='Search..' />
      <button className='bg-yellow-600 flex justify-center items-center px-2 py-1 rounded-full'>
        <i className="ri-user-fill text-white bg-black h-7 rounded-full w-7 flex justify-center items-center text-[14px] text-shadow-2xs"  ></i>
        <Link to={'/AddProduct'} className='text-nowrap text-black py-1 font-semibold px-2 text-[1.3vw]'>



          Sign Up
        </Link>

      </button> 
      <i onClick={()=>{
        setAddTOCardSildeShow((prev)=>!prev)
        fetchCartItems()
      }} className="ri-shopping-cart-fill hover:cursor-pointer relative text-[30px]">
        <span className='bg-black absolute w-6 h-6 rounded-full flex justify-center items-center top-4 text-[18px]  left-5 -mt-5'>{CartItems > 0 ? CartItems : 0}</span>
      </i>
    </div>

  )
}

export default Navbar