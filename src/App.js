import React, { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import './MediaCard.css'
import Input from '@mui/material/Input';
import Quotes from './components/Quotes';
import Button from '@mui/joy/Button';
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

      {/* <div className="input-field"> */}
        <Quotes />
        <CustomNavbar />
        <Video />
        {/* <form onSubmit={updateQuery}>
          <Input placeholder="Find the best recipes..." type="text" value={search} onChange={updateSearch} /> */}

          {/* <Button
            placeholder="Find the best recipes..."
            color="primary"
            value={search}
            type="text"
            size="sm"
            variant="outlined"
            onChange={updateSearch}
            sx={{ marginLeft: '8px' }}
          >Search</Button>
        </form>
      </div>       */}

      <CuisineList />
      <Home></Home>
      <ShoppingList />
      <Footer />
      {/* ----------Finish of container----------------   */}
    </>

  );
}

export default App;

