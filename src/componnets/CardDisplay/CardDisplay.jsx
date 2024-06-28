import React from 'react'
import {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
import Card from '../Card/Card';

function CardDisplay({category}) {

    const { item_List }=useContext(StoreContext);
    
  return (
    <div className=' container    '>
               <div className='mt-1 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-x-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] '>
        {
            item_List.map((data,index)=>{
                
                  if(category==="all" || category===data.category){
                 return  <Card key={index}  
                            id={data.id}
                            name={data.name} 
                            description={data.description} 
                            price={data.price}  
                            img={data.img} />
                  }
                          })
        }
        </div>
    </div>
  );
}

export default CardDisplay




























































































































































