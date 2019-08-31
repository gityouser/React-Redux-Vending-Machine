import React from 'react';
import {connect} from 'react-redux';

import {setCounterAction} from './vendingMachine-reducer';



function VendingMachine({count, setCounterAction}) {

  return <div className='test-wrapper'>
    <h1>Hello, I am test component!</h1>
    <p>{`Count: ${count}`}</p>
    <button
      onClick={() => setCounterAction(1)}
    >+</button>
    <button
      onClick={() => setCounterAction(-1)}
    >-</button>
  </div>
}


function mapStateToProps({vendingMachineReducer}) {
  return {count: vendingMachineReducer.count};
}

export default connect(
  mapStateToProps,
  {setCounterAction}
)(VendingMachine);