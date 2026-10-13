import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return (
        <nav>
            <h1>Online Towel Store</h1>
          
            
            <main>
                {/* <Link to = {"/"}></Link> */}
                <Link to = {"/home"}>Home</Link>
                <HashLink to= {"/home#about"}>About</HashLink>
                <HashLink to= {"/home#brands"}>Brands</HashLink>
                <Link to = {"/Store"}>Store</Link>
                <Link to = {"contact"}>Contact</Link>
            </main>
        </nav>
  )
}

export default Header;