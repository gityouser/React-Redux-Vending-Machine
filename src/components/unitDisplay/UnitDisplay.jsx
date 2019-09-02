import React from 'react';
import {connect} from 'react-redux';

import {unitDisplayMessages} from './utils/constants';
import {updateDisplayMessageAction} from './unitDisplay-reducer';

function UnitDisplay({
  unitDisplayMessage,
  userSelection,
  updateDisplayMessageAction,
  orderedItem,
  paidAmount,
}) {
  
  function handleUnitDisplayMessages({
    userSelection,
    orderedItem,
    paidAmount,
    updateDisplayMessageAction,
  }) {
    const {
      userSelectionPrefix,
      userOrderedPrefix,
      defaultMessage,
    } = unitDisplayMessages;
    let outputMessage;

    if (userSelection && !orderedItem) {
      // user pressed a hey, but hasn't yet ordered
      outputMessage = userSelectionPrefix + userSelection;
    } else if (orderedItem && paidAmount >= orderedItem.price) {
      // user ordered and paid >= the price
      outputMessage = userOrderedPrefix + orderedItem.type;
    } else if (!userSelection) {
      outputMessage = defaultMessage
    }

    updateDisplayMessageAction(outputMessage);
  }

  handleUnitDisplayMessages({
    userSelection,
    orderedItem,
    paidAmount,
    updateDisplayMessageAction,
  })

  return <div className="unit-display">
    <p>
      {unitDisplayMessage}
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
  } = numericKeypadReducer;

  return {
    unitDisplayMessage: unitDisplayReducer.unitDisplayMessage,
    userSelection,
    orderedItem,
    paidAmount,
  }
}

export default connect(
  mapStateToProps,
  {updateDisplayMessageAction}
)(UnitDisplay);