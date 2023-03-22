import React, { useState, useEffect } from 'react';
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
      

    </>

  );
}




