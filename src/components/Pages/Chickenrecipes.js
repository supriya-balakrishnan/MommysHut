import React from "react";
import {chickendata} from '../Chickendata';


export function ChickenRecipes ()  {
  const listItems = chickendata.map(chickendata =>
    <li key={chickendata.id}>
       <div className="chickencss">
    
      <h3 style = {{ color: " brown"}}><b>{chickendata.title}</b></h3>
      <p>To view the recipe of <b>{chickendata.title}</b>, please click the image below: </p>
      <br/> 
      <a href={chickendata.url}>
      <img
        className="avatar"
        src={chickendata.imageUrl}
        alt={'Photo of ' + chickendata.title}
        style={{
          width: chickendata.imageSize,
          height: chickendata.imageSize
        }}
      />
      </a>
      </div>
    </li>
  );
    return (
    <ul>{listItems}</ul>
  );
}

