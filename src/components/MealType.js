import React, {useState} from 'react'
import './MealType.css'
import ShoppingList from './ShoppingList.js'

function MealType() {
    const [mealType, setMealType] = useState(''); // state for meal type
    const [recipes, setRecipes] = useState([]);
    const APP_ID = "31e49968"
    const APP_KEY = "ecdd8eae17634d382403cbce72038924"
  
    const searchRecipes = async () => {
      const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=&mealType=${mealType}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      searchRecipes();
    };
  
    return (
      <>
      <div>
        <form onSubmit={handleSearch}>
          <label htmlFor="meal-type">Choose a meal type:</label>
          <select id="meal-type" value={mealType} onChange={(e) => setMealType(e.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <button type="submit">Search</button>
        </form>
        </div>

        <div className='meal-type'>
      {recipes.map((recipe) => (
<div class="card" style={{width: "18rem", height: "550px"}}>
  <img class="card-img-top" src={recipe.recipe.image} alt={recipe.recipe.label}></img>
  <div class="card-body">
    <p class="card-text">
    <ul>
      <h3>{recipe.recipe.label}</h3>
            {recipe.recipe.ingredients.map((ingredient) => (
              <li style={{color: "black"}} key={ingredient.text}>{ingredient.text}</li>
            ))}
          </ul>
    </p>
  </div>
</div>
      ))}
      </div>
      <ShoppingList/>
    </>
    );
  }
  
  export default MealType;