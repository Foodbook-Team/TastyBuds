import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Body.css";
import { Card, Button } from 'react-bootstrap';

export default function Body() {

  const [mealOfDay, setMealOfDay] = useState();
  const [mealOfDayImage, setMealOfDayImage] = useState();
  const [link, setLink] = useState();
  const [mealType, setMealType] = useState();
  const [ingredientsList, setIngredientsList] = useState();



  useEffect(() => {
    const MealOfDay = async () => {
      const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=31e49968&app_key=ecdd8eae17634d382403cbce72038924&diet=balanced&health=alcohol-free&mealType=Lunch&imageSize=LARGE&random=true`);
      setMealOfDay(result.data.hits[0].recipe.label);
      setMealOfDayImage(result.data.hits[0].recipe.images.LARGE.url)
      setLink(result.data.hits[0].recipe.images.url)
      setMealType(result.data.hits[0].recipe.mealType)
      setIngredientsList(result.data.hits[0].recipe.ingredientLines)

    }

    MealOfDay();

  }, []);





  return (
    <>
      <h1>Be inspired by</h1>
      <hr />
      <Card className="mb-3 card--style ">
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img src={`${mealOfDayImage}`} alt="Card image" />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title><h1>{mealOfDay}</h1></Card.Title>
              <Card.Text>
                <h3>Great for {mealType}</h3>
                <h4>You will neeed:</h4>
                {ingredientsList}

              </Card.Text>
              <Button
                variant="warning"
                style={{ backgroundColor: 'orange', color: 'white' }}
              >
                <a href={`${link}`} >Details</a>
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
};
