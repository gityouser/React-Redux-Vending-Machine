import {numericKeypadActionTypes} from '../../actions/action-types';

const initialState = {
  userSelection: '',
}

function numericKeypadReducer(state = initialState, action) {
  switch(action.type) {
    case numericKeypadActionTypes.registerUserSelectionAction: {
      const {userSelection} = action.payload;
      const newUserSelection = state.userSelection + userSelection;

      return {
        ...state,
        userSelection: newUserSelection,
      }
    }

    case numericKeypadActionTypes.resetUserSelectionAction: {
      return {
        ...state,
        userSelection: '',
      }
    }

    default: return state
  };
}

export function registerUserSelectionAction(userSelection) {
  return {
    type: numericKeypadActionTypes.registerUserSelectionAction,
    payload: {userSelection}
  }
}

export function resetUserSelectionAction() {
  return {
    type: numericKeypadActionTypes.resetUserSelectionAction,
  }
}

export default numericKeypadReducer;