import React, { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import './MediaCard.css'
import Quotes from './components/Quotes';
import CuisineList from './components/CuisineType.js'
import ShoppingList from './components/ShoppingList.js'
import CustomNavbar from './components/CustomNavbar';
import Body from './components/Body';
import Video from './components/Video'
import Home from'./components/Home';

function App() {
  
  return (

    // -------------Start of div container-----------------
    <>

      
        <Quotes />
        <CustomNavbar />
        <Video />
        

          
          

      <CuisineList />
      <Home />
      <ShoppingList />
      <Footer />
      {/* ----------Finish of container----------------   */}
    </>

  );
}

export default App;

