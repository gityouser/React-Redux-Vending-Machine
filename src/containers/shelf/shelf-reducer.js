import {productList} from './utils/constants';

const initialState = {
  productList,
}

function shelfReducer(state = initialState, action) {
  switch(action.type) {
    default: return state;
  }
}

export default shelfReducer;