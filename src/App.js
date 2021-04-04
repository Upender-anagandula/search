import React,{useState}  from 'react';
import './App.css';
import Banner from './Banner';
import Child1 from './Child1';
import Header from './Header';
import Services from './Services';


function App() {
  
  return (
    <div class="containery">
    <div className="header">
      <Header />
      </div>
      <div>
        <Banner />
        </div>
        <div className="services">
          <Services />
        </div>
      </div>
  );
}


export default App;
