import React from 'react'

const Gender_List=[
  {
    id:1,
    gen:"women"
  },{
    id:2,
    gen:"men"

  },{
    id:3,
    gen:"kids"
  },{
    id:4,
    gen:"baby"
  }
]

function Category({gender,setGender}) {
  return (
    <div className='container '>
      
        <div className=' flex justify-evenly  border-b pb-1'>
          
           
           
           {
               Gender_List.map((data,id)=>(
                  
                   <div key={id} onClick={()=>setGender(prev=>prev===data.gen? "":data.gen)}  className={gender===data.gen? "activeGF" :"unactive"} >
                       <button className='text-lg  text-md w-30 font-semibold  cursor-pointer '>{data.gen}</button>
                   </div>
               ))
           } 
        </div>
    </div>
  );
}
export default Category