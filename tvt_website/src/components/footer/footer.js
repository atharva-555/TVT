import React, { useState } from 'react';
import '../footer/footer.css';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import PublicIcon from '@mui/icons-material/Public';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = ()=>{
    return(
        <footer>
            <div className='container-fluid'>
                <div className='row'>
                    <div  className='left_column col md-3'>
                        <div className='footer-logo-wrapper row'>
                            <div className='footer-logo col-4'>
                                <Link to='/'><img className='f_logo' src={Logo}/></Link>
                                <p className='slogan'>Vibe Tribe Vibe !!!!</p>
                            </div>
                            <div className='col-8 d-flex align-items-center'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. l omnis dolorem! Corrupti at ipsum atque error, possimus facere hic beatae!</p>
                            </div>
                        </div>
                        <br/>
                        <p><span className='icon'><PermPhoneMsgOutlinedIcon/></span>Contact - +91 123456789</p>
                        <p><span className='icon'><MailOutlineIcon/></span>Email - tvt@gmail.com</p>
                        <p><span className='icon'><RoomOutlinedIcon/></span>Address - Moon,7 Planet Solar System,MilkyWay Galaxy.</p>
                        <br/>
                        <h5 className='social-title'>Social Medias</h5>
                        <div className='social row'>                           
                            <div className='col-3 text-center' >
                                <Link to={'/'}><span className='icon'><InstagramIcon/></span><p>Instagram</p></Link>                                
                            </div>
                            <div className='col-3 text-center'>
                                <Link to={'/'}><span className='icon'><WhatsAppIcon/></span><p>Whatsapp</p></Link>
                            </div>
                            <div className='col-3 text-center'>
                                <Link to={'/'}><span className='icon'><FacebookIcon/></span><p>Facebook</p></Link>
                            </div>
                            <div className='col-3 text-center'>
                                <Link to={'/'}><span className='icon'><YouTubeIcon/></span><p>Youtube</p></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='mid_column col md-3'>
                        <h5>Important Links</h5>
                        <Link to={''}><p>Blogs</p></Link>
                        <Link to={''}><p>Privacy-Policy</p></Link>
                        <Link to={''}><p>Return-Policy</p></Link>
                        <Link to={''}><p>Terms and Conditions</p></Link>
                        <Link to={''}><p>About Us</p></Link>      
                        <Link to={''}><p>Support</p></Link>   
                    </div>
                    <div className='col md-6'>
                    <h5>Mail Us</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;