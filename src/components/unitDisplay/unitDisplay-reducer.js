import {unitDisplayActionTypes} from '../../actions/action-types';

const initialState = {
  unitDisplayMessage: 'Please enter selection'
}

function unitDisplayReducer(state = initialState, action) {
  switch(action.type) {
    case unitDisplayActionTypes.updateDisplayMessageAction: {
      const message = action.payload;

      return {
        ...state,
        unitDisplayMessage: message,
      }
    }

    default: return state;
  }
}

export function updateDisplayMessageAction(message) {
  return {
    type: unitDisplayActionTypes.updateDisplayMessageAction,
    payload: message
  }
}

export default unitDisplayReducer;