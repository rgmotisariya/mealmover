import {React,useState} from 'react'
import GenderFilter from '../../componnets/GenderFilter/GenderFilter'
import Header from '../../componnets/Header/Header'
import GenderData from '../../componnets/GenderData/GenderData'
import CardDisplay from '../../componnets/CardDisplay/CardDisplay';
function Home() {
  
  const [gender,setGender] =useState('');
 const [category,setCategory] = useState("all");
  return (
    <div>
      <Header/> 
      <GenderFilter gender={gender} setGender={setGender} />
      <GenderData  gender={gender} category={category} setCategory={setCategory} />
      <CardDisplay category={category}/>
    </div>
  )
}

export default Home