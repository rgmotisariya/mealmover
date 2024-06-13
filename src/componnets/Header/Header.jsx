import React from 'react'
import Slider from "react-slick";

import img2 from '../../assets/Headers-2Women.png'
import img3 from '../../assets/Headers-3Women.png'
import img4 from '../../assets/Headers-4Women.png'
import img5 from '../../assets/Headers-5Women.png'
import img6 from '../../assets/Headers-6Women.png'
import img7 from '../../assets/Headers-7Women.png'
import img8 from '../../assets/Headers-8Women.png'
import img9 from '../../assets/Headers-9Women.png'
import img10 from '../../assets/Headers-10Women.png'
import img11 from '../../assets/Headers-11Women.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const headerdata=[
   
    {
        id:2,
        img:img2
    },
    {
        id:3,
        img:img3
    },{
        id:4,
        img:img4
    },{
        id:5,
        img:img5
    },{
        id:6,
        img:img6
    },{
        id:7,
        img:img7
    },
    {
        id:8,
        img:img8
    },{
        id:9,
        img:img9
    },{
        id:10,
        img:img10
    },{
        id:11,
        img:img11
    }

];

  
function Header() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:4000,
      };
  return (
    <div className='container '>
    <Slider {...settings}>
        {  
            headerdata.map((data,index)=>(
                <div key={index} className='h-full w-full   object-contain'>
                   <img src={data.img} alt="" className='rounded-md'/>
               </div>
            ))
        }
     
    </Slider>
    </div>
  )
}

export default Header