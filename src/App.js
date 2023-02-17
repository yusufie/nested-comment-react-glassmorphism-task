import React from "react";

import { Navbar } from "/src/components/Navbar";
import { Loginbox } from "/src/components/Loginbox";
import { Layout } from "/src/components/Layout";

import background from '/src/images/background.png';

function App() {
  return (
      <>
        <div className="App" 
        style={
          {
            
            backgroundColor: '#101E42',
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            fontFamily: 'Rubik',
            fontSize: '1.2rem',

          }
        }>

          <Navbar />

          <Layout />

          <Loginbox />

        </div>

      </>
  );
}

export default App;
