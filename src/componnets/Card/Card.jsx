import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function Card({ id, name, description, price,img }) {
  
  const {CartItems,addToCart,removeFromCart}=useContext(StoreContext);

  return (
   <div className="w-full h-64 my-2  m-auto rounded-md shadow-[0px_0px_4px_gray]  transition-[0.3s] ">
        <div className="grid justify-items-center">
           <img src={img} alt="" className=" h-40 p-1  rounded-md"/>
          
        </div>
        <div className="px-2">
            <div className=" flex  justify-between  font-semibold my-1">
                <p>{name}</p>
                { !CartItems[id] ?
            <button className=" bg-secondary   text-white rounded-full w-6   "  onClick={()=>addToCart(id)} >+</button>:

            <div className=" flex  justify-between   gap-3 font-semibold  rounded-2 rounded-xl bg-gray-400  ">
              <button className=" bg-primary text-white rounded-full w-6 " onClick={()=>removeFromCart(id)} >-</button>
              <p >{CartItems[id]}</p>
              <button className="bg-primary text-white rounded-full w-6" onClick={()=>addToCart(id)} >+</button>

            </div>
           }            
            </div>
            <p className="text-xs text-gray-800 pb-2 ">{description}</p>
            
            <p className="text-primary font-semibold ">${price}</p>
        
        </div>
   </div>
    
    
  );
}

export default Card;
