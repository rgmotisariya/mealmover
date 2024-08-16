import React from 'react';
import './FoodCategory.css';
import { menu_list } from '../../assets/assets';

function FoodCategory({ Category, setCategory }) {

  return (
    <div className='container'>
     
        
            <div className='food_category'>
              <div className='explore-menu' id='explore-menu'>
               <h1>Explor our menu</h1>
               <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facilis harum repellat voluptate, ipsa cumque consequatur, perferendis sit, quaerat consectetur incidunt quod. Neque laudantium eaque nesciunt iure itaque cum aliquam!</p>
                <div className='explore-menu-list'>
                  {
                    menu_list.map((item,index)=>{
                      return (
                        <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.name)} className='explore-menu-list-item'>
                          <img src={item.menu_image} alt="" className={Category===item.menu_name?"c":"all"} />
                          <p>{item.menu_name}</p>
                        </div>
                      )
                    })
                  }

                </div>
                <hr/>
              </div>
            </div>
         
 
    </div>
  );
}

export default FoodCategory;
