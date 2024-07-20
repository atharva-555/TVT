import React, { useEffect, useState ,useRef} from 'react';
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
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../../index.css';


const Header = (props) =>{
    // GET WINDOW SIZE FOR RESPONSIVENESS
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        
        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []);

    // Responsive Open menu
    const [isOpenMenu,setisOpenMenu]=useState(false);
    const openMenu=()=>{
        setisOpenMenu(true);
    }

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            // Click occurred outside of the menu, trigger close menu function
            closeMenu();
            
        }
        };
       

        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
        document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const closeMenu=()=>{
        setisOpenMenu(false);
        
    }
    //  Open Search
    const [isOpenSearch,setisOpenSearch]=useState(false);
    const openSearch=()=>{
        setisOpenSearch(true);
        
    }

    // TO FETCH DATA FROM JSON SERVER
    const [CatData,setCatData]=useState([]);

    useEffect(()=>{
        // console.log(props.data);
        setCatData(props.data);
        
    },[])

    

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
                        <div className='navbarToggle align-items-center justify-content-center mr-auto' onClick={openMenu}><MenuRoundedIcon/></div>
                        <Link to='/'><img className="logo" alt="" src={Logo}/></Link>
                        <div className='navbarToggle ml-auto  align-items-center justify-content-center' onClick={openSearch}><SearchRoundedIcon/></div>
                    </div>

            

                    {/* Navbar */}
                   
                    {
                                    windowWidth > 992 && 

                            <div className='col-sm-6 ml-auto  part2 d-flex align-items-center justify-content-center'>
                                <div className='nav'>
                                <nav>
                                    {/* <ClickAwayListener onClickAway={()=>setIsOpenDropdown(false)}> */}
                                        <ul className="list list-inline mb-0">
                                            <li className="list-inline-item">
                                            <Button><Link to={'/'}><span className='icon'><HomeOutlinedIcon/></span>Home</Link></Button>
                                            </li>
                                            <li className="list-inline-item abt-us">
                                                <Button><Link>About Us</Link></Button>
                                            </li>
                                            <li className="list-inline-item products">
                                                <Button><span className='icon'><ListIcon/></span><Link>Products</Link></Button>
                                                <div className='dropdown_menu megaMenu'>
                                                    <div className='row'>
                                                    {
                                                            props.data.length !== 0 &&
                                                            props.data.map((item, index) => {
                                                                return (
                                                                    <div className='col' key={index}>
                                                                        <a href={`/cat/${item.cat_name.toLowerCase()}`}  onClick={() =>  sessionStorage.setItem('cat', item.cat_name.toLowerCase())}> <h4 className='text-capitalize'>{item.cat_name}</h4></a>
                                                                        {
                                                                            item.items.length !== 0 &&
                                                                            <ul className='mt-4 mb-0'>
                                                                                {
                                                                                    item.items.map((item_, index_) => {
                                                                                        return (
                                                                                            <li key={index_}  onClick={() =>  sessionStorage.setItem('cat', item.cat_name.toLowerCase())}>
                                                                                                <a key={index_}  onClick={props.closeNav} href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}>{item_.cat_name}</a>
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
                                            <li className="list-inline-item m-auto pt-2" id='profile-hover'>
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
                                                                <li><Button className='align-items-center signOutBtn'><span className='icon'><LogoutOutlinedIcon/></span>Sign Out</Button></li>
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
                    }
                    {
                                    windowWidth <= 992 && 
                    <> <div className={`navbarOverlay ${isOpenMenu===true ? 'open' : ''}`}></div>
                            <div  ref={menuRef} className={`col-sm-6 ml-auto  part2 d-flex justify-content-center ${isOpenMenu===true ? 'open' : ''}`}>
                                <div className='nav'>
                                <nav>
                                    <div className='row pr-4'><CloseRoundedIcon className='ml-auto' onClick={()=>setisOpenMenu(false)}/></div>
                                        <ul className="list list-inline mb-0">
                                            <li className="list-inline-item">
                                            <Link to={'/'}  onClick={()=>setisOpenMenu(false)}><span className='icon'><HomeOutlinedIcon/></span>Home</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link><span className='icon'><PermPhoneMsgOutlinedIcon/></span>Contact</Link>
                                            </li>            
                                            <li className="list-inline-item d-flex " >
                                                {/* Conditionally render either "Login" or "My Profile" */}
                                                    {isLoggedIn ? (
                                                        <>
                                                            <Button id='myprofile'><span className='icon'><AccountCircleOutlinedIcon/></span><Link>My Profile</Link></Button>
                                                            <ul className='mob-profilemenu'>
                                                                <li><Button className='align-items-center'><span className='icon'><AccountCircleOutlinedIcon/></span>My Account</Button></li>
                                                                <li><Button className='align-items-center'><span className='icon'><LocationOnOutlinedIcon/></span>Order Tracking</Button></li>
                                                                <li><Button className='align-items-center'><span className='icon'><FavoriteBorderOutlinedIcon/></span>My Wishlist</Button></li>
                                                                <li><Button className='align-items-center'><span className='icon'><ShoppingCartOutlinedIcon/></span>My Cart</Button></li>
                                                                <li><Button className='align-items-center'><span className='icon'><SettingsOutlinedIcon/></span>Settings</Button></li>
                                                                <li><Button className='align-items-center signOutBtn'><span className='icon'><LogoutOutlinedIcon/></span>Sign Out</Button></li>
                                                            </ul>  
                                                        </>               
                                                    ) : (
                                                        <Button onClick={handleLogin} className='mt-4' id='login-btn'><span className='icon'><VpnKeyOutlinedIcon/></span><Link>Login</Link></Button>
                                                    )}

                                            </li>  
                                                                
                                        </ul>
                                </nav>
                                </div>
                            </div>
                    </>
                            
                    }
            
                    

                </div>

            </div>
        </header>
    )
}

export default Header;