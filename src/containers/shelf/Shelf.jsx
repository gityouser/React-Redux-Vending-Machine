import React from 'react';
import uuid from 'uuid/v4';
import {connect} from 'react-redux';

import ShelfSlot from '../../components/shelfSlot/ShelfSlot.jsx';

function Shelf({productList}) {
  return <div className="shelf">
    {productList.ids.map(id => <ShelfSlot
      key={uuid()}
      type={productList[id].type}
      quantity={productList[id].quantity}
      productId={id}
    />)}
  </div>
}


function mapStateToProps({shelfReducer}) {
  return {productList: shelfReducer.productList}
}
export default connect(mapStateToProps)(Shelf);