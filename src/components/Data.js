// API FETCH FILE TO REUSE
import React from "react";

export default function Data(){
    const APP_ID = "31e49968"
  const APP_KEY = "ecdd8eae17634d382403cbce72038924"
  
  const url = `/api/recipes/v2/?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
    console.log(result)
};
}

