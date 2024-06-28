import React, { useState ,useEffect} from 'react'
import Navbar from './componnets/Navbar/Navbar'
import Footer from './componnets/Footer/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrcer from './pages/PlaceOrder/PlaceOrcer'
import LoginPopup from './componnets/LoginPopup/LoginPopup'
import Menupopup from './componnets/Menupopup/Menupopup'
// import { FaAngleDoubleUp } from "react-icons/fa";

function App() {

const [showlogin,setShowlogin]=useState(false)
const [showmanu,setshowmanu]=useState(false);

// const [shouldShowScrollTopButton, setShouldShowScrollTopButton] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY; // Get the current scroll position
//     setShouldShowScrollTopButton(scrollY > 100); // Show button only after 100px scroll
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => window.removeEventListener('scroll', handleScroll);

// }, []);

// const handleScrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
// };

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
                {/* Scroll to Top Button (conditionally rendered) */}
        {/* {shouldShowScrollTopButton && (
          <button className="z-40" onClick={handleScrollToTop}>
            <FaAngleDoubleUp className='' />
          </button>
        )} */}

          </div>
          
    </>
  )
}

export default App