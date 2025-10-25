import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import SlideBar from "./SlideBar";
import AnimatedCardEdit from "./AnimatedCardEdit";
import { DashboardContext } from "../Context/DashboardContext";

const ManageProduct = () => {
  const {price,setimage,quntity,allProductDataDB,setquntity,preview,setprice,setPreview,ProductDec,setProductDec,ProductTitle,setProductTitle,handleProductDataUpload} =  useContext(DashboardContext);

  
  const [ShowAnimatedProduct, setShowAnimatedProduct] = useState(true)




  const handlePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimage(file)
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };




  const arry = allProductDataDB;



  return (
    <div className="w-full">
      {
        ShowAnimatedProduct ?
        <div className="flex  w-full overflow-hidden  text-white">
        {/* Sidebar */}

        {/* Main Section */}
        <div className="w-full h-full p-5 relative overflow-hidden">
          <h1 className="text-5xl font-semibold text-center mb-6">
            Manage Product
          </h1>

        <button
        onClick={()=>setShowAnimatedProduct(false)}
  className="absolute right-4 top-7 flex items-center gap-2 px-4 py-2 
             bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 
             text-white font-medium rounded-lg shadow-lg transition-all duration-300"
>
  <i className="ri-edit-2-line text-white text-lg"></i>
  Edit Animated Product
</button>


          <div className="h-full w-full flex gap-5">
            {/* ✅ LEFT SIDE — Animated Product Images */}

            <div className="w-[70%]  bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg  h-[80%]">

              <h1 className="text-2xl mb-3 font-semibold">Your Products</h1>

              <div className="overflow-y-auto max-h-[400px] w-full">

                {arry.map((item,i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeIn' }}
                    key={i}
                    className="mt-4 flex items-center gap-4 bg-black/30 p-3 rounded-lg hover:bg-black/40 transition"
                  >
                    <div className="relative">
                      <h1 className="absolute bg-yellow-500 text-black p-1 rounded-full px-2 -top-2 -right-2">{item.quntity}</h1>

                    <img
                      src={`http://localhost:8000/upload/${item.img}`}
                      className="h-[100px] w-[100px] rounded-xl object-cover"
                      alt=""
                      />
                      </div>
                    <div className="w-1/2">
                      <h1 className="text-xl font-bold">{item.title}</h1>
                      <p className="text-gray-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <button className="ml-auto text-yellow-400 text-2xl hover:scale-110 transition">
                      <i className="ri-pencil-fill"></i>
                    </button>
                    <button className="text-red-400 text-2xl hover:scale-110 transition">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
<div className="w-[34%]  rounded-2xl p-3 bg-white/10 backdrop-blur-md shadow-lg border border-white/20">

  {/* Image Preview */}
  {preview ? (
    <div className="h-[220px] overflow-hidden rounded-xl w-full relative">
      <button
        onClick={() => setPreview("")}
        type="button"
        className="absolute top-3 right-2 p-1 px-2 rounded-sm bg-red-500/75 hover:bg-red-500 transition-all"
      >
        <i className="ri-delete-bin-6-line text-white text-lg"></i>
      </button>

      <img
        src={preview}
        className="h-full -mt-5 w-full object-cover"
        alt="Product Preview"
      />
    </div>
  ) : (
    <div className="h-[38%] relative rounded-xl flex bg-white/30 justify-center items-center w-full border-2 border-gray-200">
      <button
        type="button"
        className="p-2 px-3 bg-gradient-to-b from-yellow-400/75 to-yellow-700/75 border border-yellow-800 text-gray-800 rounded-md font-medium flex items-center gap-2"
      >
        <i className="ri-image-add-line text-lg"></i> Upload Image
      </button>
      <input
        type="file"
        onChange={(e) => handlePreview(e)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 cursor-pointer"
      />
    </div>
  )}

  {/* Form Fields */}
  <div className="p-2 mt-2 flex flex-col gap-3">
    <input
    value={ProductTitle}
    onChange={(e)=>setProductTitle(e.target.value)}
      type="text"
      className="w-full border border-white/30 bg-transparent text-white placeholder-gray-300 p-2 px-3 rounded-md focus:outline-none focus:border-white/60"
      placeholder="Enter Product Title"
    />

    <textarea
    value={ProductDec}
    onChange={(e)=> setProductDec(e.target.value)}
      className="w-full border border-white/30 bg-transparent text-white placeholder-gray-300 p-2 rounded-md focus:outline-none focus:border-white/60 resize-none"
      rows="3"
      placeholder="Enter Product Description"
    ></textarea>

    {/* Quantity Field */}
   <div className="flex w-full items-center justify-between gap-4">
  {/* Quantity Field */}
  

  {/* Price Field */}
  <div className="flex flex-col w-1/2">
    <label
      htmlFor="price"
      className="text-white/80 text-sm font-medium mb-1"
    >
      Price
    </label>
    <input
    value={price}
    onChange={(e)=>setprice(e.target.value)}
      id="price"
      type="number"
      min="0"
      className="w-full border border-white/30 bg-transparent text-white placeholder-gray-300 p-2 px-3 rounded-md focus:outline-none focus:border-white/60"
      placeholder="Enter Price"
    />
  </div>
  <div className="flex flex-col w-1/2">
    <label
      htmlFor="quantity"
      className="text-white/80 text-sm font-medium mb-1"
    >
      Quantity
    </label>
    <input
    value={quntity}
    onChange={(e)=>setquntity(e.target.value)}
      id="quantity"
      type="number"
      min="1"
      className="w-full border border-white/30 bg-transparent text-white placeholder-gray-300 p-2 px-3 rounded-md focus:outline-none focus:border-white/60"
      placeholder="0"
    />
  </div>
</div>


    <button
   onClick={handleProductDataUpload}
      type="button"
      className="w-full mt-1 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-all duration-300"
    >
      Submit
    </button>
  </div>
</div>





            {/* ✅ RIGHT SIDE — Product List */}

          </div>
        </div>
      </div>
      :
      <AnimatedCardEdit />
      }
      
    </div>
  );
};

export default ManageProduct;
