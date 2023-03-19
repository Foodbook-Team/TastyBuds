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
import axios from 'axios';
import Recipe from './components/MediaCard';
import './MediaCard.css'
import Input from '@mui/material/Input';
import Quotes from './components/Quotes';
import Button from '@mui/joy/Button';
import MealType from './components/MealType';

function App() {
const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')
  useEffect(() => {
  getRecipe();
  },[query]);
  

  const APP_ID = "31e49968"
  const APP_KEY = "ecdd8eae17634d382403cbce72038924"


    // const url = `/api/recipes/v2/?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;
    const getRecipe = async () => {
      const response = await axios.get(`/api/recipes/v2/?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
      // const result = await response.json();
      setRecipe(response.data.hits)
      console.log(response.data.hits);
  };

  const updateSearch = (e) => {
   setSearch(e.target.value)
  }

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  }

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
<div className="input-field">
    <Quotes/>
<form onSubmit={updateQuery}>
<Input placeholder="Find the best recipes..." type="text" value={search} onChange={updateSearch} />
    {/* <input type="text" value={search} onChange={updateSearch}/> */}

    <Button
    placeholder="Find the best recipes..."
  color="primary"
  value={search}
  type="text"

  size="sm"
  variant="outlined"
  onChange={updateSearch}
>Search</Button>


    {/* <button className='search-button' type="submit">Search</button> */}
   </form>
  </div>


<div className='App'>
{recipe.map((recipe) => (
  <Recipe
   title={recipe.recipe.label}
   calories={recipe.recipe.calories + " kcal"}
   image={recipe.recipe.image}
   ingredients={recipe.recipe.ingredients}
   />
))}


<Recipe/>
   </div>
   {/* <button type="button" onClick={getRecipe}>Food searching App</button> */}

   
    <Footer /> 
    <MealType />
  {/* ----------Finish of container----------------   */}
  </>

  );
}

export default App;

