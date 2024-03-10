import React from 'react';
import './style.css';
import Slider from "react-slick";

const CatSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows :true,
        fade :false  
      };


  return (  
    <div className='catSlierSection'>
        <div className='container-fluid'>
            <h2 className='hd'>Categories </h2>
            <Slider {...settings} className='cat_Slider_Main'>
                <div className='item'>
                    <h2>hello</h2>
                </div>
                <div className='item'>
                    <h2>hello</h2>
                </div>
                <div className='item'>
                    <h2>hello</h2>
                </div>
                <div className='item'>
                    <h2>hello</h2>
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>

            </Slider>
        </div>
    </div>
  )
}

export default CatSlider;