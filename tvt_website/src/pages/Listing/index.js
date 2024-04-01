import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Product from "../../components/product";
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Listing = () => {
  return (
    <section className='listingPage'>
        <div className='container-fluid'>
            <div className='breadcrumb flex-column'>
                <h1>Hoodie</h1>
                <ul className='list list-inline'>
                    <li className='list-inline-item'>
                        <Link to={''}>Home</Link>
                    </li>
                    <li className='list-inline-item'>
                        <Link to={''}>Shop</Link>
                    </li>
                    <li className='list-inline-item'>
                        <Link to={''}>Hoodie</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className='listingData'>
            <div className='row'>
                <div className='col-md-3 sidebarWrapper'>
                    <Sidebar/>
                </div>
                <div className='col-md-9 rightContent homeProducts pt-0'>
                    <div className='topStrip d-flex align-items-center'>
                        <p className='mb-0'>We found <span className='primary-color'>29 </span>items for you !</p>
                        <div className='ml-auto'>
                            <div className='d-flex align-items-center'>
                                <div className='tab_ position-relative'>
                                    <Button className='btn_ show-btn'><GridViewOutlinedIcon/>Show : 50 <KeyboardArrowDownRoundedIcon/> </Button>
                                    <ul className='dropdownMenu'>
                                        <li><Button className='align-items-center'>100</Button></li>
                                        <li><Button className='align-items-center'>150</Button></li>
                                        <li><Button className='align-items-center'>200</Button></li>
                                    </ul>  
                                </div>
                                <div className='tab_ position-relative ml-3'>
                                    <Button className='btn_ sort-btn'><FilterListRoundedIcon/>Sort By : Featured<KeyboardArrowDownRoundedIcon/></Button>
                                    <ul className='dropdownMenu dropdownMenu_1'>
                                        <li><Button className='align-items-center'>Featured</Button></li>
                                        <li><Button className='align-items-center'>Price : Low to High</Button></li>
                                        <li><Button className='align-items-center'>Price : High to Low</Button></li>
                                        <li><Button className='align-items-center'>Release Date</Button></li>
                                        <li><Button className='align-items-center'>Avg Rating</Button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productRow pl-2">
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
{/*  */}
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
{/*  */}    
<                       div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
{/*  */}
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Listing;