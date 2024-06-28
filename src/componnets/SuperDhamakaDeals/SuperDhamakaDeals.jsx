import React from 'react'
import header from '../../assets/super_dhamaka.png'
import {SuperDhamakaDeal} from '../../assets/assets';
function SuperDhamakaDeals() {
  return (
    <div className='container my-3 my-5'>
        <div>
            <img src={header} alt="" />
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3 mb-4'>
            
                {
                    SuperDhamakaDeal.map((data,index)=>(
                        <div key={index}>
                            <img src={data.img} alt="" />
                        </div>
                    ))
                }

            
        </div>

    </div>
  )
}

export default SuperDhamakaDeals