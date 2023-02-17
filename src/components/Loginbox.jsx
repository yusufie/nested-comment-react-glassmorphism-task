import React from 'react'

function Loginbox() {

  return (

    <div className='loginBox bg-secondary bg-opacity-25 p-5'>
      <div className="col-lg-11 mx-auto">
        <div className="row align-items-center">

          <div className="col-lg-3"></div>

          <div className="col text-center text-white">
            <div>Create an account to follow your favorite communities and start taking part in conversations.</div>
          </div>

          <div className="col-lg-3 text-lg-end mt-lg-0 mt-3 text-center text-white ">
            <button className='btn text-white'>Log In</button>
            <button className='btn bg-danger text-white p-3 rounded-4 '>Sign Up</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export { Loginbox } ;