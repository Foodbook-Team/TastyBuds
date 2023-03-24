
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './components/ChineseRecipe.css'
import { makeStyles } from "@material-ui/core/styles";
import IndianPic from './assets/Indian.jpg';

const useStyles = makeStyles({
  listItem: {
    color: "black"
  }
});

function Indian() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const query = "indian";

    const fetchRecipes = async () => {
      const response = await fetch(
        "https://edamam-recipe-search.p.rapidapi.com/search?q=" + query,
        {
          headers: {
            "X-RapidAPI-Key": "3305c8d758msh96587b8a3306f7ep1d1bafjsn300995769472",
            "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
          }
        }
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    fetchRecipes();
  }, []);
  
    return (<>
<div className="card-flags" id="indian-cuisine">
<div className="card mb-3" style={{width: "50%"}}>
  <img className="card-img-top" src={IndianPic} alt="Card cap"></img>
  <div className="card-body">
    <h5 className="card-title">Indian</h5>
    <p className="card-text">Embark on a sensory voyage through the aromatic 
world of Indian cuisine, where a kaleidoscope of 
spices and flavours dance in harmony. From sizzling 
tandoori delights to indulgent curries, each dish 
weaves a rich tapestry of taste, offering a symphony 
of culinary experiences that captivate the palate.</p>
  </div>
</div>
</div>
      <div className="cardContainer">
      {recipes.slice(0, 4).map((recipe) => (
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
              <div  variant="body2">
                <ul>
                  {recipe.recipe.ingredientLines.map((ingredient) => (
                    <li className={classes.listItem} key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
    </>

    );
  }
  
  export default Indian;