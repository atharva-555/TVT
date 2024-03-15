import React, { useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import ListIcon from '@mui/icons-material/List';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import '../../index.css';


const Header = () =>{

    // DROP DOWN AT MY PROFILE
    const[isOpenDropdown,setIsOpenDropdown] = useState(false);
    // Function to handle dropdown
    const handledropdown = () => {
        setIsOpenDropdown(!isOpenDropdown); 
      };

    //Toggle Login-MyPorfile====================================================================== 
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
    // Function to handle login/logout
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle login status
      };



    return(
        <header>
            <div className='container-fluid'>
                <div className='row'>

                    {/* Logo */}
                    <div className='col-sm-2 mr-10 part1' >
                        <img className="logo" alt="" src={Logo}/>
                    </div>

            

                    {/* Navbar */}
                   
                    <div className='col-sm-6 ml-auto  part2 d-flex align-items-center justify-content-center'>
                        <div className='nav'>
                            <nav>
                                {/* <ClickAwayListener onClickAway={()=>setIsOpenDropdown(false)}> */}
                                    <ul className="list list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Button><span className='icon'><HomeOutlinedIcon/></span><Link>Home</Link></Button>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button><Link>About Us</Link></Button>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button><span className='icon'><ListIcon/></span><Link>Products</Link></Button>
                                            <div className='dropdown_menu megaMenu'>
                                               <div className='row'>
                                                    <div className='col'>
                                                           <h4>Tshirts</h4>
                                                            <ul>
                                                                <li><Link to={""}>Sweatshirts</Link></li>
                                                                <li><Link to={""}>Oversized Tshirts</Link></li>
                                                                <li><Link to={""}> Cotton Tshirts 230GSM</Link></li>       
                                                            </ul>
                                                                                 
                                                            <h4>Shirts</h4>   
                                                            <ul>
                                                                <li><Link to={""}>New Arrival</Link></li>
                                                                <li><Link to={""}>Formal</Link></li>
                                                                <li><Link to={""}>Casual</Link></li>       
                                                        </ul>      
                                                    </div>
                                                    <div className='col'>
                                                        <h4>Hoodies</h4>
                                                        <ul>
                                                            <li><Link to={""}>Zipper</Link></li>
                                                            <li><Link to={""}>Designer</Link></li>
                                                            <li><Link to={""}>Plain</Link></li>       
                                                        </ul>
                                                    </div>
                                                    <div className='col'>
                                                        <h4>Trending</h4>
                                                    </div>
                                                    {/* <div className='col'>
                                                        <h4>Trending</h4>
                                                    </div> */}
                                               </div>
                                            </div>
                                        </li> 
                                        <li className="list-inline-item">
                                            <Button><span className='icon'><PermPhoneMsgOutlinedIcon/></span><Link>Contact</Link></Button>
                                        </li>            
                                        <li className="list-inline-item">
                                            {/* Conditionally render either "Login" or "My Profile" */}
                                                {isLoggedIn ? (
                                                    <Button onClick={handledropdown}><span className='icon'><AccountCircleOutlinedIcon/></span><Link>My Profile</Link></Button>
                                                ) : (
                                                    <Button onClick={handleLogin} id='login-btn'><span className='icon'><VpnKeyOutlinedIcon/></span><Link>Login</Link></Button>
                                                )}

            
                                            {/* { isOpenDropdown != false && */}
                                                <ul className='dropdownMenu profilemenu'>
                                                    <li><Button className='align-items-center'><span className='icon'><AccountCircleOutlinedIcon/></span>My Account</Button></li>
                                                    <li><Button className='align-items-center'><span className='icon'><LocationOnOutlinedIcon/></span>Order Tracking</Button></li>
                                                    <li><Button className='align-items-center'><span className='icon'><FavoriteBorderOutlinedIcon/></span>My Wishlist</Button></li>
                                                    <li><Button className='align-items-center'><span className='icon'><ShoppingCartOutlinedIcon/></span>My Cart</Button></li>
                                                    <li><Button className='align-items-center'><span className='icon'><SettingsOutlinedIcon/></span>Settings</Button></li>
                                                    <li><Button className='align-items-center'><span className='icon'><LogoutOutlinedIcon/></span>Sign Out</Button></li>
                                                </ul>  
                                            {/*  } */} 
                                            </li>  
                                                            
                                    </ul>
                                {/* </ClickAwayListener> */}
                            </nav>
                        </div>
                    </div>
            
                    

                </div>

            </div>
        </header>
    )
}

export default Header;