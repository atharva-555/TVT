import React, { useEffect, useState } from 'react';
import './style.css';
import SweatShirtImg from "../../assets/images/sweatshirt.png";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = (props) => {


  const[ProductData,setProductData] = useState();

  const setProductCat=()=>{
    sessionStorage.setItem('parentCat', ProductData.parentCatName);
    sessionStorage.setItem('subCatName', ProductData.subCatName);
}

  useEffect(() => {
    setProductData(props.item);
}, [props.item, setProductCat]);

  return (

    <div className='ProductThumb' onClick={setProductCat}>
        { ProductData !== undefined &&
          <> 
                <Link to={'/product/details'}>
                  <div className='imgWrapper'><img src={ProductData.catImg+'?im=Resize=(420,420)'} className=' p-4 w-100'/></div>
                </Link>
              

      
      
      <div className='info'>
        <h4 className='title'><Link to={'/product/details'}>{ProductData.productName}</Link></h4>
          <Rating name="half-rating-read" value={parseFloat(ProductData.rating)} precision={0.5} readOnly/>
          <div className='d-flex align-items-center mt-2'>
            <div className='d-flex align-items-center w-100'>
              <span className='price'>₹{ProductData.price}</span><span className='Oldprice ml-auto'>₹{ProductData.oldPrice}</span>
            </div>
          </div>
          <Button id='AddToCart' className='w-100 mt-3'><span className='d-flex align-items-center'><ShoppingCartOutlinedIcon style={{ fontSize: '20px' , marginRight: '3px' }}/>Add</span></Button>
        </div>
        
        </>}
         
    </div>

  )
}

export default Product;