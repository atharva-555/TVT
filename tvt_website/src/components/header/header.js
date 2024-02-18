import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

const Header = () =>{
    return(
        <header>
            <div className='container-fluid'>

                <div className='row'>

                    {/* Logo */}
                    <div className='col'>
                        <img className="logo" alt="" src={Logo}/>
                    </div>


                    {/* Navbar */}
                    <div className='col'>
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Button><Link>Home</Link></Button>
                            </li>
                            <li className="list-inline-item">
                                <Button><Link>Home</Link></Button>
                            </li>
                            <li className="list-inline-item">
                                <Button><Link>Home</Link></Button>
                            </li>                             
                        </ul>
                    </div>
                    

                </div>

            </div>
        </header>
    )
}

export default Header;