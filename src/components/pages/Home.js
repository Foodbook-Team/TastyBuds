import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/ListItem'
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import bootstrap from "bootstrap";
import './Home.css'
import VanillaTilt from 'vanilla-tilt';



export default function Home() {
  const [mealOfDay, setMealOfDay] = useState();
  const [mealOfDayImage, setMealOfDayImage] = useState();
  const [link, setLink] = useState();


  useEffect(() => {
    const MealOfDay = async () => {
      const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=31e49968&app_key=ecdd8eae17634d382403cbce72038924&diet=balanced&health=alcohol-free&mealType=Lunch&imageSize=LARGE&random=true`);
      setMealOfDay(result.data.hits[0].recipe.label);
      setMealOfDayImage(result.data.hits[0].recipe.images.LARGE.url)
      setLink(result.data.hits[0].recipe.images.url)

    }

    MealOfDay();

  }, []);

  return (
    <>
      <div className="card" data-tilt>
        <div className="card--row">

          <img src={`${mealOfDayImage}`} className="card--img"></img>
          <div className='card--description'>
            <h1>Feel inspired by</h1>
            <a href={`${link}`}><h2>{mealOfDay}</h2></a>
          </div>
        </div>
      </div>
      {/* <Grid container 
            spacing={2}           
            direction="row"
            justifyContent="center"
            alignItems="center" > */}


      {/* <Card className="InnitialDisplay" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                height="100%"
                component="img"
                image={mealOfDayImage}
                alt={mealOfDay}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                <a href="https://www.eatingwell.com/recipe/249819/baby-tiramisu/">{mealOfDay}</a> 
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
            Description of dish
          </Typography> */}
      {/* </CardContent>
            </CardActionArea> */}
      {/* </Card> */}




      {/* </Grid> */}


    </>

  );
}




