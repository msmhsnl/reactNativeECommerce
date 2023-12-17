import { combineReducers, createStore, applyMiddleware } from "redux";
import { productsReducer } from "./products/reducers";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
  products: productsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const middlewares = [createLogger({})];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}
