import React from 'react';
import {connect} from 'react-redux';

function UnitDisplay({unitDisplayMessage}) {
  return <div className="unit-display">
    <p>{unitDisplayMessage}</p>
  </div>
}

function mapStateToProps({unitDisplayReducer}) {
  return {unitDisplayMessage: unitDisplayReducer.unitDisplayMessage}
}

export default connect(
  mapStateToProps
)(UnitDisplay);