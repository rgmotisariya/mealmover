import React from 'react'
import header from '../../assets/champion_category.png'
import {Champion_Category} from '../../assets/assets';
function ChampionCategory() {
  return (
    <div className='container my-5'>
    <div>
        <img src={header} alt=""  />
    </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3 mb-4 '>
        
            {
                Champion_Category.map((data,index)=>(
                    <div key={index}>
                        <img src={data.img} alt="" />
                    </div>
                ))
            }

        
    </div>

</div>
  )
}

export default ChampionCategory