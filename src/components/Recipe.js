import React from "react";

const Recipe = ({ title, image, cal, ingredients }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} />
      <p>cal {cal}</p>
      <ul>
        {ingredients.map((ingredient, key) => {
          return <li key={key}>{ingredient.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recipe;
