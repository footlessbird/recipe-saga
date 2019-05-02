import React, { Component } from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
class RecipeGrid extends Component {
  render() {
    const recipes = this.props.recipes;
    const renderRecipes = () => {
      return recipes.map(recipe => {
        console.log(recipe);
        return (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        );
      });
    };
    console.log(recipes);
    return <div>{renderRecipes()}</div>;
  }
}

const mapStateToProps = ({ recipes }) => {
  return recipes;
};

export default connect(
  mapStateToProps,
  null
)(RecipeGrid);
