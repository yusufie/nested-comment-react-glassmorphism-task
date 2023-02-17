import React from 'react';
import Leftframe from './Leftframe';
import Rightframe from './Rightframe';
import Centerframe from './Centerframe';

function Layout() {
  return (
    <>
      <div className='col-xl-11 px-3 mx-auto '>
        <div className='row gap-3'>

          <div className='col-xl-3'>
            <Leftframe />
          </div>

          <div className='col-xl '>
            <Centerframe />
          </div>

          <div className='col-xl-3 '>
            <Rightframe />
          </div>
          
        </div>

      </div>
    </>
  );
}

export { Layout };