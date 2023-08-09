import { vegdata } from './Vegdata';

export function VegRecipes ()  {
  const listItems = vegdata.map(vegdata =>
    <li key={ vegdata.id}>
       <div className="chickencss">
    
      <h3 style = {{ color: " brown"}} ><b>{vegdata.title}</b></h3>
      <p >To view the recipe of <b>{vegdata.title}</b>,
       please click the image below:  </p>
      <br/>
      <a href={vegdata.url}>
      <img
        className="avatar"
        src={vegdata.imageUrl}
        alt={'Photo of ' + vegdata.title}
        style={{
          width: vegdata.imageSize,
          height: vegdata.imageSize
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
