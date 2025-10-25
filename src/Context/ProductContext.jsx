import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

// 1️⃣ Create Context
export const ContextProvider = createContext();

// 2️⃣ Create Provider component
export const ProductProvider = ({ children }) => {
  const colors = [
    ['#2F3853', '#263127'], // dark steel + moss
    ['#06291f', '#065f46'], // dark green
  ];
  const [CartDbItems, setCartDbItems] = useState([])

const [LocatStorageCartItemss, setLocatStorageCartItemsS] = useState('')




  const [AddTOCardSildeShow, setAddTOCardSildeShow] = useState(false)
  const [allProductDataDB, setallProductDataDB] = useState([])
  const [DomainName, setDomainName] = useState('http://127.0.0.1:8000/')

  const [index, setIndex] = useState(0);

const fetchCartItems = async () => {
       const LocatStorageCartItems = JSON.parse(localStorage.getItem("cartItems"))
setLocatStorageCartItemsS(LocatStorageCartItems)
       console.log(LocatStorageCartItems);
      if (LocatStorageCartItems && LocatStorageCartItems.length > 0) {
        
        try {
          const responses = await Promise.all(
            LocatStorageCartItems.map((id) =>
              axios.get(`${DomainName}api/AddTocardProduct${id}`)
            )
          );

          const data = responses.map((res) => res.data);
          setCartDbItems(data);
          console.log("All Cart Items:", data);
        } catch (error) {
          console.log("Server Error:", error.response?.data || error.message);
        }
      }
    };

 useEffect(() => {
    

    fetchCartItems();
  }, []); // 👈 empty depen
      
    
  


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  
   const ProductDataShow = async ()=>{

    const res = await axios.get(`${DomainName}api/ShowProduct`)

    setallProductDataDB(res.data);
    

   } 
  
   useEffect(()=>{
    ProductDataShow()

   },[])


  return (
    <ContextProvider.Provider value={{fetchCartItems,setLocatStorageCartItemsS,LocatStorageCartItemss,CartDbItems,AddTOCardSildeShow,setAddTOCardSildeShow,setallProductDataDB,DomainName, allProductDataDB,colors, index, setIndex }}>
      {children}
    </ContextProvider.Provider>
  );
};
