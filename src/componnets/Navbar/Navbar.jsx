import React, { useState,useContext } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { StoreContext } from '../../context/StoreContext'
const MenuLinks=[
  {id:1, name:"Home" , Link:"/"},
  {id:2, name:"Shop" , Link:"/#shop"},
  {id:3, name:"About" , Link:"/#about"},
  {id:4, name:"Contact Us" , Link:"/#Contactus"}
];

function Navbar({setShowlogin,setshowmanu}) {
  const context = useContext(StoreContext);
  const totalCartItems = Object.values(context.CartItems).reduce((acc, quantity) => acc + quantity, 0);

return (
  <div className='relative z-40 bg-white'>
      <div className='py-2'>
         <div className='container  items-center '>
                    
            <div className='flex items-center justify-between gap-4'>
                   {/* logo*/}
                   <Link to='/'><p className='text-[orangered] font-bold text-2xl ' href="#Home">cloth</p></Link>
                   
                    {/* manu*/}
                   <div className='hidden lg:block' >
                      <ul  className='flex items-center gap-4 '>
                           { MenuLinks.map((data,id) =>(
                               <li key={id}>
                                   <Link to={data.Link}><p  className='inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black '>{data.name}
                                   </p></Link>
                               </li>
                                ))
                           }
                     </ul>
                   </div>

                    {/*  Menubar right section*/}
                   <div className='flex items-center justify-between gap-4 '>
                    
                       <div className="relative group  sm:block ">
                             <input type="text" placeholder='search' className='search-bar hidden' />
                             <IoSearchSharp  className="absolute text-xl duration-200 -translate-y-1/2 tet-gray-600 group-hover:text-primary dark:text-gray-400 top-1/2 right-3" />
                       </div>

                       <button className='relative p-3' >
                              <Link to='/Cart'><IoMdCart className="text-xl text-gray-500 hover:text-primary" /></Link> 
                               { totalCartItems===0 ? null : <div className='absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full '>
                                {totalCartItems}
                               </div>
                               }
                              
                       </button>
                       
                      <button onClick={()=>setShowlogin(true)} className='  hover:text-primary '>Sign in</button>                     
                      <IoMenu  onClick={()=>setshowmanu(true)}  className='lg:hidden text-2xl text-gray-500 hover:text-primary'/>
                  </div>
                  
      
             </div>
         </div>
      </div>
  </div>
  )
}

export default Navbar
