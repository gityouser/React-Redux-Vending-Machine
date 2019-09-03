import React from 'react';
import {connect} from 'react-redux';

import {updateDisplayMessageAction} from './unitDisplay-reducer';

function UnitDisplay({
  unitDisplayMessage,
  userSelection,
  orderedItem,
  paidAmount,
  orderIntent,
}) {
  return <div className="unit-display">
    <p>
      {
        orderedItem
        || (paidAmount && !userSelection)
        || (!paidAmount && !orderedItem && !userSelection)
        || (!orderedItem && orderIntent)
        || !userSelection
          ? unitDisplayMessage
          : userSelection
      }
    </p>
  </div>
}

function mapStateToProps({
  unitDisplayReducer,
  numericKeypadReducer,
}) {
  const {
    userSelection,
    orderedItem,
    paidAmount,
    orderIntent,
  } = numericKeypadReducer;

  return {
    unitDisplayMessage: unitDisplayReducer.unitDisplayMessage,
    userSelection,
    orderedItem,
    paidAmount,
    orderIntent,
  }
}

export default connect(
  mapStateToProps,
  {updateDisplayMessageAction}
)(UnitDisplay);