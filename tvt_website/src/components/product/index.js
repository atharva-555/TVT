import React from 'react';
import './style.css';
import SweatShirtImg from "../../assets/images/sweatshirt.png";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = () => {
  return (

    <div className='ProductThumb'>
      <Link>
        <div className='imgWrapper'><img src={SweatShirtImg} className='w-100'/></div>
      </Link>
      <div className='info'>
        <h4 className='title'><Link>Black Cotton Sweatshirt</Link></h4>
        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>
        <div className='d-flex align-items-center mt-2'>
          <div className='d-flex align-items-center'>
            <span className='price'>₹299</span><span className='Oldprice'>₹399</span>
          </div>
          <Button id='AddToCart' className='ml-auto'><span className='d-flex align-items-center'><ShoppingCartOutlinedIcon style={{ fontSize: '20px' , marginRight: '3px' }}/>Add</span></Button>
        </div>
      </div>
    </div>

  )
}

export default Product;