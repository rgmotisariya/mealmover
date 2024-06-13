import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
               
function LoginPopup({setShowlogin}) {

    const[currstste,setCurrstate]=useState("Sign Up")

  return (
    <div className="container  ">
    <div className='grid absolute z-40  rounded-xl h-full w-full '>
        <form className='border-2 px-9 py-4 rounded-xl  bg-white  place-self-center '>

            <div className='flex justify-between px-5 pt-4'>
                <h2 className='font-semibold'>{currstste} </h2>
                <RxCross2  className="hover:text-primary"onClick={()=>setShowlogin(false)} />
            </div>

            <div className='pt-4' >
                {currstste==="Login"?<></>:<input className='w-full block border-2 rounded-xl px-2 my-2' type="text" placeholder='Name' required />}
                <input type="email" placeholder='Email' required className='w-full block border-2 rounded-xl px-2 my-2' />
                <input type="password" placeholder='Password' required className='w-full block border-2 rounded-xl px-2 my-2' />
            </div>
            <div class="grid grid-cols-1 place-items-center py-3">
            <button type='submit' className='text-white bg-primary rounded-xl px-4 py-1' >{currstste==="Sign Up"?"Creat acount":"Login"}</button>
            </div>
            <div className='flex gap-2 py-2'>
                <input type="checkbox" required/>
                <p className='text-sm sm:text-xs '>By continuing ,i agree to the terms of use and privecy and policy</p>
            </div>

            {   currstste==="Login"
                ?<p>Creat a new accout?   <span className='text-primary cursor-pointer' onClick={()=>setCurrstate("Sign Up")}>Sign Up</span></p>:
                 <p>Alredy have an account?   <span className='text-primary cursor-pointer' onClick={()=>setCurrstate("Login")}>Login</span></p>
            }
            
            
            
           
        </form>
    </div>
    </div>
  )
}

export default LoginPopup