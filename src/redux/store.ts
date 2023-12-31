import { combineReducers, createStore, applyMiddleware } from "redux";
import { productsReducer } from "./products/reducers";
import { cartReducer } from "./cart/reducers";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
function configureStore() {
  const middlewares = [createLogger({})];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}

const store = configureStore();

export default store;
