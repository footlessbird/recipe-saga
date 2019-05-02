import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { RECIPES } from "../constants";
import { getRecipes } from "../actions";

function* handleRecipes(action) {
  try {
    const data = yield call(getRecipes);
    yield put({ type: RECIPES.FETCH_SUCCESS });
  } catch (error) {
    yield put({ type: RECIPES.FETCH_FAIL, error });
  }
}

export default function* watchRecipes() {
  yield takeLatest(RECIPES.FETCH_REQUEST, handleRecipes);
}
