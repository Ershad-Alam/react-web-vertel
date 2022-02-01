import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <React.Fragment>
          <div className='header'>
          <div className='container'>
            <Link class='is-active' to="/">Home</Link>          
            <Link to="/About">About Us</Link>         
            <Link to="/Contact">Contact Us</Link>
          </div>
          </div>         
          
        </React.Fragment>
    )
}
