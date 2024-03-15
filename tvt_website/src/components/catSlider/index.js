import React, { useState } from 'react';
import './style.css';
import Slider from "react-slick";
import TshirtImg from "../../assets/images/tshirt.png"
import DesignShirtImg from "../../assets/images/designshirt.png"
import OversizedTShirtImg from "../../assets/images/oversizedTshirt.png"
import HoodieImg from "../../assets/images/hoodie.png"
import SweatShirtImg from "../../assets/images/sweatshirt.png"

const CatSlider = () => {

    // const [itemBg, setItemBg] = useState([
    //     '#fffceb',
    //     '#ecffec',
    //     '#feefea',
    //     '#fff3eb',
    //     '#fff3ff',
    //     '#f2fce4',
    //     '#feefea',
    //     '#fffceb',
    //     '#feefea',
    //     '#ecffec',
    //     '#feefea',
    //     '#fff3eb',
    //     '#fff3ff',
    //     '#f2fce4',
    //     '#feefea',
    //     '#fffceb',
    //     '#feefea',
    //     '#ecffec'
    // ]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows :true,
        fade :false  
      };


  return (  
    <div className='catSlierSection'>
        <div className='container-fluid'>
            <h2 className='hd'>Categories </h2>
            <Slider {...settings} className='cat_Slider_Main'>
                {/* {
                    itemBg.length!==0 && itemBg.map((item,index)=>{
                        return(
                            <div className='item'>
                                <div className='info' style={{background:item}}>
                                    <img src={HoodieImg}></img>
                                    <h5>Hoodies</h5>
                                    <p>28 items</p>
                                </div>
                            </div>
                        )
                    })
                } */}
                <div className='item' >
                    <div className='info'>
                        <img src={HoodieImg}></img>
                        <h5>Hoodies</h5>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={TshirtImg}></img>
                        <h5>Printed T-shirts</h5>
                        <p>28 items</p>

                    </div>
                </div>
                <div className='item' >
                    <div className='info'>
                        <img src={DesignShirtImg}></img>
                        <h5>Casual Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='item' >
                    <div className='info'>
                        <img src={OversizedTShirtImg}></img>
                        <h5>Oversized T-Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={SweatShirtImg}></img>
                        <h5>Sweat Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div>

             {/* ============================REPEATED================================ } */}
                <div className='item' >
                    <div className='info'>
                        <img src={HoodieImg}></img>
                        <h5>Hoodies</h5>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={TshirtImg}></img>
                        <h5>Printed T-shirts</h5>
                        <p>28 items</p>

                    </div>
                </div>
                <div className='item' >
                    <div className='info'>
                        <img src={DesignShirtImg}></img>
                        <h5>Casual Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='item' >
                    <div className='info'>
                        <img src={OversizedTShirtImg}></img>
                        <h5>Oversized T-Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={SweatShirtImg}></img>
                        <h5>Sweat Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div>

            </Slider>
        </div>
    </div>
  )
}

export default CatSlider;