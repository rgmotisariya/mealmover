import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GenderData.css'
import Slider from 'react-slick';
import {GenderData_List} from '../../assets/assets';

function GenderData({category,setCategory,gender}) {

    function NextArrow(props) {
        const { onClick } = props;
        return (
          <div className="custom-arrow custom-next" onClick={onClick}>
            &gt;
          </div>
        );
      }
      
      function PrevArrow(props) {
        const { onClick } = props;
        return (
          <div className="custom-arrow custom-prev" onClick={onClick}>
            &lt;
          </div>
        );
    }    
    const settings = {
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <div className='container '>
      
    <Slider {...settings}>
      {
      
      GenderData_List.map((data) => {
        if( gender===data.gen){
        return <>
      <div className=' my-7  '>
        <div key={data.id} onClick={() => setCategory(prev => prev === data.title ? "all" : data.title)} className={`slide-item   ${category === data.title ? "activeGD" : "unactiveGD"}`}>
          <div className=''>
          <img src={data.img} alt={data.title} className='object-cover h-14 ' />
          </div>
          <div className='text-center'>
          <p className='  truncate... h-10 '>{data.title}</p>
          </div>
          </div>
        </div>
        </>
        }
      }
      )
      }
    </Slider>

  </div>
  )
}

export default GenderData

