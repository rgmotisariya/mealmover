import React from 'react'
import gif from '../../assets/poster_trending brand.gif'
import { brands_logo } from '../../assets/assets'
function BrandsLogoSection() {
  return (
    <div className='container '>
    <div>
        <img src={gif} alt=""  className=' mx-auto'/>
    </div>
    <div className='grid lg:grid-cols-6 md:grid-cols-6   sm:grid-cols-4 xs:grid-cols-3 gap-5 mb-4 py-3 bg-fifth'>
        
            {
                brands_logo.map((data,index)=>(
                    <div key={index}>
                        <img src={data.img} alt="" className='inline w-20 h-auto' />
                    </div>
                ))
            }

        
    </div>

</div>
  )
}

export default BrandsLogoSection