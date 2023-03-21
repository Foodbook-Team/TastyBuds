import React, { useState, useEffect } from "react";

function CuisineList() {
  const [cuisines, setCuisines] = useState([]);


  const APP_ID = "31e49968"
  const APP_KEY = "ecdd8eae17634d382403cbce72038924"
  
  useEffect(() => {
    const fetchCuisines = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/cuisine-Type/v2?app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setCuisines(data);
    };
    fetchCuisines();
  }, []);

  return (
    <ul>
      {cuisines.map((cuisine) => (
        <li key={cuisine.cuisineType}>{cuisine.cuisineLabel}</li>
      ))}
    </ul>
  );
}

export default CuisineList;
