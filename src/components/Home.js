import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Recipe from '../components/MediaCard';


function Home() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const APP_ID = "31e49968"
  const APP_KEY = "ecdd8eae17634d382403cbce72038924"

  const getRecipe = async () => {
    const response = await axios.get(`/api/recipes/v2/?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);

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
    <>

      <div className='App'>
        {recipe && recipe.slice(0, 9).map((recipe) => (

          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed(1)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            dishType={recipe.recipe.dishType}
            dietLabels={recipe.recipe.dietLabels}
            cuisineType={recipe.recipe.cuisineType}
          />
        ))}

      </div>

    </>

  );
}

export default Home;


