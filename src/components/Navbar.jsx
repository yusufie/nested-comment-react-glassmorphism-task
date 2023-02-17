import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.svg';
import user from '../images/user.svg';
import search from '../icons/search.png';


function Navbar() {

  return (

    <>
      <div className="d-flex flex-row justify-content-between p-5 me-5 ms-5 mb-5 " >

          <div className=' ms-5 '>
              <img src={logo} alt="logo" className='' />
          </div>
 
          <div className="d-flex col-sm-6 w-25" >
            <div className="input-group border rounded-4" >

              <span className="input-group-text bg-transparent border-0 " id="search-addon">
                <button type="button" className="btn">
                  {<img src={ search } alt="search" /> } 
                </button>
              </span>

              <input type="search" 
              className="form-control text-center text-white bg-transparent border-0 me-2 "
              placeholder="Search" 
              aria-label="Search" 
              aria-describedby="search-addon"
               />

            </div>
            
          </div>

                <NavDropdown 
                    title={<img src={ user } alt="user" /> }
                    id="navbarScrollingDropdown"
                    className='text-white me-5 '
                    style={{fontSize: '1.5rem'}}
                  >
                    <NavDropdown.Item href="#action2" className='' >Yusuf</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">Sign Out</NavDropdown.Item>
                </NavDropdown>

      </div>


    </>
  );
}

export { Navbar } ;




/* 
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCaretDown, faCaretRight);

 */

/* 
const [activeItem, setActiveItem] = useState('home');
const [showSubmenu, setShowSubmenu] = useState(false); 
 */


/* 
<div className="container text-white p-3">
<div className='login-item' onClick={() => setShowSubmenu(!showSubmenu)}>

  <div className=''>
      <img src={ user } alt="game" className=''/>
      <FontAwesomeIcon icon={showSubmenu ? 'caret-down' : 'caret-right'} className="" id='svg'/> 
  </div>

</div>
</div>

{showSubmenu && (
          <div className="submenu ms-5 text-white w-25 ">

            <div className="submenu-item ms-5 rounded-3" onClick={() => setActiveItem('products/1')}>
              <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
            </div>

            <div className="submenu-item ms-5 rounded-3" onClick={() => setActiveItem('products/2')}>
              <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
            </div>

            <div className="submenu-item ms-5 rounded-3" onClick={() => setActiveItem('products/3')}>
              <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
            </div>

          </div>
        )}

 */