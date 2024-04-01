import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.css';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import SweatShirtImg from "../../assets/images/sweatshirt.png";
import TshirtImg from "../../assets/images/tshirt.png"
import DesignShirtImg from "../../assets/images/designshirt.png"
import OversizedTShirtImg from "../../assets/images/oversizedTshirt.png"
import HoodieImg from "../../assets/images/hoodie.png"
import Slider from "react-slick";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const DetailsPage = () => {

    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows :true,
        fade :false  
      };

      const [zoomImage,setZoomImage]=useState(SweatShirtImg);
      const [BigImageSize,setBigImageSize]=useState([1500,1500]);
      const [SmallImageSize,setSmallImageSize]=useState([150,150]);

      const [inputValue,setInputValue]=useState(1);
      const plus=()=>{
            setInputValue(inputValue+1);
          }
      const minus=()=>{
        if(inputValue!=1){
            setInputValue(inputValue-1);
        }
      }

      const goto=(url,index)=>{
        setZoomImage(url);
        zoomSlider.current.slickGoTo(index);
      }

      const [ActiveSize,setActiveSize] =useState(0);
      const isActive=(index)=>{
        setActiveSize(index);
      }


  return (
    <section className='detailsPage'>
        <div className='breadcrumbWrapper mb-2'>
            <div className='container-fluid'>
                <ul className="breadcrumb breadcrumb2">
                    <li><Link>Home </Link> /</li>
                    <li><Link>Products </Link> /</li>
                    <li><Link>Tshirts </Link> /</li>
                    <li>Black</li>
                </ul>
            </div>
        </div>
        <div className='container-fluid detailsContainer pt-3 pb-3'>
            <div className='row'>
                        {/* PRODUCT ZOOM CODE STARTS HERE */}
                        <div className='col-md-5'>
                            <div className='productZoom'>
                                <InnerImageZoom zoomType="hover" zoomScale={2} src={`${zoomImage}` + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`}/>
                            </div>

                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                <div className='item'>
                                    <img src={TshirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`} onClick={()=>goto(TshirtImg,0)}/>
                                </div>
                                <div className='item'>
                                    <img src={DesignShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(DesignShirtImg,1)}/>
                                </div>
                                <div className='item'>
                                    <img src={SweatShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(SweatShirtImg,2)}/>
                                </div>
                                <div className='item'>
                                    <img src={HoodieImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(HoodieImg,3)}/>
                                </div>
                                <div className='item'>
                                    <img src={OversizedTShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(OversizedTShirtImg,4)}/>
                                </div>
                                <div className='item'>
                                    <img src={SweatShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(SweatShirtImg,5)}/>
                                </div>
                            </Slider>
                        </div>
                        {/* PRODUCT ZOOM ENDS STARTS HERE */}

                        {/* PRODUCT INFO CODE STARTS HERE */}
                        <div className='col-md-7 productInfo'>
                            <h1>Black Printed Tshirt</h1>
                            <div className='d-flex align-items-center mb-4'>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>
                                <span className='text-grey'>(32 reviews)</span>     
                            </div>
                            <div className='priceSec d-flex align-items-center ml-3 mb-3'>
                                    <span className='text-bg priceLarge'>₹38</span>
                                    <div className='priceSec ml-2 d-flex flex-column align-items-center'>
                                        <span className='text-org'> 25% OFF</span>
                                        <span className='text-grey o-price'> ₹38</span>
                                    </div>
                                </div>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or pu</p>
                            <div className='productSize d-flex align-items-center '>
                                <span>Size : </span>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'><a className={`tag ${ActiveSize===0?'active':''}`}  onClick={()=>isActive(0)}>S</a></li>
                                    <li className='list-inline-item'><a className={`tag ${ActiveSize===1?'active':''}`}  onClick={()=>isActive(1)}>M</a></li>
                                    <li className='list-inline-item'><a className={`tag ${ActiveSize===2?'active':''}`}  onClick={()=>isActive(2)}>L</a></li>
                                    <li className='list-inline-item'><a className={`tag ${ActiveSize===3?'active':''}`}  onClick={()=>isActive(3)}>XL</a></li>
                                    <li className='list-inline-item'><a className={`tag ${ActiveSize===4?'active':''}`}  onClick={()=>isActive(4)}>XL</a></li>
                                </ul>
                            </div>

                            <div className='addCartSection pt-4 pb-4  d-flex align-items-center'>
                                <div className='counterSec'>
                                    <input type='number' value={inputValue}/>
                                    <span className='arrow plus' onClick={plus}><KeyboardArrowUpRoundedIcon/></span>
                                    <span className='arrow minus' onClick={minus}><KeyboardArrowDownRoundedIcon/></span>
                                </div>
                                    <Button id='btn-bg'><span><ShoppingCartOutlinedIcon/></span>Add to Cart</Button>                  
                                    <Button id='wishlst-btn'><span><FavoriteBorderOutlinedIcon/></span></Button>                
                            </div>
                        </div>
                         {/* PRODUCT INFO CODE ENDS HERE */}
            </div>
        </div>
    </section>
  )
}

export default DetailsPage;