import {combineReducers} from 'redux';

import vendingMachineReducer from '../containers/vendingMachine/vendingMachine-reducer';
import numericKeypadReducer from '../containers/numericKeypad/numericKeypad-reducer';
import shelfReducer from '../containers/shelf/shelf-reducer';
import unitDisplayReducer from '../components/unitDisplay/unitDisplay-reducer';

export default combineReducers({
  // add here the reducers, as you create them
  vendingMachineReducer,
  numericKeypadReducer,
  shelfReducer,
  unitDisplayReducer,
})