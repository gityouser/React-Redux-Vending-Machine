import {numericKeypadActionTypes} from '../../actions/action-types';

const initialState = {
  userSelection: '',
  orderedItem: null,
  paidAmount: 10,
}

function numericKeypadReducer(state = initialState, action) {
  switch(action.type) {
    case numericKeypadActionTypes.registerNumericKeyPressAction: {
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

    case numericKeypadActionTypes.registerUserSelectionAction: {
      const productList = action.payload;
      const {userSelection} = state;
      const lockedOrderedItem = productList.hasOwnProperty(userSelection)
        ? {...productList[userSelection]}
        : null

      return {
        ...state,
        orderedItem: lockedOrderedItem,
      }
    }

    default: return state
  };
}

export function registerNumericKeyPressAction(userSelection) {
  return {
    type: numericKeypadActionTypes.registerNumericKeyPressAction,
    payload: {userSelection}
  }
}

export function resetUserSelectionAction() {
  return {
    type: numericKeypadActionTypes.resetUserSelectionAction,
  }
}

export function registerUserSelectionAction(productList) {
  return {
    type: numericKeypadActionTypes.registerUserSelectionAction,
    payload: productList
  }
}

export default numericKeypadReducer;