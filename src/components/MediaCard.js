import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


const Recipe = ({title, calories, image, ingredients, url}) => {

  return (<>
 <div className='media-card'>
    <Card sx={{ maxWidth: 230 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title="green iguana"
      
    />
    <CardContent>
      <Typography gutterBottom center variant="h8" align="center" component="div">
      {title}
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
<li style={{color: "black"}}>{ingredient.text}</li>
    ))}</ol>
        <br></br>
        {calories}
        <CardActions>
     
      <BrowserRouter>
  <Button component={Link} to={url} target="_blank">Recipe</Button>
</BrowserRouter>
    </CardActions>
    </Typography>
  </AccordionDetails>
</Accordion>
</Card>
</div> </>
    )
  }

export default Recipe






    