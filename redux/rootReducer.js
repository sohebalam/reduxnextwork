import { combineReducers } from "redux";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productListReducer";
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
