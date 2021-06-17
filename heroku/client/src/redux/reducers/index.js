import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import routeReducer from './route.reducer';
import productReducer from './products.reducer';

export default combineReducers({
  auth: authReducer,
  route: routeReducer,
  products: productReducer,
});