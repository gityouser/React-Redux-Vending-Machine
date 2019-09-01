import {vendingMachineActionTypes} from '../../actions/action-types';

const initialState = {
  count: 0,
}

function vendingMachineReducer(state = initialState, action) {
  switch (action.type) {
    case vendingMachineActionTypes.setCount: {
      const {amount} = action;

      return {
        ...state,
        count: state.count += amount
      };
    }
    default: return state;
  }
}


export function setCounterAction(amount) {
  return {
    type: vendingMachineActionTypes.setCount,
    amount
  }
}

export default vendingMachineReducer;