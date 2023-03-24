import React from 'react';
import Footer from "./components/Footer";
import './MediaCard.css'
import Quotes from './components/Quotes';
import ShoppingList from './components/ShoppingList.js'
import CustomNavbar from './components/CustomNavbar';
import Video from './components/Video'
import Home from'./components/Home';
import Chinese from './ChineseRecipes.js'
import Italian from './ItalianRecipes.js'
import Greek from './GreekRecipes.js'
import KitchenCard from './KitchenCard';



function App() {

  return (
    <>
        <Quotes />
        <CustomNavbar />
        <Video />
        <Home />
 <Chinese />
 <Italian />
 <Greek />
 <KitchenCard />
      <ShoppingList />
      <Footer />
    </>
  );
}

export default App;

