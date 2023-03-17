
import React, { useState, useEffect } from "react";

const quotes = [
    "How to Spice Up Your Life: Delicious Recipes at Your Fingertips",
    "Satisfy Your Cravings: Explore Our Tasty Recipes!",
    "Cook Up Something Delicious: Discover Our Recipe Collection!",
    "A Culinary Adventure Awaits: Dive into Our Recipe Hub!",
    "Indulge in Flavor: Try Our Mouth-Watering Recipes Today!",
    "Get Creative in the Kitchen: Explore Our Recipe Database!",
    "Savor the Flavor: Our Best Recipes to Delight Your Taste Buds!",
    "From Our Kitchen to Yours: Delicious Recipes for Every Occasion",
    "The Ultimate Recipe Collection: Create Culinary Masterpieces Today!",
    "Elevate Your Cooking Game: Easy and Tasty Recipes to Impress Your Guests",
    "Cooking Made Easy: Whip Up Mouthwatering Meals with Our Recipes!",
    "Satisfy Your Cravings: Mouthwatering Recipes Await!",
    "Elevate Your Culinary Game: Discover Our Delicious Recipes!",
    "From Our Kitchen to Yours: Explore Our Irresistible Recipes!",
    "Get Ready to Dig In: Find Your New Favorite Recipe Here!",
]



    function Quotes() {
        const [randomQuote, setRandomQuote] = useState("");
      
        useEffect(() => {
          const randomIndex = Math.floor(Math.random() * quotes.length);
          setRandomQuote(quotes[randomIndex]);
        }, []);

  return (
    <div>
      <p>{randomQuote}</p>
    </div>
  );
}
export default Quotes