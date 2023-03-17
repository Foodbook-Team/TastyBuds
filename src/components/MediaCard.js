import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recipe = ({title, calories, image, ingredients}) => {
  return (<>
    <Card sx={{ maxWidth: 200 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {title}
      </Typography>
    </CardContent>

<Accordion>
  <AccordionSummary
    // expandIcon={<ExpandMoreIcon />}
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
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
    </Typography>
  </AccordionDetails>
</Accordion>
</Card></>
    )
  }

export default Recipe





// export default function SimpleAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
      
//     </div>
//   );
// }






{/* <div>
    <p>{title}</p>
    <p>{calories}</p>
    
    <img src={image} alt=""/>
    <ol>
      {ingredients && ingredients.map((ingredient) => (
<li style={{color: "black"}}>{ingredient.text}</li>
    ))}</ol>
    </div> */}

    