import React, { useState ,useEffect} from 'react'
import Navbar from './componnets/Navbar/Navbar'
import Footer from './componnets/Footer/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrcer from './pages/PlaceOrder/PlaceOrcer'
import LoginPopup from './componnets/LoginPopup/LoginPopup'
import Menupopup from './componnets/Menupopup/Menupopup'

function App() {

const [showlogin,setShowlogin]=useState(false)
const [showmanu,setshowmanu]=useState(false);

  return (
    <>  
  
          <div className='bg-white  '>
          {
              showlogin ? <LoginPopup setShowlogin={setShowlogin}/>:<></>
          }
          {
              showmanu ? <Menupopup setshowmanu={setshowmanu} />:<></>
          }
                <Navbar setShowlogin={setShowlogin}  setshowmanu={setshowmanu}/>
              
                <Routes>
                  <Route path='/' element={<Home  />} />
                  <Route path='/Cart' element={<Cart />} />
                  <Route path='/order' element={<PlaceOrcer />} />
                  
                </Routes> 
                <Footer />
          </div>
          
    </>
  )
}

export default App