import { createContext, useState } from "react";

import {food_list} from '../assets/assets';

 export const StoreContext=createContext();

const  StoreContextProvider =(props)=>{
  
    const [ CartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!CartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
       
    }
    const removeFromCart=(itemId)=>{
        if (CartItems[itemId] > 0) {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        }
        if (CartItems[itemId] === 0) {
                delete CartItems[itemId];
        }
    
    }
    
    const subtotal = food_list.reduce((acc, item) => {
        return acc + (CartItems[item.id] > 0 ? CartItems[item.id] * item.price : 0);
      }, 0);
      

      const deliveryFee = subtotal > 0 ? 50 : 0;
      const total = subtotal + deliveryFee;

const contextValue={
         food_list,
         CartItems,
         addToCart,
         removeFromCart,
         setCartItems,
         subtotal,        
         total,
         deliveryFee,
        };
       
        return(

            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        );

};      

export default  StoreContextProvider;