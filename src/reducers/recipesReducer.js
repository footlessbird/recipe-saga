import { RECIPES } from "../constants";

const initState = {
  recipes: [],
  fetchStatus: true
};

const recipesReducer = (state = initState, action) => {
  switch (action.type) {
    case RECIPES.FETCH_REQUEST:
      return {
        ...state,
        fetchStatus: true
      };
    case RECIPES.FETCH_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        recipes: [...action.payload.data.hits]
      };
    case RECIPES.FETCH_FAIL:
      return {
        ...state,
        fetchStatus: false
      };
    default:
      return state;
  }
};

export default recipesReducer;
