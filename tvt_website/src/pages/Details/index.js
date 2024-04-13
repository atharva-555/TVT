import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
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
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Product from '../../components/product';

const DetailsPage = () => {
    // Reference for both sliders
    const zoomSlider = useRef();
    const zoomSliderBig = useRef();

    //   ARROWS FOR SLICK-SLIDERS
    // Custom arrow component
    const PrevArrow = () => (
        <IconButton className="prev-arrow slick-btn" onClick={handlePrevArrowClick}>
            <KeyboardArrowLeftRoundedIcon/>
        </IconButton>
    );
    const NextArrow = () => (
        <IconButton className="next-arrow slick-btn" onClick={handleNextArrowClick}>
            <KeyboardArrowRightRoundedIcon/>
        </IconButton>
    );
    // Function to handle previous arrow click
  const handlePrevArrowClick = () => {
    // Go to the previous slide
    zoomSlider.current.slickPrev();
    zoomSliderBig.current.slickPrev();
  };

  // Function to handle next arrow click
  const handleNextArrowClick = () => {
    // Go to the next slide
    zoomSlider.current.slickNext();
    zoomSliderBig.current.slickNext();
    
  };
    

    // Setting for big image Slider
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows :false,
        fade :false  ,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
      };

    // Setting for Small image Slider
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows :true,
        fade :false ,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
      };

     
      const [zoomImage,setZoomImage]=useState(SweatShirtImg);
      const [BigImageSize,setBigImageSize]=useState([1500,1500]);
      const [SmallImageSize,setSmallImageSize]=useState([150,150]);

    //   ADD OR REMOVE NUMBER OF ITEMS BEFORE BUY 
      const [inputValue,setInputValue]=useState(1);
      const plus=()=>{
            setInputValue(inputValue+1);
          }
      const minus=()=>{
        if(inputValue!=1){
            setInputValue(inputValue-1);
        }
      }

    //   GOTO FUNCTION FOR SLICK-SLIDER ON-CLICK
      const goto=(index)=>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
      }

      const [ActiveSize,setActiveSize] =useState(0);
      const isActive=(index)=>{
        setActiveSize(index);
      }

    // LOGIC FOR ACTIVE TABS SECTION
    const[activeTabs,setactiveTabs]=useState(0);


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
        <div className='container-fluid detailsContainer pt-3 pb-3 '>
            <div className='row'>
                        {/* PRODUCT ZOOM CODE STARTS HERE */}
                        <div className='col-md-5'>
                            <div className='productZoom'>
                                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={TshirtImg + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`}/>
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={DesignShirtImg + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`}/>
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={SweatShirtImg + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`}/>
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={HoodieImg + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={OversizedTShirtImg + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={SweatShirtImg + `?im=Resize=${BigImageSize[0]},${BigImageSize[1]}`} />
                                    </div>
                                </Slider>
                            </div>

                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                <div className='item'>
                                    <img src={TshirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`} onClick={()=>goto(0)}/>
                                </div>
                                <div className='item'>
                                    <img src={DesignShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(1)}/>
                                </div>
                                <div className='item'>
                                    <img src={SweatShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(2)}/>
                                </div>
                                <div className='item'>
                                    <img src={HoodieImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(3)}/>
                                </div>
                                <div className='item'>
                                    <img src={OversizedTShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(4)}/>
                                </div>
                                <div className='item'>
                                    <img src={SweatShirtImg + `?im=Resize=${SmallImageSize[0]},${SmallImageSize[1]}`}  onClick={()=>goto(5)}/>
                                </div>
                            </Slider>
                        </div>
                        {/* PRODUCT ZOOM ENDS STARTS HERE */}

                        {/* PRODUCT INFO CODE STARTS HERE */}
                        <div className='col-md-7 productInfo '>
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
            <div className='card mt-5 p-5 detailsPageTab'>
                <div className='customTabs'>
                    <ul className='list list-inline'>
                        <li className='list-inline-item'>
                            <Button className={`${activeTabs===0 && 'active'}`} onClick={()=>setactiveTabs(0)}>Description</Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button className={`${activeTabs===1 && 'active'}`} onClick={()=>setactiveTabs(1)}>Additional Details</Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button className={`${activeTabs===2 && 'active'}`} onClick={()=>setactiveTabs(2)}>Reviews(3)</Button>
                        </li>
                    </ul>
<br/>
                    { activeTabs===0 &&
                        <div className='tabContent'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                            <br/>

                                            <h2>Packaging & Delivery</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                            <br/>

                                            <h2>Suggested Use</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                            <br/>
                                        </div>
                    }
                    

                    { activeTabs===1 &&
                        <div className='tabContent'>
                            <div className='table responsive'>
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr class="stand-up">
                                            <th>Stand Up</th>
                                            <td>
                                                <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                            </td>
                                        </tr>
                                        <tr class="folded-wo-wheels">
                                            <th>Folded (w/o wheels)</th>
                                            <td>
                                                <p>32.5″L x 18.5″W x 16.5″H</p>
                                            </td>
                                        </tr>
                                        <tr class="folded-w-wheels">
                                            <th>Folded (w/ wheels)</th>
                                            <td>
                                                <p>32.5″L x 24″W x 18.5″H</p>
                                            </td>
                                        </tr>
                                        <tr class="door-pass-through">
                                            <th>Door Pass Through</th>
                                            <td>
                                                <p>24</p>
                                            </td>
                                        </tr>
                                        <tr class="frame">
                                            <th>Frame</th>
                                            <td>
                                                <p>Aluminum</p>
                                            </td>
                                        </tr>
                                        <tr class="weight-wo-wheels">
                                            <th>Weight (w/o wheels)</th>
                                            <td>
                                                <p>20 LBS</p>
                                            </td>
                                        </tr>
                                        <tr class="weight-capacity">
                                            <th>Weight Capacity</th>
                                            <td>
                                                <p>60 LBS</p>
                                            </td>
                                        </tr>
                                        <tr class="width">
                                            <th>Width</th>
                                            <td>
                                                <p>24″</p>
                                            </td>
                                        </tr>
                                        <tr class="handle-height-ground-to-handle">
                                            <th>Handle height (ground to handle)</th>
                                            <td>
                                                <p>37-45″</p>
                                            </td>
                                        </tr>
                                        <tr class="wheels">
                                            <th>Wheels</th>
                                            <td>
                                                <p>12″ air / wide track slick tread</p>
                                            </td>
                                        </tr>
                                        <tr class="seat-back-height">
                                            <th>Seat back height</th>
                                            <td>
                                                <p>21.5″</p>
                                            </td>
                                        </tr>
                                        <tr class="head-room-inside-canopy">
                                            <th>Head room (inside canopy)</th>
                                            <td>
                                                <p>25″</p>
                                            </td>
                                        </tr>
                                        <tr class="pa_color">
                                            <th>Color</th>
                                            <td>
                                                <p>Black, Blue, Red, White</p>
                                            </td>
                                        </tr>
                                        <tr class="pa_size">
                                            <th>Size</th>
                                            <td>
                                                <p>M, S</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }

                    { activeTabs===2 &&
                        <div className='tabContent'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <h3>Customer questions & Ratings</h3>
                                    <br/>
                                    <div className='card p-4 reviewCard flex-row'>
                                        <div className='image'>
                                            <div className='rounded-circle'>
                                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                            </div>
                                            <span className='text-bg font-weight-bold d-block text-center'>Sienna</span>
                                        </div>
                                        <div className='info'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className='text-grey date'>April 8,2024,at 12:17 am</h5>
                                                <div className='ml-auto'>
                                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>

                                    <div className='card p-4 reviewCard flex-row'>
                                        <div className='image'>
                                            <div className='rounded-circle'>
                                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                            </div>
                                            <span className='text-bg font-weight-bold d-block text-center'>Sienna</span>
                                        </div>
                                        <div className='info'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className='text-grey date'>April 8,2024,at 12:17 am</h5>
                                                <div className='ml-auto'>
                                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>

                                    <div className='card p-4 reviewCard flex-row'>
                                        <div className='image'>
                                            <div className='rounded-circle'>
                                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                            </div>
                                            <span className='text-bg font-weight-bold d-block text-center'>Sienna</span>
                                        </div>
                                        <div className='info'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className='text-grey date'>April 8,2024,at 12:17 am</h5>
                                                <div className='ml-auto'>
                                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>

                                    <div className='card p-4 reviewCard flex-row'>
                                        <div className='image'>
                                            <div className='rounded-circle'>
                                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                            </div>
                                            <span className='text-bg font-weight-bold d-block text-center'>Sienna</span>
                                        </div>
                                        <div className='info'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className='text-grey date'>April 8,2024,at 12:17 am</h5>
                                                <div className='ml-auto'>
                                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>

                                    <form className='reviewForm'>
                                        <h4>Add a review</h4><br/>
                                        <div className='form-group'>
                                            <textarea className='form-control' placeholder='Write a review'></textarea>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input type='text' className='form-control' placeholder='Name'/>
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input type='text' className='form-control' placeholder='Email'/>
                                                </div>
                                            </div>
                                        </div>

                              
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Website'/>
                                        </div>

                                        <br/>
                                        <div className='form-group'>
                                            <Button class='theme-btn'>Submit Review</Button>
                                        </div>
                                

                                    </form>
                                </div>

                                <div className='col-md-4 pl-5'>
                                    <h3>Customer Reviews</h3>
                                    <br/>
                                    <div className='d-flex align-items-center mt-2'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        <strong className='ml-3'>4.5 out of 5</strong>
                                    </div>
                                    <br/>
                                    <div className="progressBarBox d-flex align-items-center">
                                        <span className='mr-3'>5 star</span>
                                        <div class="progress" style={{ width: '85%', height: '20px' }}>
                                            <div class="progress-bar bg-success" style={{ width: '75%', height: '20px' }}>75%</div>
                                        </div>
                                    </div>


                                    <div className="progressBarBox d-flex align-items-center">
                                        <span className='mr-3'>4 star</span>
                                        <div class="progress" style={{ width: '85%', height: '20px' }}>
                                            <div class="progress-bar bg-success" style={{ width: '50%', height: '20px' }}>50%</div>
                                        </div>
                                    </div>



                                    <div className="progressBarBox d-flex align-items-center">
                                        <span className='mr-3'>3 star</span>
                                        <div class="progress" style={{ width: '85%', height: '20px' }}>
                                            <div class="progress-bar bg-success" style={{ width: '55%', height: '20px' }}>55%</div>
                                        </div>
                                    </div>



                                    <div className="progressBarBox d-flex align-items-center">
                                        <span className='mr-3'>2 star</span>
                                        <div class="progress" style={{ width: '85%', height: '20px' }}>
                                            <div class="progress-bar bg-success" style={{ width: '35%', height: '20px' }}>35%</div>
                                        </div>
                                    </div>



                                    <div className="progressBarBox d-flex align-items-center">
                                        <span className='mr-3'>1 star</span>
                                        <div class="progress" style={{ width: '85%', height: '20px' }}>
                                            <div class="progress-bar bg-success" style={{ width: '25%', height: '20px' }}>25%</div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </div>
        {/* <div className='relatedProducts homeProductsRow2  pt-5 pb-4'>
            <h2 class="hd mb-0 mt-0">Related products</h2>
            <br className='res-hide' />
            <Slider {...related} className='prodSlider'>

                {

                    relatedProducts.length !== 0 &&
                    relatedProducts.map((product, index) => {

                        return (
                            <div className='item' key={index}>
                                <Product tag={product.type} item={product} />
                            </div>
                        ) 
                    })
                }

            </Slider>
        </div> */}
    </section>
  )
}

export default DetailsPage;