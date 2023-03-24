import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./components/ChineseRecipe.css";
import { makeStyles } from "@material-ui/core/styles";
import ChinesePic from './assets/Chinese.jpg';
import axios from 'axios'; 

const useStyles = makeStyles({
  listItem: {
    color: "black",
  },
});

function Chinese() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: {q: 'chinese'},
      headers: {
        'X-RapidAPI-Key': '3305c8d758msh96587b8a3306f7ep1d1bafjsn300995769472',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };

    const fetchRecipes = async () => {
      const response = await axios.request(options);
      setRecipes(response.data.hits);
    };
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="card-flags" id="chinese-cuisine">
        <div className="card mb-3" style={{ width: "50%" }}>
          <img
            className="card-img-top"
            src= {ChinesePic}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Chinese</h5>
            <p className="card-text">
              Savour the hearty comfort of English cuisine, where traditional
              flavours mingle with modern flair, whisking you away on a culinary
              adventure. Delight in the rich tapestry of dishes, from the
              classic full English breakfast to the sumptuous Sunday roast, an
              unforgettable gastronomic journey awaits.
            </p>
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
                <div variant="body2">
                  <ul>
                    {recipe.recipe.ingredientLines.map((ingredient) => (
                      <li className={classes.listItem} key={ingredient}>
                        {ingredient}
                      </li>
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

export default Chinese;
