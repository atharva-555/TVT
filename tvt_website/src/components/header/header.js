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


const Header = () =>{


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
                                <ul className="list list-inline mb-0">
                                    <li className="list-inline-item">
                                        <Button><span className='icon'><HomeOutlinedIcon/></span><Link>Home</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><span className='icon'><PermPhoneMsgOutlinedIcon/></span><Link>About Us</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><span className='icon'><ListIcon/></span><Link>Categories</Link></Button>
                                    </li> 
                                    <li className="list-inline-item">
                                        <Button><span className='icon'><PermPhoneMsgOutlinedIcon/></span><Link>Contact</Link></Button>
                                    </li>            
                                    <li className="list-inline-item">
                                        {/* Conditionally render either "Login" or "My Profile" */}
                                            {isLoggedIn ? (
                                                <Button onClick={handleLogin}><span className='icon'><AccountCircleOutlinedIcon/></span><Link to="/profile">My Profile</Link></Button>
                                            ) : (
                                                <Button onClick={handleLogin}><span className='icon'><VpnKeyOutlinedIcon/></span><Link to="/login">Login</Link></Button>
                                            )}
                                    </li>                             
                                </ul>
                            </nav>
                        </div>
                    </div>
            
                    

                </div>

            </div>
        </header>
    )
}

export default Header;