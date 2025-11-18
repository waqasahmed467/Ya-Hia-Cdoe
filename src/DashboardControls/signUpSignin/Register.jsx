import React, { useContext, useState } from 'react'
import { motion } from "motion/react"
import { ContextProvider } from '../../Context/ProductContext'
import axios from 'axios'

const Register = ({setCheckShow}) => {
 const {email,setemail ,DomainName, password,setpassword}=    useContext(ContextProvider)
const [name, setname] = useState()


const handleOnSubmit = async(e)=>{
    e.preventDefault()

    try{

        const res = await axios.post(`${DomainName}api/register`,{
            email,password,name
        })
        console.log(res);
        setCheckShow(340)
        
        
    }catch(e){
        console.log(e);
        
    }

}








    return (
        <form onSubmit={handleOnSubmit} className='p-5 flex backdrop:blur-2xl bg-black/20 flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl font-semibold'>Register</h1>
            <input type="text" 
            value={name}
            onChange={(e)=>setname(e.target.value)}
            autoFocus placeholder='Enter Username' className='p-3 placeholder:text-gray-200   text-md  pl-4  rounded-full w-[300px] border-2 bg-white/40 text-black' />
            <input type="email" 
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            autoFocus placeholder='Enter Email' className='p-3 placeholder:text-gray-200   text-md  pl-4  rounded-full w-[300px] border-2 bg-white/40 text-black' />
            <input
            value={password}
            onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Enter Password' className='p-3 placeholder:text-gray-200 pl-4 text-md rounded-full w-[300px] border-2 bg-white/40 text-black' />
            <div className='w-full  flex justify-between'>
                <div><input type="checkbox" /> Remenber Me </div>
                <a href="" className='text-blue-300 underline'>Forget Password</a>
            </div>

            <motion.button
                whileHover={{
                    scale: 1.06
                }}
                whileTap={{
                    scale: 1
                }}
                className='font-semibold w-full rounded-full text-black mt-2 text-xl hover:cursor-pointer bg-gradient-to-b from-yellow-400 to-yellow-600 py-2'>Submit</motion.button>


        </form>
    )
}

export default Register