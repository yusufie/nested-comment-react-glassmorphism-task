import React from 'react';

import Data from "/data.json";
import { Conversation } from "/src/components/conversation";


const Centerframe = () => {

  return (
    <>
      <div className="bg-secondary bg-opacity-25 text-center text-white p-3 rounded-3  ">
          <h3 className='sectionTitle'>Trends for You</h3>

          <div className="comment-container m-5 ">
            <Conversation {...Data} />
          </div>
        
      </div>
    </>
  )
}

export default Centerframe;