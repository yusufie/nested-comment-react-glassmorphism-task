import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import game from '../icons/game.svg';
import sports from '../icons/sports.svg';
import television from '../icons/television.svg';
import celebrity from '../icons/celebrity.svg';
import business from '../icons/business.png';
import more from '../icons/more.svg';
// import logo from '../images/logo.svg';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCaretDown, faCaretRight);


function Leftframe() {
  const [activeItem, setActiveItem] = useState('home');

  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [showSubmenu3, setShowSubmenu3] = useState(false);
  const [showSubmenu4, setShowSubmenu4] = useState(false);
  const [showSubmenu5, setShowSubmenu5] = useState(false);


  return (

    <Container className='text-white p-3 ' >


      <div className="sidebar text-white bg-secondary bg-opacity-25 rounded-3 p-3 ">

            <div className="sidebar-item text-center  p-2" onClick={() => setActiveItem('home')}>
              <div className={activeItem === 'home' ? 'active' : ''}>Topics</div>
            </div>

            <div className="sidebar-item p-2 ms-5 rounded-3 mt-3" onClick={() => setShowSubmenu(!showSubmenu)}>
              <div className='row'>

                  <div className='col'>
                    <img src={ game } alt="game" className='p-2'/>
                    Gaming
                  </div>

                  <div className='col-auto'>
                    <FontAwesomeIcon icon={showSubmenu ? 'caret-down' : 'caret-right'} className="" id='svg'/> 
                  </div>
              
              </div>
            </div>

                {showSubmenu && (
                  <div className="submenu ms-5 ">

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/1')}>
                      <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/2')}>
                      <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/3')}>
                      <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
                    </div>

                  </div>
                )}
          
            <div className="sidebar-item p-2 ms-5 rounded-3 mt-3" onClick={() => setShowSubmenu1(!showSubmenu1)}>

              <div className='row'>

                  <div className='col'>
                    <img src={sports} alt="sports" className='p-2'/> Sports
                  </div>

                  <div className='col-auto'>
                    <FontAwesomeIcon icon={showSubmenu1 ? 'caret-down' : 'caret-right'} className="" />
                  </div>

              </div>
              
            </div>

                {showSubmenu1 && (
                  <div className="submenu ms-5">

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/1')}>
                      <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/2')}>
                      <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/3')}>
                      <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
                    </div>

                  </div>
                )}

            <div className="sidebar-item p-2 ms-5 rounded-3 mt-3" onClick={() => setShowSubmenu2(!showSubmenu2)}>

              <div className='row'>

                <div className='col'>
                  <img src={television} alt="television" className='p-2'/> Television
                </div>

                <div className='col-auto'>
                  <FontAwesomeIcon icon={showSubmenu2 ? 'caret-down' : 'caret-right'} className="" />
                </div>

              </div>

            </div>

                {showSubmenu2 && (
                  <div className="submenu ms-5">

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/1')}>
                      <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/2')}>
                      <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/3')}>
                      <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
                    </div>

                  </div>
                )}

            <div className="sidebar-item ms-5 rounded-3 p-2 mt-3" onClick={() => setShowSubmenu3(!showSubmenu3)}>

              <div className='row'>

                  <div className='col'>
                    <img src={celebrity} alt="celebrity" className='p-2' /> Celebrity
                  </div>

                  <div className='col-auto'>
                    <FontAwesomeIcon icon={showSubmenu3 ? 'caret-down' : 'caret-right'} className="" />
                  </div>

              </div>

            </div>

                {showSubmenu3 && (
                  <div className="submenu ms-5">

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/1')}>
                      <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/2')}>
                      <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/3')}>
                      <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
                    </div>

                  </div>
                )}

            <div className="sidebar-item ms-5 rounded-3 p-2 mt-3" onClick={() => setShowSubmenu4(!showSubmenu4)}>

                <div className='row'>

                  <div className='col'>
                    <img src={business} alt="business" className='p-2' /> Business
                  </div>

                  <div className='col-auto'>
                    <FontAwesomeIcon icon={showSubmenu4 ? 'caret-down' : 'caret-right'} className="" />
                  </div>

                </div>

            </div>

                {showSubmenu4 && (
                  <div className="submenu ms-5">

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/1')}>
                      <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/2')}>
                      <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/3')}>
                      <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
                    </div>

                  </div>
                )}

            <div className="sidebar-item ms-5 rounded-3 p-2 mt-3" onClick={() => setShowSubmenu5(!showSubmenu5)}>

              <div className='row'>

                  <div className='col '>
                    <img src={more} alt="more" className='p-2' /> More
                  </div>

                  <div className=' col-auto '>
                      <FontAwesomeIcon icon={showSubmenu5 ? 'caret-down' : 'caret-right'} className="" />
                  </div>

              </div>

            </div>

                {showSubmenu5 && (
                  <div className="submenu ms-5 ">

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/1')}>
                      <div className={activeItem === 'products/1' ? 'active' : ''}>products1</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/2')}>
                      <div className={activeItem === 'products/2' ? 'active' : ''}>products2</div>
                    </div>

                    <div className="submenu-item ms-5 p-2 rounded-3" onClick={() => setActiveItem('products/3')}>
                      <div className={activeItem === 'products/3' ? 'active' : ''}>products3</div>
                    </div>

                  </div>
                )}

      </div>
{/* 
                  <div className="sidebar text-white bg-secondary bg-opacity-25  rounded-3 p-3 mt-4">

                      <div className='border-0'>
                        <img src={logo} alt="logo" className='' height={50}/>
                      </div>

                      <div className="sidebar-item text-center p-2" onClick={() => setActiveItem('home')}>
                        <div className={activeItem === 'home' ? 'active' : ''}>User Agreement</div>
                      </div>

                      <div className="sidebar-item text-center p-2" onClick={() => setActiveItem('home')}>
                        <div className={activeItem === 'home' ? 'active' : ''}>Content Policy</div>
                      </div>

                      <div className="sidebar-item text-center p-2" onClick={() => setActiveItem('home')}>
                        <div className={activeItem === 'home' ? 'active' : ''}>Privacy Policy</div>
                      </div>

                      <div className="sidebar-item text-center p-2" onClick={() => setActiveItem('home')}>
                        <div className={activeItem === 'home' ? 'active' : ''}>Cookie Policy</div>
                      </div>

                      <div className="sidebar-item text-center p-2" onClick={() => setActiveItem('home')}>
                        <div className={activeItem === 'home' ? 'active' : ''}>Interest-Based Ads</div>
                      </div>

                      <div className="sidebar-item text-center p-2" onClick={() => setActiveItem('home')}>
                        <div className={activeItem === 'home' ? 'active' : ''}>More</div>
                      </div>

                  </div>

 */}
    </Container>
  );
}

export default Leftframe;