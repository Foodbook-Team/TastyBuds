
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './components/ChineseRecipe.css'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  listItem: {
    color: "black"
  }
});


function Chinese() {
  const classes = useStyles();
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
    const APP_ID = "31e49968"
    const APP_KEY = "ecdd8eae17634d382403cbce72038924"
  const query = "chinese"
      const fetchRecipes = async () => {
        const response = await fetch(
          `api/recipes/v2/?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
        );
        const data = await response.json();
        setRecipes(data.hits);
      };
      fetchRecipes();
    }, []);
  
    return (<>
<div className="card-flags" id="chinese-cuisine">
<div class="card mb-3" style={{width: "50%"}}>
  <img class="card-img-top" src="./Chinese.jpg" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Chinese</h5>
    <p class="card-text">Savour the hearty comfort of English cuisine, where 
traditional flavours mingle with modern flair, 
whisking you away on a culinary adventure. Delight 
in the rich tapestry of dishes, from the classic full 
English breakfast to the sumptuous Sunday roast, an 
unforgettable gastronomic journey awaits.</p>
  </div>
</div>
</div>
      <div className="cardContainer">
      {recipes.slice(0, 2).map((recipe) => (
        <Card key={recipe.recipe.uri} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography  variant="body2">
                <ul>
                  {recipe.recipe.ingredientLines.map((ingredient) => (
                    <li className={classes.listItem} key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
    </>

    );
  }
  
  export default Chinese;