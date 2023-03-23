
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

function Greek() {
  const classes = useStyles();
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
    const APP_ID = "31e49968"
    const APP_KEY = "ecdd8eae17634d382403cbce72038924"
  const query = "greek"
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
<div className="card-flags" id="greek-cuisine">
<div className="card mb-3" style={{width: "50%"}}>
  <img className="card-img-top" src="./Greek.jpg" alt="Card cap"></img>
  <div className="card-body">
    <h5 className="card-title">Greek</h5>
    <p className="card-text">Uncover the sun-kissed charm of Greek cuisine, 
where the freshest ingredients and time-honoured 
techniques create a medley of mouth-watering 
flavours. From tender, slow-cooked meats to crisp, 
refreshing salads, each dish is a celebration of the 
Mediterranean spirit, inviting you to savour every 
delectable morsel.</p>
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
  
  export default Greek;