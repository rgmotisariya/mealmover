import {React,useState} from 'react'
import GenderFilter from '../../componnets/GenderFilter/GenderFilter'
import Header from '../../componnets/Header/Header'
import InfoHeader from '../../componnets/Ifoheader/InfoHeader';
import GenderData from '../../componnets/GenderData/GenderData'
import CardDisplay from '../../componnets/CardDisplay/CardDisplay';
import SuperDhamakaDeals from '../../componnets/SuperDhamakaDeals/SuperDhamakaDeals';
import ChampionCategory from '../../componnets/ChampionCategory/ChampionCategory';
import Brandlinne from '../../componnets/Brandlinne/Brandlinne';
import BrandsLogoSection from '../../componnets/BrandsLogoSection/BrandsLogoSection';
function Home() {
  
  const [gender,setGender] =useState('');
 const [category,setCategory] = useState("");
  return (
    <div>
      
      <GenderFilter gender={gender} setGender={setGender} />
      <GenderData  gender={gender} category={category} setCategory={setCategory} />
      <CardDisplay category={category}/>
      <Header/> 
     <InfoHeader/>
      <SuperDhamakaDeals />
      <BrandsLogoSection />
      <ChampionCategory/>
      <Brandlinne />
    </div>
  )
}

export default Home