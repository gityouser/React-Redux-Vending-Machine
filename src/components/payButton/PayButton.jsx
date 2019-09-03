import React from 'react';
import {connect} from 'react-redux';

import {payForPurchaseAction} from '../../containers/numericKeypad/numericKeypad-reducer';

function PayButton({
  payForPurchaseAction,
  paidAmount,
}) {
  const money = 10;

  return <div
      className={`pay-button ${paidAmount ? 'amount-paid' : ''}`}
      onClick={() => payForPurchaseAction(money)}
    >
      {paidAmount ? 'PAID' : 'PAY'}
    </div>
}

export default connect(
  ({numericKeypadReducer}) => ({paidAmount: numericKeypadReducer.paidAmount}),
  {payForPurchaseAction},
)(PayButton)