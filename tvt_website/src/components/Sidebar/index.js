import React from 'react';
import './style.css'
import SweatShirtImg from "../../assets/images/sweatshirt.png";
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


function valuetext(value) {
  return `${value}°C`;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const  Sidebar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='sidebar'>
      <div className='card border-0 shadow'>
          <h3>Category</h3>
          <div className='catList'>

            <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={SweatShirtImg} width={30}></img></span>
              <h4>Tshirts</h4>
              <div className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</div>
            </div>

            <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={SweatShirtImg} width={30}></img></span>
              <h4>Tshirts</h4>
              <div className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</div>
            </div>

            <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={SweatShirtImg} width={30}></img></span>
              <h4>Tshirts</h4>
              <div className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</div>
            </div>

            <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={SweatShirtImg} width={30}></img></span>
              <h4>Tshirts</h4>
              <div className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</div>
            </div>

            <div className='catItem d-flex align-items-center'>
                <span className='img'><img src={SweatShirtImg} width={30}></img></span>
                <h4>Tshirts</h4>
                <div className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</div>
            </div>  

        </div>
      </div>

      <div className='card border-0 shadow'>
        <h3>Filter By Price</h3>
        <Slider
          min={0}
          step={1}
          max={1000}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="primary"
        />
        <div className='d-flex pt-2 pb-2 priceRange'>
          <span>From : <strong> Rs.{value[0]}</strong></span>
          <span className='ml-auto'>To : <strong>Rs.{value[1]}</strong></span>
        </div>

        <div className='fliters'>
          <h5>Categories</h5>
          <ul>
            <li> <Checkbox {...label} />Tshirt</li>
            <li> <Checkbox {...label} />Hoodie</li>
            <li> <Checkbox {...label} />Oversized</li>
            <li> <Checkbox {...label} />Full sleeves</li>
            <li> <Checkbox {...label} />Shirts</li>
          </ul>
        </div>

        <Button className='btn' id='filter-btn'><FilterAltOutlinedIcon/>Filter</Button>
      </div>
    </div>
    </>
  )
}

export default  Sidebar;