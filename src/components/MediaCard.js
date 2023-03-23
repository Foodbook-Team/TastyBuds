import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import Home from './Home';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { minHeight } from '@mui/system';



const Recipe = ({ title, calories, image, ingredients, url, dishType, dietLabels, cuisineType, }) => {

  return (
    <>
    
      <div className='media-card'>
        <Card sx={{ maxWidth: 250}}>
          <CardMedia
            sx={{ minHeight: 140 }}
            image={image}
            title="Food image"

          />
          <CardContent sx={{minHeight: 225}}>
            <Typography gutterBottom center variant="h8" align="center" component="div">
              <h1 style={{ fontSize: "1.3rem" }}> {title}</h1>
              <br></br>
              <p style={{ fontSize: "1rem", margin: "2px", display: "flex", justifyContent: "space-around" }}>
                {dishType}
                <br></br>
                {dietLabels}
              </p>
            </Typography>
          </CardContent>

          <Accordion  >
            <AccordionSummary

              aria-controls="panel1a-content"
              id="panel1a-header"

            >
              <Typography>Ingredients</Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol>
                  {ingredients && ingredients.map((ingredient) => (
                    <li style={{ color: "black" }}>{ingredient.text}</li>
                  ))}</ol>
                <br></br>
                Calories: {calories}
                <br></br>
                Cuisine type: {cuisineType}
                <CardActions>

                  <BrowserRouter>
                    <Button component={Link} to={url} target="_blank">Recipe</Button>
                  </BrowserRouter>
                </CardActions>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Card>
      </div> 
    </>
  )
}

export default Recipe;






