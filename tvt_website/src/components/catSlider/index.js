import React, { useState,useEffect } from 'react';
import './style.css';
import Slider from "react-slick";
import TshirtImg from "../../assets/images/tshirt.png"
import DesignShirtImg from "../../assets/images/designshirt.png"
import OversizedTShirtImg from "../../assets/images/oversizedTshirt.png"
import HoodieImg from "../../assets/images/hoodie.png"
import SweatShirtImg from "../../assets/images/sweatshirt.png"
import { Link } from 'react-router-dom';

const CatSlider = (props) => {

    const [allData, setAllData] = useState(props.data);

    const [itemBg, setItemBg] = useState([
        '#ffd8d8',
        '#ecffec',
        '#d1d5de',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:6 ,
        slidesToScroll: 1,
        arrows :true,
        fade :false  
      };

    //   CALCULATE NUMBER OF ITEMS IN CATEGORY
    const [totalLength, setTotalLength] = useState([]);
    var catLength = 0;
    var lengthArr = [];
    useEffect(() => {
        allData.length !== 0 &&
            allData.map((item, index) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catLength += item_.products.length
                    })
                lengthArr.push(catLength)
                catLength = 0;
            })

        const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
        setTotalLength(list)


    }, []);

  return (  
    <div className='catSliderSection'>
        <div className='container-fluid'>
            <h2 className='hd'>Categories </h2>
            <Slider {...settings} className='cat_Slider_Main'>

                { allData.length!==0 &&
                    allData.map((item,index)=>{
                        return (
                            <div className='item' key={index} >
                                <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                
                                    <div className='info' >
                                        <img src={item.image} width="120" />
                                        <h5 className=' text-capitalize'>{item.cat_name}</h5>
                                        <p>{totalLength[index]} items</p>
                                    </div>
                                </Link>

                            </div>
                        )
                    })

                }
{/* repeat for temporary */}
{ allData.length!==0 &&
                    allData.map((item,index)=>{
                        return (
                            <div className='item' key={index} >
                                <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                
                                    <div className='info' >
                                        <img src={item.image} width="120" />
                                        <h5 className=' text-capitalize'>{item.cat_name}</h5>
                                        <p>{totalLength[index]} items</p>
                                    </div>
                                </Link>

                            </div>
                        )
                    })

                }

                {
                /* {
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
{/*                 
                <div className='item'>
                    <div className='info'>
                        <img src={SweatShirtImg}></img>
                        <h5>Sweat Shirts</h5>
                        <p>28 items</p>
                    </div>
                </div> */}

            </Slider>
        </div>
    </div>
  )
}

export default CatSlider;