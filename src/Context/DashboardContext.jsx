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
   
   const [allProductDataDB, setallProductDataDB] = useState([])

   
   

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
  
   useEffect(()=>{
    ProductDataShow()

   },[ProductDataShow])
  
  return (
    <DashboardContext.Provider value={{image,setimage,
      handleProductDataUpload,
      price,setprice,setquntity,allProductDataDB,
      preview,setPreview,ProductDec,quntity, setProductDec,ProductTitle,setProductTitle,ActiveDash, setActiveDash }}>
      {children}
    </DashboardContext.Provider>
  );
};
