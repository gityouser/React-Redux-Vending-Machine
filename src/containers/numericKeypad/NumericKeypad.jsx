import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

import NumericKey from '../../components/numericKey/NumericKey.jsx';
import {numericKeysConfig, specialKeysConfig} from './utils/constants.js';
import {
  registerNumericKeyPressAction,
  registerUserSelectionAction,
  resetUserSelectionAction,
} from './numericKeypad-reducer';
import {updateDisplayMessageAction} from '../../components/unitDisplay/unitDisplay-reducer';

function NumericKeypad({
  userSelection,
  registerNumericKeyPressAction,
  resetUserSelectionAction,
  registerUserSelectionAction,
  productList,
}) {
  const {numericKeyIds} = numericKeysConfig;
  console.log('userSelection: ', userSelection)
  return <div 
    className="numeric-keypad"
  >
    {numericKeyIds.map(key => {
      const {keyValue, keyName}= numericKeysConfig[key];

      return (
        <NumericKey
          keyAction={() => registerNumericKeyPressAction(keyValue)}
          keyClassName={keyName}
          keyValue={keyValue}
          key={uuid()}
        />
      )
    })}
    <NumericKey // will dispatch different type of actions than numericKeys
      keyAction={() => resetUserSelectionAction()}
      keyClassName={specialKeysConfig[0].keyName}
      keyValue={specialKeysConfig[0].keyValue}
      key={uuid()}
    />
    <NumericKey // will dispatch different type of actions than numericKeys
      keyAction={() => registerUserSelectionAction(productList)}
      keyClassName={specialKeysConfig[1].keyName}
      keyValue={specialKeysConfig[1].keyValue}
      key={uuid()}
    />
  </div>
}

function mapStateToProps({
  numericKeypadReducer,
  shelfReducer,
}) {
  return {
    userSelection: numericKeypadReducer.userSelection,
    productList: shelfReducer.productList,
  }
}

export default connect(
  mapStateToProps,
  {
    registerNumericKeyPressAction,
    resetUserSelectionAction,
    updateDisplayMessageAction,
    registerUserSelectionAction,
  }
)(NumericKeypad);