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
  const [ReverceCart, setReverceCart] = useState([])

  const [LocatStorageCartItemss, setLocatStorageCartItemsS] = useState('')




  const [AddTOCardSildeShow, setAddTOCardSildeShow] = useState(false)
  const [allProductDataDB, setallProductDataDB] = useState([])
  const [ProductDeteils, setProductDeteils] = useState([])
  const [DomainName, setDomainName] = useState('http://127.0.0.1:8000/')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
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
        setReverceCart(data)
        console.log("All Cart Items:", ReverceCart);
      } catch (error) {
        console.log("Server Error:", error.response?.data || error.message);
      }
    }
  };

  useEffect(() => {


    fetchCartItems();
  }, []); // 👈 empty depen


const addTocart = async (i)=>{
  const  addTocartarry=JSON.parse(localStorage.getItem('cartItems')) ||   []
  
  if(!addTocartarry.includes(i)){
    addTocartarry.push(i)
    localStorage.setItem('cartItems' ,JSON.stringify(addTocartarry))
//  toast.success('items Add SucsessFully')
setAddTOCardSildeShow(true)
await fetchCartItems()

setTimeout(() => {
  
  setReverceCart((prve)=>{
    const previousItems = [...prve].reverse()
    return previousItems
    
  })
}, 1000);

  }
  else{
    console.log('items already exits');
  }

  
}



  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])


  const ProductDataShow = async () => {

    const res = await axios.get(`${DomainName}api/ShowProduct`)

    setallProductDataDB(res.data);


  }

  useEffect(() => {
    ProductDataShow()

  }, [])


  return (
    <ContextProvider.Provider value={{ 
      addTocart,email,setemail,setpassword,password,
      ProductDeteils,setProductDeteils,setReverceCart, fetchCartItems, setLocatStorageCartItemsS, LocatStorageCartItemss, ReverceCart, CartDbItems, AddTOCardSildeShow, setAddTOCardSildeShow, setallProductDataDB, DomainName, allProductDataDB, colors, index, setIndex }}>
      {children}
    </ContextProvider.Provider>
  );
};
