import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import MediaCard from "./components/MediaCard";
import Footer from "./components/Footer";
import Jumbotron from './components/Jumbotron';


function App() {

  const APP_ID = "31e49968"
  const APP_KEY = "ecdd8eae17634d382403cbce72038924"
  
  const url = `/api/recipes/v2/?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
};

// return (
//   <div  className='App'>
//       <button onClick={getData}>Food searching App</button>
//   </div>
// )
// return (
//   <div  className='App'>
//       <button onClick={getData}>Food searching App</button>
//   </div>
// )

  return (

  // -------------Start of div container-----------------
  <>
  <NavTabs />
  
    {/* <Router basename="">
      <div>        
        <NavTabs />          
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>        
      </div>
    </Router> */}
    <Jumbotron />

    {/* <MediaCard /> */}
    <Footer /> 
  
  {/* ----------Finish of container----------------   */}
  </>

  );
}

export default App;

