import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

import NumericKey from '../../components/numericKey/NumericKey.jsx';
import {numericKeysConfig, specialKeysConfig} from './utils/constants.js';
import {handleUserPurchaseIntent, handleResetUserSelection} from './utils/utils';
import {
  registerNumericKeyPressAction,
  registerUserSelectionAction,
  resetUserSelectionAction,
} from './numericKeypad-reducer';
import {updateDisplayMessageAction} from '../../components/unitDisplay/unitDisplay-reducer';
import {unitDisplayMessages} from '../../components/unitDisplay/utils/constants';

function NumericKeypad({
  userSelection,
  registerNumericKeyPressAction,
  resetUserSelectionAction,
  registerUserSelectionAction,
  updateDisplayMessageAction,
  productList,
  paidAmount,
}) {
  const {numericKeyIds} = numericKeysConfig;

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
      keyAction={() => handleResetUserSelection({
        resetUserSelectionAction,
        updateDisplayMessageAction,
        message: unitDisplayMessages.defaultMessage
      })}
      keyClassName={specialKeysConfig[0].keyName}
      keyValue={specialKeysConfig[0].keyValue}
      key={uuid()}
    />
    <NumericKey // will dispatch different type of actions than numericKeys
      keyAction={() => handleUserPurchaseIntent({
        productList,
        userSelection,
        registerUserSelectionAction,
        updateDisplayMessageAction,
        paidAmount,
      })}
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
  const {paidAmount, userSelection} = numericKeypadReducer;

  return {
    userSelection,
    paidAmount,
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