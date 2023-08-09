import React from "react";
import mommyshutimg from '../../MommysHut new.png'
import Button from 'react-bootstrap/Button';




 export const Home = () => {
  return (
    <>
    <div className="homecss" >

    <img className="center"  src={mommyshutimg} alt="Mommy's Hut"></img>
    <br></br>
      <p className="recipes">Mommy's Hut is cooking Youtube channel, here one can get knowledge about how to cook south Indian Tamil Cooking Recipes .You can amaze your family and friends with variety of Lunch Recipes,Breakfast Recipes,Veg Recipes and Non Veg Recipes in Tamil Cooking Style. Channel also gives ideas of day to day need of Samayal Kurippu. Also we help the beginners with variety of Recipes  about the full recipe process with tips and also suggest all the healthy food to take on daily basis.Here we have shared cooking tips for Easy and Quick Breakfast,Lunch Recipes in Tamil.</p>
     <br/><div className="recipe"> <h4 style={{ color: "brown"}} >For more Recipes,Please click onto:</h4>
     <a href="https://www.youtube.com/@MommysHut">
  <Button variant="primary" >Mommy's Hut</Button>
</a>
</div>
      </div>
    </>
  );
};
