import React from 'react';
import {connect} from 'react-redux';

import {unitDisplayMessages} from './utils/constants';

function UnitDisplay({
  unitDisplayMessage,
  userSelection
}) {
  const {userSelectionPrefix} = unitDisplayMessages;

  return <div className="unit-display">
    <p>
      {userSelection
        ? `${userSelectionPrefix} ${userSelection}`
        : unitDisplayMessage}
    </p>
  </div>
}

function mapStateToProps({
  unitDisplayReducer,
  numericKeypadReducer,
}) {
  return {
    unitDisplayMessage: unitDisplayReducer.unitDisplayMessage,
    userSelection: numericKeypadReducer.userSelection,
  }
}

export default connect(
  mapStateToProps
)(UnitDisplay);