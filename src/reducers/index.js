import {combineReducers} from 'redux';

import vendingMachineReducer from '../containers/vendingMachine/vendingMachine-reducer';

export default combineReducers({
  // add here the reducers, as you create them
  vendingMachineReducer,
})