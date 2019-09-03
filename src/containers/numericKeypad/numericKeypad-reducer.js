import {numericKeypadActionTypes} from '../../actions/action-types';

const initialState = {
  userSelection: '',
  orderedItem: null,
  paidAmount: 0,
  orderIntent: false,
}

function numericKeypadReducer(state = initialState, action) {
  switch(action.type) {
    case numericKeypadActionTypes.registerNumericKeyPressAction: {
      const {userSelection} = action.payload;
      const newUserSelection = state.userSelection + userSelection;

      return {
        ...state,
        userSelection: newUserSelection,
        orderIntent: false,
      }
    }

    case numericKeypadActionTypes.resetUserSelectionAction: {
      return {
        ...state,
        userSelection: '',
        orderedItem: null,
        paidAmount: 0,
        orderIntent: false,
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
        orderIntent: true,
      }
    }

    case numericKeypadActionTypes.payForPurchaseAction: {
      const amount = action.payload;

      return {
        ...state,
        paidAmount: amount,
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

export function payForPurchaseAction(amount) {
  return {
    type: numericKeypadActionTypes.payForPurchaseAction,
    payload: amount,
  }
}

export default numericKeypadReducer;