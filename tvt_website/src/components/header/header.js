import React, { useEffect, useState } from 'react';
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
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../../index.css';


const Header = (props) =>{

    // TO FETCH DATA FROM JSON SERVER
    const [CatData,setCatData]=useState([]);

    useEffect(()=>{
        // console.log(props.data);
        setCatData(props.data);
    })

    

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
                    <div className='col-sm-2 mr-10 part1 d-flex align-items-center justify-content-center' >
                        <div className='navbarToggle align-items-center justify-content-center mr-auto'><MenuRoundedIcon/></div>
                        <Link to='/'><img className="logo" alt="" src={Logo}/></Link>
                        <div className='navbarToggle ml-auto  align-items-center justify-content-center'><SearchRoundedIcon/></div>
                    </div>

            

                    {/* Navbar */}
                   
                    <div className='col-sm-6 ml-auto  part2 d-flex align-items-center justify-content-center'>
                        <div className='nav'>
                            <nav>
                                {/* <ClickAwayListener onClickAway={()=>setIsOpenDropdown(false)}> */}
                                    <ul className="list list-inline mb-0">
                                        <li className="list-inline-item">
                                        <Link to={'/'}><Button><span className='icon'><HomeOutlinedIcon/></span><Link to={'/'} >Home</Link></Button></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button><Link>About Us</Link></Button>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button><span className='icon'><ListIcon/></span><Link>Products</Link></Button>
                                            <div className='dropdown_menu megaMenu'>
                                               <div className='row'>
                                                {
                                                        props.data.length !== 0 &&
                                                        props.data.map((item, index) => {
                                                            return (
                                                                <div className='col'>
                                                                    <a href={`/cat/${item.cat_name.toLowerCase()}`}> <h4 className='text-capitalize'>{item.cat_name}</h4></a>
                                                                    {
                                                                        item.items.length !== 0 &&
                                                                        <ul className='mt-4 mb-0'>
                                                                            {
                                                                                item.items.map((item_, index) => {
                                                                                    return (
                                                                                        <li>
                                                                                            <Link onClick={props.closeNav} to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}>{item_.cat_name}</Link>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    {/* <div className='col'>
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className='w-100' />
                                                    </div> */}
                                               </div>
                                            </div>
                                        </li> 
                                        <li className="list-inline-item">
                                            <Button><span className='icon'><PermPhoneMsgOutlinedIcon/></span><Link>Contact</Link></Button>
                                        </li>            
                                        <li className="list-inline-item" id='profile-hover'>
                                            {/* Conditionally render either "Login" or "My Profile" */}
                                                {isLoggedIn ? (
                                                    <>
                                                        <Button id='myprofile'><span className='icon'><AccountCircleOutlinedIcon/></span><Link>My Profile</Link></Button>
                                                        <ul className='dropdownMenu profilemenu'>
                                                            <li><Button className='align-items-center'><span className='icon'><AccountCircleOutlinedIcon/></span>My Account</Button></li>
                                                            <li><Button className='align-items-center'><span className='icon'><LocationOnOutlinedIcon/></span>Order Tracking</Button></li>
                                                            <li><Button className='align-items-center'><span className='icon'><FavoriteBorderOutlinedIcon/></span>My Wishlist</Button></li>
                                                            <li><Button className='align-items-center'><span className='icon'><ShoppingCartOutlinedIcon/></span>My Cart</Button></li>
                                                            <li><Button className='align-items-center'><span className='icon'><SettingsOutlinedIcon/></span>Settings</Button></li>
                                                            <li><Button className='align-items-center'><span className='icon'><LogoutOutlinedIcon/></span>Sign Out</Button></li>
                                                        </ul>  
                                                    </>               
                                                ) : (
                                                    <Button onClick={handleLogin} id='login-btn'><span className='icon'><VpnKeyOutlinedIcon/></span><Link>Login</Link></Button>
                                                )}
 
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