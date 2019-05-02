import axios from "axios";

import { RECIPES } from "../constants";

const APP_ID = "1239209a";
const APP_KEY = "5cd1396e5a2cf705d8d7bc51deb40fcf";

export const getRecipes = async food => {
  const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: RECIPES.FETCH_SUCCESS,
    payload: request
  };
};
