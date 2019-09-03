import {unitDisplayMessages} from '../../../components/unitDisplay/utils/constants';

export function handleUserPurchaseIntent({
  productList,
  userSelection,
  registerUserSelectionAction,
  updateDisplayMessageAction,
  paidAmount,
}) {
  registerUserSelectionAction(productList);

  const selectedProduct = productList[userSelection];

  if (userSelection === "" || !selectedProduct) {    
    updateDisplayMessageAction(unitDisplayMessages.invalidSelection)
  }

  if (userSelection && selectedProduct && !paidAmount) {
    updateDisplayMessageAction(unitDisplayMessages.pleasePayFirst)
  }

  if (selectedProduct && userSelection && paidAmount) {
    const displayMessage = unitDisplayMessages.userOrderedPrefix + selectedProduct.type;
    updateDisplayMessageAction(displayMessage)
  }
}

export function handleResetUserSelection({
  resetUserSelectionAction,
  updateDisplayMessageAction,
  message,
}) {
  resetUserSelectionAction();
  updateDisplayMessageAction(message);
}
