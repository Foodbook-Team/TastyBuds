import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import MediaCard from "./components/MediaCard";
import Footer from "./components/Footer";
import Jumbotron from './components/Jumbotron';
import axios from "axios"


function App() {
  const [mealOfDay, setMealOfDay] = useState(); 
  
  useEffect(()=>{    
    const MealOfDay = async () => {
      const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=31e49968&app_key=ecdd8eae17634d382403cbce72038924&diet=balanced&health=alcohol-free&mealType=Lunch&imageSize=LARGE&random=true`);      
      setMealOfDay(result.data.hits)
      console.log(result);
    }
    MealOfDay();
    
  },[]);
  return (
  // -------------Start of div container-----------------
  <>
    <Router>
      <div>        
        <NavTabs />          
          <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>        
      </div>
    </Router>
    <Jumbotron />

    {/* <MediaCard /> */}
    <Footer /> 
  
  {/* ----------Finish of container----------------   */}
  </>

  );
}

export default App;