import React from 'react';
import {connect} from 'react-redux';

function ShelfSlot({
  type,
  productId,
  quantity,
  userSelection,
}) {
  const productSelected = userSelection == productId;
  const conditionalClasses = `${quantity ? '' : 'selection-unavailable'} 
  ${quantity && productSelected ? 'selection-available' : ''}`

  return <div className="shelf-slot">
    <div className="shelf-slot__type">{type}</div>
    <div 
      className={`shelf-slot__id ${conditionalClasses}`}
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