import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../components/MediaCard";
import Button from "@mui/joy/Button";
import Input from "@mui/material/Input";
import KitchenTips from '../KitchenTips.css'
// import Tilt from 'react-vanilla-tilt';

function Home() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);


  const getRecipe = async () => {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: { q: query },
      headers: {
        'X-RapidAPI-Key': '3305c8d758msh96587b8a3306f7ep1d1bafjsn300995769472',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
  
    const response = await axios.request(options);
  
    setRecipe(response.data.hits);
    console.log(response.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <>
      <hr></hr>
      <div className="input-field">
        <form onSubmit={updateQuery}>
          <Input
            placeholder="Find the best recipes..."
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <Button
            placeholder="Find the best recipes..."
            color="primary"
            value={search}
            type="text"
            size="sm"
            variant="outlined"
            onChange={updateSearch}
            sx={{ marginLeft: "8px" }}
          >
            Search
          </Button>
        </form>
        {/* <div className="dailyheader"> */}
        <div className="headerchickdiv">
          <h2 className="headerchick">
            Our {query} recipes of the day
          </h2>
        </div>
      </div>

      <div className="App">
        {recipe &&
          recipe
            .slice(0, 6)
            .map((recipe, index) => (
              <Recipe
                key={index}
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
