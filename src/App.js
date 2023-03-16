import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import MediaCard from "./components/MediaCard";
import Footer from "./components/Footer";
import Jumbotron from './components/Jumbotron';
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0);
  const [recipe, setRecipe] = useState([]);
  
  useEffect(() => {
  getRecipe();
  },[]);
  

  const APP_ID = "31e49968"
  const APP_KEY = "ecdd8eae17634d382403cbce72038924"


    // const url = `/api/recipes/v2/?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;
    const getRecipe = async () => {
      const response = await axios.get(`/api/recipes/v2/?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
      // const result = await response.json();
      setRecipe(response.data.hits)
      console.log(response.data.hits);
  };

  return (

  // -------------Start of div container-----------------
  <>
    <Router basename="">
      <div>        
        <NavTabs />          
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>        
      </div>
    </Router>
    <Jumbotron />
<div className='App'>
<form>
    <input type="text"/>
    <button type="button">Search</button>
   </form>
   {count}
   <button type="button" onClick={getRecipe}>Food searching App</button>
   <button type="button" onClick={() => setCount(count + 1)}>Click</button>
   </div>

    <MediaCard/>
    <Footer /> 
  {/* ----------Finish of container----------------   */}
  </>

  );
}

export default App;

