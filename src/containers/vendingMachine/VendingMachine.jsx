import React from 'react';

import Shelf from '../shelf/Shelf.jsx';
import NumericKeypad from '../numericKeypad/NumericKeypad.jsx';
import UnitDisplay from '../../components/unitDisplay/UnitDisplay.jsx';
import PayButton from '../../components/payButton/PayButton.jsx';


function VendingMachine() {
  return <div className='vending-machine'>
    <Shelf/>
    <NumericKeypad/>
    <UnitDisplay/>
    <PayButton/>
  </div>
}

export default VendingMachine;