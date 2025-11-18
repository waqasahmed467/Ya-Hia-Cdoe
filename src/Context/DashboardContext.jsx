// DashboardContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


export const DashboardContext = createContext();

export const DashboardData = ({ children }) => {
  const [ActiveDash, setActiveDash] = useState("Dashboard");

   const [ProductTitle, setProductTitle] = useState('')
   const [ProductDec, setProductDec] = useState('')
   const [preview, setPreview] = useState("");
   const [price, setprice] = useState("");
   const [quntity, setquntity] = useState("");
   const [DomainName, setDomainName] = useState('http://127.0.0.1:8000/')
   const [image, setimage] = useState('')
   const [AnimatedShow, setAnimatedShow] = useState([])
   const [allProductDataDB, setallProductDataDB] = useState([])

   
   const handleProductAnimated=async ()=>{
    try{

      const res = await axios.get(`${DomainName}api/AnimatedProduct`)
      setAnimatedShow(res.data)
    }
    catch(error){
      

    }





   }




   const  handleProductDataUpload = async()=>{

    try{

      
     const res =await  axios.post(`${DomainName}api/ProductInsert`,{
        ProductTitle,
        ProductDec,
        image,
        price,quntity
      },
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

      toast.success(res.data.msg)
      

      }
      catch(error){
  console.log(error.responce);
  
      }


   }

   const ProductDataShow = async ()=>{

    const res = await axios.get(`${DomainName}api/ShowProduct`)

    setallProductDataDB(res.data);
    

   } 

   const handleDataDelete = (Id)=>{

    try{

      const  res = axios.get(`${DomainName}api/DeleteProduct${Id}`);
      console.log(res.data.msg);
    } 
catch(error){
  

}

   
    



   }
  
   useEffect(()=>{
    ProductDataShow()
handleProductAnimated()
   },[])
  
  return (
    <DashboardContext.Provider value={{
      
      image,setimage,handleProductAnimated,
     AnimatedShow, handleProductDataUpload,handleDataDelete,
      price,setprice,setquntity,allProductDataDB,
      preview,setPreview,ProductDec,quntity, setProductDec,ProductTitle,setProductTitle,ActiveDash, setActiveDash }}>
      {children}
    </DashboardContext.Provider>
  );
};
