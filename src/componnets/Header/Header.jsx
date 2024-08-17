import React from 'react'

import  header_img  from '../../assets/food_pasta.jpg';

function Header() {

  return (
    <div className='container'>
        <div className='relative w-full h-34 overflow-hidden rounded-2xl mb-2' >
        <img src={header_img} alt="" className=" w-full  f-object-cover rounded-2xl " />
          <div className='absolute flex flex-col max-w-[50%] gap-[1.5vw] animate-[slideInBottom_2s] left-[6vw] bottom-[10%]'>
                <h2 className="text-[max(4.5vw,22px)] text-white font-medium" >Order your favorite food here</h2>
                <p className="text-white text-[1.2vw]" >Your favorite dishes, straight to your door. Experience the joy of effortless dining!</p>
                <button className='w-32 text-[rgb(234,77,77)] text-primary hover:bg-primary  hover:text-white font-semibold bg-white text-[max(1vw,13px)] px-4 py-3 rounded-full ' >View Menu</button>
              
          </div>
        </div>

    </div>
  )
}

export default Header