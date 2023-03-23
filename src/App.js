import React from 'react';
import Footer from "./components/Footer";
import './MediaCard.css'
import Quotes from './components/Quotes';
import ShoppingList from './components/ShoppingList.js'
import CustomNavbar from './components/CustomNavbar';
import Video from './components/Video'
import Home from'./components/Home';
import Chinese from './ChineseRecipes.js'
function App() {
  
  return (

    // -------------Start of div container-----------------
    <>
        <Quotes />
        <CustomNavbar />
        <Video />
      <Home />
      <ShoppingList />
 <Chinese />
      <Footer />
      {/* ----------Finish of container----------------   */}
    </>

  );
}

export default App;

