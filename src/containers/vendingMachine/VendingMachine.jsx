import React from 'react';
import {connect} from 'react-redux';

import Shelf from '../shelf/Shelf.jsx';
import NumericKeypad from '../numericKeypad/NumericKeypad.jsx';
import UnitDisplay from '../../components/unitDisplay/UnitDisplay.jsx';
import {setCounterAction} from './vendingMachine-reducer';


function VendingMachine({count, setCounterAction}) {
  return <div className='vending-machine'>
    <Shelf/>
    <NumericKeypad/>
    <UnitDisplay/>
  </div>
}


function mapStateToProps({vendingMachineReducer}) {
  return {count: vendingMachineReducer.count};
}

export default connect(
  mapStateToProps,
  {setCounterAction}
)(VendingMachine);