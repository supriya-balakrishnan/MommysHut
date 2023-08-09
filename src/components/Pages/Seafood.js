import { seafooddata } from './Seafooddata';

export function SeaFood ()  {
  const listItems = seafooddata.map(seafooddata =>
    <li key={ seafooddata.id}>
       <div className="chickencss">
    
      <h3 style = {{ color: " brown"}} >{seafooddata.title}</h3>
      <p>To view the recipe of <b>{seafooddata.title}</b>, please click the image below:  </p>
      <br/>
      <a href={seafooddata.url}>
      <img
        className="avatar"
        src={seafooddata.imageUrl}
        alt={'Photo of ' + seafooddata.title}
        style={{
          width: seafooddata.imageSize,
          height: seafooddata.imageSize
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
