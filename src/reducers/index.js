import {combineReducers} from 'redux';

import numericKeypadReducer from '../containers/numericKeypad/numericKeypad-reducer';
import shelfReducer from '../containers/shelf/shelf-reducer';
import unitDisplayReducer from '../components/unitDisplay/unitDisplay-reducer';

export default combineReducers({
  numericKeypadReducer,
  shelfReducer,
  unitDisplayReducer,
})