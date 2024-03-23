import React from 'react';
import { Link } from 'react-router-dom';

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
            
        </div>
    </section>
  )
}

export default Listing;