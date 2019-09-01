import React from 'react';
import {connect} from 'react-redux';

function ShelfSlot({
  type,
  productId,
  quantity,
  numericKeypadReducer,
  userSelection,
}) {
  const productSelected = userSelection == productId;
  console.log('userSelection, productId, productSelected: ', userSelection, productId, productSelected)
  return <div className="shelf-slot">
    <div className="shelf-slot__type">{type}</div>
    <div 
      className={`shelf-slot__id
        ${quantity ? '' : 'selection-unavailable'} 
        ${quantity && productSelected ? 'selection-available' : ''}
      `}
    >
      <p>{productId}</p>
    </div>
  </div>
}

function mapStateToProps({numericKeypadReducer}) {
  return {
    userSelection: numericKeypadReducer.userSelection,
  }
}

export default connect(
  mapStateToProps,
)(ShelfSlot);