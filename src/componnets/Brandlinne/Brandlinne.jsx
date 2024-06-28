import React from 'react'
import {line_brands} from "../../assets/assets"

function Brandlinne() {
    
  return (
     <div className='container overflow-hidden'>
      <div className='flex flex-row gap-3 animate-scroll whitespace-wrap'>
            {
                line_brands.map((item)=>{
                    return(
                        <img src={item.img} key={item.id } alt="" className='w-32 h-24'/>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Brandlinne