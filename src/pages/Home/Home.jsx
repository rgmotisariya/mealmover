import {React,useState} from 'react'

import Header from '../../componnets/Header/Header'
import FoodCategory from '../../componnets/FoodCategory/FoodCategory'
import CardDisplay from '../../componnets/CardDisplay/CardDisplay';

function Home() {
  
  const [Category,setCategory] =useState("all");

  return (
    <div>
      
      <Header/> 
      <FoodCategory Category={Category} setCategory={setCategory} />
      <CardDisplay Category={Category}/>

    </div>
  )
}

export default Home